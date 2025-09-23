/**
 * @deepagent/microlink - Microlink API integration for extracting website metadata and link previews
 * 
 * Turn any website into structured data with rich metadata extraction,
 * screenshots, PDFs, and performance insights.
 * 
 * @example Basic Usage
 * ```typescript
 * import { MicrolinkClient } from '@deepagent/microlink'
 * 
 * const microlink = new MicrolinkClient()
 * const metadata = await microlink.getMetadata('https://github.com/microlinkhq')
 * 
 * console.log({
 *   title: metadata.title,
 *   description: metadata.description,
 *   image: metadata.image?.url,
 *   logo: metadata.logo?.url
 * })
 * ```
 * 
 * @example With API Key (Pro Plan)
 * ```typescript
 * const microlink = new MicrolinkClient({
 *   apiKey: process.env.MICROLINK_API_KEY
 * })
 * 
 * // Get screenshot with metadata
 * const result = await microlink.getScreenshot('https://example.com', {
 *   viewport: { width: 1200, height: 800 },
 *   waitUntil: 'networkidle0'
 * })
 * ```
 * 
 * @example Batch Processing
 * ```typescript
 * const urls = [
 *   'https://github.com/microlinkhq',
 *   'https://vercel.com',
 *   'https://nextjs.org'
 * ]
 * 
 * const results = await microlink.batchGetMetadata(urls)
 * results.forEach(result => {
 *   if (result.success) {
 *     console.log(`✓ ${result.data.title}`)
 *   } else {
 *     console.error(`✗ ${result.url}: ${result.error.message}`)
 *   }
 * })
 * ```
 */

export * from './microlink-client'
export * from './types'
