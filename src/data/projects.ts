export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  layout: 'full' | 'half';
  caption?: string;
  mobile?: boolean;
}

export interface ApproachSubsection {
  key: string;
  label: string;
  description: string;
  images?: ProjectImage[];
  gridColumns?: 2 | 3 | 4;
}

export interface Project {
  slug: string;
  client: string;
  title: string;
  summary?: string;
  year: string;
  tags: string[];
  role: string;
  tools: string[];
  timeline: string;
  featured: string;
  metrics: ProjectMetric[];
  hidden?: boolean;
  timeToLive?: string;

  // New 7-section structure
  problem?: string[];
  problemImages?: ProjectImage[];
  gaps?: string[];
  gapsImages?: ProjectImage[];
  constraints?: string[];
  constraintsImages?: ProjectImage[];
  approachSubsections?: ApproachSubsection[];
  outcomeNote?: string;
  outcomeImages?: ProjectImage[];

  // Legacy approach steps (kept for other projects during transition)
  approachSteps?: { label: string; description: string }[];
  approachImages?: ProjectImage[];

  // Legacy fields (kept for backward compat during transition)
  brief?: string;
  challenge?: string;
  images?: ProjectImage[];
  resultsNote?: string;
  ownership?: string[];
  approach?: string;
  process?: { label: string; description: string }[];
  takeaways?: string[];
}

