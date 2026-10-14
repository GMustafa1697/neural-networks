import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import { IntegrationCard } from '@/src/components/shared/ui/card/integration-card';

const ecosystemIntegrations = [
  {
    id: 'stripe',
    iconSrc: '/images/icons/stripe-metal-without-text.svg',
    iconAlt: 'Stripe',
    title: 'Stripe Payments',
    description: 'Custom Next.js payment elements, sub-second checkout, and global gateways.',
  },
  {
    id: 'shopify',
    iconSrc: '/images/icons/secure-space-metal-without-text.svg',
    iconAlt: 'Shopify',
    title: 'Shopify Storefront API',
    description: 'High-throughput GraphQL queries, cart synchronization, and customer accounts.',
  },
  {
    id: 'cms',
    iconSrc: '/images/icons/confluence.svg',
    iconAlt: 'Headless CMS',
    title: 'Sanity & Contentful',
    description: 'Visual live previews, structured schemas, and instant ISR webhook cache purges.',
  },
  {
    id: 'search',
    iconSrc: '/images/icons/scapic-metal-without-text.svg',
    iconAlt: 'Algolia',
    title: 'Algolia & InstantSearch',
    description: 'Sub-10ms faceted catalog discovery, live filters, and merchandising rules.',
  },
  {
    id: 'marketing',
    iconSrc: '/images/icons/hotjar-metal-without-text.svg',
    iconAlt: 'Klaviyo',
    title: 'Klaviyo & CRM',
    description: 'Real-time customer event streaming, browse abandonment, and product feeds.',
  },
  {
    id: 'operations',
    iconSrc: '/images/icons/slack.svg',
    iconAlt: 'Webhooks',
    title: 'Operations Webhooks',
    description: 'Automated order event routing, inventory sync, and error observability.',
  },
];

const Ecosystem = () => {
  return (
    <section
      className="py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="ecosystem-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="ecosystem-heading"
                className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora font-normal"
              >
                Engineered to connect with your commerce stack
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p
                className="font-inter-tight text-tagline-2 text-background-13/50 mx-auto max-w-[550px] font-normal"
                itemProp="description"
              >
                Seamless integration between your Next.js storefront, e-commerce engines, headless CMSs, and mission-critical APIs.
              </p>
            </TextReveal>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 md:gap-2"
            aria-label="Platform integrations"
          >
            {ecosystemIntegrations.map((item, index) => (
              <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <IntegrationCard
                    iconSrc={item.iconSrc}
                    iconAlt={item.iconAlt}
                    title={item.title}
                    description={item.description}
                  />
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.9} className="mt-19 block text-center">
          <LinkPrimary
            href="/integration"
            aria-label="See all integrations"
            className="mx-auto w-fit"
          >
            See all integrations
          </LinkPrimary>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Ecosystem;
