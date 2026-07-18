import type {
  DesignRole,
  ExperienceItem,
  HeroHighlight,
  AboutItem,
  Achievement,
  CaseStudy,
  Certification,
  CodingProfile,
  GitHubMetric,
  ProcessStep,
  SkillCategory,
  Testimonial,
  NavItem,
  Profile,
  Project,
  RecruiterAction,
  SocialLink,
} from "@/types/home";

export const navigation: NavItem[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case studies" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const profile: Profile = {
  name: "Adarsh Tiwari",

intro:
"Adarsh Tiwari — Product Engineer (Full Stack) Intern at Hornvin | Building Scalable Web Applications.",

role:
"Product Engineer (Full Stack) Intern at Hornvin, contributing to scalable web applications, modern frontend experiences, backend APIs, authentication systems, and production-ready software solutions.",

summary:
"Passionate software engineer focused on building high-performance, scalable, and user-centric web applications. Currently a Product Engineer (Full Stack) Intern at Hornvin, developing end-to-end products using modern JavaScript frameworks, backend architectures, cloud services, and DevOps practices.",

heroStack: [
"Data Structures & Algorithms",
"System Design",
"React",
"Next.js",
"TypeScript",
"JavaScript",
"Node.js",
"Express.js",
"MongoDB",
"REST APIs",
"AWS",
"Docker",
"CI/CD",
"Git",
"GitHub"
],

location: "India · Remote Ready",

availability:
"Open to SDE-1, Full Stack Developer, Product Engineer, and Software Engineering opportunities",

email: "[adarshtiwaridev01@gmail.com](mailto:adarshtiwaridev01@gmail.com)",

resumeHref: "/Adarsh_Nextjs.pdf",

portrait: {
src: "/image/logo/profile.jpg",
alt: "Adarsh Tiwari - Software Engineer",
width: 860,
height: 860,
},
};


export const socialLinks: SocialLink[] = [
  { href: "https://github.com/adarshtiwaridev", label: "GitHub" },
  { href: "https://www.linkedin.com/in/adarshtiwaridev", label: "LinkedIn" },
  { href: "https://twitter.com/adarshtiwaridev", label: "Twitter" },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "Stack", value: "Next.js · TypeScript · Node.js · MongoDB" },
  { label: "Focus", value: "High-performance products, SEO systems, and design-grade UX" },
  { label: "Edge", value: "Hybrid engineer-designer with delivery + storytelling range" },
];


export const engineeringExperience: ExperienceItem[] = [
{
company: "Hornvin",
role: "Product Engineer (Full Stack) Intern",
period: "Jul 2026 - Present",
location: "Remote",
outcomes: [
"Building scalable full-stack applications with modern web technologies.",
"Developing REST APIs and integrating databases for seamless data operations.",
"Implementing secure authentication, authorization, and scalable backend services.",
"Focusing on performance optimization, responsive UI development, and production deployments.",
],
},
{
company: "Athani Softtech",
role: "Founding Engineer",
period: "Apr 2026 - Present",
location: "Remote",
outcomes: [
"Leading full-stack product development across web applications, internal tools, and AI-powered business solutions.",
"Architecting scalable systems using Next.js, Node.js, MongoDB, and cloud-native deployment workflows.",
"Collaborating directly with founders and stakeholders to transform business requirements into production-ready products.",
],
},

{
company: "CorpTube",
role: "Full-Stack Developer Intern",
period: "Dec 2025 - Mar 2026",
location: "Remote",
outcomes: [
"Developed networking and video-platform features using Next.js, Node.js, and MongoDB.",
"Optimized database queries and API performance, improving critical user-flow response times.",
"Delivered reusable components and scalable architecture patterns within Agile development cycles.",
],
},

{
company: "GridaNeo Bharat",
role: "Full-Stack Developer Intern",
period: "Aug 2025 - Nov 2025",
location: "Remote",
outcomes: [
"Contributed to the development and launch of the GNB EV Service Platform.",
"Implemented JWT authentication, role-based access control, and secure backend workflows.",
"Built reusable UI systems and shared application modules that accelerated development velocity.",
],
},

{
company: "Freelance",
role: "Independent Full-Stack Developer",
period: "Apr 2025 - Present",
location: "Remote",
outcomes: [
"Delivered custom web applications, SaaS platforms, dashboards, and eCommerce solutions for clients.",
"Integrated payment gateways, authentication systems, third-party APIs, and cloud services.",
"Focused on performance optimization, SEO improvements, and scalable application architecture.",
],
},

{
company: "IBM SkillsBuild",
role: "Frontend Developer Intern",
period: "Jun 2024 - Aug 2024",
location: "Remote",
outcomes: [
"Built responsive React.js user interfaces while following modern frontend development practices.",
"Collaborated in Agile workflows and contributed to production-quality front-end deliverables.",
"Improved cross-browser compatibility, accessibility, and overall user experience quality.",
],
},
];


