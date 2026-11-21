import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FluxLines from './components/reactbits/FluxLines';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      {/* Dynamic WebGL FluxLines Background */}
      <div className="flux-lines-bg-layer" aria-hidden="true">
        <FluxLines
          colors={darkMode ? ['#38bdf8', '#3b82f6', '#818cf8'] : ['#2563eb', '#3b82f6', '#60a5fa']}
          glow={1.8}
          rimWidth={0.2}
          lineWidth={1}
          flowDirection="down"
          speed={0.4}
          turbulence={0.9}
          fluidity={0.15}
          mouseInteraction={true}
          clickSwirl={true}
          transparent={true}
          opacity={darkMode ? 0.32 : 0.22}
        />
      </div>

      <div className="app-content-layer">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <GithubStats darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
