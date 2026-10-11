import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Cpu, Server } from "lucide-react";
import { Ambient3DLoader } from "../components/Ambient3DLoader";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProcessSection } from "../components/ProcessSection";
import { AnimatedMonogram } from "../components/animated/AnimatedMonogram";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projectsData";
import { companyConfig } from "../data/companyConfig";
import { easeEditorial } from "../utils/animations";

export function HomePage() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "How2Host — Technology Built for Businesses That Think Ahead";
    window.scrollTo(0, 0);
  }, []);

  const headlineWords = "Technology Built for Businesses That Think Ahead.".split(" ");

  return (
    <div className="bg-white">
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy with Word-by-Word Typography Reveal */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeEditorial }}
              >
                <span className="editorial-badge">
                  {companyConfig.heroDescriptor}
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.045,
                      ease: easeEditorial,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: easeEditorial }}
                className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#4B5563]"
              >
                {companyConfig.heroSupportingText}
              </motion.p>

              {/* Interactive Tactile Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: easeEditorial }}
                className="flex flex-wrap items-center gap-4 pt-3"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-[#111111] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#262626] active:scale-95"
                >
                  <span>Start a Project</span>
                </Link>
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#E6E6E6] bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111111] transition-all hover:bg-[#F7F7F5] hover:border-[#111111] active:scale-95"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Hero 3D Interactive Human Workspace Scene */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeEditorial }}
                className="relative h-[390px] sm:h-[450px] w-full rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] overflow-hidden shadow-card"
              >
                <Ambient3DLoader />
                {/* Visual Label */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#111111] animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#666666]">
                    3D Interactive Workstation
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 2. TRUST STRIP ----------------- */}
      <section className="border-y border-[#E6E6E6] bg-[#F7F7F5] py-8">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-[#111111] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">Web Development</p>
                <p className="text-[11px] text-[#666666]">Engineered for performance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#111111] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">Security Testing</p>
                <p className="text-[11px] text-[#666666]">Authorized assessments</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-[#111111] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">Business Solutions</p>
                <p className="text-[11px] text-[#666666]">Custom workflows &amp; tools</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Server className="h-5 w-5 text-[#111111] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">Hosting</p>
                <p className="text-[11px] text-[#666666]">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. CORE SERVICES ----------------- */}
      <section className="py-24 lg:py-32">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div className="max-w-2xl">
              <span className="editorial-badge">Capabilities</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Core Technology Services
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#666666]">
                Transparent engineering services designed to help organizations build credibility, secure assets, and scale digital operations.
              </p>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#666666]"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. PROCESS METHODOLOGY ----------------- */}
      <ProcessSection />

      {/* ----------------- 5. SELECTED PROJECTS ----------------- */}
      <section className="py-24 lg:py-32">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div className="max-w-2xl">
              <span className="editorial-badge">Verified Work</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Featured Engagements
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#666666]">
                A gallery of completed projects, digital experiences, and authorized security assessments.
              </p>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#666666]"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. FOUNDER & ABOUT CALLOUT ----------------- */}
      <section className="border-t border-[#E6E6E6] bg-[#111111] text-white py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                About How2Host
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Technology With Purpose. Built With Care.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#D1D5DB] max-w-2xl">
                How2Host is a technology services brand focused on helping businesses build stronger digital experiences and improve their technical security. From modern website development to authorized security assessments, our goal is to deliver practical solutions grounded in quality, transparency, and responsible engineering.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111111] transition-all hover:bg-[#F3F4F6] active:scale-95"
                >
                  <span>Meet the Founder</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-white/15 bg-white/5 p-7">
              <div className="flex items-center gap-4">
                <div className="rounded-xl p-2 bg-white">
                  <AnimatedMonogram className="h-9 w-9" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{companyConfig.founder}</h3>
                  <p className="text-xs uppercase tracking-wider text-[#A3A3A3]">Founder, How2Host</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#D1D5DB]">
                "How2Host was founded by Kunal with a focus on building useful digital products, creating professional web experiences, and helping businesses approach technology with greater confidence."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
