import React from 'react';
import SectionBadge from './SectionBadge';

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

const skillCategories = [
  {
    title: 'UX & Design Practice',
    skills: ['Accessibility-First Design (WCAG)', 'SEO-Driven Design', 'Design Systems & Governance', 'A/B Testing & Experimentation', 'Systems Thinking'],
  },
  {
    title: 'AI & Innovation',
    skills: ['AI-Augmented Design Workflows', 'Emerging Tool Adoption', 'Design Process Optimization'],
  },
  {
    title: 'Collaboration',
    skills: ['Engineering Partnership', 'Product Team Integration', 'Cross-Functional Facilitation', 'Framework & Template Development'],
  },
  {
    title: 'Communication',
    skills: ['Stakeholder Presentation & Storytelling', 'Written Documentation', 'Stakeholder Management'],
  },
  {
    title: 'Leadership & Strategy',
    skills: ['Design Leadership', 'Strategic Planning', 'Mentoring & Design Advocacy', 'Process Documentation', 'Stakeholder Alignment'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <SectionBadge icon={<LayersIcon />} label="Strengths" />
          <h2 className="skills__title">What I bring beyond the tools</h2>
          <p className="skills__subtitle">
            Technical skills ship the work. These are the skills that shape whether the work was worth shipping.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__card">
              <h3 className="skills__card-title">{cat.title}</h3>
              <ul className="skills__card-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skills__card-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
