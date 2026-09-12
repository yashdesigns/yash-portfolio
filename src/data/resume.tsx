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
    { title: "Mockito", icon: "logos:java" },
    { title: "Jest", icon: "logos:jest" },

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
    { title: "Cloud Build", icon: "logos:google-cloud" },
    { title: "Git", icon: "logos:git-icon" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "yashg7842@gmail.com",
    tel: "+918765650878",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yashdesigns",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yash-cisco/",
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
        url: "mailto:yashg7842@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hashout Technologies",
      href: "#",
      title: "Java Full Stack Developer (Client: Cloud Software Group)",
      location: "Bangalore, India",
      start: "May 2026",
      end: "Present",
      logoUrl: "/logos/hashout.png",
      description:
        "Developing scalable Java, Spring Boot and REST-based microservices for enterprise licensing platforms. Implemented business workflows, Next.js features, and worked with Apache Kafka/RabbitMQ. Handled CI/CD automation in GCP and PostgreSQL databases.",
    },
    {
      company: "Ekaggata Technologies",
      href: "#",
      title: "Software Engineer (Client: Societe Generale)",
      location: "Bangalore, India",
      start: "Jan 2024",
      end: "May 2026",
      logoUrl: "/logos/ekaggata.png",
      description:
        "Integrated third-party APIs and RabbitMQ. Optimized PostgreSQL schemas, leveraged TDD with Jest and Cypress. Implemented Micro-frontend architecture with React, reducing load times by 40%, and refactored code modules reducing codebase size significantly.",
    },
    {
      company: "Cisco Systems India",
      href: "#",
      title: "Software Engineer",
      location: "Bangalore, India",
      start: "Oct 2022",
      end: "Oct 2023",
      logoUrl: "/logos/cisco.png",
      description:
        "Reduced network latency by eliminating redundant calls, enhancing performance by 25%. Eliminated 80% of NPM warnings via code refactoring. Streamlined REST API endpoints using Spring Boot, implementing a comprehensive health check feature decreasing downtime.",
    },
    {
      company: "Monotype Solutions India",
      href: "#",
      title: "Software Engineer Trainee",
      location: "Noida, India",
      start: "Mar 2022",
      end: "Sept 2022",
      logoUrl: "/logos/monotype.png",
      description:
        "Developed missing font functionality using C++ for Adobe Acrobat DC. Used Chrome DevTools for profiling and unit testing using Jest. Established CI/CD pipelines in Jenkins for automated AWS deployment.",
    },
  ],

  education: [
    {
      school: "JK Institute of Applied Physics and technology, University of Allahabad",
      href: "#",
      degree: "B. Tech(Computer Science and Engineering) - 8.78 CGPA",
      logoUrl: "/logos/allahabad-university.png",
      start: "July 2018",
      end: "June 2022",
    },
  ],

  projects: [
    {
      title: "Enterprise Identity & API Gateway Platform",
      href: "#",
      dates: "Recent Project",
      active: true,
      description:
        "Architected and implemented a secure, end-to-end authentication and API gateway architecture. Built an OIDC-based sign-in flow integrating a custom Identity Provider (PureAuth) and Google SSO. Developed a robust Wrapper API edge layer with a comprehensive security filter chain encompassing CORS, distributed tracing (Correlation ID), rate limiting, and Redis-backed JWT token denylists. Secured downstream internal microservices (Core API) via strict JWT signature validation and RBAC authorization, orchestrating data access across Redis, Oracle DB, and PostgreSQL.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Microservices",
        "API Gateway",
        "JWT",
        "OIDC",
        "Redis",
        "PostgreSQL",
        "Oracle DB",
        "SSO",
        "Distributed Tracing",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Enterprise Licensing & Entitlement Platform",
      href: "#",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Engineered a comprehensive Enterprise Licensing & Entitlement backend utilizing Java and Spring Boot. Implemented a robust license generation and validation engine using cryptographic JWT signing with a multi-tiered PKI certificate hierarchy (Root, Intermediate, Leaf). Developed complex certificate rotation workflows, including fallback validation for active legacy certificates and overlap strategies for root thumbprints to ensure zero downtime. Designed PostgreSQL and Oracle database schemas for tracking entitlements, asset components, license lifecycles, telemetry enrollment, and comprehensive audit logging. Integrated a two-phase license validation process involving both cryptographic signature checks (SHA1/SHA256) and internal database consistency verification, along with a dynamic, database-driven generalized alert system.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "PKI & Certificate Management",
        "Cryptography (JWT, JWKS)",
        "PostgreSQL",
        "Oracle DB",
        "Caching",
        "Telemetry",
        "REST APIs",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  certifications: [
    {
      title: "Advanced Python",
      issuer: "LinkedIn",
      period: "Apr 2023",
      credentialId: "",
      href: "https://www.linkedin.com/learning/certificates/b23b29d9ee90c60d278f96b3af3bcd08b01698ae5ac30ae698933bdbdb8706e9/",
      logoUrl: "/logos/linkedin.png",
      description: "",
    },
    {
      title: "Python Training Certification Course",
      issuer: "Simplilearn",
      period: "Mar 2023",
      credentialId: "",
      href: "https://certificates.simplicdn.net/share/4261187.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Full Stack Java Developer Capstone Project",
      issuer: "Simplilearn",
      period: "Mar 2023",
      credentialId: "",
      href: "https://certificates.simplicdn.net/share/4207339.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Testing in a DevOps Lifecycle",
      issuer: "Simplilearn",
      period: "Mar 2023",
      credentialId: "",
      href: "https://certificates.simplicdn.net/share/4196805.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Develop a Web Application using frontend stack",
      issuer: "Simplilearn",
      period: "Feb 2023",
      credentialId: "",
      href: "https://certificates.simplicdn.net/share/4192771.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Implement Frameworks the DevOps way",
      issuer: "Simplilearn",
      period: "Jan 2023",
      credentialId: "",
      href: "https://certificates.simplicdn.net/share/4135212.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Scala & Functional Programming Essentials | Rock the JVM",
      issuer: "Udemy",
      period: "Jan 2023",
      credentialId: "UC-65f37169-a4fe-4c49-92fe-2a06cfcfe7f6",
      href: "http://www.ude.my/UC-65f37169-a4fe-4c49-92fe-2a06cfcfe7f6",
      logoUrl: "/logos/udemy.png",
      description: "",
    },
    {
      title: "Become a back-end expert",
      issuer: "Simplilearn",
      period: "Jan 2023",
      credentialId: "4095027",
      href: "https://certificates.simplicdn.net/share/4095027.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Implement OOPS using JAVA with Data Structures and Beyond",
      issuer: "Simplilearn",
      period: "Dec 2022",
      credentialId: "4051114",
      href: "https://certificates.simplicdn.net/share/4051114.pdf",
      logoUrl: "/logos/simplilearn.png",
      description: "",
    },
    {
      title: "Machine Learning",
      issuer: "DevTown",
      period: "Oct 2022",
      credentialId: "",
      href: "https://cert.devtown.in/verify/1h4lpm",
      logoUrl: "/logos/devtown.png",
      description: "",
    },
    {
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      period: "",
      credentialId: "",
      href: "https://www.hackerrank.com/certificates/ab129c6af001",
      logoUrl: "/logos/hackerrank.png",
      description: "",
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      period: "",
      credentialId: "",
      href: "https://www.hackerrank.com/certificates/e55d912f1b03",
      logoUrl: "/logos/hackerrank.png",
      description: "",
    },
  ],

  testimonials: [
    {
      quote:
        "I worked with Yash Gupta at SG as his tech lead, and I noticed his ability to quickly grasp new concepts and adapt to challenges. He is a fast learner with strong analytical skills and shows great potential to excel in any role he takes on. Yash’s dedication and enthusiasm made him a valuable asset to my team, and I’m confident he will continue to achieve great things in his career.",
      author: "Smaël Tanrhori, Tech Lead at Société Générale",
    },
    {
      quote:
        "I had the pleasure of mentoring Yash on the crucial project. He joined as a new grad but surprised us with his ability to ramp up so quickly on a complex codebase. Yash stands out as an Engineer who possesses great tech skills backed by the hunger to deep dive on even complex issues. His problem-solving ability combined with his organizational skills make him a great Software Engineer who can own an Engineering Project from requirements to production.",
      author: "Rahul Dutt Sharma, Principal Engineer at Monotype Solutions",
    },
    {
      quote:
        "I had the pleasure of working with Yash Gupta when he joined my team for apprenticeship, and I wholeheartedly recommend him for his outstanding contributions and growth. Yash played a key role in the iReport Tool project, where he skillfully configured an Apache reverse proxy server, seamlessly integrating it with Duo SSO using OAuth 2.0 for secure user authentication. He also set up a lab environment and infra to host a local instance on a Linux Ubuntu Server and implemented metrics visualization using Java, while enhancing Python scripts to pull data from platforms like Jira, Cdets, and Git. Yash’s technical acumen, honed through CCNA, Python, and Java Full Stack Development training, was matched by his professionalism, adaptability, and teamwork, evident in his completion of all the trainings and courses like Emotional Intelligence at Work and Developing Personal Leadership. He demonstrated exceptional social intelligence as the work assignments required him to work with partner and cross geographical teams. Yash’s positive attitude and ability to deliver results make him a valuable asset to any team.",
      author: "Sayed Raza Ali Quadri, Software Engineering Manager at Cisco Systems",
    },
  ],

  hackathons: [],
} as const;