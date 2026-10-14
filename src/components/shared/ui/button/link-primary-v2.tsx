'use client';
import { ButtonGridIcon } from '@/src/components/shared/icon';
import { cn } from '@src/utils/cn.ts';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface LinkPrimaryV2Props extends Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  'className'
> {
  /** Matches `{=$class}` on the inner wrapper div */
  className?: string;
  /** Optional extra classes on `<Link>` (anchor is `group w-full` in the template). */
  linkClassName?: string;
  buttonTextClassName?: string;
}

export const LinkPrimaryV2 = forwardRef<HTMLAnchorElement, LinkPrimaryV2Props>(
  function LinkPrimaryV2(
    { className, linkClassName, buttonTextClassName, children, ...linkProps },
    ref
  ) {
    return (
      <Link ref={ref} className={cn('group w-full', linkClassName)} {...linkProps}>
        <div
          className={cn(
            'group relative flex h-[52px] w-full cursor-pointer items-center justify-center rounded-2xl p-1',
            className
          )}
        >
          <div
            className="lp:group-hover:left-[82%]! absolute left-[1%] z-20 h-11 w-15 overflow-hidden rounded-[13px] transition-[left] duration-700 ease-in-out group-hover:left-[80%] max-[376px]:group-hover:left-[75%] md:group-hover:left-[82%] lg:group-hover:left-[74%]"
            aria-hidden
          >
            <div
              className="size-full rounded-[13px] bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100%"
              aria-hidden
            >
              <div
                className="bg-opai-purple relative z-10 flex size-full items-center justify-center rounded-[13px]"
                style={{ boxShadow: '0 3px 10px 0 rgba(255, 255, 255, 0.4) inset' }}
              >
                <span className="flex size-6 items-center justify-center p-[5px]" aria-hidden>
                  <ButtonGridIcon />
                </span>
              </div>
            </div>
          </div>
          <span
            className={cn(
              'font-ibm-plex-mono text-tagline-2 text-background-11 lp:group-hover:left-[20%]! absolute left-1/2 shrink-0 -translate-x-1/2 stroke-0 px-4 text-center font-normal text-nowrap transition-[left] duration-700 ease-in-out group-hover:left-[20%] first-letter:uppercase max-[376px]:group-hover:left-[25%] lg:group-hover:left-[25%]',
              buttonTextClassName
            )}
            aria-hidden
          >
            {children}
          </span>
        </div>
      </Link>
    );
  }
);

LinkPrimaryV2.displayName = 'LinkPrimaryV2';
