import { MobileMenuData } from '../interface/interface';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'services', label: 'Next.js Services', href: '/services' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
      { id: 'testimonials', label: 'Testimonials', href: '/testimonial' },
      { id: 'blog', label: 'Engineering Blog', href: '/blog' },
    ],
  },
  {
    id: 'services-menu',
    title: 'Capabilities',
    submenu: [
      { id: 'headless-storefronts', label: 'Headless Storefronts', href: '/services' },
      { id: 'api-integrations', label: 'API Integrations', href: '/integration' },
      { id: 'performance-optimization', label: 'Performance Optimization', href: '/pricing' },
      { id: 'integrations-catalog', label: 'Supported Integrations', href: '/integration' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog-insights', label: 'Architecture Articles', href: '/blog' },
      { id: 'proven-track-record', label: 'Client Results', href: '/case-study' },
      { id: 'faq-overview', label: 'Integration FAQ', href: '/integration' },
      { id: 'contact-support', label: 'Technical Inquiries', href: '/contact' },
    ],
  },
  {
    id: 'get-started',
    title: 'Get Started',
    submenu: [
      { id: 'pricing-packages', label: 'Development Packages', href: '/pricing' },
      { id: 'team-overview', label: 'Engineering Team', href: '/team' },
      { id: 'client-portal-login', label: 'Client Login', href: '/login' },
      { id: 'start-project', label: 'Start Project', href: '/signup' },
      { id: 'contact-agency', label: 'Contact Us', href: '/contact' },
    ],
  },
];
