'use client';

import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import Link from 'next/link';
import type { ComponentType } from 'react';

export interface InnerPagesMenuLinkProps {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
}

export const InnerPagesMenuLink = ({ label, href, icon: Icon, onClose }: InnerPagesMenuLinkProps) => (
  <li>
    <Link href={href} onClick={onClose} className="group relative flex items-center gap-2 rounded-[10px] p-3">
      <HoverBgTransform className="group-hover:opacity-100" />
      <span className="relative z-10">
        <Icon />
      </span>
      <span className="font-sora text-tagline-2 relative z-10 font-normal text-background-13">{label}</span>
    </Link>
  </li>
);
