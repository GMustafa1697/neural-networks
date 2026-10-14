import insightfulDashboardsImg from '@/public/images/opai-img-312.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

export const InsightfulDashboardsCard = () => {
  return (
    <div
      className="order-last col-span-12 md:order-4 md:col-span-6 lg:order-last lg:col-span-12 xl:col-span-6"
      role="listitem"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div
        className="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8"
        aria-label="Core Web Vitals and analytics feature card"
      >
        <RevealAnimation delay={0.7}>
          <figure className="w-full max-w-[569px] overflow-hidden rounded-md">
            <Image
              src={insightfulDashboardsImg}
              alt="Core Web Vitals and conversion telemetry dashboard"
              className="size-full object-cover"
              itemProp="image"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </RevealAnimation>

        <h3
          className="text-background-13/90 font-sora text-sora-heading-5 text-left font-normal tracking-[-0.72px]"
          itemProp="name"
        >
          Core Web Vitals & analytics
        </h3>
      </div>
    </div>
  );
};
