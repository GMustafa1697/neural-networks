import PricingHero from '@/src/components/pricing/pricing-hero';
import PricingReviewCards from '@/src/components/pricing/pricing-review-cards';
import Cta from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Pricing - eComSmiths'),
};

const Page = () => {
  return (
    <>
      <PricingHero />
      <PricingReviewCards />
      <Cta />
    </>
  );
};

export default Page;
