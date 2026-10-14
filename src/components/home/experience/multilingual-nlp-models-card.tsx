import multilingualNlpModelsImg from '@/public/images/opai-img-311.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

export const MultilingualNlpModelsCard = () => {
  return (
    <div
      className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
      role="listitem"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div
        className="flex h-[300px] flex-col justify-between rounded-3xl bg-white px-8 pt-8 pb-8 xl:h-[420px] xl:pt-[111px]"
        aria-label="Multi-currency and global edge routing feature card"
      >
        <div
          className="relative mx-auto h-[151px] w-[230px]"
          role="group"
          aria-label="Multi-currency and global edge routing visualization"
        >
          <RevealAnimation delay={0.4}>
            <figure className="absolute top-0 left-1/2 z-4 w-[230px] -translate-x-1/2 overflow-hidden rounded-xl">
              <Image
                src={multilingualNlpModelsImg}
                alt="Multi-currency and global edge routing"
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div
              className="bg-background-9 absolute top-1 left-1/2 z-3 h-[129px] w-[218px] -translate-x-1/2 rounded-xl"
              aria-hidden
            />
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div
              className="bg-background-9 absolute top-1 left-1/2 z-3 h-[138px] w-[206px] -translate-x-1/2 rounded-xl"
              aria-hidden
            />
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div
              className="bg-background-9 absolute top-1 left-1/2 z-3 h-[147px] w-[192px] -translate-x-1/2 rounded-xl"
              aria-hidden
            />
          </RevealAnimation>
        </div>
        <h3
          className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
          itemProp="name"
        >
          Multi-currency & edge routing
        </h3>
      </div>
    </div>
  );
};
