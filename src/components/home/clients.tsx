import asanaMetal from '@/public/images/icons/asana-metal-without-text.svg';
import discordMetal from '@/public/images/icons/discord-metal-without-text.svg';
import dropboxMetal from '@/public/images/icons/dropbox-metal-without-text.svg';
import hotjarMetal from '@/public/images/icons/hotjar-metal-without-text.svg';
import notionMetal from '@/public/images/icons/notion-metal-without-text.svg';
import scapicMetal from '@/public/images/icons/scapic-metal-without-text.svg';
import secureSpaceMetal from '@/public/images/icons/secure-space-metal-without-text.svg';
import spotifyMetal from '@/public/images/icons/spotify-metal-without-text.svg';
import stripeMetal from '@/public/images/icons/stripe-metal-without-text.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { cn } from '@/src/utils/cn';
import Image, { type StaticImageData } from 'next/image';

interface ClientLogo {
  src: StaticImageData;
  alt: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { src: scapicMetal, alt: 'Scapic logo' },
  { src: notionMetal, alt: 'Notion logo' },
  { src: hotjarMetal, alt: 'Hotjar logo' },
  { src: discordMetal, alt: 'Discord logo' },
  { src: dropboxMetal, alt: 'Dropbox logo' },
  { src: stripeMetal, alt: 'Stripe logo' },
  { src: spotifyMetal, alt: 'Spotify logo' },
  { src: asanaMetal, alt: 'Asana logo' },
  { src: secureSpaceMetal, alt: 'Secure Space logo' },
];

const Clients = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn('pt-[45px] md:pt-[85px]', className)}
      aria-label="Our clients and partners"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div
            className="flex size-full items-center justify-evenly max-sm:gap-x-3"
            aria-label="Client logos"
          >
            {CLIENT_LOGOS.map((logo) => (
              <figure key={logo.alt} className="h-11 w-7">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="size-full object-contain"
                  itemProp="logo"
                />
              </figure>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Clients;
