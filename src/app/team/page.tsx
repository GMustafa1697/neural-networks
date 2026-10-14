import TeamCoreValues from '@/src/components/team/team-core-values';
import TeamHero from '@/src/components/team/team-hero';
import Cta from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Team - eComSmiths'),
};

const Page = () => {
  return (
    <>
      <TeamHero />
      <TeamCoreValues />
      <Cta />
    </>
  );
};

export default Page;
