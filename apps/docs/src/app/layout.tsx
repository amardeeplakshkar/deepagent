import "./globals.css"
import { RootProvider } from 'fumadocs-ui/provider';
import { Metadata } from "next";
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | DeepAgent',
    default: 'DeepAgent',
  },
  metadataBase: new URL('https://deepagent.amardeep.space'),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
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
}


export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

