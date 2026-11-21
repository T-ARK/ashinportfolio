import React, { useState } from 'react';
import { BookOpen, Target, CheckCircle2, Copy, Check, Terminal, FileCode2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PixelCard from './reactbits/PixelCard';

export default function About({ darkMode }) {
  const [copied, setCopied] = useState(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(personalInfo.profileJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlights = [
    "Clean architecture, object-oriented design, and defensive programming",
    "Computer Science fundamentals with Data Science & ML emphasis",
    "Real-world application building across C++, Java, Python, and React",
    "Active contributor on GitHub & technical volunteer in IEEE Student Branch"
  ];

  const jsonLines = [
    { num: '01', key: '"developer"', val: `"${personalInfo.profileJson.developer_name}",` },
    { num: '02', key: '"degree"', val: `"${personalInfo.profileJson.degree}",` },
    { num: '03', key: '"institution"', val: `"${personalInfo.profileJson.institution}",` },
    { num: '04', key: '"primary_stack"', val: `"${personalInfo.profileJson.primary_stack}",` },
    { num: '05', key: '"specialization"', val: `"${personalInfo.profileJson.specialization}",` },
    { num: '06', key: '"focus_areas"', val: `"${personalInfo.profileJson.focus_areas}",` },
    { num: '07', key: '"github"', val: '"13 repos / 99 commits",' },
    { num: '08', key: '"linkedin"', val: `"${personalInfo.profileJson.linkedin}",` },
    { num: '09', key: '"status"', val: `"${personalInfo.profileJson.status}",` },
    { num: '10', key: '"location"', val: `"${personalInfo.profileJson.location}",` },
    { num: '11', key: '"open_to_work"', val: 'true' }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">.about()</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-desc" style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
          Understanding systems from the database layer to user interfaces.
        </p>
      </div>

      <div className="about-grid">
        <PixelCard
          radius={20}
          gap={6}
          speed={28}
          spotlight={0.45}
          glow={0.35}
          opacity={0.3}
          theme={darkMode ? 'dark' : 'light'}
          colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
          glowColor={darkMode ? '#38bdf8' : '#2563eb'}
          className="about-pixel-container"
        >
          <div className="about-text-card">
            {personalInfo.about.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="about-action-row">
              <div className="now-badge">
                <span className="badge-pulse"></span>
                <span><strong>Focus:</strong> Core CS Fundamentals & Open Source Engineering</span>
              </div>
            </div>
          </div>
        </PixelCard>

        {/* Developer Profile JSON Inspector fitted cleanly */}
        <div className="about-json-side">
          <PixelCard
            radius={20}
            gap={6}
            speed={28}
            spotlight={0.45}
            glow={0.35}
            opacity={0.3}
            theme={darkMode ? 'dark' : 'light'}
            colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
            glowColor={darkMode ? '#38bdf8' : '#2563eb'}
            className="json-pixel-container-tall"
          >
            <div className="json-card-tall">
              <div className="json-card-header">
                <div className="json-header-left">
                  <Terminal size={15} className="terminal-icon" />
                  <span className="json-filename">ASHIN_PROFILE.JSON</span>
                  <span className="json-file-badge"><FileCode2 size={11} /> JSON</span>
                </div>
                <button
                  type="button"
                  className="json-copy-btn"
                  onClick={handleCopyJson}
                  title="Copy JSON configuration"
                >
                  {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="json-editor-body">
                <div className="json-code-line json-brace">&#123;</div>
                {jsonLines.map((line, idx) => (
                  <div key={idx} className="json-code-line">
                    <span className="json-line-num">{line.num}</span>
                    <span className="json-indent">&nbsp;&nbsp;</span>
                    <span className="json-token-key">{line.key}</span>
                    <span className="json-token-colon">: </span>
                    <span className="json-token-val">{line.val}</span>
                  </div>
                ))}
                <div className="json-code-line json-brace">&#125;</div>
              </div>
            </div>
          </PixelCard>

          <div className="about-focus-cards-row">
            <PixelCard
              radius={18}
              gap={6}
              speed={28}
              spotlight={0.45}
              glow={0.35}
              opacity={0.3}
              theme={darkMode ? 'dark' : 'light'}
              colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
              glowColor={darkMode ? '#38bdf8' : '#2563eb'}
              className="focus-pixel-container"
            >
              <div className="focus-card">
                <div className="focus-icon-box">
                  <Target size={22} />
                </div>
                <h3>Engineering Mission</h3>
                <p>
                  To build dependable software, explore data-driven architectures, and solve practical workflow bottlenecks.
                </p>
              </div>
            </PixelCard>

            <PixelCard
              radius={18}
              gap={6}
              speed={28}
              spotlight={0.45}
              glow={0.35}
              opacity={0.3}
              theme={darkMode ? 'dark' : 'light'}
              colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
              glowColor={darkMode ? '#38bdf8' : '#2563eb'}
              className="focus-pixel-container"
            >
              <div className="focus-card">
                <div className="focus-icon-box">
                  <BookOpen size={22} />
                </div>
                <h3>Continuous Growth</h3>
                <p>
                  Strengthening low-level principles, data structures, algorithm efficiency, and modern full-stack web engineering.
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
