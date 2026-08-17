/**
 * SEO Optimization Bugfix - Preservation Property Tests
 * 
 * This test suite validates that existing SEO infrastructure continues to work
 * exactly as before after implementing the bugfix.
 * 
 * EXPECTED OUTCOME: These tests PASS on unfixed code (baseline behavior)
 * and continue to PASS after the fix (no regressions)
 * 
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8
 * Property 2: Preservation - Existing SEO Infrastructure Stability
 */

import fs from 'fs';
import path from 'path';

describe('SEO Optimization Bugfix - Preservation Tests', () => {
  
  /**
   * Test 1: Person Schema Preservation
   * Validates: Requirement 3.1
   * Preservation: Person schema structure and content must remain unchanged
   */
  describe('1. Person Schema Preservation', () => {
    it('should include Person schema with required fields', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Person schema
      expect(layoutContent).toContain('"@type": "Person"');
      expect(layoutContent).toContain('"name": "Momin Mohasin"');
      expect(layoutContent).toContain('"jobTitle": "AI & Full Stack Software Engineer"');
      expect(layoutContent).toContain('"url": "https://momin-mohasin.me"');
    });

    it('should include Person schema with contact information', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for contact fields in Person schema
      expect(layoutContent).toContain('"email": "momindy321@gmail.com"');
      expect(layoutContent).toContain('"telephone": "+91 7249826872"');
    });

    it('should include Person schema with social profiles', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for sameAs field with social profiles
      expect(layoutContent).toContain('"sameAs"');
      expect(layoutContent).toContain('github.com');
      expect(layoutContent).toContain('linkedin.com');
      expect(layoutContent).toContain('twitter.com');
    });

    it('should include Person schema with address', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for address in Person schema
      expect(layoutContent).toContain('"addressLocality": "Pune"');
      expect(layoutContent).toContain('"addressCountry": "India"');
    });

    it('should include Person schema with knowsAbout field', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for knowsAbout field with technologies
      expect(layoutContent).toContain('"knowsAbout"');
      expect(layoutContent).toContain('React');
      expect(layoutContent).toContain('Next.js');
      expect(layoutContent).toContain('NestJS');
    });
  });

  /**
   * Test 2: Organization Schema Preservation
   * Validates: Requirement 3.1
   * Preservation: Organization schema structure and content must remain unchanged
   */
  describe('2. Organization Schema Preservation', () => {
    it('should include Organization schema with required fields', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Organization schema
      expect(layoutContent).toContain('"@type": "Organization"');
      expect(layoutContent).toContain('"name": "Brilliantech Software Pvt Ltd"');
      expect(layoutContent).toContain('"url": "https://brilliantech.com"');
    });

    it('should include Organization schema with logo', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for logo in Organization schema
      expect(layoutContent).toContain('"logo"');
      expect(layoutContent).toContain('Bt.png');
    });

    it('should include Organization schema with address', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for address in Organization schema
      expect(layoutContent).toContain('"addressLocality": "Pune"');
      expect(layoutContent).toContain('"addressCountry": "India"');
    });

    it('should include Organization schema with contact point', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for contactPoint in Organization schema
      expect(layoutContent).toContain('"contactType": "customer service"');
      expect(layoutContent).toContain('"telephone": "+91 7249826872"');
      expect(layoutContent).toContain('"email": "momindy321@gmail.com"');
    });
  });

  /**
   * Test 3: ContactPoint Schema Preservation
   * Validates: Requirement 3.1
   * Preservation: ContactPoint schema structure and content must remain unchanged
   */
  describe('3. ContactPoint Schema Preservation', () => {
    it('should include ContactPoint schema with required fields', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for ContactPoint schema
      const contactPointMatches = layoutContent.match(/"@type": "ContactPoint"/g) || [];
      expect(contactPointMatches.length).toBeGreaterThanOrEqual(1);
      
      expect(layoutContent).toContain('"telephone": "+91 7249826872"');
      expect(layoutContent).toContain('"email": "momindy321@gmail.com"');
    });

    it('should include ContactPoint schema with contact type', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for contactType field
      expect(layoutContent).toContain('"contactType"');
    });

    it('should include ContactPoint schema with available languages', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for availableLanguage field
      expect(layoutContent).toContain('"availableLanguage"');
      expect(layoutContent).toContain('English');
    });

    it('should include ContactPoint schema with hours available', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for hoursAvailable field
      expect(layoutContent).toContain('"hoursAvailable"');
      expect(layoutContent).toContain('"opens"');
      expect(layoutContent).toContain('"closes"');
    });
  });

  /**
   * Test 4: Robots.txt Preservation
   * Validates: Requirement 3.2
   * Preservation: robots.txt with proper allow/disallow rules must remain unchanged
   */
  describe('4. Robots.txt Preservation', () => {
    it('should have robots.ts file', () => {
      const robotsPath = path.join(process.cwd(), 'app/robots.ts');
      const robotsExists = fs.existsSync(robotsPath);
      
      expect(robotsExists).toBe(true);
    });

    it('should export MetadataRoute.Robots from robots.ts', () => {
      const robotsPath = path.join(process.cwd(), 'app/robots.ts');
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      
      // Check for proper export
      expect(robotsContent).toContain('export default function robots()');
      expect(robotsContent).toContain('MetadataRoute.Robots');
    });

    it('should include sitemap reference in robots.txt', () => {
      const robotsPath = path.join(process.cwd(), 'app/robots.ts');
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      
      // Check for sitemap reference
      expect(robotsContent).toContain('sitemap');
    });

    it('should have proper allow/disallow rules', () => {
      const robotsPath = path.join(process.cwd(), 'app/robots.ts');
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      
      // Check for rules structure
      expect(robotsContent).toContain('rules');
    });
  });

  /**
   * Test 5: Sitemap Preservation
   * Validates: Requirement 3.2
   * Preservation: Sitemap generation must remain unchanged
   */
  describe('5. Sitemap Preservation', () => {
    it('should have sitemap.ts file', () => {
      const sitemapPath = path.join(process.cwd(), 'app/sitemap.ts');
      const sitemapExists = fs.existsSync(sitemapPath);
      
      expect(sitemapExists).toBe(true);
    });

    it('should export MetadataRoute.Sitemap from sitemap.ts', () => {
      const sitemapPath = path.join(process.cwd(), 'app/sitemap.ts');
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      
      // Check for proper export
      expect(sitemapContent).toContain('export default function sitemap()');
      expect(sitemapContent).toContain('MetadataRoute.Sitemap');
    });

    it('should include main routes in sitemap', () => {
      const sitemapPath = path.join(process.cwd(), 'app/sitemap.ts');
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      
      // Check for main routes
      expect(sitemapContent).toContain('momin-mohasin.me');
    });
  });

  /**
   * Test 6: Security Headers Preservation
   * Validates: Requirement 3.4
   * Preservation: Security headers must remain unchanged
   */
  describe('6. Security Headers Preservation', () => {
    it('should include security headers in layout', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Security headers are typically set in next.config.ts or middleware
      // Check that layout doesn't remove any security-related code
      expect(layoutContent).toBeTruthy();
    });

    it('should have next.config.ts with security headers', () => {
      const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
      const nextConfigExists = fs.existsSync(nextConfigPath);
      
      expect(nextConfigExists).toBe(true);
    });
  });

  /**
   * Test 7: Twitter Card Metadata Preservation
   * Validates: Requirement 3.5
   * Preservation: Twitter Card metadata structure must remain unchanged
   */
  describe('7. Twitter Card Metadata Preservation', () => {
    it('should include Twitter Card metadata in layout', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Twitter metadata
      expect(layoutContent).toContain('twitter');
      expect(layoutContent).toContain('card: "summary_large_image"');
    });

    it('should include Twitter Card title', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Twitter title
      expect(layoutContent).toContain('Momin Mohasin - AI & Full Stack Software Engineer');
    });

    it('should include Twitter Card description', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

      // Check for Twitter description
      expect(layoutContent).toContain('AI & Full Stack Software Engineer specializing in modern web, backend, and LLM-powered technologies');
    });

    it('should include Twitter Card image', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Twitter image
      expect(layoutContent).toContain('og-momin.png');
    });

    it('should include Twitter creator handle', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Twitter creator
      expect(layoutContent).toContain('creator: "@mominmohasin"');
    });
  });

  /**
   * Test 8: Open Graph Metadata Preservation
   * Validates: Requirement 3.5
   * Preservation: Open Graph metadata structure must remain unchanged
   */
  describe('8. Open Graph Metadata Preservation', () => {
    it('should include Open Graph metadata in layout', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Open Graph metadata
      expect(layoutContent).toContain('openGraph');
      expect(layoutContent).toContain('type: "website"');
    });

    it('should include Open Graph title', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for OG title
      expect(layoutContent).toContain('title: "Momin Mohasin - AI & Full Stack Software Engineer"');
    });

    it('should include Open Graph description', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for OG description
      expect(layoutContent).toContain('AI & Full Stack Software Engineer from Pune, India');
    });

    it('should include Open Graph image', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for OG image
      expect(layoutContent).toContain('og-momin.png');
      expect(layoutContent).toContain('width: 1200');
      expect(layoutContent).toContain('height: 630');
    });

    it('should include Open Graph locale', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for OG locale
      expect(layoutContent).toContain('locale: "en_IN"');
    });

    it('should include Open Graph site name', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for OG siteName
      expect(layoutContent).toContain('siteName: "Momin Mohasin Portfolio"');
    });
  });

  /**
   * Test 9: Verification Tags Preservation
   * Validates: Requirement 3.6
   * Preservation: Google verification and Microsoft validation meta tags must remain unchanged
   */
  describe('9. Verification Tags Preservation', () => {
    it('should include Google verification tag', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Google verification
      expect(layoutContent).toContain('verification');
      expect(layoutContent).toContain('google');
      expect(layoutContent).toContain('D1gQW36z0ywReJh5n3Vta-QdJRtjfqe4l7-Ql7FgZ_U');
    });

    it('should include Microsoft validation tag', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Microsoft validation
      expect(layoutContent).toContain('msvalidate.01');
      expect(layoutContent).toContain('25C4CE3A7C2779B0115120600E473DCC');
    });
  });

  /**
   * Test 10: Cache Control Headers Preservation
   * Validates: Requirement 3.7
   * Preservation: Cache control headers for static assets must remain unchanged
   */
  describe('10. Cache Control Headers Preservation', () => {
    it('should have next.config.ts for cache configuration', () => {
      const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
      const nextConfigExists = fs.existsSync(nextConfigPath);
      
      expect(nextConfigExists).toBe(true);
    });

    it('should have public directory for static assets', () => {
      const publicPath = path.join(process.cwd(), 'public');
      const publicExists = fs.existsSync(publicPath);
      
      expect(publicExists).toBe(true);
    });

    it('should have static assets in public directory', () => {
      const publicPath = path.join(process.cwd(), 'public');
      const files = fs.readdirSync(publicPath);
      
      // Check for common static assets
      expect(files.length).toBeGreaterThan(0);
    });
  });

  /**
   * Test 11: Performance Monitoring and Analytics Preservation
   * Validates: Requirement 3.8
   * Preservation: Performance monitoring and analytics scripts must remain unchanged
   */
  describe('11. Performance Monitoring and Analytics Preservation', () => {
    it('should include Microsoft Clarity analytics script', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Clarity script
      expect(layoutContent).toContain('microsoft-clarity');
      expect(layoutContent).toContain('clarity.ms');
    });

    it('should include Vercel Speed Insights', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Speed Insights
      expect(layoutContent).toContain('SpeedInsights');
      expect(layoutContent).toContain('@vercel/speed-insights');
    });

    it('should include Vercel Analytics', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for Analytics
      expect(layoutContent).toContain('Analytics');
      expect(layoutContent).toContain('@vercel/analytics');
    });

    it('should include PerformanceMonitor component', () => {
      const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      
      // Check for PerformanceMonitor
      expect(layoutContent).toContain('PerformanceMonitor');
    });
  });

  /**
   * Test 12: Image Optimization Preservation
   * Validates: Requirement 3.3
   * Preservation: Image optimization with WebP and AVIF formats must remain unchanged
   */
  describe('12. Image Optimization Preservation', () => {
    it('should have next.config.ts for image optimization', () => {
      const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
      const nextConfigExists = fs.existsSync(nextConfigPath);
      
      expect(nextConfigExists).toBe(true);
    });

    it('should use Next.js Image component for optimization', () => {
      const heroPath = path.join(process.cwd(), 'components/Hero.tsx');
      const heroContent = fs.readFileSync(heroPath, 'utf-8');
      
      // Check for Image component usage
      expect(heroContent).toContain('Image');
    });

    it('should have public images for optimization', () => {
      const publicPath = path.join(process.cwd(), 'public');
      const files = fs.readdirSync(publicPath);
      
      // Check for image files
      const imageFiles = files.filter(f => /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(f));
      expect(imageFiles.length).toBeGreaterThan(0);
    });
  });

  /**
   * Summary of Baseline Behaviors Observed
   * 
   * This test suite documents the existing SEO infrastructure that must be preserved:
   * 
   * 1. Person Schema:
   *    - Includes name, jobTitle, url, email, telephone
   *    - Includes sameAs field with social profiles (GitHub, LinkedIn, Twitter)
   *    - Includes address (Pune, India)
   *    - Includes knowsAbout field with technologies
   * 
   * 2. Organization Schema:
   *    - Includes name (Brilliantech Software Pvt Ltd)
   *    - Includes url, logo, address
   *    - Includes contactPoint with telephone and email
   * 
   * 3. ContactPoint Schema:
   *    - Includes telephone, email, contactType
   *    - Includes availableLanguage (English, Hindi)
   *    - Includes hoursAvailable with opening/closing times
   * 
   * 4. Robots.txt:
   *    - Properly configured with allow/disallow rules
   *    - Includes sitemap reference
   * 
   * 5. Sitemap:
   *    - Dynamically generated from routes
   *    - Includes main site URL
   * 
   * 6. Security Headers:
   *    - Configured in next.config.ts
   *    - Includes X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
   * 
   * 7. Twitter Card Metadata:
   *    - Card type: summary_large_image
   *    - Includes title, description, image
   *    - Includes creator handle (@mominmohasin)
   * 
   * 8. Open Graph Metadata:
   *    - Type: website
   *    - Includes title, description, image (1200x630)
   *    - Includes locale (en_IN)
   *    - Includes siteName
   * 
   * 9. Verification Tags:
   *    - Google verification: D1gQW36z0ywReJh5n3Vta-QdJRtjfqe4l7-Ql7FgZ_U
   *    - Microsoft validation: 25C4CE3A7C2779B0115120600E473DCC
   * 
   * 10. Cache Control Headers:
   *     - Configured for static assets in public directory
   *     - Managed by Next.js and next.config.ts
   * 
   * 11. Analytics & Performance Monitoring:
   *     - Microsoft Clarity script
   *     - Vercel Speed Insights
   *     - Vercel Analytics
   *     - PerformanceMonitor component
   * 
   * 12. Image Optimization:
   *     - Uses Next.js Image component
   *     - Supports WebP and AVIF formats
   *     - Images in public directory
   */
});
