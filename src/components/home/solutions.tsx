import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import { ServiceCard } from '@/src/components/shared/ui/card/service-card';
import type { Service } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import Link from 'next/link';

const Solutions = () => {
  const solutions = getMarkDownData<Service>('src/data/services').slice(0, 5);

  return (
    <section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="solutions-heading">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3">
            <TextReveal>
              <h2
                id="solutions-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[703px] text-center font-normal"
              >
                Engineered for speed, built for conversion
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p
                className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[440px] text-center font-normal"
                itemProp="description"
              >
                Specialized Next.js development designed exclusively for enterprise and high-growth e-commerce storefronts.
              </p>
            </TextReveal>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:gap-2 lg:*:col-start-auto md:[&>*:last-child]:col-span-12 lg:[&>*:nth-child(5n+1)]:col-span-4 lg:[&>*:nth-child(5n+2)]:col-span-4 lg:[&>*:nth-child(5n+3)]:col-span-4 lg:[&>*:nth-child(5n+4)]:col-span-6 lg:[&>*:nth-child(5n+5)]:col-span-6"
            aria-label="Next.js e-commerce capabilities"
          >
            {solutions.map((service, index) => (
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

          <RevealAnimation delay={0.8}>
            <div className="text-center" aria-label="Call to action">
              <LinkPrimary href="/services" aria-label="Discover our Next.js services">
                Discover our services
              </LinkPrimary>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
