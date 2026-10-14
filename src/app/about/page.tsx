import AboutHero from '@/src/components/about/about-hero';
import AboutTeam from '@/src/components/about/about-team';
import { AboutVisionVideo } from '@/src/components/about/about-vision-video';
import VisionAndMission from '@/src/components/about/vision-and-mission';
import Clients from '@/src/components/home/clients';
import Cta from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('About Us - Next.js Development Agency | eComSmiths'),
};

const Page = () => {
  return (
    <>
      <AboutHero />
      <Clients className="pt-0!" />
      <VisionAndMission />
      <AboutVisionVideo />
      <AboutTeam />
      <Cta />
    </>
  );
};

export default Page;
