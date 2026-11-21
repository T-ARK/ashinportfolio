import React from 'react';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import PixelCard from './reactbits/PixelCard';

export default function Skills({ darkMode }) {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code2 size={24} />;
      case 'globe':
        return <Globe size={24} />;
      case 'cpu':
        return <Cpu size={24} />;
      case 'tool':
        return <Wrench size={24} />;
      default:
        return <Code2 size={24} />;
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">.skills()</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-desc" style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
          My technical toolset for systems programming, data science, web development, and architecture.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, idx) => (
          <PixelCard
            key={idx}
            radius={20}
            gap={6}
            speed={30}
            spotlight={0.45}
            glow={0.4}
            opacity={0.3}
            theme={darkMode ? 'dark' : 'light'}
            colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
            glowColor={darkMode ? '#38bdf8' : '#2563eb'}
            className="skill-pixel-card-container"
          >
            <div className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                  {getCategoryIcon(group.icon)}
                </div>
                <h3 className="skill-category-title">{group.category}</h3>
              </div>
              
              <div className="skill-badges">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
}
