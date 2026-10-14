'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { MetricsCornerArrows } from '@/src/components/shared/ui/card/metrics-corner-arrows';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export interface CaseStudyMetric {
  value: number;
  label: string;
  ariaLabel: string;
  suffix?: string;
}

function formatMetricValue(metric: CaseStudyMetric) {
  const suffix = metric.suffix ?? '%';
  return `${metric.value}${suffix}`;
}

export interface CaseStudyCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  teaser: string;
  personName: string;
  personRole: string;
  metricLeft: CaseStudyMetric;
  metricRight: CaseStudyMetric;
  darkPanelAriaLabel: string;
  className?: string;
}

export const CaseStudyCard = ({
  href,
  imageSrc,
  imageAlt,
  title,
  teaser,
  personName,
  personRole,
  metricLeft,
  metricRight,
  darkPanelAriaLabel,
  className,
}: CaseStudyCardProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2',
        className
      )}
    >
      <RevealAnimation delay={0.3} className="col-span-12 md:hidden lg:col-span-3 lg:block">
        <figure className="relative h-[265px] overflow-hidden rounded-3xl">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </figure>
      </RevealAnimation>

      <RevealAnimation delay={0.3}>
        <div className="relative col-span-12 hidden md:col-span-6 md:block lg:col-span-3 lg:hidden">
          <Link href={href}>
            <figure className="relative h-[265px] overflow-hidden rounded-3xl">
              <div
                className="bg-background-6/60 absolute top-0 left-0 z-10 size-full rounded-3xl"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 z-20 space-y-1 p-6">
                <h3 className="font-sora text-sora-heading-6 text-white/90">{title}</h3>
                <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                  {teaser}
                </p>
              </div>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </figure>
          </Link>
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.4}>
        <div className="col-span-12 md:hidden lg:col-span-4 lg:block">
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label={darkPanelAriaLabel}
          >
            <div className="space-y-1">
              <Link href={href}>
                <h3 className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90">
                  {title}
                </h3>
              </Link>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60">{teaser}</p>
            </div>
            <div>
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90">
                {personName}
              </h4>
              <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                {personRole}
              </p>
            </div>
          </div>
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.5}>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Link href={href}>
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden
              >
                <MetricsCornerArrows />
              </div>

              <div className="flex items-center justify-start gap-x-10 lg:justify-center">
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label={metricLeft.ariaLabel}
                  >
                    {formatMetricValue(metricLeft)}
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    {metricLeft.label}
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label={metricRight.ariaLabel}
                  >
                    {formatMetricValue(metricRight)}
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    {metricRight.label}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </RevealAnimation>
    </div>
  );
};
