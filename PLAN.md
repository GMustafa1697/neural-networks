# Conversion Plan: Nexsas Template to eComSmiths Next.js Services Showcase

## Executive Overview
- **Agency Name**: eComSmiths
- **Tagline**: "Code, craft, scale"
- **Primary Domain**: https://ecomsmiths.com
- **Brand Theme**: Dark navy (`#0A0F1D`) + Lime green (`#BBF438` / `#A3E635`) + Crisp White & Slate
- **Service Scope**: **ONLY** Next.js Development for high-growth & enterprise e-commerce:
  1. Headless Storefront Architecture (Next.js App Router, React Server Components, Edge SSR)
  2. Omnichannel API Integrations (Shopify Storefront API, BigCommerce, Commercelayer, Stripe, ERPs, PIMs)
  3. Sub-Second Performance Optimization (Core Web Vitals 99+, INP < 50ms, Edge Caching, Image Pipeline)

---

## 1. Page-by-Page List of Changes

### 1.1 Root Layout & Global Shell (`src/app/layout.tsx`, `src/styles/`, `src/utils/`)
- **Metadata**: Rebrand `generateMetaData.ts` default title to `eComSmiths - Next.js E-Commerce Development Agency | Code, craft, scale` and description to emphasize headless storefronts, API integrations, and sub-second performance.
- **Brand Colors**: Update `--color-brand-navy: #0a0f1d` and `--color-brand-lime: #bbf438` in `src/styles/variable.css`.
- **CSS Cleanliness**: Remove all template comments referencing "Nexsas" or old template classes in `src/styles/common.css`.
- **Icons & Manifest**: Update `src/app/icon.svg`, `src/app/favicon.svg`, and `src/app/site.webmanifest` to eComSmiths branding.

### 1.2 Home Page (`/` - `src/app/page.tsx`)
- **Metadata**: Title `eComSmiths | Next.js E-Commerce Development Agency | Code, craft, scale`.
- **Hero (`src/components/home/hero.tsx`, `heroLeftCard.tsx`, `heroLeftCardTwo.tsx`, `heroRightCard.tsx`)**:
  - H1: "Next.js storefronts that convert, perform, and scale"
  - Subcopy: "We build ultra-fast headless storefronts, seamless API integrations, and sub-second performance optimizations for ambitious e-commerce brands. Code, craft, scale."
  - Primary CTA: "Start your project" -> `/contact`
  - Floating Card 1: "Alex Vance, Lead Next.js Architect"
  - Floating Card 2: Headless e-commerce storefront showcase
  - Floating Card 3: Metrics card displaying Core Web Vitals 99+ and sub-second TTFB.
- **Clients (`src/components/home/clients.tsx`)**:
  - E-commerce partner ecosystem: Stripe, Shopify Plus, Sanity, Algolia, Notion, Discord.
- **Solutions (`src/components/home/solutions.tsx`)**:
  - H2: "Engineered for speed, built for conversion"
  - Subcopy: "Specialized Next.js development designed exclusively for enterprise and high-growth e-commerce storefronts."
  - 5 Cards displaying top Next.js services from `src/data/services`: Headless Storefronts, API Integrations, Sub-Second Optimization, Replatforming, and Composable Checkout.
  - CTA: "Discover our services" -> `/services`.
- **TrackRecord (`src/components/home/track-record.tsx`)**:
  - H2: "Proven e-commerce speed & revenue impact"
  - Subcopy: "See how our Next.js storefronts accelerate conversions, drop bounce rates, and eliminate load time bottlenecks."
  - 3 Featured Case Studies:
    1. Shopify Plus Headless Migration (+48% conversion lift, -62% cart abandonment)
    2. Composable Catalog & Edge Caching (91+ Core Web Vitals, -34% catalog indexing latency)
    3. High-Concurrency Checkout APIs (-73% API latency, +28% cart completion surge)
  - CTA: "View all case studies" -> `/case-study`.
