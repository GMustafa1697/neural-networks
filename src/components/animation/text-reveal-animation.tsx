'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { cloneElement, isValidElement, useCallback, useRef } from 'react';

const LINE_CLASS = 'text-reveal-line';
const DEFAULT_DELAY = 0.1;
const LINES_CONFIG = { duration: 0.8, stagger: 0.08 } as const;

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

export type TextRevealProps = {
  children: React.ReactElement;
  /** If true, play immediately without ScrollTrigger (unless overridden by `data-instant` on the element). */
  instant?: boolean;
  /** ScrollTrigger `start` when not instant (or `data-start` on the element). */
  start?: string;
  /** ScrollTrigger `end` when not instant (or `data-end` on the element). */
  end?: string;
  /** Delay before the staggered sequence (or `data-reveal-delay` on the element). */
  delay?: number;
};

function resolveDelay(el: HTMLElement, propDelay: number) {
  const raw = el.dataset.revealDelay;
  if (raw !== undefined && raw !== '' && !Number.isNaN(Number.parseFloat(raw))) {
    return Number.parseFloat(raw);
  }
  return propDelay;
}

function resolveInstant(el: HTMLElement, propInstant: boolean) {
  const di = el.dataset.instant;
  if (di !== undefined) return di !== 'false';
  return propInstant;
}

export const TextReveal = ({
  children,
  instant = false,
  start = 'top 90%',
  end = 'top 50%',
  delay = DEFAULT_DELAY,
}: TextRevealProps) => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const setRef = useCallback((el: HTMLElement | null) => {
    (scopeRef as { current: HTMLElement | null }).current = el;
  }, []);

  useGSAP(
    () => {
      const el = scopeRef.current;
      if (!el) return;

      const run = () => {
        if (!scopeRef.current) return;
        const targetEl = scopeRef.current;

        tweenRef.current?.kill();
        splitRef.current?.revert();

        const resolvedDelay = resolveDelay(targetEl, delay);
        const instantReveal = resolveInstant(targetEl, instant);
        const startVal = targetEl.dataset.start || start;
        const endVal = targetEl.dataset.end || end;

        const split = SplitText.create(targetEl, {
          type: 'lines',
          mask: 'lines',
          linesClass: LINE_CLASS,
        });
        splitRef.current = split;

        const lines = targetEl.querySelectorAll<HTMLElement>(`.${LINE_CLASS}`);
        if (!lines.length) return;

        gsap.set(targetEl, { opacity: 1 });

        const tweenVars: gsap.TweenVars = {
          yPercent: 0,
          opacity: 1,
          duration: LINES_CONFIG.duration,
          stagger: LINES_CONFIG.stagger,
          ease: 'power3.out',
          delay: resolvedDelay,
        };

        if (!instantReveal) {
          tweenVars.scrollTrigger = {
            trigger: targetEl,
            start: startVal,
            end: endVal,
            scrub: false,
          };
        }

        tweenRef.current = gsap.fromTo(lines, { yPercent: 110, opacity: 0 }, tweenVars);
      };

      if (document.fonts) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => {
        tweenRef.current?.kill();
        splitRef.current?.revert();
      };
    },
    {
      scope: scopeRef,
      dependencies: [instant, start, end, delay],
    }
  );

  if (!isValidElement(children)) {
    console.warn('TextReveal expects a single valid React element.');
    return null;
  }

  // eslint-disable-next-line react-hooks/refs -- ref callback forwarded to clone for useGSAP scope
  return cloneElement(children, {
    ref: setRef,
    'data-text-reveal': true,
  } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<HTMLElement> });
};
