'use client';

import { usePathname } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/lib/seo-utils';

export function BreadcrumbSchema() {
  const pathname = usePathname();
  const breadcrumbSchema = generateBreadcrumbSchema(pathname);

  return (
    <script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}
