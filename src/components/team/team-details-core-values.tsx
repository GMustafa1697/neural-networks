import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';

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

const TeamDetailsCoreValues = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="member-core-values-heading">
      <div className="main-container">
        <div className="space-y-17.5">
          <TextReveal>
            <h2
              id="member-core-values-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
            >
              My core values
            </h2>
          </TextReveal>

          <RevealAnimation delay={0.2}>
            <div className="grid grid-cols-12 items-center gap-x-2 gap-y-2 rounded-3xl bg-[url('/images/opai-35.jpg')] bg-cover bg-center p-2 lg:gap-y-0">
              {VALUES.map((item) => (
                <div
                  key={item.title}
                  className="col-span-12 rounded-[18px] bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-3"
                >
                  <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                    {item.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsCoreValues;
