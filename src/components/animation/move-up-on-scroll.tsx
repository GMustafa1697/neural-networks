'use client';

import { cn } from '@/src/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  cloneElement,
  isValidElement,
  useCallback,
  useRef,
  type ReactElement,
  type Ref,
} from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type MoveUpOnScrollProps = {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
  }>;
  /** Passed through as `data-move-up-value` and used as the delta (percentage points). Default 8. */
  moveUpValue?: number;
  /** ScrollTrigger `start`. */
  scrollStart?: string;
  /** ScrollTrigger `end`. */
  scrollEnd?: string;
  /** ScrollTrigger `scrub`. Default 1. */
  scrub?: boolean | number;
  className?: string;
};

export const MoveUpOnScroll = ({
  children,
  moveUpValue = 8,
  scrollStart = 'top 90%',
  scrollEnd = 'bottom 20%',
  scrub = 1,
  className,
}: MoveUpOnScrollProps) => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const setRef = useCallback((el: HTMLElement | null) => {
    scopeRef.current = el;
  }, []);

  useGSAP(
    () => {
      const el = scopeRef.current;
      if (!el) return;

      const start = getComputedStyle(el).top;
      const parent = el.offsetParent ?? document.documentElement;
      const h = parent.clientHeight;
      const px = Number.parseFloat(start);
      if (!h || Number.isNaN(px)) return;

      const n = Number.parseFloat(String(moveUpValue));
      const delta = Number.isNaN(n) ? 8 : n;

      const tween = gsap.fromTo(
        el,
        { top: start },
        {
          top: `${(px / h) * 100 - delta}%`,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    {
      scope: scopeRef,
      dependencies: [moveUpValue, scrollEnd, scrollStart, scrub],
    }
  );

  if (!isValidElement(children)) {
    return null;
  }

  // eslint-disable-next-line react-hooks/refs -- ref callback forwarded via cloneElement for useGSAP scope
  return cloneElement(children, {
    ref: setRef,
    className: cn(children.props.className, className),
  } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<HTMLElement> });
};
