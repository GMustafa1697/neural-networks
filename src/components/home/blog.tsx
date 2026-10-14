import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

function parsePublishedAt(value: string): number {
  const t = Date.parse(value);
  return Number.isNaN(t) ? 0 : t;
}

const Blog = () => {
  const blogPosts = getMarkDownData<BlogPost>('src/data/blog')
    .toSorted(
      (a, b) => parsePublishedAt(b.publishedAt) - parsePublishedAt(a.publishedAt)
    )
    .slice(0, 3);

  return (
    <section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="blog-heading">
      <div className="main-container">
        <div className="space-y-13 md:space-y-[70px]">
          <TextReveal>
            <h2
              id="blog-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
            >
              Next.js e-commerce engineering
            </h2>
          </TextReveal>

          <div className="grid grid-cols-12 items-center justify-center gap-4 lg:gap-x-2">
            {blogPosts.map((post, index) => (
              <div key={post.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <BlogCard
                    imageSrc={post.image}
                    imageAlt={post.slug}
                    date={post.publishedAt}
                    dateTime={post.publishedAt}
                    badges={post.badges}
                    title={post.title}
                    href={`/blog/${post.slug}`}
                  />
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.5} className="mt-[76px] block text-center">
          <LinkPrimary href="/blog" aria-label="Read all engineering articles" className="mx-auto w-fit">
            Read all engineering insights
          </LinkPrimary>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
