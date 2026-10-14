'use client';

import { SubmitButtonChevronIcon } from '@/src/components/shared/icon';
import { cn } from '@src/utils/cn.ts';
import { forwardRef } from 'react';

export interface SubmitButtonV3Props extends Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'className' | 'type'
> {
  className?: string;
  innerClassName?: string;
  type?: 'submit';
}

export const SubmitButtonV3 = forwardRef<HTMLButtonElement, SubmitButtonV3Props>(
  function SubmitButtonV3(
    {
      className,
      innerClassName,
      children,

      ...buttonProps
    },
    ref
  ) {
    return (
      <button ref={ref} type="submit" className={cn('w-full', className)} {...buttonProps}>
        <div
          className={cn(
            'group bg-background-13 font-ibm-plex-mono text-tagline-2 text-background-7 flex h-[52px] w-full cursor-pointer flex-nowrap items-center justify-center gap-x-2.5 rounded-lg px-6 py-[13px] font-normal lowercase',
            innerClassName
          )}
        >
          <span className="shrink-0 first-letter:uppercase">{children}</span>
          <div className="relative top-[1.5px] flex size-6 items-center justify-center overflow-hidden">
            <span className="absolute flex translate-x-0 items-center justify-center opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-6 group-hover:opacity-0">
              <SubmitButtonChevronIcon />
            </span>
            <span className="absolute flex -translate-x-6 items-center justify-center opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <SubmitButtonChevronIcon />
            </span>
          </div>
        </div>
      </button>
    );
  }
);

SubmitButtonV3.displayName = 'SubmitButtonV3';