- **Experience (`src/components/home/experience.tsx` & `src/components/home/experience/*`)**:
  - H2: "Next.js performance in action"
  - Subcopy: "Explore the technical capabilities powering our headless e-commerce storefronts."
  - 6 Architecture Cards:
    1. Headless Storefront Architecture (React Server Components, Edge SSR)
    2. Real-Time Cart & Checkout APIs (Sub-second cart mutations, zero-latency sync)
    3. Sub-Second Performance Optimization (99+ Lighthouse, INP < 50ms)
    4. Multi-Platform E-Commerce Integrations (Shopify, BigCommerce, Commercelayer)
    5. Algorithmic Search & Filtering (Algolia, Meilisearch, Edge filtering)
    6. Composable Enterprise Architecture (ERP, PIM, CMS unified in Next.js)
  - CTA: "Schedule an architecture review" -> `/contact`.
- **Pricing (`src/components/home/pricing.tsx`)**:
  - H2: "Transparent Next.js development packages"
  - 3 Pricing Tiers: Storefront Launch, Growth Architecture, Enterprise Composable.
- **Ecosystem (`src/components/home/ecosystem.tsx`)**:
  - H2: "Seamless integrations with your e-commerce ecosystem"
  - Subcopy: "Connect Shopify, Stripe, Algolia, Klaviyo, headless CMSs, ERPs, and custom backend APIs into a unified high-performance Next.js storefront."
  - Cards: Stripe, Shopify API, Algolia, Slack, Discord, Edge CDN.
  - CTA: "See all integrations" -> `/integration`.
- **Testimonial (`src/components/home/testimonial.tsx`)**:
  - H2: "What e-commerce founders and CTOs say"
  - 9 Verified e-commerce client quotes focusing on conversion gains, mobile speed improvements, and flawless holiday flash sale resilience.
- **Blog (`src/components/home/blog.tsx`)**:
  - H2: "Next.js e-commerce engineering insights"
  - 3 Latest technical articles on Next.js 16 App Router, Core Web Vitals, and headless commerce.
  - CTA: "Read all engineering insights" -> `/blog`.
- **Cta Section (`src/components/shared/cta.tsx`)**:
  - H2: "Scale faster with a sub-second Next.js storefront"
  - Subcopy: "Partner with eComSmiths to build headless storefronts, robust APIs, and extreme performance. Code, craft, scale."
  - CTA: "Start your project" -> `/contact`.

---

### 1.3 About Us Page (`/about` - `src/app/about/page.tsx`)
- **Metadata**: Title `About Us - Next.js E-Commerce Agency | eComSmiths`.
- **AboutHero (`src/components/about/about-hero.tsx`)**:
  - H2: "Crafting high-performance Next.js storefronts"
  - Subcopy: "eComSmiths was founded by e-commerce engineers obsessed with sub-second page loads, resilient API architectures, and conversion-focused headless storefronts. Code, craft, scale."
  - Recognition Awards:
    - "Next.js Conf Best Storefront Architecture Finalist"
    - "Shopify Plus Partner Engineering Excellence"
    - "Core Web Vitals Elite Optimization Award"
    - "Composable Commerce Innovation Showcase"
  - Satisfaction Counter: 99% Client SLA satisfaction rate.
- **VisionAndMission (`src/components/about/vision-and-mission.tsx`)**:
  - H2: "Building the future of headless commerce"
  - Vision: "To empower ambitious e-commerce brands with sub-second storefronts that turn visitors into lifelong customers."
  - Mission: "To engineer flawless Next.js architectures, bulletproof API integrations, and continuous performance optimization. Code, craft, scale."
  - Featured Card: "Engineering Excellence: Sub-second architectures delivered globally."
  - Key Statistics:
    - 100+ Headless storefronts deployed
    - 99+ Average Core Web Vitals score
    - 60% Mobile load time reduction
    - 35% Average lift in checkout conversion
- **AboutVisionVideo (`src/components/about/about-vision-video.tsx`)**:
  - Retain video component with aria-labels updated for eComSmiths engineering showcase.
- **AboutTeam (`src/components/about/about-team.tsx`)**:
  - H2: "The architects behind eComSmiths"
  - Subcopy: "Our team brings together deep expertise in Next.js, headless commerce architectures, and full-stack performance optimization."
  - CTA: "View our engineering team" -> `/team`.

---

