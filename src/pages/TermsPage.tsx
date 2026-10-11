import { useEffect } from "react";
import { Link } from "react-router-dom";
import { companyConfig } from "../data/companyConfig";

export function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service — How2Host";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl space-y-4">
          <span className="editorial-badge">Terms of Service</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
            Terms of Service
          </h1>
          <p className="text-sm text-[#666666]">
            Last updated: October 2026 · Working draft terms
          </p>
        </div>
      </section>

      <section className="container-site py-16 lg:py-20 max-w-4xl space-y-8 text-sm leading-relaxed text-[#4B5563]">
        <p>
          Welcome to How2Host. By accessing or using our website (https://how2host.vercel.app/) and inquiring about our services, you agree to comply with the following general terms.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">1. Scope of Services</h2>
        <p>
          How2Host provides website development, technical consulting, and authorized security assessments. All specific engagements, milestones, pricing, and deliverables are formally defined in written proposals agreed upon between the client and How2Host prior to project execution.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">2. Cybersecurity &amp; Penetration Testing Engagements</h2>
        <p>
          Cybersecurity assessments are performed exclusively on systems, applications, and networks where the client has verified legal authorization and ownership. Clients must execute a formal Rules of Engagement document before any active security scanning or vulnerability testing begins. How2Host does not conduct testing on unauthorized assets.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">3. Security Warranties</h2>
        <p>
          While How2Host conducts rigorous, industry-standard manual and automated security testing, no security assessment can guarantee that a system is 100% impenetrable or free of undiscovered vulnerabilities. Our services provide risk identification, remediation recommendations, and defensive verification based on the agreed scope.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">4. Intellectual Property</h2>
        <p>
          Deliverables created for clients under customized development contracts transfer to the client upon full payment according to the agreed contract terms. How2Host retains rights to proprietary tools, reusable components, and underlying methodologies.
        </p>

        <div className="pt-8 border-t border-[#E6E6E6]">
          <Link
            to="/contact"
            className="text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline"
          >
            ← Contact us for custom service agreements
          </Link>
        </div>
      </section>
    </div>
  );
}
