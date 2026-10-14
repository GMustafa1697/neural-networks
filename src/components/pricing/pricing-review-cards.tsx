import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { TestimonialCard } from '@/src/components/shared/ui/card/testimonial-card';
import { pricingPageReviews } from '@/src/data/pricing-page-reviews';

const PricingReviewCards = () => {
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

          <div className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:*:col-span-4 xl:gap-2 xl:*:col-span-3">
            {pricingPageReviews.map((item, index) => (
              <RevealAnimation key={`${item.name}-${index}`} delay={0.1 + index * 0.1}>
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

export default PricingReviewCards;
