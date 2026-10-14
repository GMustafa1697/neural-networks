import { cn } from '@/src/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

export type TeamCardProps = Readonly<{
  imageSrc: string | StaticImageData;
  name: string;
  position: string;
  href?: string;
  className?: string;
}>;

export const TeamCard = ({ imageSrc, name, position, href = '/team', className }: TeamCardProps) => {
  return (
    <Link href={href} className="block">
      <div
        className={cn(
          'border-stroke-1/11 w-full space-y-4 rounded-3xl border bg-white p-5 md:p-6',
          className
        )}
      >
        <figure className="relative h-[395px] w-full overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </figure>
        <div className="space-y-1">
          <h3 className="font-sora text-sora-heading-6 text-background-13 font-normal">{name}</h3>
          <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">{position}</p>
        </div>
      </div>
    </Link>
  );
};
