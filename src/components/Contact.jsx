import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import SpecularButton from './reactbits/SpecularButton';

export default function Contact({ darkMode }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(personalInfo.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => copyFallback());
    } else {
      copyFallback();
    }
  };

  const copyFallback = () => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = personalInfo.email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-box">
        <h3 className="contact-title">Let's connect and build together</h3>
        <p className="contact-subtitle">
          Whether you want to collaborate on a software project, discuss data science topics,
          or just say hi, my inbox is always open!
        </p>

        <div className="contact-links">
          <SpecularButton
            size="md"
            radius={14}
            tint={darkMode ? '#ffffff' : '#0f172a'}
            tintOpacity={darkMode ? 0.08 : 0.05}
            textColor={darkMode ? '#f8fafc' : '#0f172a'}
            lineColor={darkMode ? '#94a3b8' : '#64748b'}
            baseColor={darkMode ? '#334155' : '#cbd5e1'}
            intensity={1}
            idleIntensity={0.3}
            followMouse={true}
            onClick={() => window.open(personalInfo.github, '_blank', 'noopener,noreferrer')}
          >
            <GithubIcon size={20} />
            <span>GitHub</span>
          </SpecularButton>

          <SpecularButton
            size="md"
            radius={14}
            tint={darkMode ? '#ffffff' : '#0f172a'}
            tintOpacity={darkMode ? 0.08 : 0.05}
            textColor={darkMode ? '#f8fafc' : '#0f172a'}
            lineColor={darkMode ? '#94a3b8' : '#64748b'}
            baseColor={darkMode ? '#334155' : '#cbd5e1'}
            intensity={1}
            idleIntensity={0.3}
            followMouse={true}
            onClick={() => window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer')}
          >
            <LinkedinIcon size={20} />
            <span>LinkedIn</span>
          </SpecularButton>

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
            onClick={() => window.location.href = `mailto:${personalInfo.email}`}
          >
            <Mail size={20} />
            <span>Send Email</span>
          </SpecularButton>
        </div>

        <div className="email-copy-bar">
          <span className="email-address">{personalInfo.email}</span>
          <button
            type="button"
            className="copy-btn"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check size={16} className="text-green" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
