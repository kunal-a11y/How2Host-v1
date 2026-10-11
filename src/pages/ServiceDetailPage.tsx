import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { ServiceVisualArt } from "../components/ServiceVisualArt";
import { servicesData } from "../data/servicesData";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — How2Host Services`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const isPentest = service.slug === "cybersecurity";

  return (
    <div className="bg-white pt-28 sm:pt-36">
      {/* Back breadcrumb */}
      <div className="container-site pb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Services</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="editorial-badge">
              {service.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#4B5563]">
              {service.description}
            </p>
            <div className="pt-2">
              <Link
                to={service.ctaLink}
                className="inline-flex items-center gap-2 rounded-lg bg-[#111111] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#262626]"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-64 sm:h-72 w-full rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] p-6 shadow-card flex items-center justify-center">
              <ServiceVisualArt kind={service.visualType} />
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity authorization compliance notice */}
      {isPentest && (
        <section className="bg-[#111111] text-white py-10 border-b border-[#E6E6E6]">
          <div className="container-site flex items-start gap-4">
            <ShieldAlert className="h-6 w-6 text-white shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Authorized Testing &amp; Responsible Disclosure Policy
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-[#D1D5DB]">
                How2Host executes cybersecurity evaluations exclusively with written authorization, clearly agreed rules of engagement, and pre-defined IP/domain scopes. We operate under strict confidentiality. We do not provide guarantees of absolute security, and all testing targets agreed defensive objectives.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Long Overview & Scope */}
      <section className="container-site py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Service Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                {service.longOverview}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Methodology &amp; Phasing
              </h2>
              <div className="mt-6 space-y-4">
                {service.processApproach.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[#374151] pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E6E6E6] bg-white p-7 sm:p-8 shadow-card">
              <h3 className="text-lg font-bold tracking-tight text-[#111111]">
                Deliverables &amp; Capabilities
              </h3>
              <p className="mt-1 text-xs text-[#666666]">
                Agreed scope will reflect your specific project tier
              </p>
              <ul className="mt-6 space-y-3.5">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#111111]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E6E6E6]">
                <Link
                  to={service.ctaLink}
                  className="flex w-full items-center justify-center rounded-lg bg-[#111111] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#262626] transition-colors"
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
