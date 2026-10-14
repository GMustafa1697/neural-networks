'use client';
import { PricingChevronIcon } from '@/src/components/shared/icon';
import { cn } from '@src/utils/cn.ts';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface PricingButtonProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  'className'
> {
  className?: string;
}

const arrowEase = 'transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]' as const;

export const PricingButton = forwardRef<HTMLAnchorElement, PricingButtonProps>(
  function PricingButton({ className, children, ...linkProps }, ref) {
    return (
      <Link ref={ref} className={cn('w-full', className)} {...linkProps}>
        <div className="group h-[52px] cursor-pointer overflow-hidden rounded-2xl text-center">
          <div className="bg-background-10 font-ibm-plex-mono text-tagline-2 text-background-6 flex w-full cursor-pointer flex-nowrap items-center justify-center gap-x-2.5 rounded-2xl px-6 py-[13px] font-medium lowercase">
            <span className="shrink-0 first-letter:uppercase">{children}</span>
            <div className="relative top-[1.5px] flex size-6 items-center justify-center overflow-hidden">
              <span
                className={cn(
                  'absolute flex translate-x-0 items-center justify-center opacity-100 group-hover:translate-x-6 group-hover:opacity-0',
                  arrowEase
                )}
              >
                <PricingChevronIcon />
              </span>
              <span
                className={cn(
                  'absolute flex -translate-x-6 items-center justify-center opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                  arrowEase
                )}
              >
                <PricingChevronIcon />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

PricingButton.displayName = 'PricingButton';
