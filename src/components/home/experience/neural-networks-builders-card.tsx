import neuralNetworksBuildersImg from '@/public/images/opai-img-305.png';
import Image from 'next/image';

export const NeuralNetworksBuildersCard = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6">
      <div
        className="flex h-[300px] flex-col-reverse items-center justify-between rounded-3xl bg-white p-6 xl:flex-row xl:p-8"
        aria-label="Headless Storefront Architecture feature card"
      >
        <h3
          className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px] xl:max-w-[189px]"
          itemProp="name"
        >
          Headless storefront architecture
        </h3>
        <figure className="w-full max-w-[230px] overflow-hidden rounded-xl xl:max-w-[262px]">
          <Image
            src={neuralNetworksBuildersImg}
            alt="Headless Storefront Architecture"
            className="size-full object-cover"
            itemProp="image"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
};
