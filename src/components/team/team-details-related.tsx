import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { TeamCard } from '@/src/components/shared/card/team-card';
import type { TeamMember } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

interface TeamDetailsRelatedProps {
  currentSlug: string;
}

const TeamDetailsRelated = ({ currentSlug }: TeamDetailsRelatedProps) => {
  const members = getMarkDownData<TeamMember>('src/data/team', false, 'order')
    .filter((m) => m.slug !== currentSlug)
    .slice(0, 3);

  if (members.length === 0) {
    return null;
  }

  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="related-team-heading">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="related-team-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
              >
                More team members
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                Explore profiles across marketing, product, and leadership
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 items-center gap-x-2 gap-y-4 md:gap-y-2">
            {members.map((member, index) => (
              <RevealAnimation key={member.slug} delay={0.1 + index * 0.1}>
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

export default TeamDetailsRelated;
