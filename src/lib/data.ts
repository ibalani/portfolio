export const profile = {
  name: "Ishaan Balani",
  role: "Computer Science Student",
  tagline: "I build ML pipelines, full-stack apps, and automate the boring stuff.",
  location: "San Jose, CA",
  email: "ibalani@asu.edu",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/ibalani24",
    linkedin: "https://linkedin.com/in/ishaan-balani-8a9b5229b",
  },
};

export const about = {
  bio: [
    "I'm a Computer Science student at Arizona State University (Class of 2027), currently doing undergraduate research on AI video generation pipelines and working as a Team Lead Intern building full-stack platforms used by over a thousand students.",
    "I like working across the stack — from optimizing ML pipelines with TensorFlow and PyTorch to shipping MERN apps with CI/CD in place. Outside of coursework, I build small tools and models for fun, usually at hackathons.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Arizona State University",
    role: "Undergraduate Research Assistant",
    start: "Aug 2024",
    end: "Present",
    location: "Tempe, AZ",
    highlights: [
      "Optimized an AI video generation pipeline, reducing processing time by 30% through scalable TensorFlow and PyTorch implementations.",
      "Applied 3D computer vision (OpenCV) on datasets of over 50,000 frames, enabling automated feature extraction and improving synthesis accuracy by 15%.",
      "Authored modular research code reused across 2 other research lab projects, ensuring maintainability and reproducibility.",
    ],
  },
  {
    company: "Scholarship Discovery Platform",
    role: "Computer Science Team Lead Intern",
    start: "Oct 2024",
    end: "Jul 2025",
    location: "Remote / Tempe, AZ",
    highlights: [
      "Directed a team of 5 developers to build a MERN-stack platform serving over 1,200 high school users for scholarship discovery.",
      "Increased backend query efficiency by 40% via database indexing and optimized API calls.",
      "Reduced average bug resolution time from 3-5 days to under 24 hours by implementing CI/CD workflows and automated testing.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "TaskLocker",
    description:
      "A scheduling assistant used by over 100 ASU students that parses PDF schedules into Google Calendar, with automated Gemini-powered planning that cuts routine planning time by 90%.",
    tech: ["Flask", "JavaScript", "Google Gemini API"],
  },
  {
    title: "AI Tumor Identifier",
    description:
      "An ML pipeline achieving over 99% accuracy across 5,000+ tumor records using decision tree and SVM classifiers, with automated preprocessing cutting manual data cleaning by 50%.",
    tech: ["Python", "Scikit-learn"],
  },
  {
    title: "Music Recommendation Model",
    description:
      "Built at a UC Berkeley hackathon — led a team of 4 to build a real-time recommendation engine over 10,000+ tracks, deployed as a Flask demo with under 200ms response time for live judging.",
    tech: ["Python", "Flask", "PyTorch"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "SQL",
      "Flask",
      "React",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
    ],
  },
  {
    category: "Systems & Tools",
    items: ["Linux", "Git", "AWS (EC2/S3)", "Docker", "MongoDB", "REST APIs", "Google Cloud"],
  },
  {
    category: "Core Knowledge",
    items: [
      "Operating Systems",
      "Networking (TCP/IP, DNS, DHCP)",
      "Distributed Systems",
      "Information Security",
    ],
  },
];

export const certifications: string[] = [
  "CCST: Cisco Certified Support Technician (Networking)",
  "Cisco Networking Academy: Introduction to Cybersecurity",
  "Cisco Networking Academy: Introduction to Modern AI",
];
