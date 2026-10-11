import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import { ProcessSection } from "../components/ProcessSection";
import { servicesData } from "../data/servicesData";

export function ServicesOverviewPage() {
  useEffect(() => {
    document.title = "Services — How2Host Technology Solutions & Security";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl">
          <span className="editorial-badge">Services Directory</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            Capabilities Designed for Real-World Business Needs
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563]">
            From bespoke website development to rigorous, authorized security testing and workflow utilities, How2Host delivers dependable technology services with clear scopes and transparent communication.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Call to Action Bar */}
      <section className="border-t border-[#E6E6E6] bg-white py-20">
        <div className="container-site flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Need a Custom Engagement or Scope Review?
            </h2>
            <p className="mt-2 text-sm text-[#666666]">
              Share your requirements with us and we will prepare a clear proposal without technical jargon.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-lg bg-[#111111] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#262626] shrink-0"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
