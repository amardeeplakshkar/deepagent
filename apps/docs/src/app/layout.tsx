import "./globals.css"
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
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

