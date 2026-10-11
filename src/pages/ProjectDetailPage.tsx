import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projectsData } from "../data/projectsData";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} Case Study — How2Host Portfolio`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-white pt-28 sm:pt-36">
      <div className="container-site pb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-4xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="editorial-badge">{project.category}</span>
            {project.statusLabel && (
              <span className="rounded-full border border-[#E6E6E6] bg-[#F7F7F5] px-3 py-1 text-xs font-medium text-[#111111]">
                {project.statusLabel}
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed text-[#4B5563]">
            {project.overview}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#666666]">
            <div>
              <span className="font-semibold text-[#111111]">Client / Sector:</span> {project.clientType}
            </div>
            {project.techStack && (
              <div>
                <span className="font-semibold text-[#111111]">Technologies:</span> {project.techStack.join(", ")}
              </div>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#111111] hover:underline"
              >
                <span>Live Project Reference</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Narrative */}
      <section className="container-site py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Challenge &amp; Context
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                {project.slug === "waffcoff"
                  ? "Traditional printed menus in quick-service cafe settings are challenging to update, prone to wear, and can create bottlenecks during peak hours. WaffCoff required a rapid, smartphone-accessible menu catalog that customers could open immediately via a physical QR code placed at tables, eliminating the friction of downloading mobile apps or navigating slow, bloated web pages."
                  : project.slug === "bakersway"
                  ? "BakersWay needed an elegant, modern digital presence that celebrated artisanal bakery craftsmanship while making inquiries seamless for customers seeking custom baked items and local pickups."
                  : "Modern web applications frequently suffer from subtle session management and authorization vulnerabilities that automated scanners overlook. The organization commissioned an authorized, controlled security assessment to identify weaknesses prior to their production deployment."}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Delivered Capabilities
              </h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#111111]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Engagement Scope Summary */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] p-7 sm:p-8">
              <h3 className="text-base font-bold uppercase tracking-wider text-[#111111]">
                Services Delivered
              </h3>
              <ul className="mt-4 space-y-2.5">
                {project.servicesDelivered.map((srv, idx) => (
                  <li key={idx} className="rounded-lg bg-white border border-[#E6E6E6] p-3 text-xs font-semibold text-[#111111]">
                    {srv}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E6E6E6]">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center rounded-lg bg-[#111111] py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#262626] transition-colors"
                >
                  Discuss a Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
