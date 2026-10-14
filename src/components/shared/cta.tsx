import ctaIllustration from '@/public/images/opai-img-22.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import Image from 'next/image';

const Cta = () => {
  return (
    <section className="py-[80px] lg:py-[112px]" aria-labelledby="cta-heading">
      <div className="main-container overflow-hidden">
        <RevealAnimation delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-x-[22px] rounded-3xl bg-white px-8 pt-20 md:px-0 md:pl-[80px] lg:h-[496px] lg:flex-row lg:pt-0 xl:pl-[112px]">
            <div className="space-y-12 text-center lg:text-left">
              <div className="space-y-3">
                <TextReveal>
                  <h2
                    id="cta-heading"
                    className="font-sora text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 w-full max-w-[567px] font-normal"
                  >
                    Scale faster with a sub-second Next.js storefront
                  </h2>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p className="font-inter-tight text-tagline-2 text-background-13/50 mx-auto max-w-[400px] font-normal lg:mx-0">
                    Partner with eComSmiths to build headless storefronts, robust APIs, and extreme performance. Code, craft, scale.
                  </p>
                </TextReveal>
              </div>

              <RevealAnimation delay={0.3}>
                <LinkPrimary href="/contact" aria-label="Start your Next.js project">
                  Start your project
                </LinkPrimary>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="relative mt-10 -mr-8 ml-auto h-[280px] w-full max-w-[550px] shrink-0 overflow-hidden rounded-b-2xl md:mr-0 lg:mr-auto lg:h-full lg:max-h-[496px] lg:min-h-[496px] xl:mt-0 xl:max-w-[589px]">
                <Image
                  src={ctaIllustration}
                  alt="eComSmiths Next.js e-commerce engineering illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Cta;
