import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SubmitButtonV2 } from '@/src/components/shared/ui/button/submit-button-v2';
import Link from 'next/link';

export const FooterContactForm = () => {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="space-y-8">
        <div className="space-y-4">
          <RevealAnimation delay={0.3}>
            <div className="space-y-1">
              <p className="font-inter-tight text-tagline-2 text-background-11 font-semibold">Studio:</p>
              <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                TODO_ECOMSMITHS_ADDRESS
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div>
              <p className="font-inter-tight text-tagline-2 text-background-11 mb-1 font-semibold">Inquiries:</p>
              <p className="font-inter-tight text-tagline-3 font-normal text-white/50">hello@ecomsmiths.com</p>
              <p className="font-inter-tight text-tagline-3 font-normal text-white/50">ecomsmiths.com</p>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="space-y-3">
            <form action="#" className="mx-auto w-full max-w-[550px] space-y-[9px] lg:mx-0 lg:max-w-full">
              <fieldset>
                <input
                  type="email"
                  name="email"
                  aria-label="Enter your email"
                  placeholder="Enter your work email"
                  required
                  className="border-stroke-3/30 bg-background-6 placeholder:text-tagline-3 text-background-8 text-tagline-3 block h-13 w-full rounded-md border px-3 py-[11px] font-normal placeholder:font-normal placeholder:text-white/60 focus:outline-none"
                />
              </fieldset>
              <div className="w-full">
                <SubmitButtonV2
                  innerClassName="!rounded-md !bg-background-7 !text-background-13"
                  iconClassName="!rounded-sm"
                  buttonTextClassName="!text-background-13"
                >
                  Subscribe to insights
                </SubmitButtonV2>
              </div>
            </form>
            <p className="font-inter-tight text-tagline-4 font-normal text-white/60">
              By subscribing you agree with our{' '}
              <Link href="/contact" className="font-medium text-white hover:underline">
                Terms & Privacy
              </Link>
            </p>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};
