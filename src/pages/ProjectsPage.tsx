import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects & Case Studies — How2Host";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      {/* Header */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl">
          <span className="editorial-badge">Portfolio</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            Verified Engagements &amp; Technical Solutions
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563]">
            Explore our completed digital projects, mobile web experiences, and authorized security assessments. We only showcase real, verified work.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Confidentiality Commitment Strip */}
      <section className="border-t border-[#E6E6E6] bg-[#F7F7F5] py-16">
        <div className="container-site max-w-4xl text-center">
          <span className="editorial-badge">Transparency Guarantee</span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Integrity in Our Client Showcases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#666666]">
            How2Host upholds strict client non-disclosure agreements. We do not invent logos, create fake case testimonials, or fabricate customer metrics. Private engagements are presented with anonymized details only when permission has been formally granted.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#111111] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#262626] transition-colors"
            >
              Propose a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
