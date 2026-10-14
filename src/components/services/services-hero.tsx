import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { ServiceCard } from '@/src/components/shared/ui/card/service-card';
import type { Service } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import Link from 'next/link';

const ServicesHero = () => {
  const services = getMarkDownData<Service>('src/data/services');

  return (
    <section
      className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28"
      aria-labelledby="services-page-heading"
    >
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3">
            <TextReveal>
              <h2
                id="services-page-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[703px] text-center font-normal tracking-[-2.4px]"
              >
                Next.js e-commerce engineering capabilities
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[500px] text-center font-normal">
                Sub-second headless storefronts, resilient e-commerce API integrations, and edge-first performance optimization built for ambitious retail brands.
              </p>
            </TextReveal>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:gap-2 lg:*:col-start-auto md:[&>*:last-child]:col-span-12 lg:[&>*:nth-child(5n+1)]:col-span-4 lg:[&>*:nth-child(5n+2)]:col-span-4 lg:[&>*:nth-child(5n+3)]:col-span-4 lg:[&>*:nth-child(5n+4)]:col-span-6 lg:[&>*:nth-child(5n+5)]:col-span-6"
            aria-label="Next.js development services"
          >
            {services.map((service, index) => (
              <RevealAnimation key={service.slug} delay={0.1 * (index + 1)}>
                <Link href={`/services/${service.slug}`} className="block">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
