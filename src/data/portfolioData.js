export const personalInfo = {
  name: "ASHIN K R",
  fullName: "ASHIN K R",
  role: "BTech Computer Science | Data Science Focus",
  tagline: "I build responsive web applications, developer tools, and robust software systems in C++, Java, and Python with a focus on data structures, clean code, and practical problem solving.",
  email: "ashinkrvj@gmail.com",
  github: "https://github.com/ash-in07",
  linkedin: "https://www.linkedin.com/in/ashin-k-r-3aa7a6386/",
  about: [
    "I am an undergraduate Computer Science and Engineering student specializing in Data Science at St Thomas College of Engineering & Technology (APJ Abdul Kalam Technological University). My academic and project work combines core computational principles—such as data structures, operating systems, and computer architecture—with modern full-stack web and systems engineering.",
    "Rather than treating code merely as syntax, I focus on understanding systems from the database layer to user interfaces: designing clean object-oriented architectures, optimizing algorithms, and engineering functional software utilities.",
    "Beyond coursework, I actively build applications, contribute to open source on GitHub, participate in technical student communities (including IEEE Student Branch), and continuously sharpen my fundamentals across C++, Java, Python, SQL, and React."
  ],
  profileJson: {
    developer_name: "ASHIN K R",
    degree: "BTech CSE (Data Science)",
    institution: "St Thomas College of Engg",
    primary_stack: "C++ / Java / Python / React / SQL",
    specialization: "Data Science & Systems Engineering",
    focus_areas: "Algorithms, Clean Architecture, Tools",
    github_repos: "13 Public Repositories (99 Commits)",
    linkedin: "in/ashin-k-r-3aa7a6386",
    status: "Open to Internships & Collaborations",
    location: "Kerala, India"
  },
  stats: [
    { label: "Degree Focus", value: "BTech CS & Data Science" },
    { label: "Core Languages", value: "C++, Java, Python, SQL" },
    { label: "GitHub Repos", value: "13 Public Repos" },
    { label: "2026 Activity", value: "99 Contributions" }
  ]
};

export const educationData = [
  {
    degree: "BTech in Computer Science & Engineering (Data Science)",
    institution: "St Thomas College of Engineering & Technology",
    period: "2023 - 2027",
    description:
      "Rigorous academic training across computational mathematics, systems architecture, algorithmic problem solving, and modern data science pipelines.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems & Linux",
      "Computer Organization & Architecture",
      "Object-Oriented Programming (Java/C++)",
      "Discrete Mathematics & Probability"
    ]
  }
];

export const skillCategories = [
  {
    category: "Languages [01]",
    icon: "code",
    skills: ["C++", "Java", "Python", "SQL", "JavaScript (ES6+)"]
  },
  {
    category: "Frontend & Web [02]",
    icon: "globe",
    skills: ["React", "HTML5", "CSS3", "REST APIs", "Vite", "Responsive Design"]
  },
  {
    category: "Core CS & Systems [03]",
    icon: "cpu",
    skills: [
      "Data Structures & Algorithms",
      "CPU Pipeline Hazard Analysis",
      "Object-Oriented Design (OOP)",
      "Database Design (DBMS)",
      "Operating Systems"
    ]
  },
  {
    category: "Tools & Environment [04]",
    icon: "tool",
    skills: ["Git", "GitHub", "VS Code", "Linux / Bash", "MySQL", "npm"]
  }
];

export const projects = [
  {
    id: "multi-lang-ide",
    title: "Multi-Language Web IDE",
    language: "JavaScript / Web",
    category: "Developer Tool",
    description:
      "A versatile web-based integrated development environment (IDE) designed for rapid code authoring, syntax highlighting, and live multi-language compilation in modern browsers.",
    highlights: [
      "Multi-language code editing support with syntax highlighting",
      "Clean browser-based interface tailored for rapid prototyping",
      "Modular frontend architecture for code evaluation and output logging"
    ],
    tags: ["JavaScript", "Web IDE", "Developer Tools", "Frontend"],
    githubUrl: "https://github.com/ash-in07/Multi-Language-IDE"
  },
  {
    id: "clg-bus-tracking",
    title: "Smart GPS College Bus Tracking System",
    language: "HTML / JavaScript / IoT",
    category: "IoT & Web Transit",
    description:
      "A smart GPS-powered transit tracking system designed to streamline daily campus commuting. Transmits real-time vehicle coordinates to an intuitive dashboard so students and staff can monitor bus positions and estimated arrival times.",
    highlights: [
      "Live GPS telemetry integration for accurate vehicle tracking",
      "Transparent schedule and route monitoring for student commuters",
      "Reduces transit uncertainty and waiting times through live status feeds"
    ],
    tags: ["GPS", "Transit Management", "JavaScript", "IoT Integration"],
    githubUrl: "https://github.com/ash-in07/clg-bus-tracking-"
  },
  {
    id: "ieee-web",
    title: "IEEE Student Branch Portal",
    language: "HTML5 / CSS3 / JavaScript",
    category: "Community Platform",
    description:
      "A responsive community web portal engineered for an IEEE student branch, showcasing technical events, workshops, executive committee profiles, and membership information.",
    highlights: [
      "Live deployed student branch community portal",
      "Responsive layout for event calendars and announcement showcases",
      "Clean component structure for committee listings and resource links"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Community Web"],
    githubUrl: "https://github.com/ash-in07/ieee-web",
    liveUrl: "https://ash-in07.github.io/ieee-web/"
  },
  {
    id: "atm-system",
    title: "ATM Interface Banking System",
    language: "Java",
    category: "Desktop Application",
    description:
      "An automated teller machine (ATM) simulation application that performs secure banking workflows such as PIN authentication, balance inquiries, cash deposits, and withdrawals.",
    highlights: [
      "Strict object-oriented encapsulation and polymorphic transaction handling",
      "Secure credential validation and defensive input sanitization",
      "Comprehensive error handling against overdrafts and invalid operations"
    ],
    tags: ["Java", "OOP", "Banking System", "Console Application"],
    githubUrl: "https://github.com/ash-in07/ATM-INTERFACE"
  },
  {
    id: "pipeline-hazards",
    title: "CPU Pipeline Hazard Analyzer",
    language: "Systems Architecture",
    category: "Computer Architecture",
    description:
      "A computer architecture simulation model designed to detect and analyze instruction pipeline hazards—specifically identifying data hazards, structural bottlenecks, and control (branch) hazards in processor pipelines.",
    highlights: [
      "Identifies RAW (Read After Write), WAR, and WAW data hazard dependencies",
      "Analyzes branch penalties and control dependency stalls",
      "Demonstrates instruction reordering and forwarding optimization principles"
    ],
    tags: ["Computer Architecture", "Pipeline Hazards", "CPU Design", "Assembly"],
    githubUrl: "https://github.com/ash-in07/Pipeline-Hazards-Identifying-Data-Structural-Control-Hazards"
  },
  {
    id: "portfolio-web",
    title: "Developer Portfolio System",
    language: "React / Vite / CSS",
    category: "Web Platform",
    description:
      "Personal interactive developer portfolio engineered with React, WebGL FluxLines, Specular lighting, and 3D metallic reflection physics.",
    highlights: [
      "Live production deployment with responsive navigation",
      "Interactive WebGL fluid simulations and cursor magnetic effects",
      "Live GitHub API activity integration"
    ],
    tags: ["React", "WebGL", "Vite", "Portfolio"],
    githubUrl: "https://github.com/ash-in07/portfolio.",
    liveUrl: "https://ash-in07.github.io/portfolio./"
  }
];