### 1.4 Services Overview & Details (`/services` & `/services/[slug]`)
- **Metadata**: Title `Next.js Development Services | eComSmiths`.
- **ServicesHero (`src/components/services/services-hero.tsx`)**:
  - H2: "Next.js E-Commerce Engineering Services"
  - Subcopy: "Specialized Next.js development designed exclusively for enterprise and high-growth e-commerce storefronts: headless architectures, custom API integrations, and sub-second performance sprints."
  - Service grid reading all items from `src/data/services/*.md`.
- **ServicesTrackRecord (`src/components/services/services-track-record.tsx`)**:
  - Proven performance metrics and case study highlights.
- **Dynamic Service Pages (`src/app/services/[slug]/page.tsx`)**:
  - Complete rewrite of all 13 Markdown service briefs in `src/data/services/` to describe Next.js capabilities:
    1. `deep-learning.md` -> Headless Next.js Storefront Development
    2. `computer-vision.md` -> Omnichannel E-Commerce API Integrations
    3. `edge-ai.md` -> Edge SSR & Global Caching Optimization
    4. `data-insights-predictions.md` -> Core Web Vitals & Speed Remediation Sprints
    5. `generative-models.md` -> Composable Commerce Architecture & Replatforming
    6. `mlops-pipelines.md` -> CI/CD & Automated Storefront Deployment Pipelines
    7. `model-deployment.md` -> Shopify Plus & BigCommerce Next.js Migrations
    8. `multimodal-ai.md` -> Multi-Store & Internationalization (i18n) Architecture
    9. `neural-architecture.md` -> Custom Cart, Checkout & Payment Middleware
    10. `nlp-transformers.md` -> Algorithmic Search, Filtering & Product Discovery
    11. `reinforcement-learning.md` -> Dynamic Pricing & Real-Time Inventory Sync
    12. `time-series-forecasting.md` -> High-Volume Flash Sale Traffic Resilience
    13. `automl-nas.md` -> Headless CMS Architecture (Sanity, Contentful, Strapi)

---

### 1.5 Case Studies Overview & Details (`/case-study` & `/case-study/[slug]`)
- **Metadata**: Title `Case Studies - Next.js Storefront Results | eComSmiths`.
- **CaseStudyHero (`src/components/case-study/case-study-hero.tsx`)**:
  - H2: "Proven Track Record in Next.js E-Commerce"
  - Subcopy: "Detailed engineering breakdowns of our headless storefront migrations, custom API middlewares, and sub-second performance sprints."
- **Dynamic Case Study Pages (`src/app/case-study/[slug]/page.tsx`)**:
  - Update all 7 Markdown files in `src/data/case-study/` to reflect real-world e-commerce outcomes:
    1. `e-commerce-optimization.md`: Shopify Plus Headless Migration (+48% conversion, -62% cart abandonment)
    2. `healthcare-predictive-model.md`: Luxury Apparel Composable Storefront (0.8s mobile LCP, 99 Lighthouse)
    3. `financial-analytics.md`: High-Concurrency Checkout & ERP Middleware (40k checkouts/hr, -73% latency)
    4. `cnn-defect-detection.md`: Global Multi-Currency Storefront Architecture (14 localized storefronts, zero drift)
    5. `neural-perception-systems.md`: Instant Algolia Product Search & Filtering (18ms query response, +31% search conversion)
    6. `smart-grid-demand-forecasting.md`: Flash-Sale Scalability for High-Growth DTC Brand (500k concurrent visitors, 100% uptime)
    7. `transformer-based-support.md`: Monolithic Replatforming to Next.js App Router (-70% bundle size, +44% revenue)

---

### 1.6 Pricing Page (`/pricing` - `src/app/pricing/page.tsx`)
- **Metadata**: Title `Pricing & Packages - Next.js Development | eComSmiths`.
- **PricingHero (`src/components/pricing/pricing-hero.tsx`)**:
  - Wrap home `Pricing` component with consistent spacing.
  - Updates in `src/data/pricing.ts`:
    - **Starter / Storefront Sprint**: $4,900 flat fee. Includes Next.js 16 setup, Shopify/BigCommerce API connection, Core Web Vitals audit, 90+ Lighthouse guarantee, responsive UI.
    - **Pro / Growth Architecture** (Featured): $8,900 flat fee. Includes custom headless storefront, multi-API orchestration (ERP + PIM + CRM), sub-second global edge caching, instant Algolia/Meilisearch search, custom checkout flows.
    - **Enterprise / Composable Scale**: $14,900 flat fee / custom retainer. Includes full composable architecture, multi-brand / multi-currency support, custom middleware microservices, dedicated Slack channel, 99.99% uptime SLA.
