export interface PricingPlan {
  id: string;
  title: string;
  /** Use `\n` for line breaks in the description. */
  description: string;
  priceAmount: string;
  pricePeriod?: string;
  features: string[];
  featuresAriaLabel: string;
  ctaLabel: string;
  ctaHref: string;
  /** When true, the plan uses the featured CTA (`LinkPrimaryV2`), matching the middle card in the template. */
  featured?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'audit-sprint',
    title: 'Audit & Speed Sprint',
    description: 'Core Web Vitals remediation & speed architecture sprint.',
    priceAmount: '4,500',
    pricePeriod: '/sprint',
    features: [
      'Full Lighthouse & Core Web Vitals audit',
      'Bundle analysis & JS hydration pruning',
      'Next.js App Router edge caching setup',
      'Sub-second TTFB optimization report',
    ],
    featuresAriaLabel: 'Audit and speed sprint features',
    ctaLabel: 'Book an audit',
    ctaHref: '/contact',
  },
  {
    id: 'headless-build',
    title: 'Headless Storefront',
    description: 'Custom Next.js App Router build for scaling brands.',
    priceAmount: '18,500',
    pricePeriod: '/project',
    features: [
      'Custom Next.js App Router & Tailwind storefront',
      'Shopify / BigCommerce Storefront API integration',
      'Headless CMS setup (Sanity / Contentful)',
      'Sub-second catalog browsing & instant checkout',
    ],
    featuresAriaLabel: 'Headless storefront features',
    ctaLabel: 'Start your build',
    ctaHref: '/contact',
    featured: true,
  },
  {
    id: 'enterprise-composable',
    title: 'Enterprise Composable',
    description: 'Custom multi-region architecture & high-throughput APIs.',
    priceAmount: '38,000',
    pricePeriod: '/project',
    features: [
      'Multi-currency & multi-region edge deployment',
      'Custom ERP, CRM & inventory middleware',
      'Algolia search & real-time webhook sync',
      '99.99% uptime SLA & dedicated lead architect',
    ],
    featuresAriaLabel: 'Enterprise composable commerce features',
    ctaLabel: 'Talk to an architect',
    ctaHref: '/contact',
  },
];
