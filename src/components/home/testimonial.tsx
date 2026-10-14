import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { TestimonialCard } from '@/src/components/shared/ui/card/testimonial-card';

interface TestimonialItem {
  content: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  position: string;
  isLight: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    content: 'eComSmiths transformed our store into a sub-second Next.js storefront. Our mobile conversion rate jumped by 42% in month one.',
    imageSrc: '/images/opai-avatar-img-275.png',
    imageAlt: 'Jordan Smith, Head of E-Commerce',
    name: 'Jordan Smith',
    position: 'Head of E-Commerce, Nordic Goods',
    isLight: true,
  },
  {
    content: 'The Next.js App Router architecture eComSmiths engineered dropped our global TTFB from 1.8s down to 240ms.',
    imageSrc: '/images/opai-avatar-img-276.png',
    imageAlt: 'Mia Thompson, VP of Digital',
    name: 'Mia Thompson',
    position: 'VP of Digital, Luminate Apparel',
    isLight: true,
  },
  {
    content: 'Their API integration between Shopify Storefront, Sanity CMS, and our ERP works flawlessly with zero sync delays.',
    imageSrc: '/images/opai-avatar-img-03.png',
    imageAlt: 'Alex Johnson, CTO',
    name: 'Alex Johnson',
    position: 'CTO, Modern Living',
    isLight: true,
  },
  {
    content:
      'Working with eComSmiths was the best technical decision we made. Our mobile Core Web Vitals score is a verified 99.',
    imageSrc: '/images/opai-avatar-img-274.png',
    imageAlt: 'Sarah Chen, Founder',
    name: 'Sarah Chen',
    position: 'Founder, Luxe Commerce',
    isLight: false,
  },
  {
    content:
      'The team delivered our headless storefront migration ahead of schedule with zero checkout downtime during our biggest flash sale.',
    imageSrc: '/images/opai-avatar-img-278.png',
    imageAlt: 'David Okonkwo, Engineering Director',
    name: 'David Okonkwo',
    position: 'Engineering Director, PeakGear',
    isLight: false,
  },
  {
    content:
      "eComSmiths' Next.js speed optimization sprint pruned our JS bundles by 65%. Cart abandonment dropped dramatically.",
    imageSrc: '/images/opai-avatar-img-279.png',
    imageAlt: 'Priya Sharma, VP E-Commerce',
    name: 'Priya Sharma',
    position: 'VP E-Commerce, Veloce Beauty',
    isLight: true,
  },
  {
    content: 'Custom Stripe elements, instant Algolia search, and edge caching — eComSmiths built an enterprise storefront that scales effortlessly.',
    imageSrc: '/images/opai-avatar-img-280.png',
    imageAlt: 'Elena Torres, CTO',
    name: 'Elena Torres',
    position: 'CTO, Horizon Retail',
    isLight: true,
  },
  {
    content:
      'We replatformed from a slow monolithic backend to Next.js with eComSmiths. The speed difference is night and day, and our average order value grew by 28%.',
    imageSrc: '/images/opai-avatar-img-242.jpg',
    imageAlt: 'Ethan Green, Operations Director',
    name: 'Ethan Green',
    position: 'Operations Director, Kredo Supply',
    isLight: true,
  },
  {
    content:
      "Partnering with eComSmiths gave us an unfair speed advantage. The headless Next.js architecture enables our team to launch rich merchandising layouts in minutes.",
    imageSrc: '/images/opai-avatar-img-243.jpg',
    imageAlt: 'Claire Martinez, Co-Founder',
    name: 'Claire Martinez',
    position: 'Co-Founder, Aura Organics',
    isLight: false,
  },
];

const Testimonial = () => {
  return (
    <section
      className="py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="testimonials-heading"
    >
      <div className="main-container">
        <div className="space-y-19">
          <TextReveal>
            <h2
              id="testimonials-heading"
              className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora text-center font-normal"
            >
              What our clients say
            </h2>
          </TextReveal>

          <div className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:*:col-span-4 xl:gap-2 xl:[&>*:nth-child(9n+1)]:col-span-3 xl:[&>*:nth-child(9n+2)]:col-span-3 xl:[&>*:nth-child(9n+3)]:col-span-3 xl:[&>*:nth-child(9n+4)]:col-span-3 xl:[&>*:nth-child(9n+5)]:col-span-4 xl:[&>*:nth-child(9n+6)]:col-span-4 xl:[&>*:nth-child(9n+7)]:col-span-4 xl:[&>*:nth-child(9n+8)]:col-span-6 xl:[&>*:nth-child(9n+9)]:col-span-6">
            {testimonials.map((item, index) => (
              <RevealAnimation delay={0.2 + index * 0.1} key={item.imageSrc}>
                <TestimonialCard
                  content={item.content}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  name={item.name}
                  position={item.position}
                  isLight={item.isLight}
                />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