- **PricingReviewCards (`src/components/pricing/pricing-review-cards.tsx`)**:
  - Update `src/data/pricing-page-reviews.ts` with e-commerce client testimonials reflecting ROI, speed gains, and sales conversions.

---

### 1.7 Team Page (`/team` - `src/app/team/page.tsx` & `/team/[slug]`)
- **Metadata**: Title `Our Team - Next.js Architects & Engineers | eComSmiths`.
- **TeamHero (`src/components/team/team-hero.tsx`)**:
  - H2: "The Architects Behind eComSmiths"
  - Subcopy: "Senior full-stack Next.js developers, performance engineers, and e-commerce systems architects."
- **TeamCoreValues (`src/components/team/team-core-values.tsx`)**:
  - Values:
    - **Code**: Writing clean, modular, and maintainable TypeScript & React Server Components.
    - **Craft**: Obsessing over millisecond latency, pristine animations, and design fidelity.
    - **Scale**: Architecting headless stores built to handle massive traffic spikes with zero downtime.
    - **Integrity**: Radical transparency, measurable SLA performance, and dedicated engineering support.
- **Dynamic Team Pages (`src/app/team/[slug]/page.tsx`)**:
  - Update 9 team profiles in `src/data/team/*.md` to reflect Next.js engineering titles:
    - Alex Vance - Lead Next.js Architect
    - David Kim - Senior Headless Systems Engineer
    - Edward Anderson - Principal Performance Engineer
    - Emma Wilson - Lead E-Commerce Frontend Engineer
    - James Morgan - Head of Composable Commerce
    - Lisa Park - Senior API & Middleware Engineer
    - Maria Garcia - Frontend Architecture Specialist
    - Nathan Brooks - Next.js Full-Stack Developer
    - Sophia Chen - VP of E-Commerce Engineering

---

### 1.8 Testimonials Page (`/testimonial` - `src/app/testimonial/page.tsx`)
- **Metadata**: Title `Client Testimonials & Results | eComSmiths`.
- **TestimonialHero (`src/components/testimonial/testimonial-hero.tsx`)**:
  - H2: "Numbers Speak Louder Than Words"
  - 3 Stat Panels:
    - "Delivered 120+ Next.js Storefronts"
    - "99.4% Core Web Vitals Pass Rate"
    - "Trusted Across Global Markets"
- **TestimonialReviewCards (`src/components/testimonial/testimonial-review-cards.tsx`)**:
  - Rewrite all 16 reviews in `src/data/testimonial-page-reviews.ts` with authentic quotes from retail executives, heads of e-commerce, and CTOs.

---

### 1.9 Blog Page (`/blog` - `src/app/blog/page.tsx` & `/blog/[slug]`)
- **Metadata**: Title `Engineering Blog - Next.js E-Commerce Insights | eComSmiths`.
- **BlogHero (`src/components/blog/blog-hero.tsx`)**:
  - H2: "Next.js E-Commerce Engineering Journal"
  - Subcopy: "In-depth technical guides, architectural patterns, and performance case studies from our lead developers."
- **FamousBlog (`src/components/blog/famous-blog.tsx`)**:
  - H2: "Featured Architecture Breakdowns"
  - Curated high-impact articles.
