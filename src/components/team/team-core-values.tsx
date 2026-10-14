import coreValuesImage from '@/public/images/opai-img-26.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import Image from 'next/image';

const VALUES = [
  {
    title: 'Collaboration',
    description: 'Increase open and click rates with AI-optimized content',
  },
  {
    title: 'Integrity',
    description: 'We build trust through transparency and accountability.',
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries to create AI solutions that drive real change.',
  },
  {
    title: 'Sustainability',
    description: 'We prioritize long-term value for businesses, people, and the planet.',
  },
] as const;

const TeamCoreValues = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="team-core-values-heading">
      <div className="main-container">
        <div className="space-y-12 md:space-y-17.5">
          <div className="space-y-8 md:space-y-14">
            <TextReveal>
              <h2
                id="team-core-values-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
              >
                Our Core Values
              </h2>
            </TextReveal>

            <div className="grid grid-cols-12 items-center gap-y-6 lg:gap-x-8 lg:gap-y-0">
              {VALUES.map((item) => (
                <div
                  key={item.title}
                  className="col-span-12 text-center md:col-span-6 lg:col-span-3"
                >
                  <TextReveal delay={0.2}>
                    <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                      {item.title}
                    </h3>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto w-full max-w-[298px] font-normal">
                      {item.description}
                    </p>
                  </TextReveal>
                </div>
              ))}
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <figure className="outline-background-13/5 relative h-[280px] w-full overflow-hidden rounded-2xl outline-8 md:h-[480px] md:rounded-3xl xl:h-[614px]">
              <Image
                src={coreValuesImage}
                alt=""
                fill
                className="rounded-xl object-cover md:rounded-[18px]"
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default TeamCoreValues;