export const designRoles: DesignRole[] = [
  {
    organization: "CodeX",
    title: "Graphic Designer",
    period: "Aug 2024 - Present",
    focus: "Adobe Photoshop · Typography Theory",
    impact:
      "Managing 5-8 high-impact promotional assets each month with stronger hierarchy, motion awareness, and event-driven storytelling.",
  },
  {
    organization: "PW Skills",
    title: "PW Campus Ambassador",
    period: "Apr 2025 - May 2026",
    focus: "Community Growth · Acquisition",
    impact:
      "Driving awareness, user acquisition, and learning-track adoption through student-facing outreach and clear product communication.",
  },
  {
    organization: "InAmigos Foundation",
    title: "Junior Graphic Designer & Data Research Specialist",
    period: "Jan 2025 - Aug 2025",
    focus: "Design Operations · Google Sheets · Data Cleaning",
    impact:
      "Combined visual design with structured data support, improving research hygiene and content quality across internal workflows.",
  },
];

export const projects: Project[] = [
{
name: "GNB EV Service Platform",
headline:
"A production-ready EV service ecosystem powering bookings, payments, fleet operations, and business analytics.",
summary:
"Designed and developed a full-stack platform for EV service centers and fleet operators. The system streamlines customer bookings, secure payments, vehicle management, and operational workflows through a centralized dashboard.",
metrics: [
"30% faster API performance through backend optimization",
"25% reduction in operational workload via admin automation",
"Secure Razorpay payment verification and transaction handling",
],
impact:
"Enabled EV businesses to manage service operations, payments, and customer interactions from a single platform.",
status: "Live Product",
features: [
"Service booking and scheduling",
"Razorpay payment integration",
"Fleet and vehicle management",
"Admin analytics dashboard",
],
caseStudyId: "gnb-ev-platform",
stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
href: "https://www.gridaneobharat.com/",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore Platform",
image: {
src: "/projects/gnb-1.png",
alt: "GNB EV Service Platform Dashboard",
width: 1600,
height: 900,
},
video: {
src: "/projects/gnb-demo.mp4",
poster: "/projects/gnb-1.png",
},
},

{
name: "Kodemate Learning Platform",
headline:
"A modern EdTech platform delivering secure learning experiences, content management, and instructor workflows.",
summary:
"Built a scalable learning management system featuring authentication, protected course access, role-based dashboards, and optimized media delivery for online education.",
metrics: [
"40% faster media delivery through Cloudinary CDN",
"Role-based access control for learners and instructors",
"Secure JWT authentication and protected routes",
],
impact:
"Created a seamless digital learning environment that improves course delivery and student engagement.",
status: "Production Ready",
features: [
"Course creation and management",
"Student enrollment system",
"Instructor dashboard",
"Authentication and authorization",
"Media streaming optimization",
],
caseStudyId: "kodemate-learning-platform",
stack: ["MERN", "JWT", "Cloudinary", "Express", "MongoDB"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "View Architecture",
image: {
src: "/projects/edtech-1.png",
alt: "Kodemate Learning Platform",
width: 1600,
height: 900,
},
video: {
src: "/projects/edtech-demo.mp4",
poster: "/projects/edtech-1.png",
},
},

{
name: "CorpTube Network",
headline:
"A professional networking and video-first collaboration platform designed for creators, professionals, and communities.",
summary:
"Built a modern platform that combines professional networking, video content sharing, community engagement, and creator collaboration into a single ecosystem. The platform enables users to build professional connections while showcasing expertise through video-driven content.",
metrics: [
"Unified networking and video engagement experience",
"Scalable content delivery architecture",
"Professional profile and community ecosystem",
],
impact:
"Created a platform where professionals, creators, and businesses can connect, share knowledge, and grow their audience through engaging video content.",
status: "Active Development",
features: [
"Professional user profiles",
"Video publishing and streaming",
"Creator and community engagement",
"Networking and connection system",
"Content discovery and recommendations",
],
caseStudyId: "corptube-network",
stack: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore Platform",
image: {
src: "/projects/corptube-1.png",
alt: "CorpTube Network Platform",
width: 1600,
height: 900,
},
video: {
src: "/projects/corptube-demo.mp4",
poster: "/projects/corptube-1.png",
},
},

{
name: "Aakriti Commerce",
headline:
"A scalable eCommerce platform built with modern architecture and later released as an open-source project.",
summary:
"Developed a complete online commerce solution with authentication, product management, order workflows, and an admin dashboard. The project was later open-sourced for developers and contributors.",
metrics: [
"Open-sourced for community contributions",
"End-to-end product and order management",
"Fully responsive shopping experience",
],
impact:
"Delivered a production-grade eCommerce foundation while contributing to the open-source ecosystem.",
status: "Open Source",
features: [
"Product catalog management",
"Shopping cart and checkout",
"User authentication",
"Admin dashboard",
],
caseStudyId: "aakriti-commerce",
stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore Repository",
image: {
src: "/projects/aakriti-1.png",
alt: "Aakriti Commerce Storefront",
width: 1600,
height: 900,
},
video: {
src: "/projects/aakriti-demo.mp4",
poster: "/projects/aakriti-1.png",
},
},

{
name: "AI Agency Platform",
headline:
"A multi-agent AI platform automating customer support, content generation, lead qualification, and business workflows.",
summary:
"Engineered an AI-powered ecosystem that orchestrates multiple specialized AI agents to handle business automation tasks, improve customer engagement, and increase operational efficiency.",
metrics: [
"Automated repetitive business workflows",
"Integrated multiple AI agents for specialized tasks",
"Reduced response time through AI orchestration",
],
impact:
"Helped businesses leverage AI automation for customer support, productivity, content creation, and lead management.",
status: "Active Development",
features: [
"Multi-agent AI architecture",
"AI support assistant",
"Content generation workflows",
"Lead qualification automation",
"Business process automation",
],
caseStudyId: "ai-agency-platform",
stack: ["Next.js", "OpenAI", "Node.js", "MongoDB", "LangChain"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore AI Architecture",
image: {
src: "/projects/ai-agency-1.png",
alt: "AI Agency Platform Dashboard",
width: 1600,
height: 900,
},
video: {
src: "/projects/ai-agency-demo.mp4",
poster: "/projects/ai-agency-1.png",
},
},

{
name: "Placement Automation System",
headline:
"A recruitment operations platform built to automate candidate tracking, scheduling, and placement workflows.",
summary:
"Developed a centralized placement management solution for institutions and placement teams, replacing manual spreadsheets with automated workflows and real-time analytics.",
metrics: [
"80% reduction in manual placement tracking",
"50% faster interview scheduling",
"Centralized student and recruiter management",
],
impact:
"Improved placement operations by digitizing recruitment processes and providing actionable insights through analytics.",
status: "Production Ready",
features: [
"Student and recruiter management",
"Interview scheduling system",
"Automated notifications",
"Placement analytics dashboard",
],
caseStudyId: "placement-automation-system",
stack: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "View System Design",
image: {
src: "/projects/placement-1.png",
alt: "Placement Automation Dashboard",
width: 1600,
height: 900,
},
video: {
src: "/projects/placement-demo.mp4",
poster: "/projects/placement-1.png",
},
},
];


export const aboutItems: AboutItem[] = [
{
title: "Professional Summary",
category: "Philosophy",
description:
"Results-driven Full Stack Engineer passionate about building scalable, high-performance digital products that combine exceptional user experience with robust engineering. Experienced in transforming complex business requirements into production-ready solutions using modern web technologies, cloud infrastructure, and software engineering best practices.",
},
{
title: "B.Tech Computer Science",
category: "Education",
date: "2023 - 2027",
description:
"Strong academic foundation in Computer Science with focused expertise in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Object-Oriented Design principles.",
},
{
title: "Career Objective",
category: "Objective",
description:
"To contribute as a Software Development Engineer by designing scalable systems, solving complex engineering challenges, and delivering impactful products that create measurable business value while continuously advancing technical excellence and leadership capabilities.",
},
{
title: "Current Focus",
category: "Focus",
description:
"Deepening expertise in modern full-stack development, system design, cloud-native architectures, DevOps automation, and AI-powered applications using Next.js, TypeScript, Node.js, AWS, Docker, and CI/CD workflows.",
},
];


export const skillCategories: SkillCategory[] = [
{
label: "Frontend Engineering",
details: "Building responsive, accessible, and high-performance user experiences.",
skills: [
{ name: "HTML5", level: 95 },
{ name: "CSS3", level: 92 },
{ name: "JavaScript", level: 94 },
{ name: "TypeScript", level: 90 },
{ name: "React", level: 94 },
{ name: "Next.js", level: 92 },
{ name: "Redux Toolkit", level: 85 },
{ name: "Tailwind CSS", level: 92 },
],
},

{
label: "Backend Engineering",
details: "Designing scalable APIs, business logic, and server-side systems.",
skills: [
{ name: "Node.js", level: 92 },
{ name: "Express.js", level: 90 },
{ name: "REST APIs", level: 92 },
{ name: "Authentication & Authorization", level: 85 },
{ name: "JWT", level: 85 },
],
},

{
label: "Databases",
details: "Efficient data modeling, querying, and performance optimization.",
skills: [
{ name: "MongoDB", level: 90 },
{ name: "Mongoose", level: 88 },
{ name: "MySQL", level: 82 },
],
},

{
label: "Cloud & DevOps",
details: "Modern deployment pipelines and cloud infrastructure management.",
skills: [
{ name: "AWS", level: 80 },
{ name: "Docker", level: 78 },
{ name: "CI/CD", level: 80 },
{ name: "Vercel", level: 90 },
{ name: "Linux", level: 82 },
],
},

{
label: "Developer Tools",
details: "Version control, testing, debugging, and collaboration workflows.",
skills: [
{ name: "Git", level: 95 },
{ name: "GitHub", level: 95 },
{ name: "Postman", level: 90 },
{ name: "VS Code", level: 95 },
{ name: "Chrome DevTools", level: 88 },
],
},

{
label: "Computer Science Fundamentals",
details: "Strong foundation in problem-solving and software engineering principles.",
skills: [
{ name: "Data Structures & Algorithms", level: 90 },
{ name: "Object-Oriented Programming", level: 92 },
{ name: "Database Management Systems", level: 88 },
{ name: "Operating Systems", level: 84 },
{ name: "Computer Networks", level: 82 },
{ name: "System Design", level: 75 },
],
},
];

export const processSteps: ProcessStep[] = [
{
title: "Discovery & Strategy",
description:
"Understand business goals, user needs, technical requirements, and project success metrics before development begins.",
},
{
title: "Architecture Planning",
description:
"Define system architecture, technology stack, database design, API structure, and scalability considerations.",
},
{
title: "Product & UX Design",
description:
"Create intuitive user experiences, design systems, wireframes, and high-fidelity interfaces focused on usability.",
},
{
title: "Full-Stack Development",
description:
"Build responsive frontends, scalable backend services, secure APIs, and optimized database workflows.",
},
{
title: "Quality Assurance",
description:
"Perform comprehensive testing, bug validation, security checks, and cross-device compatibility reviews.",
},
{
title: "Deployment & DevOps",
description:
"Deploy production-ready applications with CI/CD pipelines, cloud infrastructure, monitoring, and performance optimization.",
},
{
title: "Growth & Optimization",
description:
"Analyze user behavior, monitor system performance, gather feedback, and continuously improve the product.",
},
];


export const achievements: Achievement[] = [
  { label: "DSA problems solved", value: "180+", detail: "Consistent practice in algorithms and real interview preparation." },
  { label: "Projects completed", value: "10+", detail: "Portfolio and client work spanning full-stack product builds." },
  { label: "Certifications", value: "9", detail: "Verified technical certifications in web development and cloud." },
  { label: "Hackathons", value: "2+", detail: "Built fast prototypes with thoughtful architecture under pressure." },
  { label: "Open source contributions", value: "4+", detail: "PRs and issue work across developer tooling and UI libraries." },
];

export const certifications: Certification[] = [
{
title: "Frontend Development Internship",
issuer: "IBM SkillsBuild",
date: "Aug 2024",
href: "/certifications/ibm.png",
image: "/certifications/ibm.png",
},

{
title: "Full Stack Web Development Internship",
issuer: "GridaNeo Bharat",
date: "Dec 2025",
href: "/certifications/gnb.png",
image: "/certifications/gnb.png",
},

{
title: "Data Visualisation: Empowering Business with Effective Insights",
issuer: "Tata Group (Forage)",
date: "15 june 2025",
href: "#",
image: "/certifications/tata-forage.png",
},

{
title: "Technology Job Simulation",
issuer: "Deloitte Australia (Forage)",
date: "2025",
href: "#",
image: "/certifications/deloitte-forage.png",
},

{
title: "Postman API Fundamentals Student Expert",
issuer: "Postman",
date: "2025",
href: "/certifications/postman.png",
image: "/certifications/postman.png",
},
];

export const testimonials: Testimonial[] = [
{
quote:
"Adarsh consistently demonstrated strong ownership across the development lifecycle. From architecture discussions to final deployment, he approached challenges with a problem-solving mindset and delivered reliable solutions.",
author: "Project Lead",
role: "Engineering Team",
company: "GridaNeo Bharat",
},
{
quote:
"His ability to quickly understand business requirements and translate them into clean, maintainable code made him a valuable contributor. He collaborated effectively and consistently delivered quality work.",
author: "Technical Mentor",
role: "Full-Stack Development",
company: "CorpTube",
},
{
quote:
"Adarsh combines strong frontend craftsmanship with practical backend engineering. He pays attention to performance, user experience, and code quality while maintaining delivery speed.",
author: "Development Reviewer",
role: "Software Engineering",
company: "Kodemate",
},
];


export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/adarshtiwaridev",
    badge: "intermediate",
    stats: [
      { label: "Problems solved", value: "150+" },
      { label: "Rating", value: "180+" },
    ],
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/adarshtiwaridev",
    badge: "4★",
    stats: [
      { label: "Problems solved", value: "20+" },
      { label: "Max rating", value: "100+" },
    ],
  },
];

