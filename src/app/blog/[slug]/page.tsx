import BlogDetailsHero from '@/src/components/blog/blog-details-hero';
import BlogDetailsMarkdown from '@/src/components/blog/blog-details-markdown';
import BlogDetailsRelated from '@/src/components/blog/blog-details-related';
import Cta from '@/src/components/shared/cta';
import { BlogPost } from '@/src/interface/interface';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData<BlogPost>('src/data/blog');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog Details - eComSmiths',
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blogContent = getMarkDownContent('src/data/blog/', slug);

  return (
    <>
      <BlogDetailsHero data={blogContent.data} />
      <BlogDetailsMarkdown content={blogContent.content} />
      <BlogDetailsRelated filterBy={blogContent.data.badges} />
      <Cta />
    </>
  );
};

export default Page;
