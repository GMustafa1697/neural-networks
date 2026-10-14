import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import type { BlogPost } from '@/src/interface/interface';
import Image from 'next/image';

const SHARE_SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'X', href: 'https://x.com/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { name: 'YouTube', href: 'https://www.youtube.com/' },
] as const;

interface BlogDetailsHeroProps {
  data: Partial<BlogPost>;
}

const BlogDetailsHero = ({ data }: BlogDetailsHeroProps) => {
  const author = data.authorInfo?.name;
  const authorImage = data.authorInfo?.img;
  const publishedAt = data.publishedAt;
  const readTime = data.readTime;

  return (
    <section className="pt-28 pb-13 md:pt-39 md:pb-[70px]" aria-labelledby="blog-details-title">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-x-12.5 gap-y-12.5 overflow-hidden rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-6 lg:flex-row lg:gap-y-0 xl:gap-x-[72px]">
            <RevealAnimation delay={0.2} direction="left" offset={100}>
              <div className="flex h-[700px] w-full flex-col justify-between md:h-[500px] lg:h-[650px] xl:h-[582px]">
                <div className="space-y-3">
                  <h2
                    id="blog-details-title"
                    className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
                  >
                    {data.title}
                  </h2>

                  <div className="space-y-6">
                    <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                      {data.descriptionOne}
                    </p>
                    <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                      {data.descriptionTwo}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <figure className="relative size-12 overflow-hidden rounded-full">
                      <Image
                        src={authorImage as string}
                        alt={`${author}-photo`}
                        className="size-full object-cover"
                        width={48}
                        height={48}
                      />
                    </figure>

                    <div>
                      <p className="font-inter-tight text-tagline-3 text-background-13 font-normal">
                        {author}
                      </p>
                      <p className="text-tagline-3 text-background-13/60 font-inter-tight flex items-center gap-x-[5px] font-normal">
                        <span>{publishedAt}</span> <span aria-hidden="true">.</span>{' '}
                        <span>{readTime}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-inter-tight text-tagline-2 text-background-13/90 font-medium">
                      Share this post
                    </h3>
                    <SocialIcons links={SHARE_SOCIAL_LINKS} iconClassName="stroke-background-13" />
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="right" offset={100}>
              <figure className="relative h-[450px] w-full overflow-hidden rounded-xl md:h-[500px] lg:h-[650px] xl:h-[582px]">
                <Image
                  src={data.image as string}
                  alt={data.slug as string}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 582px"
                  priority
                />
              </figure>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default BlogDetailsHero;
