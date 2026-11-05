export const personalInfo = {
  name: "Aishwarya S",
  logoText: "AS.",
  headline: "Computer Science Engineer | Privacy & Security Enthusiast | Full-Stack Developer",
  supportingLine: "Building secure, privacy-aware and practical software solutions.",
  badge: "Computer Science & Engineering Student",
  heroHeading: "Building Secure. Building Practical. Building for the Future.",
  heroSubtext: "I'm Aishwarya — a Computer Science Engineering student passionate about software development, privacy-preserving systems, web technologies and practical problem solving.",
  contact: {
    phone: "+91-8220424284",
    email: "aishwaryasundarraj1@gmail.com",
    github: "https://github.com/aishwaryasundarraj",
    linkedin: "https://linkedin.com/in/aishwarya-sundarraj/",
  },
  objective: "Aspiring Engineer graduate seeking an opportunity to apply my programming, problem-solving, and technical skills to develop practical software solutions while continuously learning and contributing to organizational growth.",
};

export const quickFacts = {
  education: "B.E. Computer Science and Engineering",
  college: "Er. Perumal Manimekalai College of Engineering, Hosur",
  expectedGraduation: "2027",
  cgpa: "8.5",
  interests: ["Software Development", "UI/UX Designing"],
};

export const statusCards = [
  {
    title: "Privacy",
    subtitle: "Building privacy-preserving applications",
    icon: "ShieldCheck",
    color: "cyan",
  },
  {
    title: "Development",
    subtitle: "React • FastAPI • Python",
    icon: "Code",
    color: "blue",
  },
  {
    title: "Focus",
    subtitle: "Software Development + UI/UX",
    icon: "Sparkles",
    color: "purple",
  },
];

export const privacyPillars = [
  {
    id: "pii",
    title: "PII Protection",
    description: "Detecting and protecting sensitive personally identifiable information.",
    icon: "EyeOff",
  },
  {
    id: "data-privacy",
    title: "Data Privacy",
    description: "Exploring privacy-preserving approaches for secure data sharing.",
    icon: "Lock",
  },
  {
    id: "secure-apps",
    title: "Secure Applications",
    description: "Building practical applications with security and privacy considerations.",
    icon: "ShieldAlert",
  },
];

export const projects = [
  {
    id: "agentshield",
    title: "AgentShield",
    subtitle: "Privacy-Preserving Healthcare Data Sharing Platform",
    status: "In Development",
    statusType: "development",
    description: "Developing a privacy-preserving healthcare platform that detects and redacts sensitive patient PII using Microsoft Presidio.",
    problem: "Healthcare data sharing is often hindered by strict PII regulations. Traditional methods risk exposing patient identities or destroying analytical utility.",
    solution: "AgentShield applies intelligent PII detection, redaction, k-anonymity, and differential privacy to enable safe, compliant medical data analytics.",
    keyFeatures: [
      "Sensitive patient PII detection",
      "PII redaction",
      "k-anonymity",
      "Differential privacy",
      "Secure healthcare data sharing",
      "Preserving analytical utility"
    ],
    techStack: ["React", "FastAPI", "Microsoft Presidio", "k-anonymity", "Differential privacy"],
    architectureSteps: [
      "Healthcare Data",
      "PII Detection",
      "PII Redaction",
      "Privacy Protection",
      "Secure Data Sharing",
      "Analytics"
    ],
    githubUrl: null,
    githubText: "GitHub — Add Repository",
    liveDemoUrl: null,
    liveDemoText: "Live Demo — Coming Soon",
    category: "Privacy & Healthcare",
  },
  {
    id: "pii-guardian",
    title: "PII Guardian",
    subtitle: "Privacy-Focused PII Detection System",
    status: "Completed Project",
    statusType: "completed",
    description: "Developed a privacy-focused system to automatically detect and identify sensitive PII in datasets.",
    problem: "Unstructured datasets frequently contain unmonitored confidential PII leading to data leak risks during processing or public release.",
    solution: "PII Guardian scans raw text and datasets using spaCy NLP models and regular expressions to highlight and secure confidential identifiers.",
    keyFeatures: [
      "Automatic PII detection",
      "Sensitive data identification",
      "PII protection",
      "Confidential data exposure reduction"
    ],
    techStack: ["Python", "spaCy", "Regex"],
    architectureSteps: [
      "Input Dataset",
      "PII Scanner",
      "Detected Information",
      "Protection Layer",
      "Safer Dataset"
    ],
    sampleScan: [
      { label: "Name", status: "Protected", value: "A******* S******" },
      { label: "Email", status: "Protected", value: "a*******@gmail.com" },
      { label: "Phone", status: "Protected", value: "+91-82*******4" },
    ],
    githubUrl: null,
    githubText: "GitHub — Add Repository",
    liveDemoUrl: null,
    liveDemoText: "Live Demo — Coming Soon",
    category: "Security Tools",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Core Language" },
      { name: "Java", level: "Basic" },
      { name: "C", level: "Basic" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: "Relational Database" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code", level: "IDE" },
      { name: "Jupyter Notebook", level: "Data Science Environment" },
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Code Hosting" }
    ]
  },
  {
    title: "Concepts",
    skills: [
      { name: "Data Structures", level: "Core CS" },
      { name: "Object-Oriented Programming", level: "Paradigm" },
      { name: "Machine Learning", level: "Emerging Tech" }
    ]
  }
];

