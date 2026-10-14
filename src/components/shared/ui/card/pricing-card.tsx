import { CheckIcon } from '@/src/components/shared/icon';
import { LinkPrimaryV2 } from '@/src/components/shared/ui/button/link-primary-v2';
import { PricingButton } from '@/src/components/shared/ui/button/pricing-button';
import { cn } from '@/src/utils/cn';
import { forwardRef } from 'react';

export interface PricingCardProps {
  title: string;
  description: string;
  priceAmount: string;
  pricePeriod?: string;
  features: string[];
  featuresAriaLabel: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  className?: string;
}

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(function PricingCard(
  {
    title,
    description,
    priceAmount,
    pricePeriod = '/mo',
    features,
    featuresAriaLabel,
    ctaLabel,
    ctaHref,
    featured = false,
    className,
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8',
        className
      )}
    >
      <div className="space-y-1">
        <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">{title}</h3>
        <p
          className={cn(
            'font-inter-tight text-tagline-3 text-background-13/50 max-w-[280px] font-normal'
          )}
        >
          {description}
        </p>
      </div>

      <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
        <span className="text-background-13/30" aria-hidden="true">
          $
        </span>
        <span>{priceAmount}</span>
        <span className="text-it-heading-6 text-background-13/30">{pricePeriod}</span>
      </h4>

      <ul className="space-y-2" aria-label={featuresAriaLabel}>
        {features.map((feature) => (
          <li key={feature} className="flex items-center justify-start gap-x-3">
            <span aria-hidden="true">
              <CheckIcon className="h-[9px] w-[13px] shrink-0 stroke-black" />
            </span>
            <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="w-full">
        {featured ? (
          <LinkPrimaryV2 href={ctaHref} className="bg-background-4" aria-label={ctaLabel}>
            {ctaLabel}
          </LinkPrimaryV2>
        ) : (
          <PricingButton href={ctaHref} aria-label={ctaLabel}>
            {ctaLabel}
          </PricingButton>
        )}
      </div>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';
