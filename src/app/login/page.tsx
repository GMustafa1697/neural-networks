import LoginHero from '@/src/components/login/login-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Login - eComSmiths'),
};

const Page = () => {
  return <LoginHero />;
};

export default Page;
