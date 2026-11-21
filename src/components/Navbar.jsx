import React, { useState, useEffect } from 'react';
import { Sun, Moon, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PillNav from './reactbits/PillNav';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleItemClick = (item, index, event) => {
    if (item.href && item.href.startsWith('#')) {
      event?.preventDefault();
      const targetId = item.href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Precisely fitted code icon SVG for PillNav mark
  const LogoIcon = (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pill-nav-svg-code"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  return (
    <header className={`navbar-header-pill ${scrolled ? 'scrolled' : ''}`}>
      <div className="pill-nav-header-inner">
        <PillNav
          logo={LogoIcon}
          logoAlt={personalInfo.name}
          logoHref="#"
          items={navItems}
          onItemClick={handleItemClick}
          theme={darkMode ? 'dark' : 'light'}
          highlightColor={darkMode ? '#3b82f6' : '#2563eb'}
          layout="split"
          surface="glass"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          size="md"
          className="portfolio-pill-nav"
        />

        <button
          type="button"
          className="pill-theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
