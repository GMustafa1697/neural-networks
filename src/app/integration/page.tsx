import IntegrationFaq from '@/src/components/integration/integration-faq';
import IntegrationHero from '@/src/components/integration/integration-hero';
import Cta from '@/src/components/shared/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integration - eComSmiths',
  description:
    'eComSmiths works with your ecosystem. Connect Slack, Discord, and the tools you already use.',
};

const Page = () => {
  return (
    <>
      <IntegrationHero />
      <IntegrationFaq />
      <Cta />
    </>
  );
};

export default Page;
