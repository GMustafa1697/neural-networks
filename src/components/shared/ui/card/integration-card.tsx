import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import { forwardRef } from 'react';

export interface IntegrationCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
}

export const IntegrationCard = forwardRef<HTMLDivElement, IntegrationCardProps>(
  function IntegrationCard({ iconSrc, iconAlt, title, description, className }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'space-y-2 rounded-3xl bg-white p-5 lg:p-6 xl:p-8',
          className
        )}
      >
        <div className="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0">
          <span className="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
            <figure className="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white">
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={34}
                height={34}
                className="size-[34px] object-contain"
              />
            </figure>
          </span>
          <h3 className="font-inter-tight text-tagline-1 font-medium text-black">{title}</h3>
        </div>

        <p className="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left">
          {description}
        </p>
      </div>
    );
  }
);

IntegrationCard.displayName = 'IntegrationCard';
