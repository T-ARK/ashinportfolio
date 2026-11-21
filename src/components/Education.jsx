import React from 'react';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import PixelCard from './reactbits/PixelCard';

export default function Education({ darkMode }) {
  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">.education()</span>
        <h2 className="section-title">Education & Academic Foundation</h2>
        <p className="section-desc" style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
          Undergraduate coursework and rigorous academic training in Computer Science & Data Science.
        </p>
      </div>

      <div className="education-grid">
        {educationData.map((item, index) => (
          <PixelCard
            key={index}
            radius={22}
            gap={6}
            speed={30}
            spotlight={0.45}
            glow={0.4}
            opacity={0.3}
            theme={darkMode ? 'dark' : 'light'}
            colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
            glowColor={darkMode ? '#38bdf8' : '#2563eb'}
            className="education-pixel-card-container"
          >
            <div className="education-card">
              <div className="education-top-bar">
                <div className="education-icon-box">
                  <GraduationCap size={28} />
                </div>
                <div className="education-time-badge">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
              </div>

              <h3 className="education-degree">{item.degree}</h3>
              <h4 className="education-institution">{item.institution}</h4>

              <p className="education-desc">{item.description}</p>

              <div className="education-coursework-section">
                <span className="coursework-title">Relevant Core Coursework:</span>
                <div className="coursework-pills">
                  {item.coursework.map((course, cIdx) => (
                    <span key={cIdx} className="course-pill">
                      <CheckCircle size={13} className="course-check" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
}
