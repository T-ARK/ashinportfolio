# ASHIN K R - Developer Portfolio

Modern interactive personal portfolio engineered with **React**, **Vite**, and responsive **React Bits** UI components.

- **GitHub Profile**: [https://github.com/ash-in07](https://github.com/ash-in07)
- **LinkedIn Profile**: [https://www.linkedin.com/in/ashin-k-r-3aa7a6386/](https://www.linkedin.com/in/ashin-k-r-3aa7a6386/)

---

## 🚀 Features & React Bits Integrations

1. **WebGL Background — `<FluxLines />`**:
   - Real-time WebGL fluid simulation with magnetic cursor interaction, click swirls, and dark/light mode shading.
2. **Hero Typography — `<TechText />`**:
   - Bold uppercase interactive canvas wordmark (`ASHIN K R`) with vector particle specks, dash reveals, and click impulse physics.
3. **Header Navigation — `<PillNav />`**:
   - Glassmorphic floating pill navigation bar with scalable SVG code logo, indicator dots, smooth scrolling, and dark/light theme toggle.
4. **Interactive Action Buttons — `<SpecularButton />`**:
   - Specular edge-lit WebGL buttons with cursor-proximity lighting tracking.
5. **3D Metallic Identity Card — `<ReflectiveCard />`**:
   - 3D interactive tilting metal ID card with real-time glare, brushed grain reflection, and full-bleed profile photo.
6. **Container Twinkle Effect — `<PixelCard />`**:
   - Interactive pixel-matrix spotlight and twinkling border canvas integrated across all content containers.
7. **Developer Activity & Stats — `<MagicBento />`**:
   - Symmetrical 4-column bento grid featuring live-accurate GitHub contribution heatmap (99 verified contributions), public repositories breakdown (13 repos), and toolchain ecosystem.

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview the production build locally
```bash
npm run preview
```

---

## 📁 Project Architecture

```
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Optimized images and media
│   ├── components/         # Modular application components
│   │   ├── Navbar.jsx      # Navigation bar with PillNav
│   │   ├── Hero.jsx        # Hero section with TechText & ReflectiveCard
│   │   ├── About.jsx       # About me narrative & ASHIN_PROFILE.JSON editor
│   │   ├── Skills.jsx      # Technical skills grid with PixelCard
│   │   ├── Projects.jsx    # Featured projects with live demo links
│   │   ├── Education.jsx   # Degree & coursework foundations
│   │   ├── GithubStats.jsx # MagicBento developer activity grid
│   │   ├── Contact.jsx     # Contact section with SpecularButton
│   │   ├── Footer.jsx      # Footer & back-to-top button
│   │   ├── Icons.jsx       # Custom SVG Icons
│   │   └── reactbits/      # Integrated React Bits component library
│   │       ├── FluxLines.jsx & FluxLines.css
│   │       ├── TechText.jsx & TechText.css
│   │       ├── PillNav.jsx & PillNav.css
│   │       ├── SpecularButton.jsx & SpecularButton.css
│   │       ├── ReflectiveCard.jsx & ReflectiveCard.css
│   │       ├── PixelCard.jsx & PixelCard.css
│   │       └── MagicBento.jsx & MagicBento.css
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio content & verified GitHub metrics
│   ├── App.jsx             # Main application layout with FluxLines background
│   ├── index.css           # Global theme styling, alignments & typography
│   └── main.jsx            # Application entry point
├── index.html              # Vite HTML template
├── vite.config.js          # Vite build configuration
└── package.json            # Project dependencies & scripts
```
