import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import type { CaseStudy } from '@/src/interface/interface';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

const SHARE_SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'X', href: 'https://x.com/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { name: 'YouTube', href: 'https://www.youtube.com/' },
] as const;

interface CaseStudyDetailsHeroProps {
  data: Partial<CaseStudy>;
  content: string;
}

const CaseStudyDetailsHero = ({ data, content }: CaseStudyDetailsHeroProps) => {
  const [secondaryA, secondaryB] = data.heroImageSecondary ?? [];

  return (
    <section className="lp:pb-44! pt-28 pb-20 md:pt-39 md:pb-25 lg:pb-30" aria-labelledby="case-study-details-title">
      <div className="main-container">
        <div className="space-y-8">
          <RevealAnimation delay={0.1}>
            <h2
              id="case-study-details-title"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[1094px] text-center font-normal"
            >
              {data.title}
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="bg-background-1 space-y-2.5 overflow-hidden rounded-3xl p-2 pb-12">
              <div className="flex flex-col items-center gap-x-2 gap-y-2 md:flex-row md:gap-y-0">
                <RevealAnimation delay={0.3} direction="left" offset={100}>
                  <div className="w-full">
                    <figure className="relative h-[250px] w-full overflow-hidden rounded-2xl md:h-[500px] xl:h-[710px]">
                      <Image
                        src={data.heroImageMain as string}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                      />
                    </figure>
                  </div>
                </RevealAnimation>

                <div className="flex w-full flex-col gap-y-2">
                  {secondaryA ? (
                    <RevealAnimation delay={0.4} direction="right" offset={100}>
                      <figure className="relative h-[250px] w-full overflow-hidden rounded-2xl xl:h-[351px]">
                        <Image
                          src={secondaryA}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 40vw"
                        />
                      </figure>
                    </RevealAnimation>
                  ) : null}
                  {secondaryB ? (
                    <RevealAnimation delay={0.5} direction="right" offset={100}>
                      <figure className="relative h-[250px] w-full overflow-hidden rounded-2xl xl:h-[351px]">
                        <Image
                          src={secondaryB}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 40vw"
                        />
                      </figure>
                    </RevealAnimation>
                  ) : null}
                </div>
              </div>

              <RevealAnimation delay={0.6}>
                <div className="case-study-markdown px-2 md:px-6">
                  <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
                </div>
              </RevealAnimation>

              <div className="mt-[70px] space-y-4 px-2 md:px-6">
                <RevealAnimation delay={0.1}>
                  <h3 className="font-sora text-sora-heading-4 text-white/90">Share this post</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <SocialIcons links={SHARE_SOCIAL_LINKS} iconClassName="stroke-white" />
                </RevealAnimation>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailsHero;
