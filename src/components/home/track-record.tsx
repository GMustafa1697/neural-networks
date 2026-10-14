import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import {
  CaseStudyCard,
  type CaseStudyMetric,
} from '@/src/components/shared/ui/card/case-study-card';

interface TrackRecordItem {
  id: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  teaser: string;
  personName: string;
  personRole: string;
  metricLeft: CaseStudyMetric;
  metricRight: CaseStudyMetric;
  darkPanelAriaLabel: string;
}

const CASE_STUDIES: TrackRecordItem[] = [
  {
    id: 'ecommerce',
    slug: 'e-commerce-optimization',
    imageSrc: '/images/opai-img-302.png',
    imageAlt: 'Shopify Plus Headless Migration visual',
    title: 'Shopify Plus Headless Migration',
    teaser: 'Replaced a bloated monolithic theme with Next.js App Router and sub-second transitions.',
    personName: 'Sarah Chen',
    personRole: 'VP of Digital Product',
    darkPanelAriaLabel: 'Shopify Plus Headless Migration case study',
    metricLeft: {
      value: 48,
      label: 'Conversion rate lift',
      ariaLabel: '48 percent increase in conversion rates',
    },
    metricRight: {
      value: 62,
      label: 'Cart abandonment drop',
      ariaLabel: '62 percent reduction in cart abandonment',
    },
  },
  {
    id: 'multi-brand',
    slug: 'healthcare-predictive-model',
    imageSrc: '/images/opai-img-303.png',
    imageAlt: 'Composable Catalog and Edge Caching visual',
    title: 'Composable Catalog & Edge Caching',
    teaser: 'Unified 120k product SKUs across global edge nodes with instantaneous faceted search.',
    personName: 'Marcus Sterling',
    personRole: 'Chief Technology Officer',
    darkPanelAriaLabel: 'Composable Catalog case study',
    metricLeft: {
      value: 91,
      label: 'Core Web Vitals score',
      ariaLabel: '91 point Core Web Vitals score',
    },
    metricRight: {
      value: 34,
      label: 'Faster catalog indexing',
      ariaLabel: '34 percent faster catalog indexing',
    },
  },
  {
    id: 'checkout-api',
    slug: 'financial-analytics',
    imageSrc: '/images/opai-img-304.png',
    imageAlt: 'High-Concurrency Checkout APIs visual',
    title: 'High-Concurrency Checkout APIs',
    teaser: 'Architected fault-tolerant ERP and payment middleware handling 40k checkouts per hour.',
    personName: 'David Reynolds',
    personRole: 'Head of E-Commerce Engineering',
    darkPanelAriaLabel: 'High-concurrency checkout APIs case study',
    metricLeft: {
      value: 73,
      label: 'API latency drop',
      ariaLabel: '73 percent improvement in API latency',
    },
    metricRight: {
      value: 28,
      label: 'Cart completion surge',
      ariaLabel: '28 percent increase in cart completion',
    },
  },
];

const TrackRecord = () => {
  return (
    <section
      className="py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="track-record-heading"
    >
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="track-record-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal"
              >
                Proven e-commerce speed & revenue impact
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal">
                See how our Next.js storefronts accelerate conversions, drop bounce rates, and eliminate load time bottlenecks.
              </p>
            </TextReveal>
          </div>

          <div className="space-y-14">
            <div className="space-y-4 lg:space-y-2">
              {CASE_STUDIES.map((item) => (
                <CaseStudyCard
                  key={item.id}
                  href={`/case-study/${item.slug}`}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  teaser={item.teaser}
                  personName={item.personName}
                  personRole={item.personRole}
                  metricLeft={item.metricLeft}
                  metricRight={item.metricRight}
                  darkPanelAriaLabel={item.darkPanelAriaLabel}
                />
              ))}
            </div>

            <RevealAnimation delay={0.6}>
              <div className="text-center">
                <LinkPrimary href="/case-study" aria-label="View all case studies">
                  View all case studies
                </LinkPrimary>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
