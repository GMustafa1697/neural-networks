import Cta from '@/src/components/shared/cta';
import TestimonialHero from '@/src/components/testimonial/testimonial-hero';
import TestimonialReviewCards from '@/src/components/testimonial/testimonial-review-cards';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Testimonial - eComSmiths'),
};

const Page = () => {
  return (
    <>
      <TestimonialHero />
      <TestimonialReviewCards />
      <Cta />
    </>
  );
};

export default Page;
