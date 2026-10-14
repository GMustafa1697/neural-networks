import avatarImg02 from '@/public/images/opai-avatar-img-02.png';
import avatarImg03 from '@/public/images/opai-avatar-img-03.png';
import avatarImg14 from '@/public/images/opai-avatar-img-14.png';
import { MoveUpOnScroll } from '@/src/components/animation/move-up-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import Image from 'next/image';

const HeroRightCard = () => {
  return (
    <MoveUpOnScroll moveUpValue={15}>
      <RevealAnimation delay={0.6} direction="right" offset={100}>
        <div className="lp:right-[2%] absolute top-[77%] right-[1%] hidden md:inline-block lg:top-[40%] xl:right-[5%] 2xl:right-[-6%]">
          <div className="w-[280px] space-y-6 rounded-3xl bg-white px-11 py-11 lg:py-14 xl:w-[323px]">
            <div className="space-y-[35px] text-end">
              <h2 className="font-sora text-sg-heading-6 text-background-3 font-normal tracking-[-0.6px]">
                Next.js Squad
              </h2>
              <div className="space-y-6">
                <AvatarReveal
                  className="flex items-center justify-end -space-x-3"
                  direction="left"
                  offset={100}
                  stagger={0.1}
                  markers={false}
                >
                  <AvatarItem className="size-9 shrink-0 overflow-hidden rounded-md ring-1 ring-white xl:size-11">
                    <Image
                      src={avatarImg03}
                      alt="Next.js storefront developer"
                      width={44}
                      height={44}
                      className="size-full object-cover"
                    />
                  </AvatarItem>
                  <AvatarItem className="size-9 shrink-0 overflow-hidden rounded-md ring-1 ring-white xl:size-11">
                    <Image
                      src={avatarImg02}
                      alt="Next.js storefront developer"
                      width={44}
                      height={44}
                      className="size-full object-cover"
                    />
                  </AvatarItem>
                  <AvatarItem className="size-9 shrink-0 overflow-hidden rounded-md ring-1 ring-white xl:size-11">
                    <Image
                      src={avatarImg14}
                      alt="Next.js storefront developer"
                      width={44}
                      height={44}
                      className="size-full object-cover"
                    />
                  </AvatarItem>
                  <AvatarItem
                    className="flex size-9 shrink-0 rotate-270 items-center justify-center overflow-hidden rounded-md bg-(image:--color-gradient-5) ring-1 ring-white xl:size-11"
                    aria-label="Additional team members"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3.75V20.25"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </AvatarItem>
                </AvatarReveal>

                <div className="flex items-end justify-between">
                  <div className="text-left">
                    <p className="font-inter-tight text-tagline-2 text-background-3 font-normal">
                      Speed Score
                    </p>
                    <h3 className="font-sora text-sg-heading-5 xl:text-sg-heading-3 text-background-3 flex items-center justify-center font-normal tracking-[-1.6px]">
                      99%
                    </h3>
                  </div>

                  <div className="bg-background-3 flex items-center justify-center gap-x-1 rounded-lg px-2.5 py-1">
                    <span className="font-manrope text-manrope-heading-6 flex items-center justify-center text-white">
                      4
                    </span>
                    <span className="flex size-6 items-center justify-center" aria-hidden>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={17}
                        height={19}
                        viewBox="0 0 17 19"
                        fill="none"
                        className="shrink-0"
                        aria-hidden
                        role="img"
                      >
                        <path
                          d="M16.5 8.26066C16.5 12.5468 13.0528 15.5 8.5 15.5V17.5C4 17 0.5 12.426 0.5 8.26066C0.5 3.97457 3.95638 0.5 8.5092 0.5C13.062 0.5 16.5 3.97457 16.5 8.26066Z"
                          stroke="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </MoveUpOnScroll>
  );
};

export default HeroRightCard;