export const webDevSkills = ["HTML", "CSS", "JavaScript", "React.js", "FastAPI"];

export const experienceTimeline = [
  {
    year: "2026",
    role: "Web Development Intern",
    company: "JRM InfoTech",
    location: "Hosur",
    responsibilities: [
      "Built and maintained responsive web pages",
      "Worked with HTML, CSS, JavaScript, and React.js",
      "Collaborated with development team",
      "Implemented frontend features",
      "Resolved bugs"
    ]
  },
  {
    year: "2025",
    role: "Web Development Intern",
    company: "Falcon Solutions",
    location: "Bengaluru",
    responsibilities: [
      "Developed responsive frontend components",
      "Used HTML, CSS, JavaScript and React.js",
      "Implemented UI features based on project requirements",
      "Assisted with debugging frontend issues",
      "Collaborated with team members during application development and testing"
    ]
  }
];

export const educationTimeline = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Er. Perumal Manimekalai College of Engineering, Hosur",
    year: "2027",
    score: "CGPA: 8.5"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Parimalam Matric Hr. Sec. School, Dinnur",
    year: "2023",
    score: "Percentage: 75%"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Parimalam Matric Hr. Sec. School, Dinnur",
    year: "2021",
    score: "Percentage: All Pass"
  }
];

export const hackathonData = {
  title: "TN-WISE Women's Hackathon",
  badge: "TN-WISE Women's Hackathon",
  role: "Participant",
  projectTitle: "Cell-Certify",
  description: "Developed Cell-Certify, an EV battery second-life certification solution.",
  flowSteps: [
    "Used EV Battery",
    "Battery Assessment",
    "Second-Life Evaluation",
    "Certification",
    "Reuse"
  ]
};

export const softSkills = [
  { name: "Adaptability", desc: "Quickly adjusting to new technologies, workflows, and team environments.", icon: "RefreshCw" },
  { name: "Quick Learner", desc: "Rapidly absorbing technical concepts and applying them to practical code.", icon: "Zap" },
  { name: "Communication Skills", desc: "Clear articulation of ideas, technical documentation, and team collaboration.", icon: "MessageSquare" }
];

export const areasOfInterest = [
  {
    title: "Software Development",
    desc: "Building practical and useful software solutions.",
    icon: "Terminal"
  },
  {
    title: "UI/UX Designing",
    desc: "Creating intuitive and user-friendly digital experiences.",
    icon: "Layout"
  }
];
