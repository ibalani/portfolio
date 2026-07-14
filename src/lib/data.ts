// Placeholder content — replace with real details from your resume.
// Once you share your resume, this is the only file that needs to change.

export const profile = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "I build things for the web.",
  location: "City, Country",
  email: "you@example.com",
  resumeUrl: "/resume.pdf", // drop your resume PDF into /public/resume.pdf
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
  },
};

export const about = {
  bio: [
    "Add a couple of sentences about who you are, what you work on, and what you care about as an engineer.",
    "A second paragraph works well for interests outside of work, or the kind of problems you enjoy solving.",
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
    company: "Company Name",
    role: "Job Title",
    start: "2024",
    end: "Present",
    location: "City, Country",
    highlights: [
      "Describe a key responsibility or achievement in this role.",
      "Quantify impact where you can, e.g. performance, scale, or team size.",
    ],
  },
  {
    company: "Previous Company",
    role: "Job Title",
    start: "2022",
    end: "2024",
    location: "City, Country",
    highlights: [
      "Describe a key responsibility or achievement in this role.",
      "Another highlight from this role.",
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
    title: "Project One",
    description:
      "A short description of the project, what it does, and why you built it.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of the project, what it does, and why you built it.",
    tech: ["Python", "PostgreSQL"],
    repo: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of the project, what it does, and why you built it.",
    tech: ["React", "Node.js"],
    link: "#",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["TypeScript", "Python", "Java", "SQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
];
