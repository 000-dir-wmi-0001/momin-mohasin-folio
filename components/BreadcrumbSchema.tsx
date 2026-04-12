'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/lib/seo-utils';

export function BreadcrumbSchema() {
  const pathname = usePathname();
  const breadcrumbSchema = generateBreadcrumbSchema(pathname);

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}
