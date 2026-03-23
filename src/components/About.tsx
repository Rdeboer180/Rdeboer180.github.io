import React from 'react';
import SectionBadge from './SectionBadge';

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const stats = [
  { value: '16+', label: 'Years of Designing professionally' },
  { value: '500+', label: 'of Projects delivered' },
  { value: '4', label: 'Retail brands supported' },
  { value: '50+', label: 'Design system components shipped' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <SectionBadge icon={<UserIcon />} label="About Me" />
            <h2 className="about__title">Who I Am — and Why I'm Built for This Moment</h2>
            <p className="about__body">
              I'm a systems thinker first, designer second. Sixteen years in, my edge has never been just taste — it's been the ability to map a problem before touching a tool, build with the user and the data in mind, and actually understand the codebase my work lives in.
            </p>
            <p className="about__body">
              I came in fresh out of college into a design role that leaned on my strengths, but quickly exposed the gaps. I understood design better than most, but conversations around HTML tables, CSS variables, and flexbox often felt like a different language. I knew I wasn't at the level of the people around me yet. So I closed that gap the only way I knew how—by putting in the reps. Conferences, certifications, side projects, asking questions (and then asking more), and constantly refining. That process built something most designers don't have: the instinct to recognize when something is off, and the technical depth to actually fix it.
            </p>
            <p className="about__body">
              That background makes me unusually prepared for where the industry is right now. AI is generating code everywhere — and making mistakes everywhere. The real skill isn't prompting. It's knowing how to build the guardrails before you start, review what comes out, and refine it against your brand standards, accessibility guidelines, and the actual framework your site runs on. That's what I do.
            </p>
            <p className="about__body">
              Want the full story — Skip the wall of text. Ask it what you actually want to know{' '}
              <a href="#/about" className="about__read-more">I'll let the AI take it from here →</a>
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
