import TeamDetailsCoreValues from '@/src/components/team/team-details-core-values';
import TeamDetailsHero from '@/src/components/team/team-details-hero';
import TeamDetailsRelated from '@/src/components/team/team-details-related';
import Cta from '@/src/components/shared/cta';
import type { TeamMember } from '@/src/interface/interface';
import { generateMetadata as buildMeta } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const members = getMarkDownData<TeamMember>('src/data/team');
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/team/', slug);
  const data = doc.data as Partial<TeamMember>;
  const name = data.name ?? 'Team';
  const title = `${name} - Team - eComSmiths`;
  return buildMeta(title);
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/team/', slug);
  const data = doc.data as Partial<TeamMember>;

  return (
    <>
      <TeamDetailsHero data={data} content={doc.content} />
      <TeamDetailsCoreValues />
      <TeamDetailsRelated currentSlug={slug} />
      <Cta />
    </>
  );
};

export default Page;
