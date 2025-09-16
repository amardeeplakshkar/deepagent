import React from 'react'
import { Github, Star, Download, Code, Zap, Globe, BookOpen, ExternalLink, Terminal, Play, Check, ArrowRight, Sparkles } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert'
import { TextGlitch } from '@/src/components/ui/text-glitch-effect'
import { DeepAgentLogo } from '@/src/components/core/Icons'

const packages = [
  { name: 'github', description: 'GitHub API integration for repository management, issues, and pull requests' },
  { name: 'firecrawl', description: 'Web scraping and crawling with advanced data extraction capabilities' },
  { name: 'openai', description: 'OpenAI GPT models integration for AI-powered conversations and completions' },
  { name: 'google-drive', description: 'Google Drive API for file management and document operations' },
  { name: 'notion', description: 'Notion API integration for database and page management' },
  { name: 'slack', description: 'Slack API for messaging, channels, and workspace automation' },
  { name: 'twitter', description: 'Twitter/X API for social media automation and content management' },
  { name: 'reddit', description: 'Reddit API for content discovery and community engagement' },
  { name: 'youtube', description: 'YouTube API for video management and analytics' },
  { name: 'wikipedia', description: 'Wikipedia API for knowledge retrieval and content research' },
  { name: 'wolfram-alpha', description: 'Wolfram Alpha API for computational intelligence and data analysis' },
  { name: 'weather', description: 'Weather data APIs for meteorological information and forecasts' },
  { name: 'calculator', description: 'Advanced mathematical calculations and expression evaluation' },
  { name: 'e2b', description: 'E2B sandbox environment for secure code execution' },
  { name: 'midjourney', description: 'Midjourney API for AI-powered image generation' },
  { name: 'tavily', description: 'Tavily search API for web search and information retrieval' },
  { name: 'searxng', description: 'SearXNG metasearch engine integration' },
  { name: 'bing', description: 'Bing Search API for web search capabilities' },
  { name: 'brave-search', description: 'Brave Search API for privacy-focused web search' },
  { name: 'duck-duck-go', description: 'DuckDuckGo search API for privacy-first search results' }
]

