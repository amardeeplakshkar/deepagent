import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions'
import { URL } from 'url';
import { AnimatedGridPattern } from '@/components/core/AnimatedGridPattern';
import { Separator } from '@/components/ui/separator';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage tableOfContent={{
    style: 'clerk',
  }} toc={page.data.toc} full={page.data.full}>
      <div className="absolute top-0 inset-x-0 h-[300px] -z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <AnimatedGridPattern className="h-full w-full opacity-15 dark:opacity-10 text-[var(--color-fd-primary)] dark:text-[var(--color-fd-primary)]" />
      </div>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <Separator/>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const image = ['/docs-og', page.slugs, 'image.png'].join('/');

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: [page.slugs.join(", "), 'DeepAgent', "deep agent", "amardeep lakshkar"],
    metadataBase: new URL('https://deepagent.amardeep.space'),
    openGraph: {
      images: image,
    },
    twitter: {
      card: 'summary_large_image',
      images: image,
    },
    category: 'technology',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}