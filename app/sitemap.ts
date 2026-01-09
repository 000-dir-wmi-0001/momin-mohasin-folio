import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://momin-mohasin.me'

  // Use current date for portfolio content (last updated)
  const lastUpdated = new Date('2026-01-09')

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}