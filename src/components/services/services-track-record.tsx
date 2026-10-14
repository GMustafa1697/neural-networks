import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import {
  CaseStudyCard,
  type CaseStudyMetric,
} from '@/src/components/shared/ui/card/case-study-card';
import type { CaseStudy } from '@/src/interface/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

const ServicesTrackRecord = () => {
  const caseStudies = getMarkDownData<CaseStudy>('src/data/case-study').slice(0, 4);

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="lp:py-39! py-20 md:py-28" aria-labelledby="services-track-record-heading">
      <div className="main-container">
        <div className="space-y-17.5">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="services-track-record-heading"
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
            {caseStudies.map((study) => {
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

export default ServicesTrackRecord;