- **Dynamic Blog Posts (`src/app/blog/[slug]/page.tsx`)**:
  - Rewrite all 14 Markdown blog posts in `src/data/blog/*.md` to cover Next.js e-commerce topics:
    1. Headless Next.js Storefront Architecture for High-Volume E-Commerce
    2. Achieving Sub-Second Page Loads with Next.js App Router and Edge Caching
    3. Seamless Shopify Storefront API Integration with Next.js
    4. Mastering Core Web Vitals for E-Commerce: INP, LCP, and CLS Optimization
    5. Server Components vs Client Components in High-Converting Product Listings
    6. Composable Commerce Architecture: Decoupling Frontend from Legacy Backends
    7. Building Resilient Cart and Checkout Workflows with Next.js Server Actions
    8. Optimizing Large Product Catalogs (100k+ SKUs) with Incremental Static Regeneration (ISR)
    9. Modern PIM and ERP Synchronizations for Headless Next.js Stores
    10. The Business Impact of Sub-Second Storefront Performance on Conversion Rates
    11. Secure Customer Authentication and Account Portals in Next.js Storefronts
    12. Composable Search and Filtering using Algolia and Next.js
    13. Migrating from Monolithic Themes to Next.js App Router
    14. Internationalization and Multi-Currency Architecture in Next.js Storefronts

---

### 1.10 Contact Page (`/contact` - `src/app/contact/page.tsx`)
- **Metadata**: Title `Contact Us - Start Your Next.js Project | eComSmiths`.
- **ContactForm (`src/components/contact/contact-form.tsx`)**:
  - H2: "Reach Out — We'll Get Back Within 24 Hours"
  - Subcopy: "Tell us about your brand, current e-commerce stack, and speed goals. A lead Next.js architect will respond promptly."
  - Clean form fields: Work Email, Store URL / Platform, Project Budget & Scope, Message.
  - Location badge: "San Francisco, CA & Remote Worldwide".
  - Submit Button: "Request Technical Consultation".

---

### 1.11 Integration Page (`/integration` - `src/app/integration/page.tsx`)
- **Metadata**: Title `Integrations & Technology Stack | eComSmiths`.
- **IntegrationHero (`src/components/integration/integration-hero.tsx`)**:
  - H2: "Supported Integrations & Composable Stacks"
  - Subcopy: "Connect Shopify, BigCommerce, Stripe, Algolia, Sanity, ERPs, and custom APIs seamlessly."
  - 18 Integrated tools with distinct Next.js e-commerce descriptions (no duplicated placeholders).
- **IntegrationFaq (`src/components/integration/integration-faq.tsx`)**:
  - 7 In-depth questions and answers on headless architecture, checkout security, API latency, CMS integrations, and Core Web Vitals guarantees.

---

### 1.12 Client Auth & Utility Pages (`/login`, `/signup`, `/forgot-password`, `/not-found`)
- **Login (`src/app/login/page.tsx` & `src/components/login/login-hero.tsx`)**:
  - Title: `Client Portal Login | eComSmiths`
  - Subcopy: "Access your project repository updates, performance dashboards, and deployment staging environments."
- **Signup (`src/app/signup/page.tsx` & `src/components/signup/signup-hero.tsx`)**:
  - Title: `Start Your Project | eComSmiths`
  - Subcopy: "Create your project workspace to collaborate directly with our engineering team."
- **Forgot Password (`src/app/forgot-password/page.tsx`)**:
  - Title: `Forgot Password - Client Portal | eComSmiths`
- **404 Not Found (`src/app/not-found.tsx` & `src/components/not-found/not-found-hero.tsx`)**:
  - Title: `Page Not Found | eComSmiths`
  - Friendly navigation directing users back to `/` and `/services`.

---

### 1.13 Navigation & Header / Footer Components
- **Navbar (`src/components/shared/layout/navbar/navbar.tsx`)**:
  - Logo: `main-logo.svg` linking to `/`.
  - Mega Menus:
    - `CompanyMenu`: About Us (`/about`), Our Team (`/team`), Why eComSmiths (`/about`), Code & Craft (`/about`), Client Results (`/case-study`), Testimonials (`/testimonial`), Case Studies (`/case-study`), Services (`/services`), Headless Solutions (`/services`).
    - `PlanAndSupportMenu`: Client Portal (`/login`), Start a Project (`/signup`), Development Packages (`/pricing`), Tech Integrations (`/integration`), Book Consultation (`/contact`), Performance Sprints (`/pricing`), Headless Storefronts (`/services`), API Integrations (`/integration`), Case Studies (`/case-study`), Contact Engineering (`/contact`).
  - CTA Button (`nav-button.tsx`): "Start Project" -> `/contact` with lime-green accent styling.
