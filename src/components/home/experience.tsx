import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { ExperienceShowcase } from '@/src/components/home/experience/experience-showcase';

const Experience = () => {
  return (
    <section className="overflow-hidden py-[80px] md:py-[120px] xl:py-[156px]">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3">
            <TextReveal>
              <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal">
                Next.js performance in action
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto text-center font-normal">
                Explore the technical capabilities powering our headless e-commerce storefronts.
              </p>
            </TextReveal>
          </div>

          <ExperienceShowcase />
        </div>
      </div>
    </section>
  );
};

export default Experience;
