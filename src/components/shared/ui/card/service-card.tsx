import { cn } from '@/src/utils/cn';

export interface ServiceCardProps {
  title: string;
  description: string;
  /** Icon font class from `icon-fonts.css`, e.g. `ns-shape-1`. */
  icon: string;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14',
        className
      )}
      aria-label={title}
    >
      <span
        className="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
        aria-hidden
      >
        <span className={cn(icon, 'text-4xl text-white')} />
      </span>

      <div className="space-y-1">
        <h3
          className="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
          itemProp="description"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
