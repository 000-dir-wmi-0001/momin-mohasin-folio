/**
 * SEO Utilities Module
 * Provides functions for generating structured data and SEO-related metadata
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Project {
  name: string;
  description: string;
  image?: string;
  datePublished?: string;
  keywords?: string[];
  url?: string;
  category?: string;
  technologies?: string[];
}

/**
 * Generates BreadcrumbList schema for a given pathname
 * @param pathname - The current page pathname
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const baseUrl = 'https://momin-mohasin.me';

  const breadcrumbs = [
    { name: 'Home', url: baseUrl }
  ];

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = formatSegmentName(segment);
    breadcrumbs.push({
      name,
      url: `${baseUrl}${currentPath}`
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generates hreflang tags for language/regional targeting
 * @param pathname - The current page pathname
 * @returns Object with alternates configuration for Next.js metadata
 */
export function generateHreflangTags(pathname: string) {
  const baseUrl = 'https://momin-mohasin.me';
  const fullUrl = `${baseUrl}${pathname}`;

  return {
    alternates: {
      languages: {
        'en-IN': fullUrl,
        'en': fullUrl,
        'x-default': fullUrl
      }
    }
  };
}

/**
 * Generates FAQPage schema from FAQ data
 * @param faqData - Array of FAQ items
 * @returns FAQPage schema object
 */
export function generateFAQSchema(faqData: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generates complete SoftwareApplication schema for a project
 * @param project - Project object with all required fields
 * @returns SoftwareApplication schema object
 */
export function generateProjectSchema(project: Project) {
  return {
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    ...(project.image && { image: project.image }),
    ...(project.datePublished && { datePublished: project.datePublished }),
    ...(project.keywords && { keywords: project.keywords.join(', ') }),
    ...(project.url && { url: project.url }),
    ...(project.category && { applicationCategory: project.category }),
    operatingSystem: 'Web Browser',
    ...(project.technologies && { programmingLanguage: project.technologies }),
    author: {
      '@type': 'Person',
      name: 'Momin Mohasin'
    }
  };
}

/**
 * Validates if a schema object is valid JSON-LD
 * @param schema - Schema object to validate
 * @returns true if schema is valid, false otherwise
 */
export function isValidSchema(schema: unknown): boolean {
  if (!schema || typeof schema !== 'object') {
    return false;
  }

  const schemaObj = schema as Record<string, unknown>;

  // Check for required @context and @type fields
  if (!schemaObj['@context'] || !schemaObj['@type']) {
    return false;
  }

  return true;
}

/**
 * Converts a URL segment to a human-readable name
 * @param segment - URL segment (e.g., "projects", "contact")
 * @returns Formatted name (e.g., "Projects", "Contact")
 */
function formatSegmentName(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generates multiple schemas as a combined JSON-LD array
 * @param schemas - Array of schema objects
 * @returns Combined schema array
 */
export function combineSchemas(...schemas: unknown[]) {
  return schemas.filter(schema => schema !== null && schema !== undefined);
}

/**
 * Generates unique metadata for a project page
 * @param project - Project object with name, description, and other details
 * @param baseUrl - Base URL for the site (default: https://momin-mohasin.me)
 * @returns Metadata object for Next.js
 */
export function generateProjectMetadata(project: Project, baseUrl: string = 'https://momin-mohasin.me') {
  const projectUrl = `${baseUrl}/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`;
  const projectImage = project.image || '/og-momin.png';
  
  // Create a concise description if not provided
  const description = project.description || `Explore ${project.name} - a ${project.technologies?.join(', ') || 'web'} project by Momin Mohasin`;
  
  return {
    title: `${project.name} - Project by Momin Mohasin`,
    description: description.substring(0, 160), // Limit to 160 chars for meta description
    keywords: [
      project.name,
      'project',
      'portfolio',
      ...(project.technologies || []),
      'Momin Mohasin'
    ],
    openGraph: {
      type: 'article',
      url: projectUrl,
      title: `${project.name} - Project by Momin Mohasin`,
      description: description.substring(0, 160),
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: `${project.name} project screenshot`
        }
      ],
      siteName: 'Momin Mohasin Portfolio'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} - Project by Momin Mohasin`,
      description: description.substring(0, 160),
      images: [projectImage],
      creator: '@mominmohasin'
    },
    alternates: {
      canonical: projectUrl
    }
  };
}
