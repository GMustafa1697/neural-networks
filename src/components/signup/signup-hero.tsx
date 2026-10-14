'use client';

import signupHeroImage from '@/public/images/opai-img-472.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { AuthButtons } from '@/src/components/shared/auth-buttons';
import { SubmitButtonV3 } from '@/src/components/shared/ui/button/submit-button-v3';
import Image from 'next/image';
import Link from 'next/link';

const SignupHero = () => {
  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28" aria-labelledby="signup-heading">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="signup-heading"
                className="text-sora-heading-4 md:text-sora-heading-3 xl:text-sora-heading-2 text-background-13 font-sora font-normal"
              >
                Create your account
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[300px] font-normal">
                Join eComSmiths and unlock AI-driven solutions tailored to your needs.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-x-8 gap-y-8 overflow-hidden rounded-xl bg-white p-4 md:rounded-3xl md:p-8 lg:flex-row lg:gap-y-0">
              <RevealAnimation
                delay={0.3}
                instant
                direction="left"
                offset={100}
                className="w-full lg:max-w-[397px]"
              >
                <div className="bg-background-9 w-full rounded-lg p-4 backdrop-blur-[30px] md:rounded-2xl md:p-6">
                  <form
                    className="w-full"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <fieldset className="space-y-2">
                      <label
                        htmlFor="signup-email"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block font-normal"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="signup-email"
                        placeholder="Enter your email"
                        className="border-stroke-3/18 bg-background-7 text-tagline-3 font-inter-tight placeholder:text-tagline-3 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
                        autoComplete="email"
                        required
                        aria-required="true"
                      />
                    </fieldset>

                    <fieldset className="mt-6 space-y-2">
                      <label
                        htmlFor="signup-username"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block font-normal"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="signup-username"
                        placeholder="Choose a username"
                        className="border-stroke-3/18 bg-background-7 text-tagline-3 font-inter-tight placeholder:text-tagline-3 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
                        autoComplete="username"
                        required
                        aria-required="true"
                      />
                    </fieldset>

                    <fieldset className="mt-6 space-y-2">
                      <label
                        htmlFor="signup-password"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block font-normal"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="signup-password"
                        placeholder="At least 8 character"
                        className="border-stroke-3/18 bg-background-7 text-tagline-3 font-inter-tight placeholder:text-tagline-3 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
                        autoComplete="new-password"
                        minLength={8}
                        required
                        aria-required="true"
                      />
                    </fieldset>

                    <fieldset className="mt-6 space-y-2">
                      <label
                        htmlFor="signup-confirm-password"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block font-normal"
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="confirm_password"
                        id="signup-confirm-password"
                        placeholder="Confirm your password"
                        className="border-stroke-3/18 bg-background-7 text-tagline-3 font-inter-tight placeholder:text-tagline-3 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
                        autoComplete="new-password"
                        minLength={8}
                        required
                        aria-required="true"
                      />
                    </fieldset>

                    <div className="mt-8">
                      <SubmitButtonV3 aria-label="Sign up">Sign up</SubmitButtonV3>
                    </div>

                    <p className="mt-6 text-center">
                      <span className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">
                        Already have an account?{' '}
                      </span>
                      <Link
                        href="/login"
                        className="font-inter-tight text-tagline-3 text-background-13/90 font-medium underline underline-offset-2"
                      >
                        Log in
                      </Link>
                    </p>
                  </form>

                  <div>
                    <AuthButtons />
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation
                delay={0.4}
                instant
                direction="right"
                offset={100}
                className="w-full lg:max-w-[557px]"
              >
                <figure className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[599px] lg:h-[768px]">
                  <Image
                    src={signupHeroImage}
                    alt="eComSmiths sign up"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 557px, 100vw"
                    priority
                  />
                </figure>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SignupHero;
