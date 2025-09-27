import { docs } from '@/.source';
import { Badge } from '@/components/ui/badge';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  pageTree: {
    attachFile(node, file) {
      if (!file) return node;

      const isNew = (file.data as { new?: boolean })?.new;

      if (isNew) {
        node.name = (
          <>
            {node.name}
            <Badge className="text-[0.5rem] bg-fd-primary">NEW</Badge>
          </>
        );
      }

      return node;
    }
  }
});
