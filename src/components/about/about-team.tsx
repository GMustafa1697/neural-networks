import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { TeamCard } from '@/src/components/shared/card/team-card';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import type { TeamMember } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

const AboutTeam = () => {
  const team = getMarkDownData<TeamMember>('src/data/team', false, 'order').slice(0, 6);

  return (
    <section className="lp:pb-44! pb-20 md:pb-25 lg:pb-30" aria-labelledby="about-team-heading">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <TextReveal instant>
              <h2
                id="about-team-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
              >
                The engineering minds behind eComSmiths
              </h2>
            </TextReveal>
            <TextReveal delay={0.2} instant>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[500px] font-normal">
                Our squad brings together senior Next.js architects, performance engineers, and
                e-commerce integration specialists obsessed with sub-second storefront speeds.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 items-center gap-x-2 gap-y-4 md:gap-y-2">
            {team.map((member, index) => (
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

        <RevealAnimation delay={0.4} className="mt-20 block text-center">
          <LinkPrimary href="/team" className="mx-auto w-fit" aria-label="View more our experts">
            View more our experts
          </LinkPrimary>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutTeam;
