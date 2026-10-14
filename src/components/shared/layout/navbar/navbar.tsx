'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import MobileMenu from '@/src/components/shared/layout/mobile-menu/mobile-menu';
import { CompanyMenu } from '@/src/components/shared/layout/navbar/company-menu';
import { InnerPagesMenu } from '@/src/components/shared/layout/navbar/inner-pages-menu';
import { NavButton } from '@/src/components/shared/layout/navbar/nav-button';
import { NavChevron } from '@/src/components/shared/layout/navbar/nav-chevron';
import { NavbarMobileMenuButton } from '@/src/components/shared/layout/navbar/navbar-mobile-menu-button';
import { PlanAndSupportMenu } from '@/src/components/shared/layout/navbar/plan-and-support-menu';
import { mobileMenuData } from '@/src/data/mobile-meu';
import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const scroll = useNavbarScroll(100);

  return (
    <header
      className={cn(
        'lp:max-w-[1440px]! fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-400 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
        scroll.isScrolled && 'top-2'
      )}
      onMouseLeave={() => setMenuDropdownId(null)}
    >
      <RevealAnimation direction="up" offset={100} delay={0.1} instant>
        <div className="header-one flex w-full items-center justify-between rounded-2xl bg-white px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
          <div>
            <Link href="/">
              <span className="sr-only">eComSmiths Home</span>
              <span
                className="text-sora-heading-5 text-background-13 flex h-11 items-center font-medium lg:h-10"
                aria-hidden="true"
              >
                eComSmiths
              </span>
            </Link>
          </div>

          <nav className="hidden items-center xl:flex" aria-label="Main">
            <ul className="flex items-center">
              <li
                className="nav-item relative cursor-pointer py-2.5"
                data-menu="company-mega-menu-v2"
                onMouseEnter={() => setMenuDropdownId('company-mega-menu-v2')}
              >
                <Link
                  href="#"
                  className="hover:border-stroke-2/60 font-sora text-tagline-2 text-background-13/60 hover:text-background-13 flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Company</span>
                  <NavChevron open={menuDropdownId === 'company-mega-menu-v2'} />
                </Link>
                <CompanyMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>
              <li
                className="nav-item relative cursor-pointer py-2.5"
                data-menu="resources-dropdown-menu-v2"
                onMouseEnter={() => setMenuDropdownId('resources-dropdown-menu-v2')}
              >
                <Link
                  href="#"
                  className="hover:border-stroke-2/60 font-sora text-tagline-2 text-background-13/60 hover:text-background-13 flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Capabilities</span>
                  <NavChevron open={menuDropdownId === 'resources-dropdown-menu-v2'} />
                </Link>
                <InnerPagesMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>
              <li
                className="nav-item relative cursor-pointer py-2.5"
                data-menu="product-mega-menu"
                onMouseEnter={() => setMenuDropdownId('product-mega-menu')}
              >
                <Link
                  href="#"
                  className="hover:border-stroke-2/60 font-sora text-tagline-2 text-background-13/60 hover:text-background-13 flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Plans & Scope</span>
                  <NavChevron open={menuDropdownId === 'product-mega-menu'} />
                </Link>
                <PlanAndSupportMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>
              <li className="nav-item relative cursor-pointer py-2.5">
                <Link
                  href="/pricing"
                  className="hover:border-stroke-2/60 font-sora text-tagline-2 text-background-13/60 hover:text-background-13 flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                >
                  <span>Pricing</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center justify-center xl:flex">
            <NavButton />
          </div>
          <NavbarMobileMenuButton />
        </div>
      </RevealAnimation>
      <MobileMenu menuData={mobileMenuData} />
    </header>
  );
};

export default Navbar;

