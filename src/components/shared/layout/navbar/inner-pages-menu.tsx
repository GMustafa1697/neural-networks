'use client';

import {
  BlogIcon,
  ContactIcon,
  FaqIcon,
  GlossaryIcon,
  SuccessIcon,
  SupportIcon,
  TutorialIcon,
} from '@/src/components/shared/icon/menu-icon';
import { InnerPagesMenuLink } from '@/src/components/shared/layout/navbar/inner-pages-menu-link';
import { cn } from '@/src/utils/cn';
import type { ComponentType } from 'react';

interface InnerLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const MENU_INNER_PAGES_ID = 'resources-dropdown-menu-v2';

const innerPageLinks: InnerLink[] = [
  { label: 'Blog', href: '/blog', icon: BlogIcon },
  { label: 'Integration', href: '/integration', icon: TutorialIcon },
  { label: 'Case Studies', href: '/case-study', icon: FaqIcon },
  { label: 'Testimonial', href: '/testimonial', icon: GlossaryIcon },
  { label: 'Services', href: '/services', icon: SupportIcon },
  { label: 'Contact', href: '/contact', icon: ContactIcon },
  { label: 'Team', href: '/team', icon: SuccessIcon },
];

interface InnerPagesMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const InnerPagesMenu = ({ menuDropdownId, setMenuDropdownId }: InnerPagesMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_INNER_PAGES_ID;

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[280px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          isOpen && 'pointer-events-auto! opacity-100'
        )}
      />
      <ul
        id={MENU_INNER_PAGES_ID}
        className={cn(
          'dropdown-menu shadow-14 border-stroke-2/60 absolute top-full left-1/2 z-50 mt-2 w-[280px] -translate-x-1/2 rounded-[20px] border bg-white p-3 transition-all duration-300',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        {innerPageLinks.map((link) => (
          <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};
