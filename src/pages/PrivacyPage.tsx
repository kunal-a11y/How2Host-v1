import { useEffect } from "react";
import { Link } from "react-router-dom";
import { companyConfig } from "../data/companyConfig";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — How2Host";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl space-y-4">
          <span className="editorial-badge">Legal &amp; Privacy</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#111111]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#666666]">
            Last updated: October 2026 · Effective immediately
          </p>
        </div>
      </section>

      <section className="container-site py-16 lg:py-20 max-w-4xl space-y-8 text-sm leading-relaxed text-[#4B5563]">
        <p>
          At How2Host, founded by Kunal, we prioritize clarity, confidentiality, and respect for personal data. This Privacy Policy outlines what information we collect when you visit our website or contact us, how it is handled, and your rights concerning that data.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">1. Information We Collect</h2>
        <p>
          We only collect personal information that you intentionally provide to us through our direct contact form or correspondence channels. This includes your name, business email address, company name, telephone number (if provided), and project specifications. We do not sell, rent, or trade your personal contact details with third-party advertising networks.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">2. Purpose of Processing</h2>
        <p>
          The data you submit is used solely to evaluate your project inquiry, prepare scoping documents, discuss project deliverables, coordinate authorized security testing, and maintain direct client communications.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">3. Security Assessment Confidentiality</h2>
        <p>
          For clients engaging our Cybersecurity &amp; Penetration Testing services, all technical documentation, target assets, vulnerability reports, and communications are held under strict non-disclosure. We do not publicly disclose client findings or security postures.
        </p>

        <h2 className="text-xl font-bold text-[#111111] pt-4">4. Data Retention and Inquiries</h2>
        <p>
          You may request the deletion, review, or correction of your submitted contact information at any time by contacting us directly at{" "}
          <a href={`mailto:${companyConfig.contact.email}`} className="font-semibold text-[#111111] underline">
            {companyConfig.contact.email}
          </a>.
        </p>

        <div className="pt-8 border-t border-[#E6E6E6]">
          <Link
            to="/contact"
            className="text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline"
          >
            ← Have questions? Contact How2Host
          </Link>
        </div>
      </section>
    </div>
  );
}
