import avatarImg02 from '@/public/images/opai-avatar-img-02.png';
import { MoveUpOnScroll } from '@/src/components/animation/move-up-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

const HeroLeftCard = () => {
  return (
    <MoveUpOnScroll>
      <RevealAnimation
        delay={0.5}
        className="lp:left-[-2%] absolute top-[30%] left-[2%] hidden xl:block 2xl:left-[-7%]"
      >
        <div className="relative h-[229px] w-[289px] rounded-3xl bg-white p-11">
          <RevealAnimation delay={0.6}>
            <div
              aria-label="Team member card"
              className="bg-background-3 relative z-10 flex w-full max-w-[200px] rotate-6 items-center justify-center gap-x-4 rounded-xl p-2.5"
            >
              <figure className="size-11 overflow-hidden rounded-lg">
                <Image
                  src={avatarImg02}
                  alt="Alex Vance, Lead Next.js Architect"
                  width={44}
                  height={44}
                  className="size-full object-cover"
                />
              </figure>
              <div>
                <p className="text-tagline-2 font-sora tracking-[-0.48px] text-white">
                  Alex Vance
                </p>
                <p className="font-inter-tight text-tagline-4 text-white/60">
                  Lead Next.js Architect
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation
            delay={0.7}
            instant
            className="bg-background-13/20 pointer-events-none absolute bottom-[92px] h-[62px] w-full max-w-[200px] -rotate-8 rounded-xl p-2.5"
          >
            <div aria-hidden />
          </RevealAnimation>
          <RevealAnimation
            delay={0.8}
            instant
            className="bg-background-13/20 pointer-events-none absolute h-[62px] w-full max-w-[200px] rotate-6 rounded-xl p-2.5"
          >
            <div aria-hidden />
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </MoveUpOnScroll>
  );
};

export default HeroLeftCard;
