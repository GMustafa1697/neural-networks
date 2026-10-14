import RevealAnimation from '@/src/components/animation/reveal-animation';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface BlogDetailsMarkdownProps {
  content: string;
}

const BlogDetailsMarkdown = ({ content }: BlogDetailsMarkdownProps) => {
  return (
    <section className="lp:pb-39! pb-20 md:pb-28" aria-label="Article body">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="blog-details-markdown">
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default BlogDetailsMarkdown;
