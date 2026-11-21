import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-title">{personalInfo.name}</p>
          <p className="footer-role">{personalInfo.role}</p>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React.</p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
