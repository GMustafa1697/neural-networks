import RevealAnimation from '@/src/components/animation/reveal-animation';
import TeamDetailsMarkdown from '@/src/components/team/team-details-markdown';
import { SocialIcons } from '@/src/components/shared/social-icons';
import type { TeamMember } from '@/src/interface/interface';
import Image from 'next/image';

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'X', href: 'https://x.com/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { name: 'YouTube', href: 'https://www.youtube.com/' },
] as const;

function phoneToTelHref(phone: string) {
  const digits = phone.replaceAll(/\D/g, '');
  return digits ? `tel:+${digits}` : '#';
}

interface TeamDetailsHeroProps {
  data: Partial<TeamMember>;
  content: string;
}

const TeamDetailsHero = ({ data, content }: TeamDetailsHeroProps) => {
  const phone = data.phone ?? '';
  const telHref = phoneToTelHref(phone);

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28" aria-labelledby="team-member-name">
      <div className="main-container">
        <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-0 lg:gap-x-18">
          <RevealAnimation delay={0.1} direction="left" offset={100}>
            <div className="w-full md:sticky md:top-28">
              <figure className="relative h-[500px] w-full overflow-hidden rounded-t-2xl lg:h-[743px]">
                <Image
                  src={data.heroImage as string}
                  alt={data.name ? `${data.name} — profile` : ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </figure>
              <div className="rounded-b-2xl bg-white p-8">
                <div className="border-stroke-3/18 space-y-1 border-b pb-6">
                  <h2
                    id="team-member-name"
                    className="font-sora text-sora-heading-5 text-background-13 font-normal"
                  >
                    {data.name}
                  </h2>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    {data.position}
                  </p>
                </div>

                <div className="space-y-5.5 pt-6">
                  <div className="space-y-1">
                    <h3 className="font-sora text-sora-heading-5 text-background-13 font-normal">
                      Contact information
                    </h3>
                    <div className="space-y-1">
                      <p className="font-inter-tight text-background-13/60 text-tagline-3 font-normal">
                        <a
                          href={`mailto:${data.email}`}
                          className="hover:text-background-13 transition-colors"
                        >
                          {data.email}
                        </a>
                      </p>
                      <p className="font-inter-tight text-background-13/60 text-tagline-3 font-normal">
                        <a href={telHref} className="hover:text-background-13 transition-colors">
                          {phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  <SocialIcons links={SOCIAL_LINKS} iconClassName="stroke-background-13" />
                </div>
              </div>
            </div>
          </RevealAnimation>

          <div className="w-full overflow-hidden">
            <TeamDetailsMarkdown content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsHero;
