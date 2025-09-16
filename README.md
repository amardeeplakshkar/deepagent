<div align="center">
  <h1>🤖 DeepAgent</h1>
  <p><strong>Agentic SDK for Modern Applications</strong></p>
  <p>A comprehensive TypeScript SDK for building intelligent agents with 50+ pre-built integrations</p>
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
</div>

## 🚀 Features

- **50+ Pre-built Integrations** - Connect to popular APIs and services instantly
- **100% TypeScript** - Full type safety with comprehensive type definitions
- **Zero Configuration** - Get started in minutes with sensible defaults
- **Universal Compatibility** - Works in Node.js, browsers, and edge environments
- **Production Ready** - Battle-tested with comprehensive error handling
- **Modular Architecture** - Install only what you need

## 📦 Quick Start

### Installation

Install any DeepAgent package using your preferred package manager:

```bash
# npm
npm install @deepagent/github

# yarn
yarn add @deepagent/github

# pnpm
pnpm add @deepagent/github
```

### Basic Usage

```typescript
import { GitHubClient } from '@deepagent/github'

// Initialize the client
const github = new GitHubClient({
  apiKey: process.env.GITHUB_TOKEN
})

// Get repository information
const repo = await github.getRepository({
  owner: 'amardeeplakshkar',
  repo: 'deepagent'
})

// Create an issue
const issue = await github.createIssue({
  owner: 'amardeeplakshkar',
  repo: 'deepagent',
  title: 'New feature request',
  body: 'Description of the feature'
})
```

## 🛠 Available Integrations

DeepAgent provides 50+ pre-built integrations across various categories:

### 🤖 AI & Machine Learning
- `@deepagent/openai` - OpenAI GPT models
- `@deepagent/midjourney` - AI image generation
- `@deepagent/xsai` - xAI integration

### 🔍 Search & Data
- `@deepagent/google-custom-search` - Google Search API
- `@deepagent/bing` - Bing Search API
- `@deepagent/brave-search` - Privacy-focused search
- `@deepagent/duck-duck-go` - DuckDuckGo search
- `@deepagent/tavily` - Web search and retrieval
- `@deepagent/searxng` - Metasearch engine
- `@deepagent/exa` - Semantic search

### 📊 Business & CRM
- `@deepagent/airtable` - Database management
- `@deepagent/notion` - Workspace automation
- `@deepagent/apollo` - Sales intelligence
- `@deepagent/clearbit` - Company data
- `@deepagent/hunter` - Email finder
- `@deepagent/leadmagic` - Lead generation
- `@deepagent/people-data-labs` - People data
- `@deepagent/predict-leads` - Lead prediction
- `@deepagent/proxycurl` - LinkedIn data
- `@deepagent/rocketreach` - Contact information
- `@deepagent/social-data` - Social media data
- `@deepagent/zoominfo` - B2B database

### 💬 Communication
- `@deepagent/slack` - Team collaboration
- `@deepagent/twilio` - SMS and voice
- `@deepagent/novu` - Notifications

### 📱 Social Media
- `@deepagent/twitter` - Twitter/X API
- `@deepagent/reddit` - Reddit integration
- `@deepagent/youtube` - Video platform

### 🌐 Web & Content
- `@deepagent/firecrawl` - Web scraping
- `@deepagent/diffbot` - Web data extraction
- `@deepagent/github` - Repository management
- `@deepagent/google-drive` - File storage
- `@deepagent/google-docs` - Document editing

### 📖 Knowledge & Research
- `@deepagent/wikipedia` - Encyclopedia data
- `@deepagent/arxiv` - Academic papers
- `@deepagent/wolfram-alpha` - Computational intelligence
- `@deepagent/hacker-news` - Tech news
- `@deepagent/wikidata` - Structured knowledge

