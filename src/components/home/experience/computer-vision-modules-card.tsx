import computerVisionModulesImgOne from '@/public/images/opai-img-306.png';
import computerVisionModulesImgTwo from '@/public/images/opai-img-307.png';
import computerVisionModulesImgThree from '@/public/images/opai-img-308.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

export const ComputerVisionModulesCard = () => {
  return (
    <div className="order-last col-span-12 md:col-span-6 lg:order-4 xl:col-span-3 xl:-mt-[120px]">
      <div
        className="flex h-[420px] flex-col justify-between rounded-3xl bg-white p-8"
        aria-label="Sub-second product discovery feature card"
      >
        <RevealAnimation delay={0.2}>
          <div className="relative h-[252px] w-full" aria-label="Sub-second product discovery images">
            <figure className="absolute top-1/2 left-1/2 z-10 w-full max-w-[190px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px]">
              <Image
                src={computerVisionModulesImgTwo}
                alt="Product discovery preview"
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <RevealAnimation delay={0.3}>
              <figure className="absolute top-[74px] left-0 z-20 w-full max-w-[159px] overflow-hidden rounded-[20px]">
                <Image
                  src={computerVisionModulesImgOne}
                  alt="Instant search filtering"
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="absolute right-0 bottom-0 z-0 w-full max-w-[159px] overflow-hidden rounded-[20px]">
                <Image
                  src={computerVisionModulesImgThree}
                  alt="Catalog sync view"
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </RevealAnimation>
          </div>
        </RevealAnimation>

        <h3
          className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
          itemProp="name"
        >
          Sub-second product discovery
        </h3>
      </div>
    </div>
  );
};
