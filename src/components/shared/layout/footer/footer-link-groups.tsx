import RevealAnimation from '@/src/components/animation/reveal-animation';
import { footerNavColumns } from '@/src/data/footer-links';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';

const linkClassName =
  'text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white font-inter-tight';

export const FooterLinkGroups = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
      {footerNavColumns.map((column, columnIndex) => (
        <div
          key={column.title}
          className={cn(
            'col-span-12 sm:col-span-4',
            columnIndex === 0 ? 'lg:pl-6' : 'lg:col-span-4'
          )}
        >
          <RevealAnimation delay={0.3 + columnIndex * 0.1}>
            <div className="space-y-1">
              <p className="font-inter-tight text-tagline-2 font-semibold text-white/90">{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`} className="py-2">
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      ))}
    </div>
  );
};
