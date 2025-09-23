import React from 'react'
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import { WordRotate } from '@/components/ui/word-rotate'
import { Features } from "@/components/blocks/features-8"
import GlitchEffect from '@/components/ui/glitch-effect'
import { MarqueeDemo } from '@/components/core/Marquee'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OpenAI from '@/components/icons/open-ai'
import Anthropic from '@/components/icons/anthropic'
import Gemini from '@/components/icons/gemini'
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { DeepAgentAnimatedBeam } from '@/components/core/AnimatedBeam'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "DeepAgent SDK - AI Tools for Enterprise-Grade Agents",
  description: "Open-source AI SDK with 60+ integrations including Airtable, E2B, Midjourney, Tavily, and more. Build powerful AI agents with real-world tools for deep research, web search, data enrichment, and workflow automation.",
  metadataBase: new URL('https://deepagent.amardeep.space'),
  keywords: [
    "ai agent sdk",
    "ai tools",
    "enterprise ai",
    "ai agents",
    "deepagent",
    "open source ai",
    "ai integrations",
    "ai workflow",
    "ai automation",
    "machine learning tools",
    "ai development",
    "ai research",
    "web scraping ai",
    "data enrichment",
    "knowledge ai",
    "creative ai",
    "communication agents",
    "airtable",
    "e2b",
    "leadmagic",
    "proxycurl",
    "twilio",
    "apollo",
    "exa",
    "mcp",
    "reddit",
    "twitter",
    "arxiv",
    "firecrawl",
    "midjourney",
    "rocketreach",
    "typeform",
    "bing",
    "google-custom-search",
    "notion",
    "searxng",
    "weather",
    "brave-search",
    "google-docs",
    "novu",
    "serpapi",
    "wikidata",
    "calculator",
    "google-drive",
    "open-meteo",
    "serper",
    "wikipedia",
    "clearbit",
    "gravatar",
    "people-data-labs",
    "slack",
    "wolfram-alpha",
    "dexa",
    "hacker-news",
    "perigon",
    "social-data",
    "youtube",
    "diffbot",
    "hunter",
    "polygon",
    "tavily",
    "zoominfo",
    "duck-duck-go",
    "jina",
    "predict-leads",
  ],
  authors: [{ name: "Amardeep Lakshkar" }],
  creator: "Amardeep Lakshkar",
  publisher: "Amardeep Lakshkar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "DeepAgent SDK - AI Tools for Enterprise-Grade Agents",
    description: "Open-source AI SDK with 60+ integrations. Build powerful AI agents with real-world tools for deep research, web search, data enrichment, and workflow automation.",
    url: "https://deepagent.amardeep.space",
    siteName: "DeepAgent SDK",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DeepAgent SDK - AI Tools for Enterprise Agents",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepAgent SDK - AI Tools for Enterprise-Grade Agents",
    description: "Open-source AI SDK with 60+ integrations. Build powerful AI agents with real-world tools for automation and research.",
    images: ["/opengraph-image.png"],
    creator: "@amardeepdevs",
    site: "@amardeepdevs",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://deepagent.amardeep.space",
  },
  category: "Technology",
};

