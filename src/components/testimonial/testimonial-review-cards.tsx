import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { TestimonialCard } from '@/src/components/shared/ui/card/testimonial-card';
import { testimonialPageReviews } from '@/src/data/testimonial-page-reviews';

const TestimonialReviewCards = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="main-container">
        <div className="space-y-19">
          <TextReveal>
            <h2
              id="testimonials-heading"
              className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora text-center font-normal"
            >
              What our clients say
            </h2>
          </TextReveal>

          <div className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:*:col-span-4 xl:gap-2 xl:[&>*:nth-child(1)]:col-span-3 xl:[&>*:nth-child(10)]:col-span-3 xl:[&>*:nth-child(11)]:col-span-3 xl:[&>*:nth-child(12)]:col-span-4 xl:[&>*:nth-child(13)]:col-span-4 xl:[&>*:nth-child(14)]:col-span-4 xl:[&>*:nth-child(15)]:col-span-6 xl:[&>*:nth-child(16)]:col-span-6 xl:[&>*:nth-child(2)]:col-span-3 xl:[&>*:nth-child(3)]:col-span-3 xl:[&>*:nth-child(4)]:col-span-3 xl:[&>*:nth-child(5)]:col-span-4 xl:[&>*:nth-child(6)]:col-span-4 xl:[&>*:nth-child(7)]:col-span-4 xl:[&>*:nth-child(8)]:col-span-3 xl:[&>*:nth-child(9)]:col-span-3">
            {testimonialPageReviews.map((item, index) => (
              <RevealAnimation key={`${item.name}-${index}`} delay={0.1 + (index % 7) * 0.1}>
                <TestimonialCard
                  content={item.content}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  name={item.name}
                  position={item.position}
                  isLight={item.isLight}
                />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialReviewCards;
