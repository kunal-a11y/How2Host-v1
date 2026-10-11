import { motion } from "framer-motion";
import { companyConfig } from "../data/companyConfig";

export function ProcessSection() {
  return (
    <section className="border-t border-[#E6E6E6] bg-[#F7F7F5] py-20 lg:py-28 overflow-hidden">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="editorial-badge">Our Process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Clear Milestones. Disciplined Execution.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#666666]">
            Every engagement follows a structured four-stage methodology designed to ensure predictable timelines, transparent scope, and high-quality deliverables.
          </p>
        </div>

        {/* Continuous Animated Connecting SVG Timeline Track on Desktop */}
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-[52px] inset-x-8 h-1 z-0">
            <svg className="w-full h-8 overflow-visible" fill="none">
              <motion.path
                d="M 60 4 H 1160"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyConfig.process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex flex-col justify-between rounded-xl border border-[#E6E6E6] bg-white p-7 shadow-sm transition-all hover:border-[#111111]/40 hover:shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold tracking-tight text-[#D1D5DB]">
                      {item.step}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#111111]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E6E6]/60 flex items-center justify-between text-xs text-[#9CA3AF]">
                  <span>Phase {item.step}</span>
                  <svg className="w-4 h-4 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
