import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import TechText from './reactbits/TechText';
import SpecularButton from './reactbits/SpecularButton';
import ReflectiveCard from './reactbits/ReflectiveCard';
import PixelCard from './reactbits/PixelCard';
import profileImg from '../assets/profile.jpg';

export default function Hero({ darkMode }) {
  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGithubClick = () => {
    window.open(personalInfo.github, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-title-group">
            <span className="hero-intro-label">Hi, I'm</span>
            
            {/* Prominent, bold, uppercase TechText */}
            <div className="tech-text-container-large">
              <TechText
                text={personalInfo.name}
                fontWeight={900}
                fontSize={108}
                letterSpacing={-0.03}
                reveal="letter"
                dashLength={5}
                dashGap={2}
                specks={20}
                intro="assemble"
                introDuration={1.8}
                clickKick={true}
                color={darkMode ? '#ffffff' : '#0a0f1d'}
                accentColor={darkMode ? '#38bdf8' : '#2563eb'}
                align="left"
              />
            </div>
            
            <h1 className="hero-title-sr-only">
              {personalInfo.name}
            </h1>
          </div>

          <p className="hero-sub">
            {personalInfo.role}
          </p>

          <p className="hero-desc">
            {personalInfo.tagline}
          </p>

          <div className="hero-buttons">
            <SpecularButton
              size="md"
              radius={14}
              tint={darkMode ? '#3b82f6' : '#2563eb'}
              tintOpacity={darkMode ? 0.35 : 0.22}
              textColor={darkMode ? '#ffffff' : '#1e3a8a'}
              lineColor={darkMode ? '#60a5fa' : '#2563eb'}
              baseColor={darkMode ? '#1e293b' : '#bfdbfe'}
              intensity={1.2}
              idleIntensity={0.45}
              followMouse={true}
              onClick={handleContactClick}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </SpecularButton>

            <SpecularButton
              size="md"
              radius={14}
              tint={darkMode ? '#38bdf8' : '#2563eb'}
              tintOpacity={darkMode ? 0.15 : 0.08}
              textColor={darkMode ? '#f8fafc' : '#0f172a'}
              lineColor={darkMode ? '#38bdf8' : '#2563eb'}
              baseColor={darkMode ? '#1e293b' : '#dbeafe'}
              intensity={1}
              idleIntensity={0.35}
              followMouse={true}
              onClick={handleLinkedinClick}
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </SpecularButton>

            <SpecularButton
              size="md"
              radius={14}
              tint={darkMode ? '#ffffff' : '#0f172a'}
              tintOpacity={darkMode ? 0.08 : 0.06}
              textColor={darkMode ? '#f8fafc' : '#0f172a'}
              lineColor={darkMode ? '#94a3b8' : '#64748b'}
              baseColor={darkMode ? '#334155' : '#cbd5e1'}
              intensity={1}
              idleIntensity={0.35}
              followMouse={true}
              onClick={handleGithubClick}
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </SpecularButton>
          </div>

          <div className="hero-stats">
            {personalInfo.stats.map((stat, idx) => (
              <PixelCard
                key={idx}
                radius={16}
                gap={5}
                speed={25}
                spotlight={0.45}
                glow={0.35}
                opacity={0.3}
                theme={darkMode ? 'dark' : 'light'}
                colors={darkMode ? ['#38bdf8', '#3b82f6', '#60a5fa'] : ['#2563eb', '#3b82f6', '#93c5fd']}
                glowColor={darkMode ? '#38bdf8' : '#2563eb'}
                className="stat-pixel-card"
              >
                <div className="stat-card">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-val">{stat.value}</span>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="reflective-card-holder">
            <ReflectiveCard
              theme={darkMode ? 'dark' : 'light'}
              metalness={0.92}
              roughness={0.25}
              blurStrength={6}
              shine={1.25}
              glare={0.65}
              enableTilt={true}
              tiltStrength={15}
              width={340}
              height={500}
              radius={24}
              className="reflective-card-image-only"
            >
              <div className="custom-card-full-image-wrap">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="custom-card-full-image"
                />
              </div>
            </ReflectiveCard>
          </div>
        </div>
      </div>
    </section>
  );
}
