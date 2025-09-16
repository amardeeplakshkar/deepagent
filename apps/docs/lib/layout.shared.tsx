import { DeepAgentLogo } from '@/src/components/core/Icons';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, BookOpen } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className='flex items-center gap-1 text-lg'>
          <DeepAgentLogo size={30}/>
          DeepAgent
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}

export function HomeOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/amardeeplakshkar/deepagent',
    nav: {
      title: (
        <div className='flex items-center gap-1 text-lg'>
          <DeepAgentLogo size={30}/>
          DeepAgent
        </div>
      ),
    },
    links: [
      {
        icon: <BookOpen />,
        text: 'Docs',
        url: '/docs/airtable',
        secondary: false,
        active: 'nested-url',
      },
    ],
  };
}
