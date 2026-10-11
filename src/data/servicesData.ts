export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isComingSoon?: boolean;
  deliverables: string[];
  visualType: "laptop" | "security" | "solutions" | "server";
  longOverview: string;
  processApproach: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Website Design & Development",
    subtitle: "Modern, high-performance web engineering",
    description:
      "We design and develop modern, responsive websites that help businesses establish credibility, showcase their services, and convert visitors into customers.",
    ctaText: "Build My Website",
    ctaLink: "/contact?service=Website+Development",
    deliverables: [
      "Custom business websites and responsive landing pages",
      "Portfolio websites and brand showcases",
      "Website redesigns and performance overhauls",
      "Interactive interfaces and clean animations",
      "E-commerce platforms and digital storefronts",
      "Admin dashboards and content management features",
      "Performance, accessibility, and search optimization",
    ],
    visualType: "laptop",
    longOverview:
      "A modern digital presence is more than an aesthetic storefront; it is an operational asset. How2Host builds responsive, fast, and accessible websites tailored precisely to business goals. We avoid fragile page-builder templates, focusing instead on semantic architectures, clean design systems, and resilient engineering that stands up over time.",
    processApproach: [
      "Strategic layout planning and design system definition",
      "Production-ready component development using modern toolchains",
      "Comprehensive cross-device testing and performance validation",
      "Seamless launch coordination and post-launch verification",
    ],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity & Penetration Testing",
    subtitle: "Authorized assessments & defensive posture validation",
    description:
      "Identify security weaknesses, understand potential risks, and improve the security posture of your digital assets through authorized security assessments.",
    ctaText: "Discuss Security Testing",
    ctaLink: "/contact?service=Cybersecurity+%26+Penetration+Testing",
    deliverables: [
      "Web application security assessments",
      "Authorized penetration testing with defined scope",
      "Security configuration and access reviews",
      "Vulnerability identification and manual validation",
      "Risk prioritization based on business impact",
      "Comprehensive technical security reports",
      "Actionable remediation recommendations",
      "Retesting of agreed findings after fixes are deployed",
    ],
    visualType: "security",
    longOverview:
      "How2Host provides authorized security evaluations designed to help organizations uncover vulnerabilities before malicious actors do. Every assessment operates strictly under written authorization and clearly delineated scopes of work. We deliver pragmatic, prioritized guidance so engineering teams can remediate real risks without disruption to operations.",
    processApproach: [
      "Scoping agreement, non-disclosure protocols, and explicit written authorization",
      "Reconnaissance, threat modeling, and controlled assessment execution",
      "Detailed risk analysis, proof-of-concept verification, and actionable reporting",
      "Debrief consultation and verification retesting upon remediation",
    ],
  },
  {
    id: "tech-solutions",
    slug: "technology-solutions",
    title: "Business Technology Solutions",
    subtitle: "Pragmatic digital tools & workflow simplification",
    description:
      "Practical digital solutions that help businesses improve their online presence, simplify workflows, and deliver better customer experiences.",
    ctaText: "Explore Solutions",
    ctaLink: "/contact?service=Business+Technology+Solutions",
    deliverables: [
      "Custom business tools and workflow utilities",
      "Operational dashboards and internal admin panels",
      "API integrations and automated third-party bridges",
      "Workflow automation and task scheduling",
      "Digital customer experiences and QR interactions",
      "Custom website integrations and database connectivity",
    ],
    visualType: "solutions",
    longOverview:
      "Off-the-shelf software often leaves critical gaps in how businesses operate. How2Host develops tailored utilities, interactive dashboards, and streamlined integrations that automate manual steps, eliminate data silos, and provide clear visibility into operational performance.",
    processApproach: [
      "Workflow assessment to identify operational bottlenecks",
      "System architecture and lightweight database design",
      "Agile development of bespoke dashboards and automations",
      "Integration testing and operational handover",
    ],
  },
  {
    id: "hosting",
    slug: "hosting",
    title: "Hosting Solutions",
    subtitle: "In Development · Coming Soon",
    description:
      "We are preparing hosting solutions designed to make deploying and managing digital projects simpler.",
    ctaText: "Get Launch Updates",
    ctaLink: "/contact?service=Hosting+Launch+Updates",
    isComingSoon: true,
    deliverables: [
      "High-availability server infrastructure (in development)",
      "Zero-configuration deployment workflows",
      "Automated SSL provisioning and edge CDN routing",
      "Managed backups, monitoring, and proactive alerts",
      "Dedicated developer environments and simplified staging",
    ],
    visualType: "server",
    longOverview:
      "Reliable hosting should never be an afterthought or an administrative burden. How2Host is currently engineering a managed hosting solution tailored for small and growing teams who require dependable uptime, robust deployment pipelines, and responsive technical support without convoluted cloud configurations.",
    processApproach: [
      "Infrastructure architecture and hardware bench testing",
      "Automated orchestration and deployment pipeline design",
      "Early pilot testing with select business workloads",
      "Public launch and phased customer onboarding",
    ],
  },
];