- **Mobile Menu (`src/data/mobile-meu.ts`, `src/components/shared/layout/mobile-menu/*`)**:
  - Complete internal menu structure with 0 dead links.
- **Footer (`src/components/shared/layout/footer/*`, `src/data/footer-links.ts`)**:
  - Columns:
    - Agency: About Us (`/about`), Our Team (`/team`), Next.js Services (`/services`), Case Studies (`/case-study`), Testimonials (`/testimonial`)
    - Expertise: Headless Storefronts (`/services`), API Integrations (`/integration`), Core Web Vitals Sprints (`/pricing`), Supported Integrations (`/integration`), Development Packages (`/pricing`)
    - Resources: Engineering Blog (`/blog`), Integration FAQ (`/integration`), Client Portal (`/login`), Start a Project (`/signup`), Contact Us (`/contact`)
  - Legal: Next.js E-Commerce SLA (`/pricing`), Code & Craft Standards (`/about`), Contact Legal (`/contact`).
  - Copyright: `© 2026 eComSmiths. All rights reserved. Code, craft, scale.`

---

## 2. Copy Rewrite Plan (Next.js Service Only)

| Component / Area | Old Template Copy (AI/Nexsas) | New eComSmiths Copy (Next.js E-Commerce Only) |
|---|---|---|
| **Site Tagline** | Software, SaaS & Startup Tailwind Template | **Code, craft, scale** |
| **Hero H1** | Neural networks that mimic the human brain | **Next.js storefronts that convert, perform, and scale** |
| **Hero Subcopy** | Designing and deploying custom neural models for businesses | **We build ultra-fast headless storefronts, seamless API integrations, and sub-second performance optimizations for ambitious e-commerce brands.** |
| **Hero CTA** | Get started free | **Start your project** (`/contact`) |
| **Solutions H2** | AI-driven innovation for industries | **Engineered for speed, built for conversion** |
| **Track Record H2** | Visual quality control with CNNs | **Proven e-commerce speed & revenue impact** |
| **Experience H2** | AI experience showcase cards | **Next.js performance in action** |
| **Pricing Tier 1** | Starter: 300+ AI voices, MP3 audio exports ($49/mo) | **Storefront Launch: Headless Next.js 16 Storefront, Shopify API, 90+ Lighthouse guarantee ($4,900)** |
| **Pricing Tier 2** | Pro: 120 min voiceover, emotion control ($149/mo) | **Growth Architecture: Custom Next.js Storefront, Multi-API Sync, Edge Caching, Instant Search ($8,900)** |
| **Pricing Tier 3** | Enterprise: Voice cloning, HD exports ($179/mo) | **Enterprise Composable: Full Composable Commerce, Multi-Store/Currency, Microservices Middleware ($14,900)** |
| **Ecosystem H2** | Nexsas works with your ecosystem | **Seamless integrations with your e-commerce ecosystem** |
| **Testimonials** | Nexsas AI chatbot reduced support tickets | **eComSmiths transformed our store into a sub-second Next.js storefront. Mobile conversion rate rose 42%.** |
| **Footer CTA** | Turn AI into practical solutions | **Scale faster with a sub-second Next.js storefront** |

---

## 3. Rebranding Checklist (eComSmiths)

- [ ] **Brand Identity**:
  - [ ] Name: `eComSmiths` (capitalization: lowercase 'e', uppercase 'C' and 'S').
  - [ ] Domain: `https://ecomsmiths.com/`.
  - [ ] Tagline: `Code, craft, scale`.
- [ ] **Logos & Vectors**:
  - [ ] `public/images/shared/main-logo.svg`: eComSmiths navy mark, lime-green bracket/lightning, dark wordmark.
  - [ ] `public/images/shared/main-logo-light.svg` & `dark-logo.svg`: High-contrast versions for dark/light footers.
  - [ ] `public/images/shared/logo-dark.svg` & `logo.svg`: Standalone 44x44 eComSmiths icon mark.
  - [ ] `public/images/logo/logo-white-small.svg`: Light monochrome mark.
