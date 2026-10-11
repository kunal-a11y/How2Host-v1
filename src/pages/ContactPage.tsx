import { useEffect } from "react";
import { Mail, MessageCircle, Globe, ShieldCheck } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { companyConfig } from "../data/companyConfig";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact How2Host — Let's Build Something That Matters";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-28 sm:pt-36">
      {/* Header */}
      <section className="container-site pb-16 border-b border-[#E6E6E6]">
        <div className="max-w-3xl space-y-4">
          <span className="editorial-badge">Direct Inquiries</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
            Let's Build Something That Matters.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#4B5563]">
            Tell us about your website, security requirements, or next digital project. We'll use your brief to understand your needs and discuss the most appropriate next steps.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Columns */}
      <section className="container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Details & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                Direct Contact Channels
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                Prefer to communicate directly? Reach out through our official channels.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 rounded-xl border border-[#E6E6E6] bg-[#F7F7F5] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#111111] text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#666666]">Email</p>
                  <a
                    href={`mailto:${companyConfig.contact.email}`}
                    className="text-sm font-bold text-[#111111] hover:underline break-all"
                  >
                    {companyConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA Card with Authentic Brand Accent */}
              <div className="flex items-start gap-4 rounded-xl border border-[#E6E6E6] bg-[#F7F7F5] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#666666]">WhatsApp</p>
                  <a
                    href={companyConfig.contact.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#111111] hover:underline"
                  >
                    {companyConfig.contact.phoneFormatted}
                  </a>
                  <p className="mt-1 text-xs text-[#666666]">
                    Direct messaging with founder Kunal for prompt scoping discussions.
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 rounded-xl border border-[#E6E6E6] bg-[#F7F7F5] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#111111] text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#666666]">Website</p>
                  <p className="text-sm font-bold text-[#111111]">
                    {companyConfig.contact.website}
                  </p>
                </div>
              </div>
            </div>

            {/* Security assessment scope note */}
            <div className="rounded-xl border border-[#E6E6E6] bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#111111]" />
                <h3 className="text-sm font-bold text-[#111111]">Security Testing Note</h3>
              </div>
              <p className="text-xs leading-relaxed text-[#666666]">
                For penetration testing enquiries, testing strictly requires authorized written approval and a mutually agreed rules-of-engagement document. We treat all security inquiries with utmost confidentiality.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
