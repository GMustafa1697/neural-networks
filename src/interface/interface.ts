export interface MobileMenuSubItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuData {
  id: string;
  title: string;
  submenu: MobileMenuSubItem[];
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  href: string;
}

export interface CaseStudyMetricFrontMatter {
  value: number;
  label: string;
  ariaLabel: string;
  /** Display suffix after the value. Defaults to `%` (e.g. `48%`). Use `x` for multipliers like `3.2x`. */
  suffix?: string;
}

/** Front matter in each `src/data/case-study/*.md` file. */
export interface CaseStudy {
  title: string;
  badges: string[];
  image: string;
  imageAlt: string;
  teaser: string;
  personName: string;
  personRole: string;
  metricLeft: CaseStudyMetricFrontMatter;
  metricRight: CaseStudyMetricFrontMatter;
  heroImageMain: string;
  heroImageSecondary: string[];
  darkPanelAriaLabel?: string;
  order?: number;
  slug: string;
  content: string;
  [key: string]: unknown;
}

/** Front matter in each `src/data/team/*.md` file. */
export interface TeamMember {
  name: string;
  position: string;
  image: string;
  heroImage: string;
  email: string;
  phone: string;
  order?: number;
  slug: string;
  content: string;
  [key: string]: unknown;
}

/** Front matter in each `src/data/services/*.md` file. */
export interface Service {
  title: string;
  description: string;
  icon: string;
  order?: number;
  slug: string;
  content: string;
  [key: string]: unknown;
}

/** Front matter in each `src/data/blog/*.md` file. */
export interface BlogPost {
  image: string;
  badges: string[];
  famousBlog?: boolean;
  authorInfo: {
    name: string;
    img: string;
  };
  publishedAt: string;
  readTime: string;
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  [key: string]: unknown;
  content: string;
  slug: string;
}
