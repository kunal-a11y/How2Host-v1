export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  clientType: string;
  category: string;
  overview: string;
  servicesDelivered: string[];
  techStack?: string[];
  liveUrl?: string;
  features: string[];
  isVerifiedReal: boolean;
  statusLabel?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "waffcoff",
    slug: "waffcoff",
    name: "WaffCoff",
    clientType: "Cafe & Specialty Beverage Brand",
    category: "Digital Menu & QR Experience",
    overview:
      "A QR-based digital menu experience designed to help cafe customers discover menu items more conveniently.",
    servicesDelivered: [
      "Custom responsive mobile web interface",
      "QR code menu accessibility optimization",
      "Categorized beverage and food catalog presentation",
      "Fast-loading lightweight frontend architecture",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://how2host.vercel.app/",
    features: [
      "Instant smartphone menu access via QR code without app downloads",
      "Clear visual categorization for coffees, waffles, and specialties",
      "High-contrast mobile readability for indoor and outdoor lighting",
      "Lightweight bundle size for rapid loading over cellular networks",
    ],
    isVerifiedReal: true,
  },
  {
    id: "bakersway",
    slug: "bakersway",
    name: "BakersWay",
    clientType: "Artisan Bakery & Confectionery",
    category: "Business Showcase & Brand Website",
    overview:
      "A modern showcase website engineered to present artisanal bakery offerings and facilitate customer inquiries.",
    servicesDelivered: [
      "Responsive visual showcase design",
      "Product collection presentation",
      "Direct customer contact and inquiry channels",
      "Local search and metadata optimization",
    ],
    techStack: ["React", "Tailwind CSS"],
    features: [
      "Clean imagery presentation highlighting fresh baked products",
      "Direct inquiry pathways via WhatsApp and contact links",
      "Mobile-first responsive layout tailored for local discovery",
    ],
    isVerifiedReal: true,
  },
  {
    id: "confidential-sec-review",
    slug: "web-security-assessment",
    name: "Web Application Security Review",
    clientType: "Confidential Startup",
    category: "Authorized Security Assessment",
    overview:
      "An authorized web application vulnerability assessment conducted under strict non-disclosure, identifying high-priority authentication and session management findings.",
    servicesDelivered: [
      "Authorized vulnerability assessment",
      "Threat modeling and manual endpoint testing",
      "Technical vulnerability report with remediation guidance",
      "Post-fix verification retest",
    ],
    features: [
      "Identification and remediation of authentication flow weaknesses",
      "Comprehensive prioritized findings matrix",
      "Written guidance tailored for internal developers",
      "Confidential evaluation conducted with explicit client authorization",
    ],
    isVerifiedReal: true,
    statusLabel: "Confidential Case Study",
  },
];
