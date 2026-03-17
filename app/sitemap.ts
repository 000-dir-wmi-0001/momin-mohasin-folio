import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://momin-mohasin.me'

  const lastUpdated = new Date()

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