const featuredPackages = packages.slice(0, 6)
const allPackages = [
  'airtable', 'apollo', 'arxiv', 'bing', 'brave-search', 'calculator', 'clearbit', 'diffbot',
  'duck-duck-go', 'e2b', 'exa', 'firecrawl', 'github', 'google-custom-search', 'google-docs',
  'google-drive', 'gravatar', 'hacker-news', 'hunter', 'jina', 'jigsawstack', 'leadmagic',
  'midjourney', 'notion', 'novu', 'openapi-to-ts', 'open-meteo', 'people-data-labs', 'perigon',
  'polygon', 'predict-leads', 'proxycurl', 'reddit', 'rocketreach', 'searxng', 'slack',
  'social-data', 'stdlib', 'tavily', 'twilio', 'twitter', 'typeform', 'weather', 'wikidata',
  'wikipedia', 'wolfram-alpha', 'xsai', 'youtube', 'zoominfo'
]

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-32">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              The SDK for AI Agent Tools
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              The{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                App Store
              </span>
              {' '}for
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Agent Tools
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              DeepAgent is a curated marketplace of Agent tools that work with over 50+ major LLM
              SDKs and MCP Client.
            </p>
            <TextGlitch className='text-center' text='FOR TOOLS' intervalText='FOR TOOLS' glitchInterval={3500} />
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5" />
                npm install
              </button>
              <button className="inline-flex items-center gap-2 bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all">
                <Terminal className="w-5 h-5" />
                readTheDoc();
              </button>
            </div>
          </div>

          {/* Code Terminal */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 select-none">$</span>
                    <span>npm install @deepagent/github</span>
                  </div>
                  <div className="flex items-start gap-2 text-blue-400">
                    <span className="text-gray-600 select-none">✓</span>
                    <span>Added 12 packages in 2.1s</span>
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="text-yellow-400">import</div>
                    <div className="text-white ml-2">{"{ GitHubClient }"} <span className="text-purple-400">from</span> <span className="text-green-400">'@deepagent/github'</span></div>
                    <div className="mt-3 text-gray-500">// Initialize the GitHub client</div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">github</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">new</span> <span className="text-blue-400">GitHubClient</span>({'{'}apiKey{'}'})</div>
                    <div className="mt-3 text-gray-500">// Get repository information</div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">repo</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">await</span> <span className="text-white">github</span>.<span className="text-blue-400">getRepository</span>({'{'}owner, repo{'}'})</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools That Work Everywhere Section */}
      <div className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Agent tools that work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                everywhere
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The example uses the @deepagent/search tool to provide an LLM access to the web.
            </p>
          </div>

          {/* Another Code Terminal */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex gap-6 text-sm text-gray-400">
                    <span className="text-blue-400 border-b border-blue-400 pb-1">OpenAI</span>
                    <span>Claude</span>
                    <span>Gemini</span>
                    <span>Ollama</span>
                    <span>LangChain</span>
                    <span>Vercel AI SDK</span>
                    <span>Anthropic</span>
                  </div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div><span className="text-yellow-400">import</span> <span className="text-white">{"{ OpenAI }"} </span><span className="text-purple-400">from</span> <span className="text-green-400">'openai'</span></div>
                  <div><span className="text-yellow-400">import</span> <span className="text-white">{"{ TavilySearchTool }"} </span><span className="text-purple-400">from</span> <span className="text-green-400">'@deepagent/tavily'</span></div>
                  <div className="mt-4"><span className="text-gray-500">// Initialize tools and OpenAI client</span></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">openai</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">new</span> <span className="text-blue-400">OpenAI</span>()</div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">search</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">new</span> <span className="text-blue-400">TavilySearchTool</span>({'{'}apiKey{'}'})</div>
                  <div className="mt-4"><span className="text-gray-500">// Run the search and get results</span></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">result</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">await</span> <span className="text-white">search</span>.<span className="text-blue-400">search</span>({'{'}query: <span className="text-green-400">"latest AI developments"</span>{'}'})</div>
                  <div><span className="text-white">console</span>.<span className="text-blue-400">log</span>(<span className="text-white">result</span>.<span className="text-white">results</span>)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8">
              All Agentic tools are exposed as both MCP servers as well as using HTTP APIs. MCP's standard
              for sharing and transferring content between AI models and other systems makes your infrastructure
              for AI systems and data exchange more seamless.
            </p>
          </div>
        </div>
      </div>

      {/* Optimized for AI Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Agent tools are{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                optimized for AI
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highly Curated */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Highly Curated</h3>
              <p className="text-gray-400">
                All Agentic tools have been carefully curated and tested for AI LLM use cases and come from the most reliable AI LLM and AI MCP use cases rather than boiler AI MCP.
              </p>
            </div>

            {/* Production-Ready MCP Support */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Production-Ready MCP Support</h3>
              <p className="text-gray-400">
                Higher success rates and using smart MCP timing features. Agents tools are all tested and quality-assurance approved for the most reliable operation for your MCP use cases. CloudFlare's quality testing ensures best in class user experience.
              </p>
            </div>

            {/* World-Class TypeScript DX */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">World-Class TypeScript DX</h3>
              <p className="text-gray-400">
                Agentic is written in TypeScript and always first-class TypeScript 1st class and performance for our class TypeScript class experience. Comprehensive types, great performance, built for first-class great performance that's always built for TypeScript.
              </p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Scope Billing */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Scope Billing</h3>
              <p className="text-gray-400 text-sm">
                Monitor your AI agent billing and track costs on a scope-based, so you only pay for what you and your servers actually use.
              </p>
            </div>

            {/* Blazing Fast MCP Gateway */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Blazing Fast MCP Gateway</h3>
              <p className="text-gray-400 text-sm">
                Agentic's MCP gateway is backed by CloudFlare's global edge network. Fast cache and load times and fast response times so you can choose tools to handle breaking changes.
              </p>
            </div>

            {/* Semantic Versioning */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Semantic Versioning</h3>
              <p className="text-gray-400 text-sm">
                All Agent tools are semantically versioned so you can choose tools to handle breaking changes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Integrations</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover some of our most popular packages for building intelligent agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <div key={pkg.name} className="bg-white/80  rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white capitalize">
                  @deepagent/{pkg.name}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{pkg.description}</p>
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <ExternalLink className="w-4 h-4" />
                <span>npm install @deepagent/{pkg.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* All Packages Alert */}
        <Alert className="max-w-4xl mx-auto bg-white/80">
          <Globe className="h-4 w-4" />
          <AlertTitle>50+ Integrations Available</AlertTitle>
          <AlertDescription>
            <div className="mt-2">
              <p className="mb-3">DeepAgent supports integrations with all these services:</p>
              <div className="flex flex-wrap gap-2">
                {allPackages.map((pkg) => (
                  <span key={pkg} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                    @deepagent/{pkg}
                  </span>
                ))}
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose DeepAgent?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Built for developers who need reliable, type-safe API integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Type-Safe</h3>
            <p className="text-slate-600 dark:text-slate-300">Full TypeScript support with comprehensive type definitions</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Fast Setup</h3>
            <p className="text-slate-600 dark:text-slate-300">Get started in minutes with zero configuration</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Universal</h3>
            <p className="text-slate-600 dark:text-slate-300">Works in Node.js, browsers, and edge environments</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Production Ready</h3>
            <p className="text-slate-600 dark:text-slate-300">Battle-tested with comprehensive error handling</p>
          </div>
        </div>
      </div>

      {/* Example Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Use Cases</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See what you can build with DeepAgent's powerful integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI-Powered Automation</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Build intelligent agents that can interact with GitHub, Slack, Notion, and more to automate your workflows.
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>• Automated code reviews and PR management</li>
              <li>• Smart notification systems</li>
              <li>• Content generation and publishing</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Intelligence</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Aggregate and analyze data from multiple sources to gain insights and make informed decisions.
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>• Social media sentiment analysis</li>
              <li>• Market research and competitor tracking</li>
              <li>• Knowledge base creation from web data</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join developers worldwide who are building the next generation of intelligent applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/amardeeplakshkar/deepagent"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
            <a
              href="https://www.npmjs.com/search?q=%40deepagent"
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Browse Packages
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DeepAgent
              </h3>
              <p className="text-slate-400 mt-1">Agentic SDK for Modern Applications</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/amardeeplakshkar/deepagent" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <div className="text-slate-400 text-sm">
                Built by <a href="https://amardeep.space" className="text-blue-400 hover:text-blue-300">Amardeep Lakshkar</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            © 2024 DeepAgent. MIT License. Open source and free to use.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page
