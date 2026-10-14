import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://ecomsmiths.com/';
export const DEFAULT_TITLE =
  'eComSmiths - Next.js E-Commerce Development Agency | Code, craft, scale';
export const DEFAULT_DESCRIPTION =
  'eComSmiths is an elite e-commerce development agency specializing in Next.js headless storefronts, complex API integrations, and sub-second performance optimization. Code, craft, scale.';
export const DEFAULT_IMAGE_URL = 'https://ecomsmiths.com/images/og-image.jpg';

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'eComSmiths',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (
  title?: string,
  description?: string,
  canonicaUrl?: string,
  imageUrl?: string
): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630 }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

export { defaultMetadata, generateMetadata };
