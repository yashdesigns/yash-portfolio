import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Gupta",
  initials: "YG",
  url: "https://github.com/yashdesigns",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",

  description:
    "Java Full Stack Developer | Java, Spring Boot, Microservices | PostgreSQL | Next.js | Docker & Kubernetes | GCP, Azure & AWS",

  summary:
    "I'm a Java Full Stack Developer with 4+ years of experience building scalable enterprise applications and cloud-native microservices. My primary expertise is in <b>Java, Spring Boot, REST APIs, Microservices, Hibernate/JPA, PostgreSQL and Spring Security</b>, with hands-on experience designing backend services, business workflows, authentication, authorization and database integrations.\n\nI also work with <b>Docker, Kubernetes, GitHub Actions, Jenkins and cloud platforms including GCP, Azure and AWS</b> for application deployment and CI/CD automation. On the frontend, I work with <b>Next.js, TypeScript, React and Redux</b> to build enterprise web applications and integrate them with Spring Boot REST APIs.\n\nI focus on building maintainable, secure and scalable distributed systems, improving application reliability and performance, and working across the complete software development lifecycle from development and testing to deployment and production support.",

  avatarUrl: "/yash.jpeg",

  skills: [
    // Backend - Primary
    { title: "Java", icon: "logos:java" },
    { title: "Spring Boot", icon: "logos:spring-icon" },
    { title: "Spring Security", icon: "logos:spring-icon" },
    { title: "Microservices", icon: "logos:spring-icon" },
    { title: "REST APIs", icon: "mdi:api" },
    { title: "Hibernate", icon: "logos:hibernate" },
    { title: "JPA", icon: "logos:java" },
    { title: "PostgreSQL", icon: "logos:postgresql" },
    { title: "SQL", icon: "vscode-icons:file-type-sql" },
    { title: "RabbitMQ", icon: "logos:rabbitmq-icon" },
    { title: "JWT", icon: "material-symbols:key" },
    { title: "OAuth2", icon: "material-symbols:security" },

    // Testing
    { title: "JUnit", icon: "logos:junit" },
    { title: "Mockito", icon: "logos:java" },
    { title: "Jest", icon: "logos:jest" },
    { title: "Karate", icon: "mdi:test-tube" },

    // Frontend
    { title: "Next.js", icon: "logos:nextjs" },
    { title: "TypeScript", icon: "logos:typescript-icon" },
    { title: "React", icon: "logos:react" },
    { title: "Redux", icon: "logos:redux" },
    { title: "HTML/CSS", icon: "vscode-icons:file-type-html" },
    { title: "Reactstrap", icon: "logos:bootstrap" },
    { title: "Tailwind CSS", icon: "logos:tailwindcss-icon" },

    // Cloud
    { title: "Google Cloud", icon: "logos:google-cloud" },
    { title: "Microsoft Azure", icon: "logos:microsoft-azure" },
    { title: "AWS", icon: "logos:aws" },

    // DevOps
    { title: "Docker", icon: "logos:docker-icon" },
    { title: "Kubernetes", icon: "logos:kubernetes" },
    { title: "Jenkins", icon: "skill-icons:jenkins-light" },
    { title: "GitHub Actions", icon: "logos:github-actions" },
    { title: "Cloud Build", icon: "logos:google-cloud" },
    { title: "Terraform", icon: "logos:terraform" },
    { title: "Git", icon: "logos:git-icon" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "your-email@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: Icons.linkedin,
        navbar: true,
      },

      Contact: {
        name: "Contact",
        url: "#",
        icon: Icons.contact,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:your-email@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Houshout Technologies",
      href: "#",
      title: "Java Full Stack Developer",
      location: "Bangalore, India",
      start: "May 2026",
      end: "Present",
      logoUrl: "/logos/houshout.svg",

      description:
        "Developing enterprise-grade Java and Spring Boot microservices for Cloud Software Group, focusing primarily on backend engineering, REST API development, business workflows, security, database integration and cloud-native deployment. Working across the application lifecycle with Docker, Kubernetes, CI/CD and GCP, while building Next.js and TypeScript frontend features integrated with backend services.",
    },

    {
      company: "Societe Generale",
      href: "#",
      title: "Software Engineer",
      location: "Bangalore, India",
      start: "",
      end: "",
      logoUrl: "/logos/societe-generale.svg",

      description:
        "Developed and maintained Java and Spring Boot based enterprise applications and microservices. Worked on REST APIs, database integrations, backend business logic, event-driven workflows, automated testing and CI/CD processes while collaborating with cross-functional teams in an Agile environment.",
    },
  ],

  education: [
    {
      school: "",
      href: "",
      degree: "",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],

  projects: [
    {
      title: "Enterprise Licensing & Entitlement Platform",
      href: "#",
      dates: "May 2026 - Present",
      active: true,

      description:
        "Enterprise platform for managing software licensing, entitlements, releases and software downloads. Developed backend microservices using Java and Spring Boot, implementing REST APIs, request validation, JWT-based authentication and authorization, entitlement validation and release-based business workflows. Integrated PostgreSQL-based persistence and asynchronous service communication while supporting containerized deployment through Docker and Kubernetes.",

      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Spring Security",
        "JWT",
        "Hibernate/JPA",
        "PostgreSQL",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "GCP",
        "GitHub Actions",
        "Jenkins",
        "Next.js",
        "TypeScript",
      ],

      links: [],
      image: "/projects/licensing-platform.svg",
      video: "",
    },

    {
      title: "NeedForAction / Workflow Platform",
      href: "#",
      dates: "Enterprise Project",
      active: true,

      description:
        "Developed backend microservices for workflow and action-management capabilities using Java and Spring Boot. Implemented event-driven communication, REST APIs, validation, authentication and authorization, database operations and synchronization workflows. Built frontend functionality using Next.js and TypeScript and integrated it with backend microservices.",

      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "RabbitMQ",
        "PostgreSQL",
        "Hibernate",
        "JWT",
        "Next.js",
        "TypeScript",
        "Redux",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
      ],

      links: [],
      image: "/projects/workflow-platform.svg",
      video: "",
    },

    {
      title: "Dynamic Data & Regulatory Management",
      href: "#",
      dates: "Enterprise Project",
      active: true,

      description:
        "Implemented backend services for dynamic data retrieval, filtering and regulatory data management using Java, Spring Boot and PostgreSQL. Worked on dynamic query generation, database updates, validation, data import workflows and synchronization of regulatory information while maintaining scalable REST-based service architecture.",

      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "PostgreSQL",
        "SQL",
        "Hibernate/JPA",
        "Microservices",
        "TypeScript",
        "Next.js",
        "Jest",
      ],

      links: [],
      image: "/projects/data-platform.svg",
      video: "",
    },

    {
      title: "AI Chat Assistant",
      href: "#",
      dates: "Personal Project",
      active: true,

      description:
        "A full-stack AI assistant application focused on conversational interactions, backend API integration and retrieval-augmented workflows. The application combines a modern Next.js frontend with backend services and AI integrations for real-time conversational experiences.",

      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "REST APIs",
        "RAG",
        "Python",
        "Gemini API",
        "Tailwind CSS",
        "Socket.io",
      ],

      links: [],
      image: "/projects/ai-chatbot.svg",
      video: "",
    },
  ],

  certifications: [
    {
      title: "Java / Spring Boot Development",
      issuer: "",
      period: "",
      credentialId: "",
      href: "",
      logoUrl: "",
      description:
        "Java, Spring Boot, REST APIs, Microservices and backend development",
    },
  ],

  testimonials: [],

  hackathons: [],
} as const;