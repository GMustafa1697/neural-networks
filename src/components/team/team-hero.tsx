import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { TeamCard } from '@/src/components/shared/card/team-card';
import type { TeamMember } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

const TeamHero = () => {
  const members = getMarkDownData<TeamMember>('src/data/team', false, 'order');

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28" aria-labelledby="team-page-heading">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="team-page-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
              >
                The minds Behind eComSmiths
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[500px] font-normal">
                Our team brings together deep expertise in AI, design, and technology to build tools
                that empower your creativity and productivity.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 items-center gap-x-2 gap-y-4 md:gap-y-2">
            {members.map((member, index) => (
              <RevealAnimation key={member.slug} delay={0.1 + (index % 6) * 0.1}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <TeamCard
                    imageSrc={member.image}
                    name={member.name}
                    position={member.position}
                    href={`/team/${member.slug}`}
                  />
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
