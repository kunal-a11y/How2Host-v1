export interface UpdateItem {
  id: string;
  title: string;
  date: string;
  status: "Coming Soon" | "In Progress" | "Planned" | "Released";
  category: "Infrastructure" | "Website" | "Showcase" | "Platform";
  summary: string;
  details: string;
}

export const updatesData: UpdateItem[] = [
  {
    id: "hosting-solutions",
    title: "Hosting Solutions & Dedicated Infrastructure",
    date: "October 2026",
    status: "Coming Soon",
    category: "Infrastructure",
    summary:
      "We are preparing our upcoming hosting offering and refining the experience for managing and deploying digital projects.",
    details:
      "Our upcoming hosting platform is engineered for seamless deployment with managed backups, enterprise-grade edge routing, and automated security monitoring. Architecture benchmarks and infrastructure provisioning are actively underway.",
  },
  {
    id: "website-portfolio-improvements",
    title: "Complete Website & Architecture Redesign",
    date: "October 2026",
    status: "In Progress",
    category: "Website",
    summary:
      "We are continuously improving our digital presence, project presentation, and service information with a brand-new multi-page editorial experience.",
    details:
      "The How2Host platform is being upgraded with a clean black-and-white visual identity, dedicated service deep-dives, interactive project reviews, and enhanced contact validation systems.",
  },
  {
    id: "new-project-showcases",
    title: "New Project Showcases & Verified Case Studies",
    date: "Late 2026",
    status: "Planned",
    category: "Showcase",
    summary:
      "More project case studies will be added as client engagements are completed and approved for public display.",
    details:
      "In line with our transparency commitments, How2Host only publishes case studies that have been thoroughly verified and authorized by our clients. Additional commercial web deployments and security assessments are in the queue for publication.",
  },
];