const CodeExamples = [
   {
    "provider": "Vercel AI SDK",
    "icon": <Anthropic />,
    "code": `
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { WeatherClient } from '@deepagent/weather'
import { tool } from 'ai'
import { z } from 'zod'

const result = await generateText({
  model: openai('gpt-4-turbo'),
  messages: [
    {
      role: 'user',
      content: 'What\\'s the weather like in Tokyo today?'
    }
  ],
  tools: {
    getWeather: tool({
      description: 'Get the weather in a location',
      inputSchema: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async function ({ location }) {
        try {
          const cleanedLocation = location.trim().toLowerCase()
          const weather = new WeatherClient()
          const res = await weather.getCurrentWeather(cleanedLocation)

          if (!res || !res.current || !res.location) {
            return { error: 'Sorry, we don’t have weather data for that location.' }
          }

          return res
        } catch (err: any) {
          const status = err?.response?.status || err?.status

          if (status === 400) {
            return {
              error: \`Sorry, we don’t have weather data for "\${location}".\`,
            }
          }

          return {
            error: \`Something went wrong while fetching weather for "\${location}". Please try again later.\`,
          }
        }
      }
    }),
  },
})

console.log(result.text)
`,
  },
  {
    provider: "OpenAI",
    icon: <OpenAI />,
    code: `
import OpenAI from "openai";
import { TavilyClient } from "@deepagent/tavily";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const tavily = new TavilyClient();

const result = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Find the latest developments in quantum computing." }],
  tools: [
    {
      type: "function",
      function: {
        name: "tavily_search",
        description: "Search the web using Tavily",
        parameters: {
          type: "object",
          properties: {
            query: { type: "string", description: "Search query" }
          },
          required: ["query"]
        }
      }
    }
  ]
});
const res = await tavily.search("latest developments in quantum computing");
console.log(res);
`
  },
  {
    provider: "Claude",
    icon: <Anthropic />,
    code: `
import Anthropic from "@anthropic-ai/sdk";
import { TavilyClient } from "@deepagent/tavily";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const tavily = new TavilyClient();

const result = await client.messages.create({
  model: "claude-3-opus-20240229",
  messages: [{ role: "user", content: "Find the latest developments in quantum computing." }],
  tools: [
    {
      name: "tavily_search",
      description: "Search the web using Tavily",
      input_schema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" }
        },
        required: ["query"]
      }
    }
  ]
});
const res = await tavily.search("latest developments in quantum computing");
console.log(res);
`
  },
  {
    provider: "Gemini",
    icon: <Gemini />,
    code: `
import { GoogleGenerativeAI } from "@google/generative-ai";
import { TavilyClient } from "@deepagent/tavily";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
const tavily = new TavilyClient();

const result = await model.generateContent({
  contents: [{ role: "user", parts: [{ text: "Find the latest developments in quantum computing." }] }],
  tools: [{
    functionDeclarations: [{
      name: "tavily_search",
      description: "Search the web using Tavily",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" }
        },
        required: ["query"]
      }
    }]
  }]
});
const res = await tavily.search("latest developments in quantum computing");
console.log(res);
`
  }
]

const RandData = [
  {
    "value": "88%",
    "desc": "of Fortune 100 COMPANIES"
  },
  {
    "value": "1M+",
    "desc": "MONTHLY DOWNLOADS"
  },
  {
    "value": "50+",
    "desc": "Integrations"
  }
]

