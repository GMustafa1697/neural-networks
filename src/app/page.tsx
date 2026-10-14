import Blog from '@/src/components/home/blog';
import Cta from '@/src/components/shared/cta';
import Clients from '@/src/components/home/clients';
import Ecosystem from '@/src/components/home/ecosystem';
import Experience from '@/src/components/home/experience';
import Hero from '@/src/components/home/hero';
import Pricing from '@/src/components/home/pricing';
import Solutions from '@/src/components/home/solutions';
import Testimonial from '@/src/components/home/testimonial';
import TrackRecord from '@/src/components/home/track-record';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'eComSmiths | Next.js E-Commerce Development Agency | Code, craft, scale',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Solutions />
      <TrackRecord />
      <Experience />
      <Pricing />
      <Ecosystem />
      <Testimonial />
      <Blog />
      <Cta />
    </>
  );
};

export default Page;
