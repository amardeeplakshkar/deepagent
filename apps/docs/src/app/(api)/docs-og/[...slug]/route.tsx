import { generateOGImage } from 'fumadocs-ui/og';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { DeepAgentLogo } from '@/components/core/Icons';

export async function GET(
  _req: Request,
  { params }: RouteContext<'/docs-og/[...slug]'>,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'DeepAgent',
    icon: <DeepAgentLogo style={{
      fill: 'white',
      stroke: 'white'
    }} size={95}/>
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, 'image.png'],
  }));
}