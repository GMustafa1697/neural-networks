'use client';

import { footerLegalLinks } from '@/src/data/footer-links';
import { useExpandWidthFromCenter } from '@/src/hooks/use-expand-width-from-center';
import Link from 'next/link';
import { useRef } from 'react';

export const FooterBottom = () => {
  const barRef = useRef<HTMLDivElement>(null);
  useExpandWidthFromCenter(barRef, 1.7);

  return (
    <div
      ref={barRef}
      className="border-stroke-1/10 flex flex-col items-center justify-between gap-2.5 border-y px-5 py-3.5 sm:flex-row sm:gap-0 lg:py-5"
    >
      <ul className="flex items-center gap-6">
        {footerLegalLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="font-inter-tight text-tagline-4 font-normal text-white/50">
        © {new Date().getFullYear()} eComSmiths. All rights reserved.
      </p>
    </div>
  );
};
