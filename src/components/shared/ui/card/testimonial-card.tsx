import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import { forwardRef } from 'react';

export interface TestimonialCardProps {
  content: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  position: string;
  /** `true` → `bg-white` and dark text; `false` → `bg-background-13` and light text */
  isLight: boolean;
  className?: string;
}

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  function TestimonialCard(
    { content, imageSrc, imageAlt, name, position, isLight, className },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          'flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14',
          isLight ? 'bg-white' : 'bg-background-1',
          className
        )}
      >
        <p
          className={cn(
            'font-inter-tight text-tagline-2 line-clamp-3 font-normal xl:line-clamp-none',
            isLight ? 'text-background-13/90' : 'text-white/90'
          )}
        >
          {content}
        </p>

        <div className="flex items-center justify-center gap-x-3">
          <figure className="relative size-12 shrink-0 overflow-hidden rounded-full">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="48px" />
          </figure>

          <div>
            <h3
              className={cn(
                'font-manrope text-manrope-heading-6 font-medium',
                isLight ? 'text-black' : 'text-white'
              )}
            >
              {name}
            </h3>
            <p
              className={cn(
                'font-inter-tight text-tagline-3 font-normal',
                isLight ? 'text-background-13/60' : 'text-white/60'
              )}
            >
              {position}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = 'TestimonialCard';