- [ ] **Favicons & App Icons**:
  - [ ] `src/app/icon.svg`: 32x32 SVG icon with lime-green mark on dark navy rounded rect.
  - [ ] `src/app/favicon.svg`: Update vector shapes to match eComSmiths brand icon.
  - [ ] `src/app/site.webmanifest`: Replace `"name": "Nexsas"` with `"name": "eComSmiths"`.
- [ ] **Metadata & Open Graph**:
  - [ ] `src/utils/generateMetaData.ts`: Default metadataBase, siteName: "eComSmiths", default description, default OG image.
  - [ ] Update title template across all 12 page routes (`src/app/**/page.tsx`) from `... || Nexsas` to `... | eComSmiths`.
- [ ] **Source Code Search & Eradication**:
  - [ ] Zero instances of `Nexsas` across `src/`, `public/`, and markdown data.
  - [ ] Zero instances of `StaticMania` across `src/`, `public/`, and markdown data.
  - [ ] Zero leftover AI/voiceover template copy.

---

## 4. Image Mapping Plan

| Image File Path | Target Placement | Content Context |
|---|---|---|
| `public/images/shared/main-logo.svg` | Desktop Header / Navbar | Official eComSmiths Logo |
| `public/images/shared/logo-dark.svg` | Mobile Header & Favicon | eComSmiths Icon Mark |
| `public/images/opai-img-300.png` | Homepage Hero Center Image | Next.js Headless Architecture Diagram |
| `public/images/opai-img-301.png` | Homepage Hero Floating Left Card | E-Commerce Storefront Showcase |
| `public/images/opai-img-302.png` | Track Record Card 1 / Case Study 1 | Shopify Plus Headless Migration Visual |
| `public/images/opai-img-303.png` | Track Record Card 2 / Case Study 2 | Composable Catalog & Edge Caching Visual |
| `public/images/opai-img-304.png` | Track Record Card 3 / Case Study 3 | High-Concurrency Checkout APIs Visual |
| `public/images/opai-img-305.png` | Experience Card 1 | Headless Storefront Architecture |
| `public/images/opai-img-306.png` | Experience Card 2 | Sub-Second Performance Optimization |
| `public/images/opai-img-307.png` | Experience Card 3 | Real-Time Cart & Checkout APIs |
| `public/images/opai-img-308.png` | Experience Card 4 | Multi-Platform E-Commerce Integrations |
| `public/images/opai-img-309.png` | Experience Card 5 | Algorithmic Search & Filtering |
| `public/images/opai-img-310.png` | Experience Card 6 | Composable Enterprise Architecture |
| `public/images/opai-35.jpg` | Homepage Pricing Background | Clean Dark Pattern Gradient |
| `public/images/opai-img-22.png` | Global CTA Section Illustration | Next.js Engineering & Speed Graphics |
| `public/images/opai-img-26.png` | Team Core Values Banner | Collaborative Engineering Team Visual |
| `public/images/opai-img-27.png` | Contact Form Right Panel | Global E-Commerce Headquarters Map/Graphic |
| `public/images/opai-img-471.jpg` | Login Form Showcase Banner | Client Portal Dashboard Preview |
| `public/images/opai-img-472.jpg` | Signup Form Showcase Banner | Project Workspace Staging Preview |
| `public/images/opai-img-419.jpg` | Navbar Mega Menu Feature Card | Next.js Performance SLA Showcase |
| `public/images/opai-img-400.jpg` | Navbar Mega Menu Architecture Card | Architecture Brief Showcase |
| `public/images/icons/*.svg` | Integration Grid & Client Logos | Stripe, Shopify, Slack, Discord, Algolia, Notion |
| `public/images/opai-avatar-*.png` | Team & Testimonial Avatars | Professional Client & Engineer Avatars |

---

## 5. Link Fix Plan (No External Demo Links)

All links are audited and routed strictly to internal pages and sections:

### Navigation Links
- `Navbar` Brand Link: `/`
- `Company Menu`:
  - About Us -> `/about`
  - Our Team -> `/team`
  - Why eComSmiths -> `/about`
  - Code & Craft -> `/about`
  - Client Results -> `/case-study`
  - Testimonials -> `/testimonial`
  - Case Studies -> `/case-study`
  - Services -> `/services`
  - Headless Solutions -> `/services`
  - Architecture Brief -> `/services`
