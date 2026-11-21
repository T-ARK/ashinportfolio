import React from 'react';
import { FolderGit2, CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import PixelCard from './reactbits/PixelCard';

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">.projects()</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc" style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
          Practical software utilities, IoT systems, developer tools, and architecture simulations from GitHub.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <PixelCard
            key={project.id}
            radius={20}
            gap={6}
            speed={32}
            spotlight={0.45}
            glow={0.4}
            opacity={0.3}
            theme={darkMode ? 'dark' : 'light'}
            colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
            glowColor={darkMode ? '#38bdf8' : '#2563eb'}
            className="project-pixel-card-container"
          >
            <div className="project-card">
              <div className="project-top-row">
                <div className="project-icon-badge">
                  <FolderGit2 size={26} />
                </div>
                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-action-btn"
                      aria-label="View Live Project"
                      title="View Live Working App"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      aria-label="View on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={18} />
                      <ArrowUpRight size={13} style={{ marginLeft: '2px' }} />
                    </a>
                  )}
                </div>
              </div>

              <span className="project-badge">{project.language}</span>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              {project.highlights && (
                <div className="project-highlights">
                  <h4>Key Features</h4>
                  <ul>
                    {project.highlights.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className="feature-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-pill">
                    {tag}
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
