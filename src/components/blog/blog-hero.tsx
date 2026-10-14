import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import { BlogPost } from '@/src/interface/interface';
import { cn } from '@/src/utils/cn';
import getMarkDownData from '@/src/utils/getMarkDownData';

const BlogHero = () => {
  const allBlogPosts = getMarkDownData<BlogPost>('src/data/blog');
  return (
    <section
      className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28"
      aria-labelledby="blog-page-heading"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          <TextReveal>
            <h2
              id="blog-page-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
            >
              Stay informed, stay ahead
            </h2>
          </TextReveal>

          <div className="grid grid-cols-12 items-center justify-center gap-y-4 sm:gap-4">
            {allBlogPosts.map((post, index) => (
              <div
                key={post.slug}
                className={cn(
                  'col-span-12 md:col-span-6 xl:col-span-4',
                  index === 8 && 'md:col-span-12 xl:col-span-4'
                )}
              >
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
      </div>
    </section>
  );
};

export default BlogHero;
