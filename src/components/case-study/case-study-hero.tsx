import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import {
  CaseStudyCard,
  type CaseStudyMetric,
} from '@/src/components/shared/ui/card/case-study-card';
import type { CaseStudy } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

const CaseStudyHero = () => {
  const studies = getMarkDownData<CaseStudy>('src/data/case-study', false, 'order');

  return (
    <section
      className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28"
      aria-labelledby="case-study-page-heading"
    >
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="case-study-page-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal tracking-[-2.4px]"
              >
                Our proven track record
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal">
                See how we&apos;ve delivered measurable success to our clients.
              </p>
            </TextReveal>
          </div>

          <div className="space-y-14">
            {studies.map((study) => {
              const metricLeft: CaseStudyMetric = {
                value: study.metricLeft.value,
                label: study.metricLeft.label,
                ariaLabel: study.metricLeft.ariaLabel,
                suffix: study.metricLeft.suffix,
              };
              const metricRight: CaseStudyMetric = {
                value: study.metricRight.value,
                label: study.metricRight.label,
                ariaLabel: study.metricRight.ariaLabel,
                suffix: study.metricRight.suffix,
              };
              return (
                <CaseStudyCard
                  key={study.slug}
                  href={`/case-study/${study.slug}`}
                  imageSrc={study.image}
                  imageAlt={study.imageAlt}
                  title={study.title}
                  teaser={study.teaser}
                  personName={study.personName}
                  personRole={study.personRole}
                  metricLeft={metricLeft}
                  metricRight={metricRight}
                  darkPanelAriaLabel={study.darkPanelAriaLabel ?? study.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
