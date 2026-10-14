'use client';

import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import Link from 'next/link';
import type { ComponentType } from 'react';

export interface PlanSupportMenuLinkProps {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
}

export const PlanSupportMenuLink = ({
  title,
  description,
  href,
  icon: Icon,
  onClose,
}: PlanSupportMenuLinkProps) => (
  <li>
    <Link
      href={href}
      onClick={onClose}
      className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
    >
      <HoverBgTransform className="group-hover:opacity-100" />
      <div className="relative z-10 mt-1.5">
        <Icon />
      </div>
      <div className="relative z-10 space-y-0.5">
        <p className="font-sora text-tagline-2 font-normal text-background-13">{title}</p>
        <p className="font-inter-tight text-tagline-3 font-normal text-background-13/60">{description}</p>
      </div>
    </Link>
  </li>
);
