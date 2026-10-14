import heroImg301 from '@/public/images/opai-img-301.png';
import { MoveUpOnScroll } from '@/src/components/animation/move-up-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

const HeroLeftCardTwo = () => {
  return (
    <MoveUpOnScroll>
      <RevealAnimation
        delay={0.7}
        direction="left"
        offset={100}
        className="lp:top-[60%] lp:left-[-2%] absolute top-[80%] left-[1%] hidden w-full max-w-[300px] overflow-hidden rounded-3xl md:inline-block lg:top-[60%] xl:max-w-[374px] 2xl:top-[56%] 2xl:left-[-3%]"
      >
        <figure className="m-0">
          <Image
            src={heroImg301}
            alt="Next.js e-commerce storefront showcase"
            width={374}
            height={280}
            className="size-full object-cover"
            sizes="(min-width: 1280px) 374px, (min-width: 768px) 300px, 100vw"
          />
        </figure>
      </RevealAnimation>
    </MoveUpOnScroll>
  );
};

export default HeroLeftCardTwo;
