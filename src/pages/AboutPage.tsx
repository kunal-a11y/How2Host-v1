import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedMonogram } from "../components/animated/AnimatedMonogram";
import { FounderWorkstationIllustration } from "../components/animated/FounderWorkstationIllustration";
import { companyConfig } from "../data/companyConfig";

export function AboutPage() {
  useEffect(() => {
    document.title = "About How2Host & Founder Kunal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      {/* Editorial Headline */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl space-y-4">
          <span className="editorial-badge">About How2Host</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            Technology With Purpose. Built With Care.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#4B5563]">
            How2Host is a technology services brand focused on helping businesses build stronger digital experiences and improve their technical security. From modern website development to authorized security assessments, our goal is to deliver practical solutions grounded in quality, transparency, and responsible engineering.
          </p>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Animated Founder Portrait Card with Circular Animated Frame */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] p-8 text-center shadow-card">
              {/* Circular SVG Animated Frame */}
              <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#111111"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E6E6E6"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                </svg>
                {/* Precision H2H Monogram */}
                <div className="relative z-10 rounded-2xl bg-white p-3 shadow-sm border border-[#E6E6E6]">
                  <AnimatedMonogram className="h-12 w-12" />
                </div>
              </div>

              <h2 className="mt-6 text-xl font-bold tracking-tight text-[#111111]">
                {companyConfig.founder}
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#666666]">
                Founder, How2Host
              </p>
              <div className="mt-6 flex items-center justify-center gap-3 pt-4 border-t border-[#E6E6E6]">
                <a
                  href={companyConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#E6E6E6] bg-white px-3 py-1.5 text-xs font-semibold text-[#111111] hover:bg-[#F7F7F5] transition-transform active:scale-95"
                >
                  GitHub
                </a>
                <a
                  href={companyConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#0A66C2]/20 bg-[#0A66C2]/5 px-3 py-1.5 text-xs font-semibold text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-transform active:scale-95"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Founder Narrative & Restrained Workstation Illustration */}
          <div className="lg:col-span-8 space-y-6">
            <span className="editorial-badge">Founder's Mission</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Building Practical Technology for Real Businesses
            </h2>
            <p className="text-base leading-relaxed text-[#4B5563]">
              How2Host was founded by Kunal with a focus on building useful digital products, creating professional web experiences, and helping businesses approach technology with greater confidence.
            </p>
            <p className="text-base leading-relaxed text-[#4B5563]">
              Too often, small businesses and growing teams face a difficult compromise: fragile no-code templates that load slowly and break easily, or overly complex technical agencies with opaque retainers. How2Host was established to provide a grounded alternative — high-performing websites, authorized security validations, and dependable support delivered with straightforward clarity.
            </p>

            {/* Restrained Workstation Illustration Component */}
            <div className="mt-6 h-52 w-full rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] p-4 flex items-center justify-center">
              <FounderWorkstationIllustration />
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#111111] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#262626] transition-all active:scale-95"
              >
                <span>Connect With How2Host</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four Company Values */}
      <section className="border-t border-[#E6E6E6] bg-[#F7F7F5] py-20 lg:py-28">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="editorial-badge">Core Principles</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111]">
              Values That Guide Every Solution
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#666666]">
              Our engineering philosophy is built around four fundamental commitments.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyConfig.values.map((val) => (
              <div
                key={val.title}
                className="rounded-xl border border-[#E6E6E6] bg-white p-7 shadow-sm transition-all hover:border-[#111111]/40 hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111111] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-[#111111]">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
