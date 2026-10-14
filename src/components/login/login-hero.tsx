'use client';

import loginHeroImage from '@/public/images/opai-img-471.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { AuthButtons } from '@/src/components/shared/auth-buttons';
import { SubmitButtonV3 } from '@/src/components/shared/ui/button/submit-button-v3';
import Image from 'next/image';
import Link from 'next/link';

const LoginHero = () => {
  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28" aria-labelledby="login-heading">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="login-heading"
                className="text-sora-heading-4 md:text-sora-heading-3 xl:text-sora-heading-2 text-background-13 font-sora font-normal"
              >
                Let&apos;s get started
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[300px] font-normal">
                Let&apos;s explore how eComSmiths can support your goals with AI-driven solutions.
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
                        htmlFor="login-email"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block font-normal"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="login-email"
                        placeholder="Enter your email"
                        className="border-stroke-3/18 bg-background-7 text-tagline-3 font-inter-tight placeholder:text-tagline-3 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
                        autoComplete="email"
                        required
                        aria-required="true"
                      />
                    </fieldset>

                    <fieldset className="mt-6 space-y-2">
                      <label
                        htmlFor="login-password"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block font-normal"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="login-password"
                        placeholder="At least 8 character"
                        className="border-stroke-3/18 bg-background-7 text-tagline-3 font-inter-tight placeholder:text-tagline-3 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
                        autoComplete="current-password"
                        minLength={8}
                        required
                        aria-required="true"
                      />
                    </fieldset>

                    <div className="mt-8">
                      <SubmitButtonV3 aria-label="Login">Login</SubmitButtonV3>
                    </div>

                    <fieldset className="mt-6 flex items-center justify-between gap-x-5">
                      <label className="flex cursor-pointer items-center gap-1.5">
                        <input
                          type="checkbox"
                          name="remember"
                          className="peer sr-only"
                          aria-label="Remember me"
                        />
                        <span
                          className="border-stroke-3/18 peer-checked:border-stroke-3/60 after:bg-background-13/90 relative size-5 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100"
                          aria-hidden
                        />
                        <span className="font-inter-tight text-tagline-3 text-background-13/60 peer-checked:text-background-13/90 font-medium select-none">
                          Remember me
                        </span>
                      </label>
                      <div>
                        <Link
                          href="/forgot-password"
                          className="font-inter-tight text-tagline-3 text-background-13/60 block flex-1 font-normal underline underline-offset-2"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </fieldset>

                    <p className="mt-6 text-center">
                      <span className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">
                        Don&apos;t have an account?{' '}
                      </span>
                      <Link
                        href="/signup"
                        className="font-inter-tight text-tagline-3 text-background-13/90 font-medium underline underline-offset-2"
                      >
                        Sign up
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
                <figure className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[599px]">
                  <Image
                    src={loginHeroImage}
                    alt="eComSmiths login"
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

export default LoginHero;
