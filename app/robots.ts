import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/static/', '/admin/'],
    },
    sitemap: 'https://mominmohasin.dev/sitemap.xml',
  }
}