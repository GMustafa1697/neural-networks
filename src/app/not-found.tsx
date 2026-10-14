import { NotFoundHero } from '@/src/components/not-found/not-found-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: '404 - eComSmiths',
};

export default function NotFound() {
  return <NotFoundHero />;
}
