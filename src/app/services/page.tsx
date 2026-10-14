import ServicesHero from '@/src/components/services/services-hero';
import ServicesTrackRecord from '@/src/components/services/services-track-record';
import Cta from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Next.js Development Services - eComSmiths',
    'High-performance Next.js development services for e-commerce: headless storefronts, API integrations, and sub-second Core Web Vitals optimization.'
  ),
};

const Page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesTrackRecord />
      <Cta />
    </>
  );
};

export default Page;
