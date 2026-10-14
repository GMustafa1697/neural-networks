'use client';

import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = Readonly<{
  end: number;
  durationMs?: number;
  className?: string;
}>;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export const AnimatedCounter = ({ end, durationMs = 1400, className }: AnimatedCounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = easeOutCubic(t);
          setValue(Math.round(end * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};
