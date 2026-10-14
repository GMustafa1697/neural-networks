import RevealAnimation from '@/src/components/animation/reveal-animation';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface ServiceDetailsMarkdownProps {
  content: string;
}

const ServiceDetailsMarkdown = ({ content }: ServiceDetailsMarkdownProps) => {
  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28" aria-label="Service details">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="service-details-markdown">
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ServiceDetailsMarkdown;
