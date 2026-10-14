import opai1 from '@/public/images/opai-1.png';
import opai6 from '@/public/images/opai-6.png';
import opaiImg25 from '@/public/images/opai-img-25.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { AnimatedCounter } from '@/src/components/shared/animated-counter';
import ProgressiveBlur from '@/src/components/shared/progressive-blur';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section
      className="lp:pb-44! pt-28 pb-20 md:pt-39 md:pb-25 lg:pb-30"
      aria-labelledby="about-hero-heading"
    >
      <div className="main-container">
        <div className="space-y-[72px]">
          <div className="space-y-3 text-center">
            <TextReveal instant>
              <h2
                id="about-hero-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
              >
                How eComSmiths began
              </h2>
            </TextReveal>
            <TextReveal delay={0.2} instant>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[490px] font-normal">
                eComSmiths was founded by e-commerce engineers obsessed with web performance. We saw high-growth brands losing revenue to bloated monolithic stores and set out to build the fastest Next.js headless storefronts in the industry.
              </p>
            </TextReveal>
          </div>

          <div className="lp:gap-x-22.5! flex flex-col justify-center gap-x-8 gap-y-8 lg:flex-row lg:gap-y-0 xl:gap-x-14">
            <RevealAnimation delay={0.3} instant>
              <figure className="relative mx-auto h-[500px] overflow-hidden rounded-lg lg:mx-0 lg:h-[564px] lg:w-full lg:max-w-[380px] xl:h-[500px]">
                <RevealAnimation delay={0.4} instant direction="left" offset={100}>
                  <figure className="pointer-events-none absolute top-[-292px] left-[-162px] size-[468px] rotate-353 select-none">
                    <Image src={opai6} alt="" />
                  </figure>
                </RevealAnimation>

                <Image src={opaiImg25} alt="How eComSmiths began" priority />

                <ProgressiveBlur
                  intensity={250}
                  position="bottom"
                  className="h-[150px] rounded-b-lg"
                />
              </figure>
            </RevealAnimation>

            <div className="lp:gap-x-22.5! flex flex-col items-end gap-x-8 gap-y-8 overflow-hidden md:flex-row md:gap-y-0 lg:flex-col lg:items-start lg:gap-y-4 xl:w-full xl:flex-row xl:items-end xl:gap-x-14 xl:gap-y-0">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <h3 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal">
                    Benchmarks
                  </h3>

                  <ul className="space-y-4">
                    {[
                      'Next.js E-Commerce Excellence Standard',
                      'Sub-500ms Core Web Vitals Benchmark',
                      'Headless Storefront Innovation Award',
                      'Enterprise Composable Commerce Partner',
                    ].map((label) => (
                      <li
                        key={label}
                        className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-1 font-normal lg:text-nowrap"
                      >
                        <span
                          className="bg-background-13 inline-block size-1.5 rounded-full"
                          aria-hidden
                        />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="bg-background-5 relative w-full space-y-13 overflow-hidden rounded-lg p-5 md:max-w-[300px] md:p-12 lg:max-w-[367px]">
                  <RevealAnimation delay={0.6} direction="right" offset={100}>
                    <figure className="pointer-events-none absolute top-[-99%] right-[-48%] h-[300px] w-[330px] select-none md:top-[-70%] lg:top-[-64%] lg:right-[-31%]">
                      <Image src={opai1} alt="" />
                    </figure>
                  </RevealAnimation>
                  <span
                    className="ns-shape-23 inline-block text-[56px] text-white/90"
                    aria-hidden
                  />
                  <div className="relative z-10 space-y-3">
                    <p className="font-inter-tight text-tagline-1 font-normal text-white/90">
                      Client satisfaction & SLA rate
                    </p>
                    <h3 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 flex items-center text-white/90">
                      <AnimatedCounter end={99} />%
                    </h3>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
