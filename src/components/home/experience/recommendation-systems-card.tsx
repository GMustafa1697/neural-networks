import recommendationSystemsImgTwo from '@/public/images/opai-img-309.png';
import recommendationSystemsImgOne from '@/public/images/opai-img-310.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

export const RecommendationSystemsCard = () => {
  return (
    <div
      className="col-span-12 md:order-5 md:col-span-6 lg:order-4 xl:col-span-3 xl:-mt-[120px]"
      role="listitem"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div
        className="flex h-[420px] flex-col justify-between rounded-3xl bg-white p-8"
        aria-label="Headless CMS and catalog sync feature card"
      >
        <RevealAnimation delay={0.4}>
          <div
            className="relative top-4 left-1/2 h-[220px] w-[206px] -translate-x-1/2"
            role="group"
            aria-label="Headless CMS and catalog sync images"
          >
            <RevealAnimation delay={0.5} instant animationType="to" offset={0} rotation={7.7}>
              <figure className="absolute top-0 right-2 z-10 w-[124px] overflow-hidden rounded-[20px]">
                <Image
                  src={recommendationSystemsImgOne}
                  alt="Headless CMS schema mapping"
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} instant>
              <figure className="absolute bottom-0 left-1/2 z-20 w-[164px] -translate-x-1/2 overflow-hidden rounded-[20px]">
                <Image
                  src={recommendationSystemsImgTwo}
                  alt="Real-time catalog sync"
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7} instant animationType="to" offset={0} rotation={-7.7}>
              <div
                className="bg-background-10 absolute bottom-8 left-3 z-10 h-[147px] w-[124px] rounded-[20px]"
                aria-hidden
              />
            </RevealAnimation>
          </div>
        </RevealAnimation>
        <h3
          className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
          itemProp="name"
        >
          Headless CMS & catalog sync
        </h3>
      </div>
    </div>
  );
};
