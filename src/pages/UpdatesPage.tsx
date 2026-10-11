import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatesData } from "../data/updatesData";

export function UpdatesPage() {
  useEffect(() => {
    document.title = "Updates & Roadmap — How2Host";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      {/* Header */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl space-y-4">
          <span className="editorial-badge">Roadmap &amp; News</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            What We Are Building &amp; What's Ahead
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#4B5563]">
            An honest, editorial view of our active development, infrastructure plans, and verified releases. We only report genuine engineering progress.
          </p>
        </div>
      </section>

      {/* Editorial Feed */}
      <section className="container-site py-20 lg:py-28">
        <div className="max-w-4xl mx-auto space-y-8">
          {updatesData.map((update) => (
            <article
              key={update.id}
              className="rounded-2xl border border-[#E6E6E6] bg-white p-7 sm:p-9 shadow-card transition-all hover:border-[#111111]/30 hover:shadow-cardHover"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6E6E6] pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      update.status === "Coming Soon"
                        ? "bg-[#111111] text-white"
                        : update.status === "In Progress"
                        ? "bg-[#F7F7F5] border border-[#E6E6E6] text-[#111111]"
                        : "bg-[#F7F7F5] text-[#666666]"
                    }`}
                  >
                    {update.status}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                    {update.category}
                  </span>
                </div>
                <time className="text-xs text-[#9CA3AF] font-medium">
                  {update.date}
                </time>
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#111111]">
                {update.title}
              </h2>

              <p className="mt-3 text-base font-medium leading-relaxed text-[#374151]">
                {update.summary}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                {update.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Hosting Waitlist / Updates Callout */}
      <section className="border-t border-[#E6E6E6] bg-[#111111] text-white py-20">
        <div className="container-site text-center max-w-2xl mx-auto space-y-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Hosting Notification List
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Stay Informed on Our Hosting Launch
          </h2>
          <p className="text-sm leading-relaxed text-[#D1D5DB]">
            We are preparing managed hosting infrastructure designed to make deployments and uptime effortless. Submit your email to receive early access updates.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?service=Hosting+Launch+Updates"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:bg-[#F3F4F6] transition-colors"
            >
              Get Launch Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