const LandingPage = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto w-full border m-2 flex items-center justify-center flex-col gap-4'>
        <div className='mt-8 md:mt-16 lg:mt-20 p-4 ibm-plex-mono-bold uppercase flex items-center justify-center flex-col'>
          <h2 className='text-3xl md:text-3xl lg:text-5xl'>
            AI Tools for
          </h2>
          <div className='bg-foreground'>
            <WordRotate
              className="text-3xl md:text-3xl lg:text-5xl  text-background px-2"
              words={[
                "Deep Research",
                "Web Search",
                "Data Enrich",
                "Knowledge AI",
                "Workflows",
                "Automations",
                "Creative AI",
                "Comms Agents"
              ]}
            />
          </div>
        </div>
        <p className='text-center mb-2 lowercase text-sm md:text-base'>
          Open-source, secure environment with real-world tools for enterprise-grade agents.
        </p>
        <CtaButton />
        <MarqueeDemo />
        <div className='border-b w-full mt-8 md:mt-16 gap-3 lg:mt-20' />
        <div className="mt-8 md:mt-16 gap-3 lg:mt-20 p-4 ibm-plex-mono-bold uppercase flex justify-center text-center">
          <h2 className="text-3xl md:text-3xl lg:text-5xl whitespace-normal break-words">
            <GlitchEffect
              words={["Features"]}
              interval={3000}
              className="text-3xl md:text-3xl lg:text-5xl text-background px-2 bg-foreground mr-2"
            />
            your <br className='m-2' />agents will love
          </h2>
        </div>
        <p className='text-center mb-2 lowercase text-sm md:text-base'>
          AI agents need real-world tools to complete superhuman level tasks.
        </p>
        <Features />
        <div className='my-8 md:my-16 lg:my-20 w-full md:grid grid-cols-3'>
          {
            RandData.map((data, i) =>
              <div key={i} className={cn('col-span-1 p-4 border-y flex items-center justify-center flex-col', i === 1 && 'md:border-x')}>
                <h3 className='font-semibold text-xl'>
                  {data.value}
                </h3>
                <p className='text-sm'>
                  {data.desc}
                </p>
              </div>
            )
          }
        </div>
        <div className='gap-3 p-4 ibm-plex-mono-bold uppercase flex flex-wrap justify-center text-center'>
          <h2 className='text-3xl md:text-3xl lg:text-5xl whitespace-normal break-words'>
            IN YOUR CODE
            <br className='m-2' /> WITH
            <GlitchEffect
              words={["A FEW LINES"]}
              interval={3000}
              className="ml-2 text-3xl md:text-3xl lg:text-5xl  text-background px-2 bg-foreground"
            />
          </h2>
        </div>
        <p className='text-center mb-2 lowercase text-sm md:text-base'>
          Open-source, secure environment with real-world tools for enterprise-grade agents.
        </p>
        <Tabs className='w-full p-2' defaultValue='OpenAI'>
          <TabsList className='h-full bg-background grid grid-cols-4 w-full'>
            {CodeExamples.map((code, i) =>
              <div key={i} className={cn(i !== 0 && 'border-l-2')}>
                <TabsTrigger className='flex w-[98%] mx-auto flex-col items-center col-span-1 justify-center gap-2' value={code.provider}>
                  {code.icon}
                  {code.provider}
                </TabsTrigger>
              </div>
            )
            }
          </TabsList>
          {CodeExamples.map((code, i) =>
            <TabsContent key={i} value={code.provider}>
              <DynamicCodeBlock code={code.code} lang='typescript' />
            </TabsContent>
          )}
        </Tabs>
        <div className='border-b w-full mt-8 md:mt-16 gap-3 lg:mt-20' />
        <div className='mt-8 md:mt-16 gap-3 lg:mt-20 p-4 ibm-plex-mono-bold uppercase flex flex-wrap justify-center text-center'>
          <h2 className='text-3xl md:text-3xl lg:text-5xl whitespace-normal break-words'>
             Agent tools that<br className='m-2' /> works 
            <GlitchEffect
              words={["EVERYWHERE"]}
              interval={3000}
              className="ml-2 text-3xl md:text-3xl lg:text-5xl  text-background px-2 bg-foreground"
            />
          </h2>
        </div>
        <p className='text-center mb-2 lowercase text-sm md:text-base'>
          Use OpenAI, Llama, Anthropic, Mistral, or your
own custom models. DeepAgent is LLM-agnostic
and compatible with any model.
        </p>
        <DeepAgentAnimatedBeam />
        <div className='border-b w-full mt-8 md:mt-16 gap-3 lg:mt-20' />
        <div className='mt-8 md:mt-16 gap-3 lg:mt-20 p-4 ibm-plex-mono-bold uppercase flex flex-wrap justify-center text-center'>
          <h2 className='text-3xl md:text-3xl lg:text-5xl whitespace-normal break-words'>
            GET STARTED
            <GlitchEffect
              words={["TODAY"]}
              interval={3000}
              className="ml-2 text-3xl md:text-3xl lg:text-5xl  text-background px-2 bg-foreground"
            />
          </h2>
        </div>
        <p className='text-center mb-2 lowercase text-sm md:text-base'>
          Open-source, secure environment with real-world tools for enterprise-grade agents.
        </p>
        <CtaButton />

      </div>
      <div className="w-full flex mt-4 items-center justify-center">
        <h1
          className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground/40 to-background/40 select-none ibm-plex-mono-bold"
          style={{
            fontSize: "15dvw",
            lineHeight: "1",
          }}
        >
          DEEPAGENT
        </h1>
      </div>
    </>
  )
}

const CtaButton = () => {
  return (
    <div className='mb-8 md:mb-16 lg:mb-20 flex  items-center justify-center gap-4'>
      <Button asChild className='cursor-pointer  rounded-none p-3 px-8' variant={'primary'}>
        <Link href={'/docs/airtable'}>
          View Docs
        </Link>
      </Button>
      <Button asChild className='cursor-pointer  rounded-none p-3 px-8' variant={'outline'}>
        <Link target='_blank' href={'https://github.com/amardeeplakshkar/deepagent'}>
          Github
        </Link>
      </Button>
    </div>
  );
}

export default LandingPage