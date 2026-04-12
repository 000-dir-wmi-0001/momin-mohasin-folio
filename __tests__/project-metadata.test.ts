/**
 * Project Metadata Generation Tests
 * 
 * Tests for unique metadata generation for project pages
 * Validates: Requirement 2.6 - Each project route has unique metadata
 */

import { generateProjectMetadata } from '@/lib/seo-utils';

describe('Project Metadata Generation', () => {
  
  describe('generateProjectMetadata', () => {
    
    it('should generate unique title for each project', () => {
      const project1 = {
        name: 'Vendor Verification Platform',
        description: 'A secure vendor verification system',
        technologies: ['Next.js', 'NestJS'],
      };
      
      const project2 = {
        name: 'Ad Monetization Platform',
        description: 'An ad delivery platform',
        technologies: ['React', 'Node.js'],
      };
      
      const metadata1 = generateProjectMetadata(project1);
      const metadata2 = generateProjectMetadata(project2);
      
      // Titles should be unique
      expect(metadata1.title).toContain('Vendor Verification Platform');
      expect(metadata2.title).toContain('Ad Monetization Platform');
      expect(metadata1.title).not.toBe(metadata2.title);
    });
    
    it('should generate unique description for each project', () => {
      const project1 = {
        name: 'Project A',
        description: 'A secure vendor verification system',
        technologies: ['Next.js'],
      };
      
      const project2 = {
        name: 'Project B',
        description: 'An ad delivery platform',
        technologies: ['React'],
      };
      
      const metadata1 = generateProjectMetadata(project1);
      const metadata2 = generateProjectMetadata(project2);
      
      // Descriptions should be unique
      expect(metadata1.description).toContain('vendor verification');
      expect(metadata2.description).toContain('ad delivery');
      expect(metadata1.description).not.toBe(metadata2.description);
    });
    
    it('should include project name in title', () => {
      const project = {
        name: 'LinkCode LMS',
        description: 'Learning Management System',
        technologies: ['Angular', 'Node.js'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.title).toContain('LinkCode LMS');
      expect(metadata.title).toContain('Momin Mohasin');
    });
    
    it('should limit description to 160 characters', () => {
      const project = {
        name: 'Test Project',
        description: 'This is a very long description that should be truncated to 160 characters because search engines typically display only this much text in search results and we want to optimize for that.',
        technologies: ['React'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.description.length).toBeLessThanOrEqual(160);
    });
    
    it('should generate unique Open Graph tags', () => {
      const project1 = {
        name: 'Project A',
        description: 'Description A',
        technologies: ['Tech1'],
      };
      
      const project2 = {
        name: 'Project B',
        description: 'Description B',
        technologies: ['Tech2'],
      };
      
      const metadata1 = generateProjectMetadata(project1);
      const metadata2 = generateProjectMetadata(project2);
      
      // OG tags should be unique
      expect(metadata1.openGraph?.title).not.toBe(metadata2.openGraph?.title);
      expect(metadata1.openGraph?.description).not.toBe(metadata2.openGraph?.description);
    });
    
    it('should generate unique Twitter Card tags', () => {
      const project1 = {
        name: 'Project A',
        description: 'Description A',
        technologies: ['Tech1'],
      };
      
      const project2 = {
        name: 'Project B',
        description: 'Description B',
        technologies: ['Tech2'],
      };
      
      const metadata1 = generateProjectMetadata(project1);
      const metadata2 = generateProjectMetadata(project2);
      
      // Twitter tags should be unique
      expect(metadata1.twitter?.title).not.toBe(metadata2.twitter?.title);
      expect(metadata1.twitter?.description).not.toBe(metadata2.twitter?.description);
    });
    
    it('should include project technologies in keywords', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React', 'Next.js', 'TypeScript'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.keywords).toContain('React');
      expect(metadata.keywords).toContain('Next.js');
      expect(metadata.keywords).toContain('TypeScript');
    });
    
    it('should include project name in keywords', () => {
      const project = {
        name: 'Vendor Platform',
        description: 'Test description',
        technologies: ['React'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.keywords).toContain('Vendor Platform');
    });
    
    it('should include canonical URL for project', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React'],
        url: '/projects#test-project',
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.alternates?.canonical).toBeDefined();
    });
    
    it('should include Open Graph image', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React'],
        image: '/project-image.png',
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.openGraph?.images).toBeDefined();
      expect(metadata.openGraph?.images?.[0]?.url).toContain('project-image');
    });
    
    it('should use default image if not provided', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.openGraph?.images).toBeDefined();
      expect(metadata.openGraph?.images?.[0]?.url).toContain('og-momin');
    });
    
    it('should include Twitter creator handle', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.twitter?.creator).toBe('@mominmohasin');
    });
    
    it('should set correct Open Graph type', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.openGraph?.type).toBe('article');
    });
    
    it('should set correct Twitter card type', () => {
      const project = {
        name: 'Test Project',
        description: 'Test description',
        technologies: ['React'],
      };
      
      const metadata = generateProjectMetadata(project);
      
      expect(metadata.twitter?.card).toBe('summary_large_image');
    });
    
    it('should generate metadata for company projects', () => {
      const companyProject = {
        name: 'Vendor Verification & Fraud Detection Platform',
        description: 'A secure vendor verification and fraud detection platform',
        technologies: ['Next.js', 'NestJS', 'PostgreSQL'],
      };
      
      const metadata = generateProjectMetadata(companyProject);
      
      expect(metadata.title).toContain('Vendor Verification');
      expect(metadata.description).toContain('vendor verification');
      expect(metadata.keywords).toContain('Next.js');
    });
    
    it('should generate metadata for personal projects', () => {
      const personalProject = {
        name: 'm Chat',
        description: 'A privacy-focused, temporary chat platform',
        technologies: ['Next.js', 'React', 'WebSockets'],
      };
      
      const metadata = generateProjectMetadata(personalProject);
      
      expect(metadata.title).toContain('m Chat');
      expect(metadata.description).toContain('privacy-focused');
      expect(metadata.keywords).toContain('WebSockets');
    });
    
    it('should improve search result click-through rates with unique metadata', () => {
      const projects = [
        {
          name: 'Project 1',
          description: 'First project description',
          technologies: ['Tech1'],
        },
        {
          name: 'Project 2',
          description: 'Second project description',
          technologies: ['Tech2'],
        },
        {
          name: 'Project 3',
          description: 'Third project description',
          technologies: ['Tech3'],
        },
      ];
      
      const metadataList = projects.map(p => generateProjectMetadata(p));
      
      // All titles should be unique
      const titles = metadataList.map(m => m.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
      
      // All descriptions should be unique
      const descriptions = metadataList.map(m => m.description);
      const uniqueDescriptions = new Set(descriptions);
      expect(uniqueDescriptions.size).toBe(descriptions.length);
      
      // All OG titles should be unique
      const ogTitles = metadataList.map(m => m.openGraph?.title);
      const uniqueOgTitles = new Set(ogTitles);
      expect(uniqueOgTitles.size).toBe(ogTitles.length);
    });
  });
});
