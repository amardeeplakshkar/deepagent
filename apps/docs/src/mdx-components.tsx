import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import PackageTabs from '@/components/core/PackageTabs';
import { Warning, Note } from '@/components/customized/alert/alert-07'

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    PackageTabs,
    Warning,
    Note
  };
}
