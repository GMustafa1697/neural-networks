import lock from '@/public/images/lock-3.svg';
import Image from 'next/image';

export const AiDrivenCybersecurityCard = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
      <div
        className="flex h-[300px] flex-col justify-between rounded-3xl bg-white px-8 pt-8 pb-8 lg:pt-8 xl:h-[420px] xl:pt-[77px]"
        aria-label="PCI-compliant checkout and secure APIs feature card"
      >
        <div
          className="lock-fade-animation-delay-1 bg-background-7 relative mx-auto size-40 rounded-full"
          role="img"
          aria-label="Security lock icon representing PCI-compliant checkout and secure APIs"
        >
          <div
            className="lock-fade-animation-delay-2 bg-background-8 absolute top-1/2 left-1/2 size-29 -translate-x-1/2 -translate-y-1/2 rounded-full"
            aria-hidden
          >
            <div
              className="bg-background-5 lock-fade-animation-delay-3 absolute top-1/2 left-1/2 flex size-17 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full px-3.5 py-3"
              aria-hidden
            >
              <figure className="h-[52px] w-[50px]">
                <Image
                  src={lock}
                  alt="Security lock icon for PCI-compliant checkout and secure APIs"
                  className="size-full shrink-0 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>

        <h3
          className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
          itemProp="name"
        >
          PCI-compliant checkout & APIs
        </h3>
      </div>
    </div>
  );
};
