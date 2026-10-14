import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

const FamousBlog = () => {
  const posts = getMarkDownData<BlogPost>('src/data/blog')
    .filter((post) => post.famousBlog)
    .slice(0, 4);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="famous-blog-heading">
      <div className="main-container">
        <div className="space-y-[70px]">
          <TextReveal>
            <h2
              id="famous-blog-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
            >
              Don&apos;t miss this
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/50 text-center font-normal">
              5 AI Tools Every Business Needs to Streamline Operations
            </p>
          </TextReveal>

          <div className="grid grid-cols-12 items-center justify-center gap-y-4 sm:gap-4">
            {posts.map((post, index) => (
              <div key={post.slug} className="col-span-12 md:col-span-6">
                <RevealAnimation delay={0.1 + index * 0.1}>
                  <BlogCard
                    imageSrc={post.image}
                    imageAlt={post.slug}
                    date={post.publishedAt}
                    dateTime={post.publishedAt}
                    badges={post.badges}
                    title={post.title}
                    href={`/blog/${post.slug}`}
                    figureClassName="!h-[370px]"
                  />
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamousBlog;
