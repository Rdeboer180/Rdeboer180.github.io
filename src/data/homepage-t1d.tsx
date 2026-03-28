import React from 'react';
import type { TargetedHomepageContent } from './homepage-sleeper';

const t1dContent: TargetedHomepageContent = {
  meta: {
    slug: 'homepage_t1d',
    company: 'Dexcom',
  },

  hero: {
    eyebrow: 'Senior Web Designer by title but I\u2019m also a',
    roles: ['Visual Product Designer', 'Design Systems Architect', 'UX Engineer'],
    headline: 'ready to bring 16 years of visual craft and systems thinking to a product I\u2019ve depended on for over a decade.',
    body: 'I\u2019m a Senior Product Designer specializing in high-fidelity UI, scalable design systems, and front-end development. I\u2019ve spent my career ensuring that what gets designed is what gets shipped\u2014and I\u2019m looking to bring that discipline to a product that genuinely matters to me.',
  },

  about: {
    title: 'This One Is Personal',
    paragraphs: [
      'I\u2019ve lived with Type 1 Diabetes for over 20 years. For the last 10 of those, Dexcom has been part of my daily life\u2014worn on my body, checked on my phone, factored into decisions I make about my health every single day. I also maintain a custom-coded branch of the Loop app, an open-source closed-loop insulin delivery system that integrates directly with my Dexcom CGM. I\u2019ve configured, tested, and relied on that system daily.',
      'That\u2019s not a design credential\u2014it\u2019s context. I know what it feels like to glance at a number and make a real decision based on what I see. I know when the interface builds trust and when it doesn\u2019t. I\u2019m not coming from healthcare design\u2014I\u2019m coming from 16 years of designing scalable UI systems, and I want to apply that experience to a product I already understand as a user.',
      'My career has been rooted in systems thinking and production quality. At Tire Rack, I built and maintained component libraries and design systems in Figma that powered UI across multiple retail brands. I owned the front-end template layer end-to-end\u2014writing the SCSS, building CMS components, and documenting patterns so the broader team could ship consistently. What I designed is what shipped.',
      (
        <>
          There&rsquo;s more to how I think than what fits on a page&mdash;ask anything about my work, process, or approach.{' '}
          <a href="#/about" className="about__read-more">Dig deeper &rarr;</a>
        </>
      ),
    ],
    stats: [
      { value: '20+', label: 'Years living with Type 1 Diabetes' },
      { value: '10+', label: 'Years as a Dexcom user' },
      { value: '16+', label: 'Years designing professionally' },
      { value: '50+', label: 'Design system components built' },
    ],
  },

  whyCompany: {
    badgeLabel: 'Why Dexcom',
    title: 'Where My Work and My Life Converge',
    subtitle: 'I\u2019ve spent my career designing scalable UI systems. I want to bring that work to a product I\u2019ve worn on my body for a decade.',
    intro: 'Here\u2019s where my experience aligns with what Dexcom\u2019s Global Product Design team needs.',
    points: [
      {
        title: 'I Use the Product Every Day',
        body: 'I\u2019ve worn a Dexcom CGM for over 10 years. I understand the micro-interactions, the trust signals, and the moments where UI clarity directly impacts real decisions. That\u2019s not something I can learn from a research deck\u2014it\u2019s something I live.',
      },
      {
        title: 'Visual Craft Is the Work',
        body: 'Typography, spacing, hierarchy, component consistency\u2014these aren\u2019t finishing touches, they\u2019re the system. Dexcom\u2019s 23+ international design awards reflect a team that takes visual quality seriously. That\u2019s the standard I want to contribute to.',
      },
      {
        title: 'Design Systems at Scale',
        body: 'At Tire Rack, I built component libraries and token systems in Figma that powered production UI across multiple retail brands. I documented patterns, governed usage, and worked hand-in-hand with engineering to maintain consistency. I\u2019d bring that same infrastructure-first approach to Dexcom\u2019s design system.',
      },
      {
        title: 'Design-to-Code Accountability',
        body: 'I write production front-end code and have spent years ensuring design fidelity through implementation. Fewer redlines, fewer surprises, better outcomes. When the GPD team needs confidence that what\u2019s designed is what ships\u2014that\u2019s where I operate.',
      },
      {
        title: 'Edge Cases Aren\u2019t Afterthoughts',
        body: 'In products people rely on for health decisions, the edge case is often the most critical case. I\u2019m trained to design for real-world constraints, failure states, and accessibility\u2014not just the happy path.',
      },
      {
        title: 'Design Diplomacy',
        body: 'Dexcom\u2019s posting asks for a design diplomat\u2014someone who socializes ideas, gains alignment, and finds solutions collaboratively. That matches how I\u2019ve worked for years: building relationships across design, engineering, UX, and analytics, and creating documentation that helps teams ship without bottlenecks.',
      },
    ],
  },

  skills: {
    title: 'What I Bring',
    subtitle: 'Visual craft, systems discipline, and the front-end fluency to ensure it all holds in production.',
    intro: 'High-fidelity UI, scalable design systems, cross-platform awareness, and the collaborative instinct to elevate a team.',
    categories: [
      {
        title: 'Visual Product Design',
        skills: ['High-Fidelity UI & Visual Craft', 'Typography & Spacing Systems', 'Information Hierarchy & Clarity', 'Responsive & Multi-Surface Design', 'End-to-End Design Ownership'],
      },
      {
        title: 'Design Systems',
        skills: ['Component Library Architecture', 'Design Token Management', 'Figma Variables & Styles', 'Documentation & Governance', 'Atomic Design Methodology'],
      },
      {
        title: 'Collaboration & Quality',
        skills: ['Engineering Partnership & Handoff', 'Edge Case & Error State Design', 'Cross-Functional Facilitation', 'Stakeholder Alignment & Diplomacy', 'Mentoring & Design Reviews'],
      },
      {
        title: 'Front-End Fluency',
        skills: ['SCSS/CSS & BEM Architecture', 'HTML5 & Responsive Design', 'Design-to-Code Parity', 'CMS Component Development', 'Git Workflow'],
      },
      {
        title: 'Craft & Standards',
        skills: ['Accessibility-First Design (WCAG)', 'Performance-Conscious Design', 'AI-Augmented Design Workflows', 'Brand Identity & Visual Systems', 'Platform-Aware UI Patterns'],
      },
    ],
  },

  faq: {
    title: 'Questions Worth Answering',
    intro: 'What a hiring team at Dexcom might want to know\u2014answered directly.',
    items: [
      {
        question: 'Why Dexcom?',
        answer: (
          <>
            <p>Because I&rsquo;ve depended on this product every day for over a decade. I know what it feels like when the interface is clear and trustworthy&mdash;and I know what it feels like when it isn&rsquo;t. Dexcom has already changed my life. I want to help the GPD team continue raising the bar&mdash;for the G7, for Stelo, and for whatever comes next.</p>
            <p>Dexcom is broadening its vision beyond diabetes into broader health. That ambition, combined with a design team that&rsquo;s already earned 23+ international awards, is exactly the kind of environment where I want to contribute.</p>
          </>
        ),
      },
      {
        question: 'Your background is web-focused. Can you design for native mobile?',
        answer: (
          <>
            <p>I want to be straightforward: my production experience has been in responsive web, CMS platforms, and design systems&mdash;not native iOS or Android apps. I haven&rsquo;t shipped a native mobile product.</p>
            <p>That said, the core skills transfer directly: visual design, systems thinking, component architecture, typography, spacing, hierarchy, and design-to-code collaboration. I&rsquo;m familiar with Material Design and iOS HIG conventions, and I understand platform-specific constraints. Native mobile design would be a growth area&mdash;and one I&rsquo;m motivated to invest in, especially for a product I already use on my phone every day.</p>
          </>
        ),
      },
      {
        question: 'What does "visual product design" mean to you?',
        answer: 'It means the details are the design. Typography, spacing, color, hierarchy, component consistency&mdash;these aren\u2019t finishing touches, they\u2019re the system. In a product like Dexcom\u2019s, where someone glances at a screen and makes a health decision based on what they see, visual precision is functional precision. That\u2019s the standard I hold myself to.',
      },
      {
        question: 'How do you approach design systems?',
        answer: 'I treat them like infrastructure. At Tire Rack, I built component libraries and token systems in Figma that powered UI across multiple retail brands. I documented patterns, governed usage, and worked with engineering to ensure parity between design and code. I\u2019ve been both a systems contributor and a systems user\u2014I know what makes a design system actually get adopted.',
      },
      {
        question: 'How do you work with engineering?',
        answer: 'Closely. I write production front-end code, so I understand implementation constraints firsthand. But more importantly, I invest in the relationship\u2014building shared language, documenting decisions, and staying involved through implementation to make sure what ships matches what was designed. I\u2019m not a designer who hands off and walks away.',
      },
      {
        question: 'What drives you outside of work?',
        answer: (
          <>
            <p>People first. I married my high school sweetheart Stephanie&mdash;we&rsquo;ve now spent more than half our lives together&mdash;and our two kids are the center of everything. Weekends usually mean the park, the zoo, or wherever the next national park road trip takes us.</p>
            <p>I also maintain a custom-coded branch of the Loop app&mdash;an open-source closed-loop insulin delivery system that integrates with my Dexcom CGM. I&rsquo;ve configured, tested, and relied on that system daily for years. It&rsquo;s equal parts health management and engineering hobby&mdash;and it keeps me close to the technology I&rsquo;d be designing for.</p>
          </>
        ),
      },
    ],
  },

  footer: {
    eyebrow: 'Let\u2019s talk about improving the products people depend on',
    tagline: 'T1D for 20+ years \u00b7 Dexcom user for 10+ \u00b7 Designer for 16',
  },
};

export default t1dContent;
