import CaseStudyHero from '@/src/components/case-study/case-study-hero';
import Cta from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Case Study - eComSmiths'),
};

const Page = () => {
  return (
    <>
      <CaseStudyHero />
      <Cta />
    </>
  );
};

export default Page;
