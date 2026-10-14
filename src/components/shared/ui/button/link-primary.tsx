'use client';
import { ButtonGridIcon } from '@/src/components/shared/icon';
import { useButtonHoverTransform } from '@/src/hooks/use-button-hover-transform';
import { cn } from '@src/utils/cn.ts';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface LinkPrimaryProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  'className'
> {
  className?: string;
  buttonClassName?: string;
}

export const LinkPrimary = forwardRef<HTMLAnchorElement, LinkPrimaryProps>(function LinkPrimary(
  { className, buttonClassName, children, ...linkProps },
  ref
) {
  const { wrapperRef, iconRef, textRef } = useButtonHoverTransform();

  return (
    <Link ref={ref} className={cn('inline-block', className)} {...linkProps}>
      <div
        ref={wrapperRef}
        className={cn(
          'button-inner bg-background-4 group button font-ibm-plex-mono text-tagline-2 text-background-11 flex h-13 w-full cursor-pointer items-center rounded-2xl p-1 font-normal first-letter:uppercase',
          buttonClassName
        )}
      >
        <div
          ref={iconRef}
          className="button-icon relative z-20 h-11 w-15 overflow-hidden rounded-[13px]"
          aria-hidden
        >
          <div
            className="absolute inset-0 z-10 overflow-hidden bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100% transition-all duration-700 ease-in-out"
            aria-hidden
          >
            <div
              className="bg-opai-purple absolute inset-0 z-20 flex size-full items-center justify-center overflow-hidden"
              style={{ boxShadow: '0 3px 10px 0 rgba(255, 255, 255, 0.4) inset' }}
            >
              <span className="flex size-6 items-center justify-center" aria-hidden>
                <ButtonGridIcon />
              </span>
            </div>
          </div>
        </div>
        <span ref={textRef} className="button-text shrink-0 stroke-0 px-4" aria-hidden>
          {children}
        </span>
      </div>
    </Link>
  );
});

LinkPrimary.displayName = 'LinkPrimary';
