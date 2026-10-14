import SignupHero from '@/src/components/signup/signup-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Signup - eComSmiths'),
};

const Page = () => {
  return <SignupHero />;
};

export default Page;
