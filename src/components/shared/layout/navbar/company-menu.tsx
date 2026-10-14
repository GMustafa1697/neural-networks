'use client';

import newArrowWhite from '@/public/images/icons/new-arrow-white.svg';
import whatsNewImage from '@/public/images/opai-img-400.jpg';
import {
  AboutIcon,
  CareerIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TeamIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/src/components/shared/icon/menu-icon';
import {
  CompanyMenuLink,
  type CompanyMenuLinkProps,
} from '@/src/components/shared/layout/navbar/company-menu-link';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

const MENU_COMPANY_ID = 'company-mega-menu-v2';

type CompanyLink = Omit<CompanyMenuLinkProps, 'onClose'>;

const aboutLinks: CompanyLink[] = [
  {
    title: 'About Us',
    description: 'Next.js e-commerce agency profile',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Our Team',
    description: 'Next.js & headless storefront architects',
    href: '/team',
    icon: TeamIcon,
  },
  {
    title: 'Why eComSmiths',
    description: 'Sub-second speed, custom APIs & zero bloat',
    href: '/about',
    icon: WhyChooseUsIcon,
  },
  {
    title: 'Code & Craft',
    description: 'Our engineering standards & ethos',
    href: '/about',
    icon: CareerIcon,
  },
];

const cultureLinks: CompanyLink[] = [
  {
    title: 'Our Ethos',
    description: 'Code, craft, scale — our development values',
    href: '/about',
    icon: ManifestoIcon,
  },
  {
    title: 'Client Results',
    description: 'Next.js storefront conversion improvements',
    href: '/case-study',
    icon: CustomersIcon,
  },
  {
    title: 'Testimonials',
    description: 'What founders and CTOs say about us',
    href: '/testimonial',
    icon: TestimonialIcon,
  },
  {
    title: 'Case Studies',
    description: 'Real-world speed & revenue impact',
    href: '/case-study',
    icon: CaseStudyICon,
  },
];

const solutionLinks: CompanyLink[] = [
  {
    title: 'Services',
    description: 'Next.js storefronts, APIs & speed sprints',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    title: 'Headless Solutions',
    description: 'Shopify, BigCommerce & Composable stacks',
    href: '/services',
    icon: UseCaseIcon,
  },
];

interface CompanyMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const CompanyMenu = ({ menuDropdownId, setMenuDropdownId }: CompanyMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_COMPANY_ID;

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[946px]',
          isOpen && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id={MENU_COMPANY_ID}
        className={cn(
          'dropdown-menu border-stroke-2/60 fixed top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:gap-x-6 lg:w-[946px]',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {aboutLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {cultureLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="space-y-3">
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
              ))}
            </ul>
          </div>
          <p className="font-sora text-tagline-2 text-background-13/60 p-3 font-medium">
            What&apos;s new
          </p>
          <div>
            <figure className="group relative min-h-[166px] w-full max-w-full overflow-hidden rounded-[14px]">
              <Image
                src={whatsNewImage}
                alt="What's new"
                fill
                className="rounded-[14px] object-cover"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
              <div className="absolute top-3 bottom-3 left-3 w-full space-y-5 p-2">
                <div>
                  <p className="font-sora text-tagline-2 text-background-13 font-normal">
                    Architecture Brief
                  </p>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 w-full max-w-[169px] font-normal">
                    Sub-second TTFB & Core Web Vitals optimization in Next.js 16.
                  </p>
                </div>
                <Link
                  href="/services"
                  onClick={handleClose}
                  className="group/arrow bg-background-13 hover:bg-opai-purple relative flex h-9.5 w-16 items-center justify-center space-y-5 overflow-hidden rounded-[40px] px-5 py-2 ring-[6px] ring-white transition-all duration-500 ease-in-out"
                >
                  <span className="relative flex size-6 items-center justify-center overflow-hidden">
                    <Image
                      src={newArrowWhite}
                      alt=""
                      width={24}
                      height={24}
                      className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover/arrow:translate-x-1"
                    />
                    <Image
                      src={newArrowWhite}
                      alt=""
                      width={24}
                      height={24}
                      className="size-full object-cover transition-transform duration-400 ease-in-out group-hover/arrow:translate-x-6"
                    />
                  </span>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
