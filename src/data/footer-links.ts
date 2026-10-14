export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLinkItem[];
}

export const footerNavColumns: FooterLinkColumn[] = [
  {
    title: 'Agency',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Next.js Services', href: '/services' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Testimonials', href: '/testimonial' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { label: 'Headless Storefronts', href: '/services' },
      { label: 'API Integrations', href: '/integration' },
      { label: 'Core Web Vitals Sprints', href: '/pricing' },
      { label: 'Supported Integrations', href: '/integration' },
      { label: 'Development Packages', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Engineering Blog', href: '/blog' },
      { label: 'Integration FAQ', href: '/integration' },
      { label: 'Client Portal', href: '/login' },
      { label: 'Start a Project', href: '/signup' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export const footerLegalLinks: FooterLinkItem[] = [
  { label: 'Next.js E-Commerce SLA', href: '/pricing' },
  { label: 'Code & Craft Standards', href: '/about' },
  { label: 'Contact Legal', href: '/contact' },
];
