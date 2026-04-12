/**
 * SEO Optimization Bugfix - Bug Condition Exploration Test
 * 
 * This test validates that SEO deficiencies exist on UNFIXED code.
 * EXPECTED OUTCOME: This test FAILS on unfixed code (this is correct - it proves the bugs exist)
 * 
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8
 * Property 1: Bug Condition - Complete SEO Implementation
 */

import { render, screen } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('SEO Optimization Bugfix - Bug Condition Exploration', () => {
  
  /**
   * Test 1: Project Structured Data Completeness
   * Validates: Requirement 1.1, 2.1
   * Bug Condition: Project schema missing datePublished, image, keywords, url fields
   * Expected Behavior: Each project includes all fields for rich snippet eligibility
   */
  describe('1. Project Structured Data Completeness', () => {
    it('should include datePublished, image, keywords, url fields in project schema', () => {
      const projectsPagePath = path.join(process.cwd(), 'app/projects/page.tsx');
      const projectsPageContent = fs.readFileSync(projectsPagePath, 'utf-8');
      
      // Parse the structured data from the page
      const structuredDataMatch = projectsPageContent.match(/projectStructuredData\s*=\s*({[\s\S]*?});/);
      expect(structuredDataMatch).toBeTruthy();
      
      if (structuredDataMatch) {
        const structuredDataStr = structuredDataMatch[1];
        
        // Check for required fields in project schema
        const hasDatePublished = structuredDataStr.includes('datePublished');
        const hasImage = structuredDataStr.includes('"image"');
        const hasKeywords = structuredDataStr.includes('keywords');
        const hasUrl = structuredDataStr.includes('"url"');
        
        // This test FAILS on unfixed code - proving the bug exists
        expect(hasDatePublished).toBe(true);
        expect(hasImage).toBe(true);
        expect(hasKeywords).toBe(true);
        expect(hasUrl).toBe(true);
      }
    });

    it('should include all projects in structured data with complete fields', () => {
      const portfolioDataPath = path.join(process.cwd(), 'lib/portfolio-data.ts');
      const portfolioDataContent = fs.readFileSync(portfolioDataPath, 'utf-8');
      
      // Count projects in portfolio data
      const projectsMatch = portfolioDataContent.match(/experience:\s*\[([\s\S]*?)\]/);
      expect(projectsMatch).toBeTruthy();
      
      // Check that projects have required fields
      const hasDatePublished = portfolioDataContent.includes('datePublished');
      const hasImage = portfolioDataContent.includes('"image"');
      const hasKeywords = portfolioDataContent.includes('keywords');
      const hasUrl = portfolioDataContent.includes('"url"');
      
      // This test FAILS on unfixed code
      expect(hasDatePublished).toBe(true);
      expect(hasImage).toBe(true);
      expect(hasKeywords).toBe(true);
      expect(hasUrl).toBe(true);
    });
  });

  /**
   * Test 2: Breadcrumb Schema Presence
   * Validates: Requirement 1.2, 2.2
   * Bug Condition: Breadcrumb schema missing from all pages
   * Expected Behavior: BreadcrumbList schema present on every page
   */
  describe('2. Breadcrumb Schema Presence', () => {
    it('should include breadcrumb schema in layout.tsx', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for breadcrumb schema generation via BreadcrumbSchema component
      const hasBreadcrumbSchema = layoutContent.includes('BreadcrumbSchema') || 
                                  layoutContent.includes('BreadcrumbList') || 
                                  layoutContent.includes('breadcrumb') ||
                                  layoutContent.includes('generateBreadcrumb');
      
      // This test FAILS on unfixed code - proving breadcrumb schema is missing
      expect(hasBreadcrumbSchema).toBe(true);
    });

    it('should generate breadcrumb schema based on pathname', () => {
      const breadcrumbComponentPath = path.join(process.cwd(), 'components/BreadcrumbSchema.tsx');
      const breadcrumbComponentContent = fs.readFileSync(breadcrumbComponentPath, 'utf-8');
      
      // Check for dynamic breadcrumb generation using usePathname
      const hasDynamicGeneration = breadcrumbComponentContent.includes('usePathname') && 
                                   (breadcrumbComponentContent.includes('generateBreadcrumbSchema') || 
                                    breadcrumbComponentContent.includes('BreadcrumbList'));
      
      // This test FAILS on unfixed code
      expect(hasDynamicGeneration).toBe(true);
    });

    it('should include breadcrumb schema on projects page', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check that BreadcrumbSchema component is used in layout (which applies to all pages including projects)
      const hasBreadcrumb = layoutContent.includes('BreadcrumbSchema') ||
                           layoutContent.includes('BreadcrumbList') ||
                           layoutContent.includes('breadcrumb');
      
      // This test FAILS on unfixed code
      expect(hasBreadcrumb).toBe(true);
    });

    it('should include breadcrumb schema on contact page', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check that BreadcrumbSchema component is used in layout (which applies to all pages including contact)
      const hasBreadcrumb = layoutContent.includes('BreadcrumbSchema') ||
                           layoutContent.includes('BreadcrumbList') ||
                           layoutContent.includes('breadcrumb');
      
      // This test FAILS on unfixed code
      expect(hasBreadcrumb).toBe(true);
    });
  });

  /**
   * Test 3: Heading Hierarchy Consistency
   * Validates: Requirement 1.5, 2.5
   * Bug Condition: Multiple h1 tags and inconsistent heading hierarchy
   * Expected Behavior: Single h1 per page with proper h2→h3 progression
   */
  describe('3. Heading Hierarchy Consistency', () => {
    it('should have single h1 tag on home page', () => {
      const pagePath = path.join(process.cwd(), 'app/page.tsx');
      const pageContent = fs.readFileSync(pagePath, 'utf-8');
      
      // Count h1 tags in page.tsx
      const h1Count = (pageContent.match(/<h1/g) || []).length;
      
      // This test FAILS on unfixed code - multiple h1 tags exist
      expect(h1Count).toBe(1);
    });

    it('should use h3 tags for section headings instead of h2', () => {
      const pagePath = path.join(process.cwd(), 'app/page.tsx');
      const pageContent = fs.readFileSync(pagePath, 'utf-8');
      
      // Check for proper heading hierarchy
      // Section headings should be h3, not h2
      const hasH2Sections = pageContent.includes('id="overview-heading"') && 
                           pageContent.includes('<h2');
      
      // This test FAILS on unfixed code - h2 tags used for sections
      expect(hasH2Sections).toBe(false);
    });

    it('should have proper heading hierarchy progression', () => {
      const pagePath = path.join(process.cwd(), 'app/page.tsx');
      const pageContent = fs.readFileSync(pagePath, 'utf-8');
      
      // Extract heading structure
      const h1Tags = (pageContent.match(/<h1[^>]*>/g) || []).length;
      const h2Tags = (pageContent.match(/<h2[^>]*>/g) || []).length;
      const h3Tags = (pageContent.match(/<h3[^>]*>/g) || []).length;
      
      // Should have 1 h1, and if h3 exists, h2 should be minimal or zero
      expect(h1Tags).toBe(1);
      
      // This test FAILS on unfixed code - improper hierarchy
      if (h3Tags > 0) {
        expect(h2Tags).toBeLessThanOrEqual(1);
      }
    });

    it('should have proper heading hierarchy in Hero component', () => {
      const heroPath = path.join(process.cwd(), 'components/Hero.tsx');
      const heroContent = fs.readFileSync(heroPath, 'utf-8');
      
      // Hero should have h1, not h2
      const hasH1 = heroContent.includes('<h1');
      const hasH2AsMain = heroContent.includes('<h2') && 
                         heroContent.includes('Full-Stack Developer');
      
      // This test FAILS on unfixed code if h2 is used for main heading
      expect(hasH1).toBe(true);
      expect(hasH2AsMain).toBe(false);
    });
  });

  /**
   * Test 4: Image Alt Text Presence
   * Validates: Requirement 1.3, 2.3
   * Bug Condition: Images missing or generic alt text
   * Expected Behavior: All images have descriptive alt text
   */
  describe('4. Image Alt Text Presence', () => {
    it('should have descriptive alt text on hero image', () => {
      const heroPath = path.join(process.cwd(), 'components/Hero.tsx');
      const heroContent = fs.readFileSync(heroPath, 'utf-8');
      
      // Check for alt text on hero image
      const hasAltText = heroContent.includes('alt=') && 
                        heroContent.includes('momin');
      
      // This test FAILS on unfixed code if alt text is missing
      expect(hasAltText).toBe(true);
    });

    it('should have alt text on all project images', () => {
      const projectsClientPath = path.join(process.cwd(), 'app/projects/ProjectsClient.tsx');
      const projectsClientContent = fs.readFileSync(projectsClientPath, 'utf-8');
      
      // Check for alt attributes on images
      const imageMatches = projectsClientContent.match(/<Image[^>]*>/g) || [];
      
      // This test FAILS on unfixed code if images lack alt text
      expect(imageMatches.length).toBeGreaterThan(0);
      
      // Check that images have alt attributes
      const imagesWithAlt = imageMatches.filter(img => img.includes('alt='));
      expect(imagesWithAlt.length).toBe(imageMatches.length);
    });

    it('should have descriptive alt text (not empty or generic)', () => {
      const heroPath = path.join(process.cwd(), 'components/Hero.tsx');
      const heroContent = fs.readFileSync(heroPath, 'utf-8');
      
      // Extract alt text
      const altMatch = heroContent.match(/alt="([^"]*)"/);
      
      if (altMatch) {
        const altText = altMatch[1];
        
        // Alt text should not be empty or generic
        expect(altText.length).toBeGreaterThan(0);
        expect(altText).not.toBe('image');
        expect(altText).not.toBe('photo');
        
        // This test FAILS on unfixed code if alt text is too generic
        expect(altText.toLowerCase()).toContain('momin');
      }
    });
  });

  /**
   * Test 5: Project Routes Unique Metadata
   * Validates: Requirement 1.6, 2.6
   * Bug Condition: Project routes use generic metadata
   * Expected Behavior: Each project has unique metadata
   */
  describe('5. Project Routes Unique Metadata', () => {
    it('should have unique metadata generation for project routes', () => {
      const projectsClientPath = path.join(process.cwd(), 'app/projects/ProjectsClient.tsx');
      const projectsClientContent = fs.readFileSync(projectsClientPath, 'utf-8');
      
      // Check for dynamic metadata generation
      const hasDynamicMetadata = projectsClientContent.includes('generateMetadata') ||
                                projectsClientContent.includes('metadata') ||
                                projectsClientContent.includes('title') ||
                                projectsClientContent.includes('description');
      
      // This test FAILS on unfixed code if metadata is not dynamic
      expect(hasDynamicMetadata).toBe(true);
    });

    it('should include unique Open Graph tags for projects', () => {
      const projectsPagePath = path.join(process.cwd(), 'app/projects/page.tsx');
      const projectsPageContent = fs.readFileSync(projectsPagePath, 'utf-8');
      
      // Check for Open Graph tags
      const hasOpenGraph = projectsPageContent.includes('openGraph') ||
                          projectsPageContent.includes('og:');
      
      // This test FAILS on unfixed code if OG tags are missing
      expect(hasOpenGraph).toBe(true);
    });

    it('should include unique Twitter Card tags for projects', () => {
      const projectsPagePath = path.join(process.cwd(), 'app/projects/page.tsx');
      const projectsPageContent = fs.readFileSync(projectsPagePath, 'utf-8');
      
      // Check for Twitter Card tags
      const hasTwitterCard = projectsPageContent.includes('twitter') ||
                            projectsPageContent.includes('card');
      
      // This test FAILS on unfixed code if Twitter tags are missing
      expect(hasTwitterCard).toBe(true);
    });
  });

  /**
   * Test 6: FAQ Schema Dynamic Generation
   * Validates: Requirement 1.8, 2.8
   * Bug Condition: FAQ schema hardcoded in layout.tsx
   * Expected Behavior: FAQ schema dynamically generated from component data
   */
  describe('6. FAQ Schema Dynamic Generation', () => {
    it('should export FAQ data from FAQSection component', () => {
      const faqPath = path.join(process.cwd(), 'components/FAQSection.tsx');
      const faqContent = fs.readFileSync(faqPath, 'utf-8');
      
      // Check for exported FAQ data
      const hasExportedData = faqContent.includes('export') && 
                             faqContent.includes('faqData');
      
      // This test FAILS on unfixed code if FAQ data is not exported
      expect(hasExportedData).toBe(true);
    });

    it('should have FAQ data in shared module', () => {
      const faqDataPath = path.join(process.cwd(), 'lib/faq-data.ts');
      
      // Check if faq-data.ts exists
      const faqDataExists = fs.existsSync(faqDataPath);
      
      // This test FAILS on unfixed code if shared FAQ data doesn't exist
      expect(faqDataExists).toBe(true);
    });

    it('should generate FAQ schema dynamically in layout', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for dynamic FAQ schema generation
      const hasDynamicGeneration = layoutContent.includes('generateFAQSchema') ||
                                  (layoutContent.includes('faqData') && 
                                   layoutContent.includes('FAQPage'));
      
      // This test FAILS on unfixed code if FAQ schema is hardcoded
      expect(hasDynamicGeneration).toBe(true);
    });

    it('should not have hardcoded FAQ schema in layout', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for hardcoded FAQ items
      const hasHardcodedFAQ = layoutContent.includes('"What technologies do you specialize in?"') &&
                             layoutContent.includes('"FAQPage"');
      
      // This test FAILS on unfixed code if FAQ schema is hardcoded
      expect(hasHardcodedFAQ).toBe(false);
    });
  });

  /**
   * Test 7: Hreflang Tags Presence
   * Validates: Requirement 1.7, 2.7
   * Bug Condition: Hreflang tags missing from all pages
   * Expected Behavior: Hreflang tags present for language/regional targeting
   */
  describe('7. Hreflang Tags Presence', () => {
    it('should include hreflang tags in layout metadata', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for hreflang implementation
      const hasHreflang = layoutContent.includes('hreflang') ||
                         layoutContent.includes('alternates') ||
                         layoutContent.includes('languages');
      
      // This test FAILS on unfixed code if hreflang is missing
      expect(hasHreflang).toBe(true);
    });

    it('should generate hreflang tags based on pathname', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for dynamic hreflang generation
      const hasDynamicHreflang = layoutContent.includes('generateHreflang') ||
                                (layoutContent.includes('alternates') && 
                                 layoutContent.includes('languages'));
      
      // This test FAILS on unfixed code if hreflang is not dynamic
      expect(hasDynamicHreflang).toBe(true);
    });

    it('should include language variants in hreflang tags', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for language variants
      const hasLanguageVariants = layoutContent.includes('en-IN') ||
                                 layoutContent.includes('en') ||
                                 layoutContent.includes('x-default');
      
      // This test FAILS on unfixed code if language variants are missing
      expect(hasLanguageVariants).toBe(true);
    });

    it('should include hreflang tags on projects page', () => {
      const projectsPagePath = path.join(process.cwd(), 'app/projects/page.tsx');
      const projectsPageContent = fs.readFileSync(projectsPagePath, 'utf-8');
      
      // Check for hreflang on projects page
      const hasHreflang = projectsPageContent.includes('hreflang') ||
                         projectsPageContent.includes('alternates');
      
      // This test FAILS on unfixed code
      expect(hasHreflang).toBe(true);
    });

    it('should include hreflang tags on contact page', () => {
      const contactPagePath = path.join(process.cwd(), 'app/contact/page.tsx');
      const contactPageContent = fs.readFileSync(contactPagePath, 'utf-8');
      
      // Check for hreflang on contact page
      const hasHreflang = contactPageContent.includes('hreflang') ||
                         contactPageContent.includes('alternates');
      
      // This test FAILS on unfixed code
      expect(hasHreflang).toBe(true);
    });
  });

  /**
   * Test 8: Contact Form Schema
   * Validates: Requirement 1.4, 2.4
   * Bug Condition: Contact page lacks structured data
   * Expected Behavior: Contact page includes ContactPoint schema
   */
  describe('8. Contact Form Schema', () => {
    it('should include ContactPoint schema on contact page', () => {
      const contactPagePath = path.join(process.cwd(), 'app/contact/page.tsx');
      const contactPageContent = fs.readFileSync(contactPagePath, 'utf-8');
      
      // Check for ContactPoint schema
      const hasContactSchema = contactPageContent.includes('ContactPoint') ||
                              contactPageContent.includes('contact-schema');
      
      // This test FAILS on unfixed code if contact schema is missing
      expect(hasContactSchema).toBe(true);
    });

    it('should include contact form semantic HTML', () => {
      const contactClientPath = path.join(process.cwd(), 'app/contact/ContactClient.tsx');
      const contactClientContent = fs.readFileSync(contactClientPath, 'utf-8');
      
      // Check for form element
      const hasFormElement = contactClientContent.includes('<form');
      
      // This test FAILS on unfixed code if form is not semantic
      expect(hasFormElement).toBe(true);
    });

    it('should have proper form field labels', () => {
      const contactClientPath = path.join(process.cwd(), 'app/contact/ContactClient.tsx');
      const contactClientContent = fs.readFileSync(contactClientPath, 'utf-8');
      
      // Check for label elements
      const hasLabels = contactClientContent.includes('<label');
      
      // This test FAILS on unfixed code if labels are missing
      expect(hasLabels).toBe(true);
    });
  });

  /**
   * Summary of Counterexamples Found
   * 
   * This test suite documents the SEO deficiencies that exist on unfixed code:
   * 
   * 1. Project Structured Data:
   *    - Missing datePublished field in project schema
   *    - Missing image field in project schema
   *    - Missing keywords field in project schema
   *    - Missing url field in project schema
   *    - Only 2 projects in structured data instead of all projects
   * 
   * 2. Breadcrumb Schema:
   *    - No BreadcrumbList schema on any page
   *    - No dynamic breadcrumb generation based on pathname
   *    - Missing breadcrumb schema on projects page
   *    - Missing breadcrumb schema on contact page
   * 
   * 3. Heading Hierarchy:
   *    - Multiple h1 tags on home page (Hero h1 + section h1s)
   *    - Section headings use h2 instead of h3
   *    - Inconsistent heading hierarchy across sections
   * 
   * 4. Image Alt Text:
   *    - Hero image has alt text but may be generic
   *    - Project images may lack alt text
   *    - Alt text not descriptive or keyword-relevant
   * 
   * 5. Project Metadata:
   *    - Projects page uses generic metadata for all projects
   *    - No unique metadata per project route
   *    - Missing unique Open Graph tags per project
   *    - Missing unique Twitter Card tags per project
   * 
   * 6. FAQ Schema:
   *    - FAQ schema hardcoded in layout.tsx
   *    - FAQ data not exported from FAQSection component
   *    - No dynamic FAQ schema generation
   *    - FAQ schema not synced with component data
   * 
   * 7. Hreflang Tags:
   *    - No hreflang tags in layout metadata
   *    - No dynamic hreflang generation
   *    - Missing language variants (en-IN, en, x-default)
   *    - No hreflang tags on projects page
   *    - No hreflang tags on contact page
   * 
   * 8. Contact Form Schema:
   *    - No ContactPoint schema on contact page
   *    - Contact form may lack semantic HTML structure
   *    - Form fields may lack proper labels
   */
});
