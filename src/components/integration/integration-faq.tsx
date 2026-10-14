'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
} from '@/src/components/shared/ui/accordion';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import Image from 'next/image';

const AVATARS = [
  { src: '/images/opai-avatar-img-01.png', alt: 'Avatar 1' },
  { src: '/images/opai-avatar-img-02.png', alt: 'Avatar 2' },
  { src: '/images/opai-avatar-img-03.png', alt: 'Avatar 3' },
  { src: '/images/opai-avatar-img-04.png', alt: 'Avatar 4' },
];

const faqData = [
  {
    value: 'faq-1',
    question: 'What are neural networks in eComSmiths?',
    answer:
      'Neural networks are machine-learning models that learn patterns from data—used here for language understanding, classification, forecasting, and automation. eComSmiths wraps these models in APIs and UI so you get neural network capabilities without building training pipelines from scratch.',
  },
  {
    value: 'faq-2',
    question: 'How do neural networks connect to my existing stack?',
    answer:
      'eComSmiths exposes model inference through integrations: REST APIs, webhooks, and connectors to CRMs, help desks, chat tools, and data warehouses. Events in those systems can trigger neural network predictions or embeddings, and results flow back into the tools your teams already use.',
  },
  {
    value: 'faq-3',
    question: 'Which environments can host or call eComSmiths neural networks?',
    answer:
      'You can call models from cloud apps, on-prem gateways, and serverless workers. We support common stacks (Node, Python, .NET) via HTTPS, plus batch and streaming patterns so neural network outputs fit batch ETL jobs or real-time channels like Slack, Teams, and custom front ends.',
  },
  {
    value: 'faq-4',
    question: 'How is data protected when models run through integrations?',
    answer:
      'Traffic uses TLS in transit; you can pin regions and retention policies for stored artifacts. Role-based access, SSO, and audit logs apply to both integration credentials and model endpoints—so training data, prompts, and neural network outputs stay within your governance rules.',
  },
  {
    value: 'faq-5',
    question: 'Do we need ML engineers to wire up neural network integrations?',
    answer:
      'No for standard paths: guided setup covers OAuth, API keys, and mapping fields to model inputs. For custom architectures—fine-tuned transformers or ensemble models—your engineers use our docs and sandbox; eComSmiths keeps deployment and versioning consistent across environments.',
  },
  {
    value: 'faq-6',
    question: 'Can we deploy our own trained neural network models?',
    answer:
      'Yes. Bring ONNX, PyTorch, or TensorFlow artifacts (subject to supported runtimes) and register them in eComSmiths. The same integration layer routes traffic to your models or ours, so routing, monitoring, and fallbacks stay unified across chatbots, workflows, and batch scoring.',
  },
  {
    value: 'faq-7',
    question: 'How long until neural network integrations are live?',
    answer:
      'Sandbox-to-first inference is often same-day for API-only use. Full production rollouts—SSO, rate limits, drift monitoring, and multi-environment promotion—typically range from a few days to two weeks depending on validation and change-management requirements.',
  },
];

const IntegrationFaq = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="integration-faq-heading">
      <div className="main-container">
        <div className="mx-auto max-w-[850px] rounded-2xl">
          <div className="space-y-[70px]">
            <div className="space-y-8">
              <div className="space-y-3 text-center">
                <TextReveal>
                  <h2
                    id="integration-faq-heading"
                    className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
                  >
                    Frequently asked questions
                  </h2>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[550px] font-normal">
                    Frequently asked questions ordered by popularity. Remember that if the visitor
                    has not committed to the call to action, they may still have questions
                  </p>
                </TextReveal>
              </div>

              <div className="flex items-center justify-center gap-4 pb-14 max-[375px]:flex-col md:pb-16 xl:pb-[70px]">
                <AvatarReveal className="flex -space-x-2.5">
                  {AVATARS.map(({ src, alt }) => (
                    <AvatarItem
                      key={src}
                      className="inline-block size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={36}
                        height={36}
                        className="size-full object-cover object-center"
                      />
                    </AvatarItem>
                  ))}
                  <AvatarItem className="text-tagline-4 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0d0d1280] font-medium text-white/80 ring-2 ring-white backdrop-blur-[6px]">
                    99+
                  </AvatarItem>
                </AvatarReveal>
                <div className="text-left max-[375px]:text-center">
                  <p className="text-tagline-3 text-background-13/90 block font-medium">
                    Trusted by 200+
                  </p>
                  <p className="text-tagline-4 text-background-13/60">Customers across the globe</p>
                </div>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <Accordion
                defaultOpen="faq-1"
                className="accordion space-y-3"
                role="tablist"
                aria-label="Frequently Asked Questions"
              >
                {faqData.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="accordion-item group data-[state=open]:bg-background-4 border-stroke-3/25 relative z-10 w-full overflow-hidden rounded-xl border bg-transparent px-5 transition-colors duration-300 ease-in-out md:rounded-3xl md:px-6"
                  >
                    <AccordionAction className="font-inter-tight text-tagline-2 md:text-tagline-1 data-[state=closed]:text-background-13/60 relative flex w-full cursor-pointer items-center justify-between pt-5 pb-5 text-left text-white/60 transition-all duration-300 ease-in-out group-data-[state=open]:pb-2.5! focus:outline-none data-[state=open]:text-white/90 md:pt-6 md:pb-6">
                      {item.question}
                    </AccordionAction>
                    <AccordionContent
                      className="w-full px-0!"
                      contentClassName="font-inter-tight text-tagline-3 sm:text-tagline-2 cursor-text pb-6 text-left text-white/50"
                    >
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationFaq;
