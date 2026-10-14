import ServiceDetailsMarkdown from '@/src/components/services/service-details-markdown';
import ServicesTrackRecord from '@/src/components/services/services-track-record';
import Cta from '@/src/components/shared/cta';
import type { Service } from '@/src/interface/interface';
import { generateMetadata as buildMeta } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const services = getMarkDownData<Service>('src/data/services');
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/services/', slug);
  const data = doc.data as Partial<Service>;
  const title = data.title
    ? `${data.title} | Next.js Development | eComSmiths`
    : 'Next.js Development Service | eComSmiths';
  const description =
    data.description ||
    'High-performance Next.js development services for e-commerce by eComSmiths.';
  return buildMeta(title, description);
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/services/', slug);

  return (
    <>
      <ServiceDetailsMarkdown content={doc.content} />
      <ServicesTrackRecord />
      <Cta />
    </>
  );
};

export default Page;
