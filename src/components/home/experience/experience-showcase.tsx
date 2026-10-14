import RevealAnimation from '@/src/components/animation/reveal-animation';
import { AiDrivenCybersecurityCard } from '@/src/components/home/experience/ai-driven-cybersecurity-card';
import { ComputerVisionModulesCard } from '@/src/components/home/experience/computer-vision-modules-card';
import { InsightfulDashboardsCard } from '@/src/components/home/experience/insightful-dashboards-card';
import { MultilingualNlpModelsCard } from '@/src/components/home/experience/multilingual-nlp-models-card';
import { NeuralNetworksBuildersCard } from '@/src/components/home/experience/neural-networks-builders-card';
import { RecommendationSystemsCard } from '@/src/components/home/experience/recommendation-systems-card';
import { LinkPrimary } from '@/src/components/shared/ui/button/link-primary';

export const ExperienceShowcase = () => {
  return (
    <div className="space-y-14" role="list" aria-label="AI experience showcase cards">
      <RevealAnimation delay={0.3}>
        <div className="grid grid-cols-12 items-start gap-4 lg:gap-2">
          <NeuralNetworksBuildersCard />
          <MultilingualNlpModelsCard />
          <AiDrivenCybersecurityCard />
          <ComputerVisionModulesCard />
          <RecommendationSystemsCard />
          <InsightfulDashboardsCard />
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.8}>
        <div className="text-center" role="region" aria-label="Call to action">
          <LinkPrimary href="/contact" aria-label="Schedule an Architecture Review">
            Schedule an architecture review
          </LinkPrimary>
        </div>
      </RevealAnimation>
    </div>
  );
};
