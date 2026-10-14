'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';

export const NotFoundHero = () => {
  return (
    <section className="pt-24 pb-6 xl:pt-44 xl:pb-0" aria-labelledby="not-found-heading">
      <div className="main-container">
        <RevealAnimation delay={0.1} instant>
          <div className="rounded-3xl bg-white px-3.5 py-20 lg:px-0 xl:py-44">
            <div className="text-center">
              <TextReveal delay={0.2} instant>
                <h1
                  id="not-found-heading"
                  className="font-sora text-background-13/90 text-[60px] leading-[70px] font-normal sm:text-[120px] sm:leading-[180px] md:text-[160px] xl:text-[200px] xl:leading-[240px] xl:tracking-[-10px]"
                >
                  404
                </h1>
              </TextReveal>
              <TextReveal delay={0.3} instant>
                <h2 className="lg:text-sora-heading-2 sm:text-sora-heading-4 text-sora-heading-5 text-background-13/90 mb-3 font-normal">
                  Oops! Page
                  <br className="hidden md:block" />
                  Not Found
                </h2>
              </TextReveal>
              <TextReveal delay={0.4} instant>
                <p className="text-tagline-2 text-background-13/60 mx-auto max-w-xs font-normal">
                  The page does&apos;t exist or was moved. Don&apos;t worry, we&apos;ll guide you
                  back.
                </p>
              </TextReveal>
              <RevealAnimation
                delay={0.5}
                instant
                className="mt-10 flex justify-center text-center lg:mt-18"
              >
                <LinkPrimary href="/" className="mx-auto w-fit" aria-label="Back to Home">
                  Back to Home
                </LinkPrimary>
              </RevealAnimation>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
