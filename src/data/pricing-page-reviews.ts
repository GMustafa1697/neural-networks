export interface PricingPageReview {
  content: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  position: string;
  isLight: boolean;
}

export const pricingPageReviews: PricingPageReview[] = [
  {
    content:
      "eComSmiths' analytics tools cut our reporting time by 70%. We now get insights in minutes instead of days.",
    imageSrc: '/images/opai-avatar-img-275.png',
    imageAlt: 'Jordan Smith, Data Analyst at FinServe',
    name: 'Jordan Smith',
    position: 'Data Analyst, FinServe',
    isLight: true,
  },
  {
    content:
      'Our support tickets dropped by 40% after deploying their AI chatbot. Customer satisfaction is at an all-time high.',
    imageSrc: '/images/opai-avatar-img-276.png',
    imageAlt: 'Mia Thompson, Chief Operations Officer at Nexora',
    name: 'Mia Thompson',
    position: 'Chief Operations Officer, Nexora',
    isLight: true,
  },
  {
    content:
      'The custom NLP pipeline they built has transformed how we handle feedback. Response times and accuracy are outstanding.',
    imageSrc: '/images/opai-avatar-img-03.png',
    imageAlt: 'Alex Johnson, Customer Experience Lead at BrandFlow',
    name: 'Alex Johnson',
    position: 'Customer Experience Lead, BrandFlow',
    isLight: true,
  },
  {
    content:
      'From inventory forecasting to personalized recommendations, eComSmiths delivered exactly what we needed. ROI within 3 months.',
    imageSrc: '/images/opai-avatar-img-274.png',
    imageAlt: 'Sarah Chen, Founder at ShopLuxe',
    name: 'Sarah Chen',
    position: 'Founder, ShopLuxe',
    isLight: false,
  },
];
