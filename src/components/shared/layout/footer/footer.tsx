import RevealAnimation from '@/src/components/animation/reveal-animation';
import { FooterBottom } from '@/src/components/shared/layout/footer/footer-bottom';
import { FooterContactForm } from '@/src/components/shared/layout/footer/footer-contact-form';
import { FooterLinkGroups } from '@/src/components/shared/layout/footer/footer-link-groups';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background-8 pt-[80px] pb-7 md:pt-[120px] xl:pt-[156px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-5 space-y-16 overflow-hidden rounded-[30px] p-9">
            <RevealAnimation delay={0.2}>
              <div>
                <Link href="/" className="block">
                  <span className="sr-only">eComSmiths</span>
                  <span
                    className="text-sora-heading-5 flex h-10 items-center font-medium text-white"
                    aria-hidden="true"
                  >
                    eComSmiths
                  </span>
                </Link>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 gap-y-8 lg:gap-0">
              <FooterLinkGroups />
              <FooterContactForm />
            </div>

            <FooterBottom />
          </div>
        </RevealAnimation>
      </div>
    </footer>
  );
};

export default Footer;