- `Plans & Support Menu`:
  - Client Portal -> `/login`
  - Start a Project -> `/signup`
  - Development Packages -> `/pricing`
  - Tech Integrations -> `/integration`
  - Book a Consultation -> `/contact`
  - Performance Sprints -> `/pricing`
  - Headless Storefronts -> `/services`
  - API Integrations -> `/integration`
  - Case Studies -> `/case-study`
  - Contact Engineering -> `/contact`
  - Performance SLA Banner -> `/pricing`
- `Inner Pages Dropdown`:
  - Blog -> `/blog`
  - Integration -> `/integration`
  - Case Studies -> `/case-study`
  - Testimonial -> `/testimonial`
  - Services -> `/services`
  - Contact -> `/contact`
  - Team -> `/team`
- `Direct Navbar Link`: Pricing -> `/pricing`
- `Nav Button (CTA)`: Start Project -> `/contact`

### Mobile Menu Links (`src/data/mobile-meu.ts`)
- All 18 mobile menu items point directly to valid internal routes (`/about`, `/services`, `/case-study`, `/testimonial`, `/blog`, `/integration`, `/pricing`, `/team`, `/contact`, `/login`, `/signup`). Zero `#` placeholders.

### Footer Navigation Links (`src/data/footer-links.ts`)
- All 15 column links point to internal pages (`/about`, `/team`, `/services`, `/case-study`, `/testimonial`, `/integration`, `/pricing`, `/blog`, `/login`, `/signup`, `/contact`).
- Legal links point to `/pricing` (SLA), `/about` (Standards), and `/contact` (Legal Contact).

### Body & Section CTAs
- All Hero / Solutions / Experience / TrackRecord / Pricing / CTA buttons point to `/contact`, `/services`, `/case-study`, or `/pricing`.
- Authentication toggles: Login page links to `/signup` and `/forgot-password`; Signup page links to `/login`; Forgot Password links to `/login`.

---

## 6. Verification Steps

### Step 1: Automated Build & Type Checking
1. Run `npm run typecheck` (`tsc --noEmit`) to verify zero TypeScript errors across all interfaces and markdown loaders.
2. Run `npm run lint` (`next lint`) to ensure ESLint compliance.
3. Run `npm run build` (`next build`) to ensure:
   - Full static generation succeeds for all static routes.
   - All dynamic routes generate cleanly without broken markdown parameters (`generateStaticParams` for `/services/[slug]`, `/case-study/[slug]`, `/team/[slug]`, `/blog/[slug]`).
   - Zero compilation or bundling warnings.

### Step 2: Responsive & Cross-Device Layout Audit
1. **Desktop (1440px - 1920px)**:
   - Verify sticky header blur, megamenu dropdown transitions, and hover transforms.
   - Check multi-column grids (Solutions, Experience, Track Record, Testimonials).
2. **Tablet (768px - 1024px)**:
   - Verify 2-column card layouts and proper margin spacing.
   - Check video container aspect ratio and counter card alignment.
3. **Mobile (360px - 425px)**:
   - Verify hamburger menu drawer trigger, slide-in animation, and touch close target.
   - Verify zero horizontal overflow / page shifting.
   - Check form input sizes, touch targets (minimum 44px), and typography legibility.

### Step 3: Brand & External Link Grep Audit
1. Run recursive pattern match across `src/` and `public/` for:
   - `Nexsas` (case-insensitive) -> Expect 0 occurrences.
   - `StaticMania` (case-insensitive) -> Expect 0 occurrences.
   - `Neural networks` -> Expect 0 occurrences (except path if unchanged).
   - `voiceover`, `MP3`, `voice cloning` -> Expect 0 occurrences.
   - `lorem ipsum` -> Expect 0 occurrences.
   - External demo links (e.g., `staticmania.com`, `themeforest`, `envato`) -> Expect 0 occurrences.
2. Verify all social icons either point to legitimate company links or safe `#` with descriptive `aria-label`.

---
*Conversion Plan authored for eComSmiths. Ready for implementation approval.*
