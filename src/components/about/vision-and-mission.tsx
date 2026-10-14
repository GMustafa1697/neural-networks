import opaiAvatar02 from '@/public/images/opai-avatar-img-02.png';
import opaiAvatar04 from '@/public/images/opai-avatar-img-04.png';
import opaiAvatar25 from '@/public/images/opai-avatar-img-25.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { AnimatedCounter } from '@/src/components/shared/animated-counter';
import {
  StarIcon,
  StatCrossIcon,
  StatSparkleAIcon,
  StatSparkleBIcon,
  StatWaveIcon,
} from '@/src/components/shared/icon';
import Image from 'next/image';

const FREELANCE_AVATAR_IMAGES = [opaiAvatar25, opaiAvatar04, opaiAvatar02];

const VisionAndMission = () => {
  return (
    <section className="lp:py-44! py-20 md:py-25 lg:py-30" aria-labelledby="vision-mission-heading">
      <div className="main-container">
        <div className="space-y-18">
          <div className="flex flex-col gap-x-25 gap-y-10 md:flex-row md:items-center md:justify-between md:gap-y-0">
            <div className="w-full max-w-[300px] basis-3/5 space-y-1">
              <TextReveal instant>
                <h2
                  id="vision-mission-heading"
                  className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
                >
                  Engineering the future of headless commerce
                </h2>
              </TextReveal>
              <TextReveal delay={0.2} instant>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                  Committed to driving e-commerce growth through high-performance Next.js architectures.
                </p>
              </TextReveal>
            </div>
            <div className="w-full max-w-[248px] basis-1/5 space-y-1">
              <TextReveal delay={0.1} instant>
                <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal">
                  Vision
                </h2>
              </TextReveal>
              <TextReveal delay={0.2} instant>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                  To empower every modern merchant with sub-second, frictionless digital storefronts.
                </p>
              </TextReveal>
            </div>
            <div className="w-full max-w-[248px] basis-1/5 space-y-1">
              <TextReveal instant>
                <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal">
                  Mission
                </h2>
              </TextReveal>
              <TextReveal delay={0.2} instant>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                  To craft ultra-fast Next.js storefronts and resilient API integrations that unlock massive conversion growth.
                </p>
              </TextReveal>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-2">
            <RevealAnimation delay={0.1}>
              <div className="col-span-12 row-span-2 md:col-span-6 lg:col-span-4">
                <div className="bg-background-1 flex h-[550px] w-full flex-col justify-between rounded-3xl px-5 py-10 md:px-8 md:py-14">
                  <div className="space-y-3">
                    <h3 className="font-sora text-sora-heading-4 font-normal text-white">
                      Craftsmanship
                    </h3>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                      Code, craft, scale: We are dedicated to building clean, composable Next.js architectures that scale effortlessly without bottlenecks. Our engineering focuses on sub-second load times, headless flexibility, and rock-solid reliability for high-volume retail.
                    </p>
                  </div>

                  <div className="flex items-center gap-x-4">
                    <div className="flex -space-x-4">
                      {FREELANCE_AVATAR_IMAGES.map((src) => (
                        <figure
                          key={src.src}
                          className="relative size-11.5 overflow-hidden rounded-full outline-2 outline-white"
                        >
                          <Image src={src} alt="" fill className="object-cover" sizes="46px" />
                        </figure>
                      ))}
                      <p className="font-inter-tight text-tagline-4 text-background-13 flex size-11.5 items-center justify-center overflow-hidden rounded-full bg-white">
                        +120
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <StarIcon key={i} className="size-5 fill-white!" />
                        ))}
                      </div>
                      <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                        Trusted by 100+ stores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="flex h-[271px] w-full items-end rounded-3xl bg-white p-5 md:p-8">
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sora text-sora-heading-4 text-background-13 flex items-center font-normal">
                        <AnimatedCounter end={150} />+
                      </h3>
                      <StatSparkleAIcon />
                    </div>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      Next.js storefronts shipped
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="flex h-[271px] w-full items-end rounded-3xl bg-white p-5 md:p-8">
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sora text-sora-heading-4 text-background-13 flex items-center font-normal">
                        <AnimatedCounter end={65} />%
                      </h3>
                      <StatSparkleBIcon />
                    </div>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      Average reduction in TTFB
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="flex h-[271px] w-full items-end rounded-3xl bg-white p-5 md:p-8">
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sora text-sora-heading-4 text-background-13 flex items-center font-normal">
                        <AnimatedCounter end={400} />+
                      </h3>
                      <StatWaveIcon />
                    </div>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      E-commerce APIs integrated
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="flex h-[271px] w-full items-end rounded-3xl bg-white p-5 md:p-8">
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sora text-sora-heading-4 text-background-13 flex items-center font-normal">
                        <AnimatedCounter end={42} />%
                      </h3>
                      <StatCrossIcon />
                    </div>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      Average mobile conversion lift
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
