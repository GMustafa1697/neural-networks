'use client';

import opaiImg27 from '@/public/images/opai-img-27.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LocationIcon } from '@/src/components/shared/icon';
import { PrimarySubmitButton } from '@/src/components/shared/ui/button/primary-submit-button';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className="pt-28 pb-20 md:pt-39 md:pb-28 lg:pb-39" aria-labelledby="contact-heading">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <TextReveal instant>
              <h2
                id="contact-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[600px] font-normal"
              >
                Reach out — We&apos;ll get back within 24 hours
              </h2>
            </TextReveal>
            <TextReveal delay={0.2} instant>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[300px] font-normal">
                Fill out the form below, and a member of our team will be in touch shortly.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.3} instant>
            <div className="flex flex-col items-center justify-center gap-y-10 rounded-xl bg-white p-4 md:rounded-3xl md:p-8 lg:flex-row lg:gap-x-14 lg:gap-y-0">
              <RevealAnimation delay={0.4} instant className="w-full lg:flex-1 lg:min-w-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full space-y-6"
                >
                  <div>
                    <fieldset className="mb-6 space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="font-inter-tight text-tagline-2 font-normal text-background-13/90 inline-block"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="Enter your email"
                        className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Your email"
                        autoComplete="email"
                      />
                    </fieldset>

                    <fieldset className="mb-6 space-y-2">
                      <label
                        htmlFor="contact-password"
                        className="font-inter-tight text-tagline-2 font-normal text-background-13/90 inline-block"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="contact-password"
                        name="password"
                        placeholder="Enter your password"
                        className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Password"
                        autoComplete="current-password"
                      />
                    </fieldset>

                    <fieldset className="mb-4 space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="font-inter-tight text-tagline-2 font-normal text-background-13/90 inline-block"
                      >
                        Your message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Enter your message"
                        rows={4}
                        className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 h-45.5 w-full resize-y rounded-lg border px-4.5 py-3 focus-within:outline-none"
                      />
                    </fieldset>

                    <fieldset className="mb-14 flex items-center justify-between gap-x-5">
                      <label className="flex cursor-pointer items-center gap-x-3 sm:gap-1.5">
                        <input
                          type="checkbox"
                          name="terms"
                          required
                          className="peer sr-only"
                          aria-label="I accept with the Terms of uses and privacy policy"
                        />
                        <span
                          className="border-stroke-3/18 peer-checked:border-background-13/60 after:bg-background-13/50 relative size-5 cursor-pointer rounded-[2px] border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"
                          aria-hidden
                        />
                        <span className="text-tagline-3 text-background-13/60 peer-checked:text-background-13/90 font-medium select-none">
                          I accept with the Terms of uses and privacy policy
                        </span>
                      </label>
                    </fieldset>

                    <div className="inline-block w-full max-w-none md:max-w-md">
                      <PrimarySubmitButton aria-label="Submit request">Submit request</PrimarySubmitButton>
                    </div>
                  </div>
                </form>
              </RevealAnimation>

              <RevealAnimation
                delay={0.4}
                instant
                className="h-[330px] w-full shrink-0 rounded-2xl md:h-[563px] lg:flex-1 lg:min-w-0"
              >
                <figure className="relative size-full overflow-hidden rounded-2xl">
                  <Image
                    src={opaiImg27}
                    alt="Contact"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <RevealAnimation delay={0.5} instant>
                    <div className="bg-background-13/20 absolute top-1/2 left-1/2 flex h-12 w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-2.5 rounded-lg backdrop-blur-md md:w-[334px]">
                      <span className="flex shrink-0 items-center justify-center" aria-hidden>
                        <LocationIcon className="size-6 fill-white/90!" />
                      </span>
                      <span className="font-inter-tight text-tagline-3 font-normal text-white/90">
                        TODO_ECOMSMITHS_ADDRESS
                      </span>
                    </div>
                  </RevealAnimation>
                </figure>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