const projects: Project[] = [
  // =============================================
  // 0. WheelRack — Design System & Customer Journey  [image LEFT]
  // =============================================
  {
    slug: 'wheelrack',
    client: 'Tire Rack \u2014 WheelRack',
    title: 'WheelRack Design System & Full Customer Journey Redesign',
    summary: 'Built a design system from scratch and redesigned the full customer journey for a 20-year-old dealer platform\u2014growing partner adoption from 6 to 10+ retail brands.',
    year: '2023\u20132024',
    tags: ['Design Systems', 'UX Design', 'UI Design', 'Responsive', 'React'],
    role: 'Senior Web Designer / UX Engineer',
    tools: ['Figma', 'Token Studio', 'Storybook', 'HTML/CSS', 'JavaScript'],
    timeline: '~4 months dedicated (12+ months total with API delays)',
    featured: '/images/work/wheelrack/CS_thumbnail_wheelrack_designSystem.jpg',
    timeToLive: '8+ months of work to build out system, project pending live date due to ongoing API call work',

    // ── 01 Problem ──
    problem: [
      'WheelRack is Tire Rack\u2019s aftermarket wheel visualizer\u2014roughly 20 years old, served to dealers across 6 retail partners.',
      'Dealers use it on tablets in-store. No responsive design, clunky dropdowns, visually inconsistent across partner brands.',
      'Business goal: modernize as a proof-of-concept for Tire Rack\u2019s future tech stack (React + Microservices).',
    ],
    problemImages: [
      {
        src: '/images/work/wheelrack/supporting/Problem/oldsite1.png',
        alt: 'Old WheelRack vehicle selector showing basic dropdown and outdated partner branding',
        layout: 'full',
        caption: 'The existing vehicle selector\u2014no autocomplete, no responsive behavior, no shared design language',
      },
    ],

    // ── 02 Gaps & Opportunity ──
    gaps: [
      'No shared design system, tokens, or component library\u2014every partner variant handled ad hoc.',
      'Identified early that my Figma skills needed leveling up. Completed an 80+ hour Figma Masterclass certification mid-project.',
      'Partnered with a senior React developer to build the system from the ground up\u2014Figma components integrated with Token Studio, validated through Storybook.',
    ],
    gapsImages: [
      {
        src: '/images/work/wheelrack/supporting/approach/wheelrack-ux-wireframe-02.png',
        alt: 'Vehicle selector wireframe with annotated UI behavior specs for Make/Year/Model autocomplete flow',
        layout: 'full',
        caption: 'Early wireframe showing the complexity of the vehicle selector flow\u2014this wasn\u2019t just a UI cleanup',
      },
    ],

    // ── 03 Constraints ──
    constraints: [
      'Sprint 0 followed Waterfall; future sprints shifted to Agile\u2014a new methodology for the team.',
      'Design time split across higher priority retail projects, with 10\u201320 day windows per task.',
      'Complex fitment edge cases: front/rear sizing, unavailable finish combos, missing vehicle photography, partner-specific behaviors.',
      'Custom headers/footers per partner with additional filters or cart integration.',
      'Coordinated with in-house photography team for vehicle and wheel images at specific angles.',
    ],
    constraintsImages: [
      {
        src: '/images/work/wheelrack/supporting/opportunity/beforeIbegin_discovery.png',
        alt: 'Figma Masterclass certification awarded to Ryan DeBoer\u2014system thinking before visual design',
        layout: 'full',
        caption: 'Invested in system-level thinking before jumping into visuals\u2014the foundation for everything that followed',
      },
    ],

    // ── 04 Approach (subsections) ──
    approachSubsections: [
      {
        key: 'alignment',
        label: 'Alignment',
        description: 'Full stakeholder meeting to review objectives. Worked with UX design manager and teammates to map the page flow and identify the primary user: dealers on tablets.',
        images: [],
      },
      {
        key: 'structure',
        label: 'Structure',
        description: 'Wireframed the full customer journey\u2014vehicle selection, search results, product detail, and checkout. Annotated behavior specs for autocomplete, responsive states, and error handling.',
        gridColumns: 2,
        images: [
          {
            src: '/images/work/wheelrack/supporting/approach/wheelrack-ux-wireframe-03.png',
            alt: 'Detailed wireframe with annotated UI behavior specs for vehicle selector and search flow',
            layout: 'full',
            caption: 'Wireframe with behavior specs\u2014autocomplete, dynamic selection, responsive breakpoints',
          },
        ],
      },
      {
        key: 'system',
        label: 'System',
        description: 'Established atomic tokens (color, spacing, typography, shadow) that evolved into buttons, inputs, headers, modals, product cards, and visualizer views. Each component built in Figma, validated in Storybook.',
        gridColumns: 2,
        images: [
          {
            src: '/images/work/wheelrack/supporting/opportunity/wheelrack-design-system-02.png',
            alt: 'Figma typography token definitions with heading and body text styles',
            layout: 'half',
            caption: 'Typography tokens\u2014source of truth across Figma and code',
          },
          {
            src: '/images/work/wheelrack/supporting/opportunity/wheelrack-design-system-05.png',
            alt: 'Full button state matrix showing primary and secondary variants across sizes',
            layout: 'half',
            caption: 'Button component\u2014full state matrix across sizes and variants',
          },
        ],
      },
      {
        key: 'build',
        label: 'Build',
        description: 'Partnered daily with React dev via Slack threads and calls. Components validated in Storybook before integration. Supplied detailed front-end behavior specs for every complex component.',
        images: [
          {
            src: '/images/work/wheelrack/supporting/opportunity/storybook.png',
            alt: 'Storybook button component with props table showing variant, size, and state controls',
            layout: 'full',
            caption: 'Storybook integration\u2014props, variants, and interactive playground bridging design to code',
          },
        ],
      },
      {
        key: 'iteration',
        label: 'Iteration',
        description: 'Presented weekly to a large stakeholder group for review and sign-off. Spent 40+ hours comparing the React build against Figma styles\u2014reviewing token names, responsive behavior, and component fidelity screen by screen.',
        images: [],
      },
    ],

    // ── 05 Outcome ──
    outcomeNote: 'Delivered a complete design system and full customer journey from vehicle selection through checkout. 6 additional dealer partners opted in after seeing the redesigned UI\u2014growing the platform from 6 to 10+ retail partners. The Storybook-integrated component library enabled the React team to build without ambiguity, and the token system established a shared language between design and engineering.',
    outcomeImages: [
      {
        src: '/images/work/wheelrack/supporting/outcome/wheelrack-final-desktop-01.png',
        alt: 'Final WheelRack landing page with wheel visualizer, vehicle image, filters, and search results',
        layout: 'full',
        caption: 'Shipped landing page\u2014vehicle visualizer, filter system, and responsive product grid',
      },
      {
        src: '/images/work/wheelrack/supporting/approach/wheelrack-final-desktop-05.png',
        alt: 'Wheel details page with annotated UI behavior callouts for fitment, finish selector, and product tabs',
        layout: 'full',
        caption: 'Product detail page\u2014annotated specs for engineering handoff',
      },
    ],
    metrics: [
      { value: '200+', label: 'Atomic-level design tokens' },
      { value: '50+', label: 'Storybook-integrated components' },
      { value: '6 \u2192 10+', label: 'Retail partners (organic growth)' },
    ],
  },

  // =============================================
  // 1. Tire Rack — Tire Category Redesign  [image RIGHT]
  // =============================================
  {
    slug: 'tire-categories',
    client: 'Tire Rack',
    title: 'Tire Category Page Redesign & Optimizations',
    summary: 'Redesigned 30+ tire category pages into a scalable system\u2014creating a unified framework of iconography, data visualization, and content structure that drove +400% entry growth and +50% conversion lift.',
    year: '2024',
    tags: ['UX Design', 'UI Design', 'Wireframing', 'Design Systems'],
    role: 'Senior Web Designer / UX Engineer',
    tools: ['Figma', 'FigJam', 'HTML/CSS', 'Adobe Creative Suite'],
    timeline: '2 months',
    featured: '/images/work/tire-categories/CS_thumbnail_TireCategories.jpg',
    timeToLive: '~2 months from brief to system launch across 30+ category pages',

    // \u2500\u2500 01 Problem \u2500\u2500
    problem: [
      'Tire Rack\u2019s category pages serve as a primary entry point for millions of users navigating a highly complex product space.',
      'The existing experience was text-heavy and inconsistent\u2014no visual system to differentiate 40+ tire categories, each supporting 80+ products.',
      'Design needed to define both the structure and the visual language from scratch.',
    ],
    problemImages: [
      {
        src: '/images/work/tire-categories/supporting/Problem/projectNotes.png',
        alt: 'Project notes outlining category page requirements, content structure, and initial scope',
        layout: 'full',
        caption: 'Project notes\u2014scoping the category system before any design work began',
      },
    ],

    // \u2500\u2500 02 Gaps & Opportunity \u2500\u2500
    gaps: [
      'No existing framework to visually represent differences between categories.',
      'Each category needed to communicate distinct performance characteristics clearly while maintaining consistency across 40+ variations.',
      'SEO-driven content requirements competing with usability and clarity\u2014no balance had been struck.',
    ],
    gapsImages: [
      {
        src: '/images/work/tire-categories/supporting/opportunity/earlyProcess_notes.png',
        alt: 'Early process notes mapping category structure and content requirements',
        layout: 'full',
        caption: 'Early discovery notes\u2014mapping what was missing before any design began',
      },
    ],

    // \u2500\u2500 03 Constraints \u2500\u2500
    constraints: [
      '40+ unique category variations needed consistent treatment.',
      'Large product sets (often 80+ tires per category) requiring balanced content density.',
      'SEO content requirements had to coexist with clean, scannable design.',
      'No photography direction existed for category-specific imagery.',
      'Performance data had to be sourced, validated, and visualized for each category.',
    ],

    // \u2500\u2500 04 Approach (subsections) \u2500\u2500
    approachSubsections: [
      {
        key: 'alignment',
        label: 'Alignment',
        description: 'Broke the experience into scalable layers: category hierarchy, icon systems, data visualization, and content structure aligned to SEO intent. Close coordination across SEO, copy, testing, and development teams throughout.',
        images: [],
      },
      {
        key: 'structure',
        label: 'Structure',
        description: 'Defined the category page hierarchy and wireframed repeatable layout patterns that could flex across 40+ variations while keeping product discovery and comparison front and center.',
        images: [
          {
            src: '/images/work/tire-categories/supporting/Problem/wireframes.png',
            alt: 'Category page wireframes showing layout hierarchy and content zones',
            layout: 'full',
            caption: 'Wireframes establishing the repeatable page structure across all category types',
          },
        ],
      },
      {
        key: 'system',
        label: 'System',
        description: 'Developed 8 primary category icons and 24 supporting characteristic icons to reduce cognitive load. Designed a CSS-animated bar chart system for performance comparison. Worked with the photography team to define visual direction for each category.',
        gridColumns: 2,
        images: [
          {
            src: '/images/work/tire-categories/supporting/constraints/workingFiles.png',
            alt: 'Working design files showing icon system development and category component variants',
            layout: 'half',
            caption: 'Working files\u2014icon system and component development across category types',
          },
          {
            src: '/images/work/tire-categories/supporting/outcome/primaryHome+icons.png',
            alt: 'Primary category landing page with 8 category icons and visual hierarchy',
            layout: 'half',
            caption: 'Category hub\u20148 primary icons enabling quick visual scanning across tire types',
          },
        ],
      },
      {
        key: 'build',
        label: 'Build',
        description: 'Worked with engineering to define reusable AEM components with admin-controlled fields for performance data. Contributed directly to page structure, CSS chart animations, SVG icon creation, and scalable styling patterns.',
        gridColumns: 2,
        images: [
          {
            src: '/images/work/tire-categories/supporting/approach/snipet_beforede1.png',
            alt: 'Code snippet showing CSS implementation of category page components',
            layout: 'half',
            caption: 'Front-end execution\u2014CSS and component structure contributed directly to the build',
          },
          {
            src: '/images/work/tire-categories/supporting/approach/versioning_git.png',
            alt: 'Git version control showing branch management for category page development',
            layout: 'half',
            caption: 'Version control\u2014managing code alongside the development team',
          },
        ],
      },
      {
        key: 'iteration',
        label: 'Iteration',
        description: 'System scaled to 30+ landing pages with consistent UX patterns and flexible CMS-driven content updates. Non-dev teams could update performance data and category content without engineering support.',
        images: [],
      },
    ],

    // \u2500\u2500 05 Outcome \u2500\u2500
    outcomeNote: 'The redesigned system aligned SEO, UX, and product discovery into a single framework\u2014reducing friction while increasing clarity and conversion. It created a scalable foundation that supports 30+ category pages with consistent patterns and CMS-driven flexibility.',
    outcomeImages: [
      {
        src: '/images/work/tire-categories/supporting/outcome/in-page-application.png',
        alt: 'Category detail page showing performance bar charts, product grid, and icon system in context',
        layout: 'full',
        caption: 'Category page in context\u2014performance data, icon system, and product discovery working together',
      },
      {
        src: '/images/work/tire-categories/supporting/outcome/winter_m.png',
        alt: 'Winter tire category page on mobile showing responsive layout with performance data and product listings',
        layout: 'full',
        caption: 'Mobile category experience\u2014responsive layout maintaining full functionality',
        mobile: true,
      },
    ],
    metrics: [
      { value: '+400%', label: 'Category page entry growth' },
      { value: '+50%', label: 'Conversion lift across key pages' },
      { value: '32', label: 'Custom icons (8 primary + 24 supporting)' },
    ],
  },

  // =============================================
  // 2. Tire Rack — AEM Seasonal Content Strategy  [image LEFT]
  // =============================================
  {
    slug: 'tire-rack-winter',
    client: 'Tire Rack',
    title: 'Tire Rack Seasonal Content Swap — AEM Experience Fragments & Adobe Target',
    year: '2013\u2013Present',
    tags: ['AEM', 'Content Strategy', 'SEO', 'Photography Direction', 'Design Systems'],
    role: 'Senior Web Designer / AEM Content Strategist',
    tools: ['Adobe Experience Manager', 'Adobe Target', 'Figma', 'HTML/SCSS', 'Adobe Creative Suite'],
    timeline: '10+ years',
    featured: '/images/work/tire-rack-winter/CS_thumbnail_AEM_Winterization.jpg',
    brief: 'Since 2013, I have owned the full seasonal content strategy for Tire Rack\'s high-traffic landing pages \u2014 designing, authoring, and deploying a winterized version of the site each fall that targets cold-weather customers across the homepage, tire pages, delivery pages, research content, and wheel adjustment pages. Over the years this process evolved from manual content updates into a scalable AEM Experience Fragment system capable of swapping 20+ components across the site simultaneously.',
    challenge: 'The core challenge was building a maintainable, scalable system that could serve meaningfully different content to winter-climate customers and southern-states customers without duplicating pages or confusing search engines. Early seasonal updates were manual and time-intensive. As Tire Rack\'s digital footprint grew, the process needed to scale \u2014 requiring new fragment types, accessible component variants, Adobe Target audience rules, and close collaboration with the Analytics, Photography, and SEO teams to ensure consistency, searchability, and conversion across every variant. I also needed to document the system clearly enough to onboard and mentor junior designers into the authoring workflow.',
    images: [
      {
        src: '/images/work/tire-rack-winter/winter-aem-fragment-tree.png',
        alt: 'Adobe Experience Manager showing the Winter fragment tree with component types including Winter Hero, Red Teaser, Entertainment, Video Center, and Category Bar',
        layout: 'half',
        caption: 'AEM fragment tree \u2014 the full library of winter components organized for authoring',
      },
      {
        src: '/images/work/tire-rack-winter/winter-confluence-docs.png',
        alt: 'Tire Rack Confluence documentation for Using Experience Fragments, listing Ryan DeBoer and Gina as points of contact for winter and geo-winter content swaps',
        layout: 'half',
        caption: 'Internal documentation naming Ryan as the primary point of contact for winter/geo fragment workflows',
      },
      {
        src: '/images/work/tire-rack-winter/winter-homepage-desktop.png',
        alt: 'Tire Rack winterized homepage with snowy SUV hero, Is Traction Control Enough editorial block, Winter Tire and Wheel Package promotion, and seasonal category grid',
        layout: 'full',
        caption: 'Winterized homepage \u2014 full Experience Fragment swap across above-the-fold and editorial sections',
      },
      {
        src: '/images/work/tire-rack-winter/winter-default-desktop.png',
        alt: 'Tire Rack default homepage with standard warehouse hero, generic product photography, and year-round promotional modules',
        layout: 'full',
        caption: 'Default homepage \u2014 same structural scaffold, standard year-round content',
      },
      {
        src: '/images/work/tire-rack-winter/winter-homepage-mobile.png',
        alt: 'Mobile view of winterized Tire Rack homepage showing seasonal tire deals, Traction Control editorial, video center, and winter tire category grid',
        layout: 'half',
        mobile: true,
        caption: 'Winterized mobile \u2014 responsive fragment rendering across seasonal sections',
      },
      {
        src: '/images/work/tire-rack-winter/winter-default-mobile.png',
        alt: 'Mobile view of default Tire Rack homepage showing standard hero, how it works steps, and year-round tire categories',
        layout: 'half',
        mobile: true,
        caption: 'Default mobile \u2014 same layout, different fragment content serving non-winter audiences',
      },
      {
        src: '/images/work/tire-rack-winter/winter-below-fold.png',
        alt: 'Below the fold winterized content showing quietest truck tires editorial, skip the shipping promotion, rubber meet the road brand section, and service with a smile team photo',
        layout: 'full',
        caption: 'Below-the-fold seasonal content \u2014 editorial, promotional, and brand modules all fragment-swapped',
      },
      {
        src: '/images/work/tire-rack-winter/winter-aem-authoring.png',
        alt: 'Adobe Experience Manager authoring view with Teaser component edit dialog showing title, description, link behavior, and CTA configuration fields',
        layout: 'half',
        caption: 'Component authoring \u2014 Teaser dialog with link behavior, CTA, and content fields',
      },
      {
        src: '/images/work/tire-rack-winter/winter-aem-hero-detail.png',
        alt: 'Adobe Experience Manager showing the Winter Hero fragment detail view with component variants including Hero Component, Teaser, Teaser Group, Full Width Image Carousel, and Text and Image Carousel',
        layout: 'half',
        caption: 'Hero fragment detail \u2014 variant breakdown across hero and teaser component types',
      },
    ],
    metrics: [
      { value: '+30%', label: 'Winter tire sales increase' },
      { value: '+20%', label: 'Winter All-Season tire sales' },
      { value: '20+', label: 'Components swapped site-wide' },
      { value: '10+', label: 'Years of end-to-end ownership' },
    ],
    resultsNote: 'Over 10+ years of ownership, this system grew from manual seasonal content updates into a scalable AEM Experience Fragment library \u2014 20+ component types, audience-targeted via Adobe Target, spanning 6 high-traffic landing pages simultaneously. Close collaboration with the Analytics team defined the audience segmentation rules, work with the Photography team (including on-site shoots I directed) produced the seasonal imagery, and ongoing SEO alignment ensured Google treated winter and southern-states variants consistently rather than as duplicate pages. In recent years I have also mentored junior designers through the authoring environment, extending the team\'s capacity without sacrificing quality.',
  },

  // =============================================
  // 3. Heatherwood Equestrian Academy  [image RIGHT]
  // =============================================
  {
    slug: 'heatherwood',
    client: 'Heatherwood Equestrian Academy',
    title: 'Building a Brand and a Sustainable System for a Local Equestrian Academy',
    year: '2025',
    tags: ['Brand Design', 'Web', 'SEO', 'CMS'],
    role: 'Brand & Web Designer',
    tools: ['Figma', 'WordPress', 'Elementor', 'WPForms', 'Yoast SEO', 'Adobe Illustrator'],
    timeline: '4 months',
    featured: '/images/work/heatherwood/CS_thumbnail_Heatherwood.jpg',
    brief: 'Partnered with Deborah Clements, founder of a 30-year family-owned equestrian academy in Granger, Indiana, to build a complete digital brand from scratch. The strategy centered on capturing Heatherwood\u2019s key demographic \u2014 families with children ages 5\u201315 across the Michiana area \u2014 through SEO-leveraged service pages that double as search entry points, FAQ content structured around the real questions parents ask before enrolling, and a conversion path that routes every visitor to a form submission. Each service page was designed as its own landing page with a contact form sidebar, because analytics showed that families arrive searching for a specific activity \u2014 not the brand name.',
    challenge: 'Heatherwood had operated for decades on word-of-mouth alone. There was no brand system, no web presence, and no way for families to discover or enroll online. The core challenge was three-fold: build a brand identity that captures the warmth of a family environment while competing visually with larger commercial programs; architect a site where each service \u2014 riding lessons, summer camps, boarding, birthday parties, trail rides \u2014 functions as an independent SEO entry point with its own conversion path; and deliver the entire system in a way that a non-technical owner can manage independently, with zero ongoing agency dependency. Every headline needed to work for both the parent scanning the page and the search engine indexing it.',
    images: [
      // 1. Notes — brand collateral (road sign + vehicle magnet)
      {
        src: '/images/work/heatherwood/heatherwood-notes-01.png',
        alt: 'Heatherwood Equestrian Academy road sign with logo, QR code, and services listed: Lessons, Camps, Boarding',
        layout: 'half',
        caption: 'heatherwood-notes-01 — Brand identity applied to roadside signage with QR code for mobile conversion',
      },
      {
        src: '/images/work/heatherwood/heatherwood-notes-02.png',
        alt: 'Heatherwood branded vehicle magnet on truck door showing logo, QR code, and service list',
        layout: 'half',
        caption: 'heatherwood-notes-02 — Vehicle magnet extending brand visibility into the local community',
      },
      // 2. Final desktop — homepage hero
      {
        src: '/images/work/heatherwood/heatherwood-final-desktop-01.png',
        alt: 'Heatherwood Academy desktop homepage hero with horses in pasture and SEO headline',
        layout: 'full',
        caption: 'heatherwood-final-desktop-01 — Homepage hero with SEO-targeted headline and primary inquiry CTA',
      },
      // 3. Final desktop — services grid + service detail pair
      {
        src: '/images/work/heatherwood/heatherwood-final-desktop-02.png',
        alt: 'Desktop Services and Experiences page showing card grid of all 10 offerings',
        layout: 'half',
        caption: 'heatherwood-final-desktop-02 — Services hub with 10 SEO entry points',
      },
      {
        src: '/images/work/heatherwood/heatherwood-final-desktop-03.png',
        alt: 'Riding Lessons service page with SEO copy and contact form sidebar',
        layout: 'half',
        caption: 'heatherwood-final-desktop-03 — Service landing page with dedicated contact form',
      },
      // 4. Final mobile — homepage + FAQ (mobile frames)
      {
        src: '/images/work/heatherwood/heatherwood-final-mobile-01.png',
        alt: 'Mobile homepage showing service cards and three-step enrollment flow',
        layout: 'half',
        caption: 'heatherwood-final-mobile-01 — Mobile homepage with service cards and enrollment CTA',
        mobile: true,
      },
      {
        src: '/images/work/heatherwood/heatherwood-final-mobile-04.png',
        alt: 'Plan Your Ride FAQ accordion on mobile with parent questions about lessons',
        layout: 'half',
        caption: 'heatherwood-final-mobile-04 — FAQ targeting real parent search queries',
        mobile: true,
      },
      // 5. Notes — CMS dashboard (sustainability system)
      {
        src: '/images/work/heatherwood/heatherwood-notes-05.png',
        alt: 'WordPress admin dashboard with analytics, caching, and Yoast SEO integration',
        layout: 'full',
        caption: 'heatherwood-notes-05 — Owner-managed CMS with analytics, forms, and SEO scoring',
      },
    ],
    metrics: [
      { value: 'Full Brand', label: 'Built from zero' },
      { value: '10+', label: 'SEO service landing pages' },
      { value: 'Owner-Run', label: 'Zero ongoing agency dependency' },
    ],
    resultsNote: 'The site launched with a complete brand identity, 10+ SEO-optimized service pages each functioning as independent search entry points with dedicated contact forms, an FAQ section addressing the real questions parents ask before enrolling, and a WordPress CMS the owner operates independently. Families now discover Heatherwood through Google searches for specific services like "horseback riding lessons South Bend" and "summer horse camps Granger Indiana" \u2014 a capability that didn\u2019t exist before this project.',
  },
  // =============================================
  // 4. Tire Rack — Landing Page Design System  [image LEFT]
  // =============================================
  {
    slug: 'landing-pages',
    client: 'Tire Rack',
    title: 'Conversion-Focused Landing Pages at Scale',
    year: '2021\u2013Present',
    tags: ['UX Design', 'SEO', 'AEM', 'Content Strategy', 'Responsive'],
    role: 'Senior Web Designer / AEM Author',
    tools: ['Figma', 'Adobe Experience Manager', 'HTML/CSS', 'Adobe Creative Suite', 'AI-Assisted Content Tools'],
    timeline: 'Ongoing',
    featured: '/images/work/landing-pages/CS_thumbnail_landing-pages.jpg',
    brief: 'Over the past several years, I\u2019ve become the go-to designer for rapid, conversion-focused landing pages at Tire Rack. These pages serve as SEO-driven entry points for tire sizes, product categories, seasonal promotions, and specialty segments like EV tires and classic car tires. I regularly take a lightweight content brief \u2014 often just tire types and target keywords \u2014 and turn it into a fully designed, structured, and published landing page within hours.',
    challenge: 'Tire Rack\u2019s landing pages needed to serve two audiences simultaneously: customers searching for specific tire sizes or categories, and search engines indexing structured content. The existing pages were inconsistent in layout, lacked clear heading hierarchy, and weren\u2019t optimized for the long-tail keyword patterns that drive organic traffic. Each new page request came with minimal direction \u2014 a tire type, a few keywords, maybe a product photo \u2014 and needed to ship fast without sacrificing quality or SEO structure.',
    ownership: [
      'Translating minimal briefs into structured, conversion-focused layouts',
      'Writing and structuring H1\u2013H6 hierarchy using keyword intent',
      'Using AI-assisted tools to generate and refine SEO-friendly content',
      'Sourcing and directing photography with in-house assets',
      'Building reusable page patterns and scalable layout systems',
      'Working directly in AEM as the primary author-facing contact',
      'Partnering with backend developers on component inputs and API-driven content',
      'Iterating based on analytics, A/B testing, and performance insights',
    ],
    approach: 'The core approach was systems-first: rather than designing each page from scratch, I developed a set of reusable layout patterns \u2014 hero modules, product grids, FAQ accordions, brand carousels, size tables \u2014 that could be assembled and configured for any category or promotion. This let me move fast without cutting corners. Every page was built with SEO baked into the design: heading hierarchy mapped to keyword intent, structured content for featured snippets, and clear conversion paths from search landing to product selection. I worked directly in AEM to author, test, and publish, and partnered with the SEO and analytics teams to measure performance and iterate.',
    process: [
      { label: 'Intake', description: 'Receive a minimal brief \u2014 tire type, target keywords, product focus. Clarify intent with SEO and merchandising teams.' },
      { label: 'Structure', description: 'Rapidly map out layout and heading hierarchy. Match H1\u2013H6 structure to keyword intent and user scanning patterns.' },
      { label: 'Design', description: 'Assemble from proven layout patterns. Source photography, write or refine copy with AI-assisted tools, and build the full page in Figma.' },
      { label: 'Build', description: 'Author directly in AEM using Experience Fragment components. QA across breakpoints and browsers.' },
      { label: 'Launch', description: 'Publish and validate. Monitor organic traffic, engagement metrics, and conversion against benchmarks.' },
      { label: 'Iterate', description: 'Refine based on analytics and A/B test results. Feed learnings back into the pattern library for future pages.' },
    ],
    images: [
      {
        src: '/images/work/landing-pages/landing-pages-responsive-preview.jpg',
        alt: 'BFGoodrich G-Force Phenom product landing page shown across desktop and mobile breakpoints',
        layout: 'full',
        caption: 'Product landing page \u2014 responsive design with hero, SEO copy, and clear CTA',
      },
      {
        src: '/images/work/landing-pages/landing-pages-classic-tires.jpg',
        alt: 'Classic Car Tires category landing page with hero imagery and structured content across desktop and mobile',
        layout: 'half',
        caption: 'Classic Car Tires \u2014 category landing page with brand carousel and SEO-structured content',
      },
      {
        src: '/images/work/landing-pages/landing-pages-35-inch.jpg',
        alt: '35-Inch Tires size-based landing page showing lifestyle hero and popular tire listings',
        layout: 'half',
        caption: '35-Inch Tires \u2014 size-based SEO entry point with lifestyle photography and product grid',
      },
      {
        src: '/images/work/landing-pages/landing-pages-20-inch.jpg',
        alt: '20-Inch Tires landing page with close-up product hero and responsive mobile layout',
        layout: 'full',
        caption: '20-Inch Tires \u2014 size category page with contextual photography and conversion-focused layout',
      },
      {
        src: '/images/work/landing-pages/landing-pages-full-page-layouts.jpg',
        alt: 'Side-by-side full-page layouts showing 20-inch tire detail page with size table, promotions, and product recommendations',
        layout: 'full',
        caption: 'Full page structure \u2014 size table, promotions, product recommendations, and FAQ content',
      },
      {
        src: '/images/work/landing-pages/landing-pages-classic-full.jpg',
        alt: 'Classic Car Tires full landing page with featured brands, FAQ accordion, customer reviews, and footer',
        layout: 'half',
        caption: 'Classic Car Tires \u2014 full page with FAQ, featured brands, and customer testimonials',
      },
      {
        src: '/images/work/landing-pages/landing-pages-product-mobile.jpg',
        alt: 'BFGoodrich G-Force Phenom product page shown in mobile layouts with video, specs, and FAQ sections',
        layout: 'half',
        caption: 'Product page mobile views \u2014 video content, specifications, and FAQ accordion',
      },
    ],
    metrics: [
      { value: '50+', label: 'Landing pages designed & published' },
      { value: 'Hours', label: 'Typical brief-to-live turnaround' },
      { value: 'End-to-End', label: 'Brief \u2192 Design \u2192 Build \u2192 Live' },
    ],
    resultsNote: 'This work established a repeatable, scalable system for landing page production at Tire Rack. Pages that previously required cross-team coordination and multi-day timelines now go live in hours. The reusable pattern library reduced design-to-publish time while maintaining consistent quality, SEO structure, and conversion performance across size-based, category, seasonal, and product-focused pages.',
    takeaways: [
      'Speed and quality aren\u2019t tradeoffs when you invest in systems. Reusable patterns let me ship in hours without shortcuts.',
      'SEO isn\u2019t a separate step \u2014 it\u2019s a design decision. Heading hierarchy, content structure, and page layout all serve search intent.',
      'Owning the full pipeline \u2014 from brief to live page \u2014 removes bottlenecks and builds institutional knowledge that compounds over time.',
      'AI-assisted content tools are most effective when paired with a designer who understands structure, intent, and the end user.',
    ],
  },
];

export default projects;
