import CaseStudyDetailsHero from '@/src/components/case-study/case-study-details-hero';
import CaseStudyDetailsRelated from '@/src/components/case-study/case-study-details-related';
import Cta from '@/src/components/shared/cta';
import type { CaseStudy } from '@/src/interface/interface';
import { generateMetadata as buildMeta } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const studies = getMarkDownData<CaseStudy>('src/data/case-study');
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/case-study/', slug);
  const data = doc.data as Partial<CaseStudy>;
  const title = data.title
    ? `${data.title} - Case Study - eComSmiths`
    : 'Case Study Details - eComSmiths';
  return buildMeta(title);
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const caseStudy = getMarkDownContent('src/data/case-study/', slug);
  const data = caseStudy.data as Partial<CaseStudy>;

  return (
    <>
      <CaseStudyDetailsHero data={data} content={caseStudy.content} />
      <CaseStudyDetailsRelated currentSlug={slug} filterBy={data.badges ?? []} />
      <Cta />
    </>
  );
};

export default Page;