### 🔧 Utilities
- `@deepagent/calculator` - Mathematical operations
- `@deepagent/weather` - Weather data
- `@deepagent/open-meteo` - Weather APIs
- `@deepagent/e2b` - Code execution sandbox
- `@deepagent/gravatar` - Avatar service
- `@deepagent/jina` - Neural search
- `@deepagent/jigsawstack` - API toolkit
- `@deepagent/openapi-to-ts` - TypeScript generation
- `@deepagent/perigon` - News API
- `@deepagent/polygon` - Financial data
- `@deepagent/stdlib` - Standard library
- `@deepagent/typeform` - Form builder

## 🏗 Project Structure

This monorepo is built with [Turborepo](https://turbo.build/) and includes:

### Apps
- `@deepagent/docs` - Documentation site built with Next.js and Fumadocs

### Packages
- 50+ individual integration packages under `@deepagent/*` namespace
- Each package is independently versioned and published
- Full TypeScript support with comprehensive type definitions

## 🎯 Use Cases

### AI-Powered Automation
Build intelligent agents that can:
- Automate code reviews and PR management with GitHub integration
- Create smart notification systems across Slack, email, and SMS
- Generate and publish content across multiple platforms
- Orchestrate complex workflows with multiple API integrations

### Data Intelligence & Analytics
Aggregate and analyze data from multiple sources:
- Social media sentiment analysis across Twitter, Reddit, YouTube
- Market research and competitor tracking
- Knowledge base creation from web scraping and research APIs
- Real-time business intelligence dashboards

### Customer Relationship Management
Enhance your CRM workflows:
- Automated lead generation and qualification
- Contact enrichment from multiple data sources
- Personalized outreach campaigns
- Sales intelligence and pipeline management

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- pnpm 8+ (recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/amardeeplakshkar/deepagent.git
cd deepagent

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Useful Commands

```bash
# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format

# Clean all build artifacts
pnpm clean

# Generate changeset
pnpm changeset

# Version packages
pnpm version-packages

# Release packages
pnpm release
```

## 📚 Documentation

- **[Documentation Site](http://localhost:3002)** - Comprehensive guides and API references
- **[Examples](./examples)** - Ready-to-use code examples
- **[Contributing Guide](./CONTRIBUTING.md)** - How to contribute to DeepAgent

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Run tests**: `pnpm test`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Adding New Integrations

To add a new integration:

1. Create a new package in `packages/[service-name]/`
2. Follow the existing package structure and conventions
3. Add comprehensive TypeScript types
4. Include tests and documentation
5. Update this README with the new integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👨‍💻 Author

**Amardeep Lakshkar**
- Website: [amardeep.space](https://amardeep.space)
- GitHub: [@amardeeplakshkar](https://github.com/amardeeplakshkar)
- Twitter: [@amardeeplakshkar](https://twitter.com/amardeeplakshkar)

## 🙏 Acknowledgments

- Built with [Turborepo](https://turbo.build/) for optimal monorepo management
- Documentation powered by [Fumadocs](https://fumadocs.vercel.app/)
- UI components with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide React](https://lucide.dev/)

## 📈 Stats

- **50+ Integrations** across multiple categories
- **100% TypeScript** for full type safety
- **Production Ready** with comprehensive error handling
- **MIT Licensed** and open source

## 🚢 Publishing

### Versioning and Publishing Packages

Package publishing is configured using [Changesets](https://github.com/changesets/changesets) for automated versioning and releases:

```bash
# Generate a changeset
pnpm changeset

# Version packages based on changesets
pnpm version-packages

# Publish to npm
pnpm release
```

### Automated Releases

The project includes automated npm releases via [GitHub Actions](https://github.com/changesets/action). To enable:

1. Create `NPM_TOKEN` and `GITHUB_TOKEN` in repository settings
2. Install the [Changesets bot](https://github.com/apps/changeset-bot)
3. Push changes to trigger the workflow

For detailed information, see the [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md).

---

<div align="center">
  <p>Made with ❤️ by <a href="https://amardeep.space">Amardeep Lakshkar</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
