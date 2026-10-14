'use client';
import heroMainImage from '@/public/images/opai-img-300.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import HeroLeftCard from '@/src/components/home/heroLeftCard';
import HeroLeftCardTwo from '@/src/components/home/heroLeftCardTwo';
import HeroRightCard from '@/src/components/home/heroRightCard';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-[130px] pb-[86px] md:pt-[100px] lg:pt-[174px]"
      aria-labelledby="hero-heading"
    >
      <div className="main-container">
        <div className="relative">
          <div className="space-y-14">
            <div className="space-y-4">
              <TextReveal>
                <h1
                  id="hero-heading"
                  className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 mx-auto max-w-[950px] text-center font-normal tracking-[-3.2px]"
                >
                  Next.js storefronts that convert, perform, and scale
                </h1>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-tagline-1 text-background-13/60 mx-auto max-w-[650px] text-center font-normal">
                  We build ultra-fast headless storefronts, seamless API integrations, and sub-second performance optimizations for ambitious e-commerce brands. Code, craft, scale.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div className="text-center">
                <LinkPrimary href="/contact" aria-label="Start your Next.js project">
                  Start your project
                </LinkPrimary>
              </div>
            </RevealAnimation>
          </div>

          {/* center main img  */}
          <RevealAnimation delay={0.4} instant>
            <figure className="mx-auto md:size-[709px]">
              <Image
                src={heroMainImage}
                alt="eComSmiths Next.js headless storefront architecture"
                width={709}
                height={709}
                className="hero-img-animate size-full object-cover"
                priority
                sizes="(min-width: 768px) 709px, 100vw"
              />
            </figure>
          </RevealAnimation>

          <HeroLeftCard />
          <HeroRightCard />
          <HeroLeftCardTwo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
