import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | DeepAgent',
    default: 'DeepAgent',
  },
}

export default function Layout({ children }: LayoutProps) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}