'use client';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PricingCard } from '@/src/components/shared/ui/card/pricing-card';
import { pricingPlans } from '@/src/data/pricing';

const Pricing = () => {
  return (
    <section
      className="bg-[url('/images/opai-35.jpg')] bg-cover bg-center bg-no-repeat py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="pricing-heading"
    >
      <div className="main-container">
        <div className="space-y-8 lg:space-y-2">
          <RevealAnimation delay={0.1}>
            <div className="rounded-3xl bg-white/10 px-2 py-8 md:px-0 md:py-14">
              <TextReveal delay={0.2}>
                <h2
                  id="pricing-heading"
                  className="text-sora-heading-3 lg:text-sora-heading-2 font-sora mx-auto max-w-[500px] text-center font-normal text-white/90"
                >
                  Transparent Next.js development packages
                </h2>
              </TextReveal>
            </div>
          </RevealAnimation>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-4 lg:flex-nowrap lg:gap-y-0">
            {pricingPlans.map((plan, index) => (
              <RevealAnimation key={plan.id} delay={0.2 + index * 0.1}>
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  priceAmount={plan.priceAmount}
                  pricePeriod={plan.pricePeriod}
                  features={plan.features}
                  featuresAriaLabel={plan.featuresAriaLabel}
                  ctaLabel={plan.ctaLabel}
                  ctaHref={plan.ctaHref}
                  featured={plan.featured}
                />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
