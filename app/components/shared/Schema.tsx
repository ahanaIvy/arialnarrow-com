'use client';

import { usePathname } from 'next/navigation';

interface SchemaProps {
  type: 'WebSite' | 'WebPage' | 'FAQPage' | 'HowTo' | 'ItemList' | 'Article';
  data?: Record<string, any>;
}

export function Schema({ type, data = {} }: SchemaProps) {
  const pathname = usePathname();
  
  const baseSchemas: Record<string, any> = {
    WebSite: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'ArialNarrow.com',
      'url': 'https://arialnarrow.com',
      'description': 'The definitive resource hub for Arial Narrow — typography, preview tools, comparisons, and implementation guides.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://arialnarrow.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  };

  const fullSchema = {
    ...baseSchemas[type],
    ...data,
  };

  // Add WebPage type to all pages
  if (type !== 'WebSite') {
    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': data.name || 'Arial Narrow Resource',
      'url': `https://arialnarrow.com${pathname}`,
      'about': {
        '@type': 'Thing',
        'name': 'Arial Narrow',
      },
      'mainEntity': fullSchema,
    };
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
    />
  );
}