'use client';

import {
  AffiliatePolicyIcon,
  AffiliateProgramIcon,
  GDPRIcon,
  LegalNoticeIcon,
  LoginIcon,
  PrivacyIcon,
  ReferralProgramIcon,
  RefundPolicyIcon,
  SignUpIcon,
  TermsConditionsIcon,
} from '@/src/components/shared/icon/menu-icon';
import {
  PlanSupportMenuLink,
  type PlanSupportMenuLinkProps,
} from '@/src/components/shared/layout/navbar/plan-support-menu-link';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

const MENU_PLAN_SUPPORT_ID = 'product-mega-menu';

type PlanLink = Omit<PlanSupportMenuLinkProps, 'onClose'>;

const columnOne: PlanLink[] = [
  {
    title: 'Client Portal',
    description: 'Log into project dashboard',
    href: '/login',
    icon: LoginIcon,
  },
  {
    title: 'Start a Project',
    description: 'Submit an e-commerce RFP or brief',
    href: '/signup',
    icon: SignUpIcon,
  },
  {
    title: 'Development Packages',
    description: 'Transparent Next.js pricing tiers',
    href: '/pricing',
    icon: ReferralProgramIcon,
  },
  {
    title: 'Tech Integrations',
    description: 'Shopify, BigCommerce, Stripe & APIs',
    href: '/integration',
    icon: AffiliateProgramIcon,
  },
  {
    title: 'Book a Consultation',
    description: 'Free technical architecture session',
    href: '/contact',
    icon: AffiliatePolicyIcon,
  },
];

const columnTwo: PlanLink[] = [
  {
    title: 'Performance Sprints',
    description: 'Core Web Vitals & speed remediation',
    href: '/pricing',
    icon: TermsConditionsIcon,
  },
  {
    title: 'Headless Storefronts',
    description: 'Custom Next.js App Router stores',
    href: '/services',
    icon: PrivacyIcon,
  },
  {
    title: 'API Integrations',
    description: 'ERP, CRM, and catalog middleware',
    href: '/integration',
    icon: RefundPolicyIcon,
  },
  {
    title: 'Case Studies',
    description: 'Measurable conversion improvements',
    href: '/case-study',
    icon: GDPRIcon,
  },
  {
    title: 'Contact Engineering',
    description: 'Direct access to lead architects',
    href: '/contact',
    icon: LegalNoticeIcon,
  },
];

interface PlanAndSupportMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const PlanAndSupportMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: PlanAndSupportMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_PLAN_SUPPORT_ID;

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full min-w-[952px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          isOpen && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id={MENU_PLAN_SUPPORT_ID}
        className={cn(
          'dropdown-menu border-stroke-2/60 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 space-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[952px]',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="flex items-start gap-y-6 md:gap-x-6">
          <ul className="flex-1 space-y-2">
            {columnOne.map((item) => (
              <PlanSupportMenuLink key={item.title} {...item} onClose={handleClose} />
            ))}
          </ul>
          <ul className="flex-1 space-y-2">
            {columnTwo.map((item) => (
              <PlanSupportMenuLink key={item.title} {...item} onClose={handleClose} />
            ))}
          </ul>
          <figure className="w-full flex-1 space-y-3">
            <p className="font-sora text-tagline-3 text-background-13/60 font-medium">
              What&apos;s New
            </p>
            <Link href="/pricing" onClick={handleClose}>
              <figure className="group relative min-h-[200px] w-full max-w-full overflow-hidden rounded-[14px]">
                <Image
                  src="/images/opai-img-419.jpg"
                  alt="Next.js Performance"
                  fill
                  className="rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <div className="absolute top-4 left-4 size-full space-y-1 transition-all duration-500 ease-in-out group-hover:top-5 group-hover:left-5">
                  <p className="font-sora text-tagline-2 font-medium text-white">
                    Performance SLA
                  </p>
                  <p className="font-inter-tight text-tagline-3 w-full max-w-[212px] font-normal text-white/60">
                    Sub-second load times & 99+ Core Web Vitals guaranteed on every Next.js deploy.
                  </p>
                </div>
              </figure>
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
};