export const githubMetrics: GitHubMetric[] = [
  { label: "Repositories", value: "18", description: "Polished open-source and project repositories." },
  { label: "Stars", value: "2+", description: "Community interest in quality code and tools." },
  { label: "Followers", value: "4+", description: "Professional network growth and collaboration." },
  { label: "Contributions", value: "1500+", description: "Regular activity across repositories and issues." },
];

export const caseStudies: CaseStudy[] = [
{
projectName: "GNB EV Service Platform",
problem:
"EV service centers and fleet operators relied on fragmented processes for bookings, payments, vehicle tracking, and customer management. This created operational inefficiencies, delayed service workflows, and poor visibility into business performance.",

architecture:
  "Next.js frontend → Node.js & Express API layer → MongoDB database → Razorpay payment gateway → Cloudinary asset storage → Role-based admin and customer dashboards.",

features: [
  "Vehicle service booking and scheduling system",
  "Secure Razorpay payment integration with webhook verification",
  "Customer and vehicle management dashboard",
  "Service history and maintenance tracking",
  "Admin analytics and operational reporting",
  "Role-based access control for staff and administrators",
],

challenges: [
  "Maintaining data consistency between bookings, payments, and service records",
  "Securing payment workflows against duplicate transactions and fraud attempts",
  "Optimizing dashboard performance while handling analytics-heavy views",
  "Designing scalable APIs for future business expansion",
],

solution:
  "Built a centralized service management ecosystem with secure payment verification, protected APIs, optimized database queries, and dashboard-level caching strategies. Implemented modular backend architecture to support future feature expansion.",

results: [
  "30% improvement in API response performance",
  "25% reduction in manual operational workload",
  "Improved customer booking experience and payment reliability",
  "Centralized service and business management workflows",
],

learning: [
  "Building production systems requires balancing scalability and maintainability.",
  "Payment systems demand strong validation and verification layers.",
  "Business dashboards must prioritize performance and actionable insights.",
  "Real-world applications benefit significantly from modular architecture patterns.",
],

},

{
projectName: "Kodemate Learning Platform",
problem:
"Modern online learning platforms often struggle with secure content delivery, user management, media performance, and scalable instructor workflows. Students require seamless access while instructors need efficient content management tools.",

architecture:
  "Next.js frontend → Express.js backend → MongoDB database → JWT authentication → Cloudinary CDN → Role-based dashboards for students and instructors.",

features: [
  "Course creation and management system",
  "Role-based student and instructor dashboards",
  "Protected learning content and gated routes",
  "JWT authentication with refresh token strategy",
  "Media optimization and video delivery through Cloudinary",
  "Student enrollment and progress tracking",
],

challenges: [
  "Building a secure authentication flow without disrupting learning experiences",
  "Handling large media assets efficiently across devices",
  "Managing protected content while maintaining scalability",
  "Creating reusable authorization patterns across multiple modules",
],

solution:
  "Implemented a secure JWT authentication architecture with refresh-token workflows, route-level protection, optimized media delivery, and modular backend services for user, course, and enrollment management.",

results: [
  "40% faster media delivery performance",
  "Improved learner retention through smoother user experience",
  "Reduced authentication friction across protected routes",
  "Scalable foundation for future course and instructor growth",
],

learning: [
  "User experience is equally important as backend security.",
  "CDN optimization dramatically improves content-heavy applications.",
  "Role-based architectures simplify platform scalability.",
  "Reusable authentication systems accelerate future development.",
],

},

{
projectName: "CorpTube Network",
problem:
"Professionals, creators, and businesses lacked a unified platform that combined networking, knowledge sharing, and video-driven content engagement. Existing solutions separated professional connections from content discovery.",

architecture:
  "Next.js frontend → Node.js API layer → MongoDB database → Cloudinary video storage and delivery → Recommendation and engagement modules.",

features: [
  "Professional networking ecosystem",
  "Video publishing and content distribution",
  "Creator and business profile management",
  "Community engagement and interaction tools",
  "Content discovery and recommendation workflows",
  "Professional portfolio and audience-building features",
],

challenges: [
  "Managing video delivery without compromising performance",
  "Designing scalable social interaction workflows",
  "Balancing content discovery with professional networking features",
  "Ensuring responsive user experiences across devices",
],

solution:
  "Developed a video-first networking platform with optimized media delivery, scalable content architecture, professional profile systems, and engagement-focused user experiences.",

results: [
  "Unified networking and content-sharing experience",
  "Improved creator visibility and audience engagement",
  "Scalable architecture for future social features",
  "Enhanced content discoverability through structured workflows",
],

learning: [
  "Social platforms require careful consideration of engagement patterns.",
  "Media-heavy applications demand performance-first architecture.",
  "Professional networking benefits from strong profile and discovery systems.",
  "Scalability should be planned from the earliest stages of development.",
],

},
];  

export const recruiterActions: RecruiterAction[] = [
  {
    id: "next-experience",
    label: "Review Next.js Experience",
    reply:
      "My strongest frontend delivery work is in Next.js, where I focus on performance-safe UI systems, SEO structure, auth flows, and production polish.",
  },
  {
    id: "ibm-certificate",
    label: "View IBM Certificate",
    reply:
      "You can review my IBM internship credential here. It highlights my frontend delivery exposure in a structured enterprise workflow.",
    cta: {
      href: "/certifications/ibm.png",
      label: "Open IBM Certificate",
    },
  },
  {
    id: "resume",
    label: "Download Full Resume",
    reply:
      "Opening the latest resume now. It includes my full experience timeline, internships, project work, and technical focus areas.",
    cta: {
      href: "/Adarsh_Nextjs.pdf",
      label: "Open Resume",
    },
  },
];
