import ky, { type KyInstance } from 'ky'
import { z } from 'zod'

import {
  type MicrolinkConfig,
  type MicrolinkData,
  type MicrolinkOptions,
  type MicrolinkResponse,
  MicrolinkError,
  MicrolinkOptionsSchema,
  MicrolinkResponseSchema
} from './types'

/**
 * Microlink API client for extracting website metadata and link previews
 * 
 * @example
 * ```typescript
 * import { MicrolinkClient } from '@deepagent/microlink'
 * 
 * const microlink = new MicrolinkClient({
 *   apiKey: 'your-api-key' // Optional for free tier
 * })
 * 
 * // Extract website metadata
 * const metadata = await microlink.getMetadata('https://github.com/microlinkhq')
 * console.log(metadata.title, metadata.description, metadata.image)
 * ```
 */
export class MicrolinkClient {
  private readonly ky: KyInstance
  private readonly config: MicrolinkConfig

  constructor(config: MicrolinkConfig = {}) {
    this.config = {
      baseUrl: 'https://api.microlink.io',
      timeout: 30000,
      ...config
    }

    this.ky = ky.create({
      prefixUrl: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(this.config.apiKey && { 'x-api-key': this.config.apiKey })
      },
      hooks: {
        beforeError: [
          async (error : any) => {
            const { response } = error
            if (response?.body) {
              try {
                const errorData = await response.json() as MicrolinkResponse
                return new MicrolinkError(
                  errorData.message || error.message,
                  response.status,
                  errorData
                )
              } catch {
                // If JSON parsing fails, use original error
              }
            }
            return error
          }
        ]
      }
    })
  }

  /**
   * Extract metadata from a website URL
   * 
   * @param url - The URL to extract metadata from
   * @param options - Additional Microlink API options
   * @returns Promise resolving to website metadata
   * 
   * @example
   * ```typescript
   * const metadata = await microlink.getMetadata('https://github.com/microlinkhq')
   * console.log({
   *   title: metadata.title,
   *   description: metadata.description,
   *   image: metadata.image?.url,
   *   logo: metadata.logo?.url
   * })
   * ```
   */
  async getMetadata(url: string, options: Partial<MicrolinkOptions> = {}): Promise<MicrolinkData> {
    const mergedOptions = {
      url,
      ...this.config.defaultOptions,
      ...options
    }

    // Validate options
    const validatedOptions = this.validateOptions(mergedOptions)

    // Build query parameters
    const searchParams = this.buildSearchParams(validatedOptions)

    try {
      const response = await this.ky.get('', { searchParams }).json<MicrolinkResponse>()
      
      // Validate response structure with more permissive error handling
      let validatedResponse: MicrolinkResponse
      try {
        validatedResponse = MicrolinkResponseSchema.parse(response)
      } catch (validationError) {
        // If validation fails, try to extract core data anyway
        if (response && typeof response === 'object' && 'status' in response && 'data' in response) {
          validatedResponse = {
            status: response.status as 'success' | 'error',
            data: response.data,
            message: response.message,
            statusCode: response.statusCode,
            redirects: response.redirects,
            // Skip problematic headers if validation fails
            headers: undefined
          }
        } else {
          throw new MicrolinkError(
            `Invalid response structure: ${validationError instanceof Error ? validationError.message : 'Unknown validation error'}`
          )
        }
      }

      if (validatedResponse.status === 'error') {
        throw new MicrolinkError(
          validatedResponse.message || 'Unknown API error',
          validatedResponse.statusCode,
          validatedResponse
        )
      }

      if (!validatedResponse.data) {
        throw new MicrolinkError('No data returned from API', validatedResponse.statusCode)
      }

      return validatedResponse.data
    } catch (error) {
      if (error instanceof MicrolinkError) {
        throw error
      }

      if (error instanceof Error) {
        throw new MicrolinkError(
          `Failed to fetch metadata: ${error.message}`,
          undefined,
          undefined
        )
      }

      throw new MicrolinkError('Unknown error occurred')
    }
  }

  /**
   * Get website screenshot along with metadata
   * 
   * @param url - The URL to capture and extract metadata from
   * @param options - Screenshot and metadata options
   * @returns Promise resolving to website metadata including screenshot
   * 
   * @example
   * ```typescript
   * const result = await microlink.getScreenshot('https://github.com/microlinkhq', {
   *   screenshot: true,
   *   viewport: { width: 1200, height: 800 }
   * })
   * console.log('Screenshot URL:', result.screenshot?.url)
   * ```
   */
  async getScreenshot(url: string, options: Partial<MicrolinkOptions> = {}): Promise<MicrolinkData> {
    return this.getMetadata(url, {
      screenshot: true,
      ...options
    })
  }

  /**
   * Generate PDF of the webpage along with metadata
   * 
   * @param url - The URL to convert to PDF and extract metadata from
   * @param options - PDF generation and metadata options
   * @returns Promise resolving to website metadata including PDF
   * 
   * @example
   * ```typescript
   * const result = await microlink.getPdf('https://github.com/microlinkhq', {
   *   pdf: true,
   *   waitUntil: 'networkidle0'
   * })
   * console.log('PDF URL:', result.pdf?.url)
   * ```
   */
  async getPdf(url: string, options: Partial<MicrolinkOptions> = {}): Promise<MicrolinkData> {
    return this.getMetadata(url, {
      pdf: true,
      ...options
    })
  }

  /**
   * Get website insights (performance metrics) along with metadata
   * 
   * @param url - The URL to analyze
   * @param options - Insights and metadata options
   * @returns Promise resolving to website metadata including insights
   * 
   * @example
   * ```typescript
   * const result = await microlink.getInsights('https://github.com/microlinkhq', {
   *   insights: true
   * })
   * console.log('Insights:', result.insights)
   * ```
   */
  async getInsights(url: string, options: Partial<MicrolinkOptions> = {}): Promise<MicrolinkData> {
    return this.getMetadata(url, {
      insights: true,
      ...options
    })
  }

  /**
   * Batch process multiple URLs
   * 
   * @param urls - Array of URLs to process
   * @param options - Options to apply to all URLs
   * @returns Promise resolving to array of metadata results
   * 
   * @example
   * ```typescript
   * const results = await microlink.batchGetMetadata([
   *   'https://github.com/microlinkhq',
   *   'https://vercel.com',
   *   'https://nextjs.org'
   * ])
   * 
   * results.forEach(result => {
   *   if (result.success) {
   *     console.log(result.data.title)
   *   } else {
   *     console.error(result.error.message)
   *   }
   * })
   * ```
   */
  async batchGetMetadata(
    urls: string[], 
    options: Partial<MicrolinkOptions> = {}
  ): Promise<Array<{ success: true; data: MicrolinkData } | { success: false; error: MicrolinkError; url: string }>> {
    const promises = urls.map(async (url) => {
      try {
        const data = await this.getMetadata(url, options)
        return { success: true as const, data }
      } catch (error) {
        const microlinkError = error instanceof MicrolinkError 
          ? error 
          : new MicrolinkError(`Failed to fetch metadata for ${url}`)
        return { success: false as const, error: microlinkError, url }
      }
    })

    return Promise.all(promises)
  }

  /**
   * Validate and sanitize options
   */
  private validateOptions(options: Partial<MicrolinkOptions>): MicrolinkOptions {
    try {
      return MicrolinkOptionsSchema.parse(options)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0]
        throw new MicrolinkError(
          `Invalid options: ${firstError?.path.join('.')} - ${firstError?.message}`
        )
      }
      throw new MicrolinkError('Invalid options provided')
    }
  }

  /**
   * Build URL search parameters from options
   */
  private buildSearchParams(options: MicrolinkOptions): URLSearchParams {
    const params = new URLSearchParams()
    
    // Add URL (required)
    params.set('url', options.url)

    // Add optional parameters
    if (options.ttl) params.set('ttl', options.ttl)
    if (options.screenshot) params.set('screenshot', 'true')
    if (options.pdf) params.set('pdf', 'true')
    if (options.insights) params.set('insights', 'true')
    if (options.palette) params.set('palette', 'true')
    if (options.audio) params.set('audio', 'true')
    if (options.video) params.set('video', 'true')
    if (options.iframe) params.set('iframe', 'true')
    if (options.prerender) params.set('prerender', 'true')
    if (options.waitFor) params.set('waitFor', options.waitFor.toString())
    if (options.waitUntil) params.set('waitUntil', options.waitUntil)
    if (options.colorScheme) params.set('colorScheme', options.colorScheme)
    if (options.device) params.set('device', options.device)

    // Handle viewport
    if (options.viewport) {
      params.set('viewport.width', options.viewport.width.toString())
      params.set('viewport.height', options.viewport.height.toString())
    }

    // Handle custom headers
    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        params.set(`headers.${key}`, value)
      })
    }

    return params
  }
}