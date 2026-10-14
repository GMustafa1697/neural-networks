import ContactForm from '@/src/components/contact/contact-form';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Contact - eComSmiths'),
};

const Page = () => {
  return <ContactForm />;
};

export default Page;
