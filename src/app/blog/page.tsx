import BlogHero from '@/src/components/blog/blog-hero';
import FamousBlog from '@/src/components/blog/famous-blog';
import Cta from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Blog - eComSmiths'),
};

const Page = () => {
  return (
    <>
      <BlogHero />
      <FamousBlog />
      <Cta />
    </>
  );
};

export default Page;
