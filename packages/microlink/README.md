# @deepagent/microlink

[![npm version](https://badge.fury.io/js/@deepagent%2Fmicrolink.svg)](https://badge.fury.io/js/@deepagent%2Fmicrolink)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

> Microlink API integration for extracting website metadata and link previews. Turn any website into structured data with rich metadata extraction, screenshots, PDFs, and performance insights.

## ✨ Features

- 🎯 **Website Metadata Extraction** - Get title, description, images, and more
- 📸 **Screenshot Generation** - Capture website screenshots with custom options
- 📄 **PDF Generation** - Convert webpages to PDF documents
- 📊 **Performance Insights** - Get website performance metrics
- 🔄 **Batch Processing** - Process multiple URLs simultaneously
- 🛡️ **Type Safety** - Full TypeScript support with comprehensive types
- ⚡ **Production Ready** - Robust error handling and validation
- 🆓 **Free Tier Support** - Works with Microlink's free plan

## 📦 Installation

```bash
# npm
npm install @deepagent/microlink

# yarn
yarn add @deepagent/microlink

# pnpm
pnpm add @deepagent/microlink
```

## 🚀 Quick Start

### Basic Usage (Free Tier)

```typescript
import { MicrolinkClient } from '@deepagent/microlink'

// Initialize client (no API key needed for free tier)
const microlink = new MicrolinkClient()

// Extract website metadata
const metadata = await microlink.getMetadata('https://github.com/microlinkhq')

console.log({
  title: metadata.title,        // "microlink.io"
  description: metadata.description,  // "Browser as API. microlink.io has 51 repositories..."
  image: metadata.image?.url,   // "https://avatars.githubusercontent.com/u/29799436..."
  logo: metadata.logo?.url,     // "https://github.githubassets.com/assets/..."
  publisher: metadata.publisher // "GitHub"
})
```

### With API Key (Pro Plan)

```typescript
const microlink = new MicrolinkClient({
  apiKey: process.env.MICROLINK_API_KEY,
  timeout: 15000 // Optional: custom timeout
})

const metadata = await microlink.getMetadata('https://example.com', {
  waitUntil: 'networkidle0',
  headers: {
    'User-Agent': 'Custom Bot/1.0'
  }
})
```

## 📖 API Reference

### MicrolinkClient

#### Constructor

```typescript
new MicrolinkClient(config?: MicrolinkConfig)
```

**Config Options:**
- `apiKey?: string` - Microlink API key (optional for free tier)
- `baseUrl?: string` - API base URL (default: 'https://api.microlink.io')
- `timeout?: number` - Request timeout in milliseconds (default: 30000)
- `defaultOptions?: Partial<MicrolinkOptions>` - Default options for all requests

#### Methods

##### `getMetadata(url, options?)`

Extract basic metadata from a website.

```typescript
const metadata = await microlink.getMetadata('https://example.com', {
  waitUntil: 'networkidle0',
  device: 'iPhone'
})
```

**Options:**
- `waitUntil?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'`
- `device?: string` - Device to emulate
- `viewport?: { width: number; height: number }`
- `headers?: Record<string, string>`
- `prerender?: boolean`
- `colorScheme?: 'light' | 'dark'`

##### `getScreenshot(url, options?)`

Capture website screenshot along with metadata.

```typescript
const result = await microlink.getScreenshot('https://example.com', {
  viewport: { width: 1200, height: 800 },
  waitUntil: 'networkidle0'
})

console.log('Screenshot URL:', result.screenshot?.url)
```

##### `getPdf(url, options?)`

Generate PDF of webpage along with metadata.

```typescript
const result = await microlink.getPdf('https://example.com', {
  waitUntil: 'load',
  device: 'desktop'
})

console.log('PDF URL:', result.pdf?.url)
```

##### `getInsights(url, options?)`

Get performance insights along with metadata.

```typescript
const result = await microlink.getInsights('https://example.com')

console.log('Performance metrics:', result.insights)
```

##### `batchGetMetadata(urls, options?)`

Process multiple URLs in parallel.

```typescript
const urls = [
  'https://github.com/microlinkhq',
  'https://vercel.com',
  'https://nextjs.org'
]

const results = await microlink.batchGetMetadata(urls)

results.forEach(result => {
  if (result.success) {
    console.log(`✓ ${result.data.title}`)
  } else {
    console.error(`✗ ${result.url}: ${result.error.message}`)
  }
})
```

## 🔧 Advanced Usage

### Custom Configuration

```typescript
const microlink = new MicrolinkClient({
  apiKey: process.env.MICROLINK_API_KEY,
  timeout: 20000,
  defaultOptions: {
    waitUntil: 'networkidle0',
    viewport: { width: 1920, height: 1080 }
  }
})
```

### Error Handling

```typescript
import { MicrolinkError } from '@deepagent/microlink'

try {
  const metadata = await microlink.getMetadata('https://example.com')
} catch (error) {
  if (error instanceof MicrolinkError) {
    console.error('Microlink API Error:', {
      message: error.message,
      statusCode: error.statusCode,
      response: error.response
    })
  } else {
    console.error('Unexpected error:', error)
  }
}
```

### Real-world Examples

#### Link Preview Component

```typescript
async function generateLinkPreview(url: string) {
  const microlink = new MicrolinkClient()
  
  try {
    const metadata = await microlink.getMetadata(url)
    
    return {
      title: metadata.title || 'Untitled',
      description: metadata.description || '',
      image: metadata.image?.url,
      favicon: metadata.logo?.url,
      url: metadata.url
    }
  } catch (error) {
    console.error('Failed to generate preview:', error)
    return null
  }
}
```

#### Batch URL Processing

```typescript
async function analyzeCompetitors(urls: string[]) {
  const microlink = new MicrolinkClient({
    apiKey: process.env.MICROLINK_API_KEY
  })
  
  const results = await microlink.batchGetMetadata(urls, {
    insights: true,
    screenshot: true
  })
  
  return results
    .filter(result => result.success)
    .map(result => ({
      url: result.data.url,
      title: result.data.title,
      description: result.data.description,
      screenshot: result.data.screenshot?.url,
      insights: result.data.insights
    }))
}
```

#### Social Media Card Generator

```typescript
async function generateSocialCard(url: string) {
  const microlink = new MicrolinkClient()
  
  const metadata = await microlink.getScreenshot(url, {
    viewport: { width: 1200, height: 630 }, // Twitter card dimensions
    waitUntil: 'networkidle0'
  })
  
  return {
    title: metadata.title,
    description: metadata.description,
    image: metadata.screenshot?.url,
    url: metadata.url
  }
}
```

## 📊 Response Types

### MicrolinkData

```typescript
interface MicrolinkData {
  title: string | null
  description: string | null
  lang: string | null
  author: string | null
  publisher: string | null
  image?: MicrolinkMedia
  date: string | null
  url: string
  logo?: MicrolinkMedia
  // Additional fields available with specific options:
  screenshot?: MicrolinkMedia  // with screenshot: true
  pdf?: MicrolinkMedia        // with pdf: true
  insights?: any              // with insights: true
}
```

### MicrolinkMedia

```typescript
interface MicrolinkMedia {
  url: string
  type: string
  size: number
  height: number
  width: number
  size_pretty: string
}
```

## 🔑 API Keys & Pricing

### Free Tier
- 50 requests per day
- Basic metadata extraction
- No API key required
- Rate limited

### Pro Plans
- Higher rate limits
- Advanced features (screenshots, PDFs, insights)
- Custom headers and TTL
- API key required

Get your API key at [microlink.io](https://microlink.io)

## 🛡️ Error Handling

The package includes comprehensive error handling:

- **URL Validation**: Ensures valid URLs before making requests
- **Response Validation**: Validates API responses with flexible schema
- **Network Errors**: Handles timeout and connection issues
- **API Errors**: Properly surfaces Microlink API error messages
- **Type Safety**: Full TypeScript support prevents runtime errors

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](../../LICENSE) file for details.

## 🔗 Links

- [Microlink API Documentation](https://microlink.io/docs/api/getting-started/overview)
- [DeepAgent Project](https://github.com/amardeeplakshkar/deepagent)
- [Report Issues](https://github.com/amardeeplakshkar/deepagent/issues)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://amardeep.space">Amardeep Lakshkar</a></p>
  <p>Part of the <a href="https://github.com/amardeeplakshkar/deepagent">DeepAgent</a> ecosystem</p>
</div>