import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  date: string;
  dateTime: string;
  badges: string[];
  title: string;
  href: string;
  className?: string;
  /** Override default figure height (e.g. famous blog `h-[370px]`). */
  figureClassName?: string;
}

export const BlogCard = forwardRef<HTMLElement, BlogCardProps>(function BlogCard(
  { imageSrc, imageAlt, date, dateTime, badges, title, href, className, figureClassName },
  ref
) {
  return (
    <article
      ref={ref}
      className={cn(
        'underline-hover-effect-black group w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6',
        className
      )}
    >
      <figure
        className={cn('relative h-[276px] w-full overflow-hidden rounded-2xl', figureClassName)}
      >
        <Link href={href} className="block size-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </figure>

      <div className="space-y-4">
        <time
          className="font-inter-tight text-tagline-4 text-background-13/80 inline-block font-normal"
          dateTime={dateTime}
        >
          {date}
        </time>

        {badges.length > 0 && (
          <div className="flex items-center justify-start gap-x-2">
            {badges.map((badge) => (
              <div
                key={badge}
                className="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
              >
                {badge}
              </div>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="font-sora blog-title-black text-sora-heading-5 text-background-13/90 line-clamp-2 block"
        >
          <h3>{title}</h3>
        </Link>
      </div>
    </article>
  );
});

BlogCard.displayName = 'BlogCard';
