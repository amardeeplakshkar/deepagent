import { z } from 'zod'

/**
 * Microlink image/logo object schema
 */
export const MicrolinkMediaSchema = z.object({
  url: z.string().url(),
  type: z.string(),
  size: z.number(),
  height: z.number(),
  width: z.number(),
  size_pretty: z.string()
})

/**
 * Microlink API response data schema
 */
export const MicrolinkDataSchema = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  lang: z.string().nullable(),
  author: z.string().nullable(),
  publisher: z.string().nullable(),
  image: MicrolinkMediaSchema.optional(),
  date: z.string().nullable(),
  url: z.string().url(),
  logo: MicrolinkMediaSchema.optional(),
  // Dynamic fields that appear based on request options
  screenshot: MicrolinkMediaSchema.optional(),
  pdf: MicrolinkMediaSchema.optional(),
  video: MicrolinkMediaSchema.optional(),
  audio: MicrolinkMediaSchema.optional(),
  palette: z.array(z.string()).optional(),
  insights: z.record(z.any()).optional()
}).passthrough() // Allow additional fields not explicitly defined

/**
 * Microlink API response schema
 */
export const MicrolinkResponseSchema = z.object({
  status: z.enum(['success', 'error']),
  data: MicrolinkDataSchema.optional(),
  message: z.string().optional(),
  statusCode: z.number().optional(),
  redirects: z.array(z.string()).optional(),
  headers: z.record(z.union([z.string(), z.array(z.string())])).optional()
})

/**
 * Microlink API request options schema
 */
export const MicrolinkOptionsSchema = z.object({
  url: z.string().url('Invalid URL format'),
  apiKey: z.string().optional(),
  timeout: z.number().min(1).max(60000).optional(),
  ttl: z.string().optional(),
  headers: z.record(z.string()).optional(),
  screenshot: z.boolean().optional(),
  pdf: z.boolean().optional(),
  insights: z.boolean().optional(),
  palette: z.boolean().optional(),
  audio: z.boolean().optional(),
  video: z.boolean().optional(),
  iframe: z.boolean().optional(),
  prerender: z.boolean().optional(),
  waitFor: z.number().optional(),
  waitUntil: z.enum(['load', 'domcontentloaded', 'networkidle0', 'networkidle2']).optional(),
  colorScheme: z.enum(['light', 'dark']).optional(),
  device: z.string().optional(),
  viewport: z.object({
    width: z.number(),
    height: z.number()
  }).optional()
})

// Type definitions derived from schemas
export type MicrolinkMedia = z.infer<typeof MicrolinkMediaSchema>
export type MicrolinkData = z.infer<typeof MicrolinkDataSchema>
export type MicrolinkResponse = z.infer<typeof MicrolinkResponseSchema>
export type MicrolinkOptions = z.infer<typeof MicrolinkOptionsSchema>

/**
 * Microlink API error class
 */
export class MicrolinkError extends Error {
  public readonly statusCode?: number
  public readonly response?: MicrolinkResponse

  constructor(message: string, statusCode?: number, response?: MicrolinkResponse) {
    super(message)
    this.name = 'MicrolinkError'
    this.statusCode = statusCode
    this.response = response
  }
}

/**
 * Microlink client configuration
 */
export interface MicrolinkConfig {
  apiKey?: string
  baseUrl?: string
  timeout?: number
  defaultOptions?: Partial<MicrolinkOptions>
}