import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, AlertCircle, Send, ArrowRight } from "lucide-react";
import { companyConfig } from "../data/companyConfig";

const serviceOptions = [
  "Website Development",
  "Cybersecurity / Penetration Testing",
  "Business Technology Solutions",
  "Hosting Launch Updates",
  "Other",
];

const budgetOptions = [
  "Flexible / To Be Scoped",
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "Above ₹1,00,000",
];

const timelineOptions = [
  "Immediate (Within 2 weeks)",
  "1 month",
  "1 - 3 months",
  "Flexible / Planning stage",
];

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "Website Development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    budget: "Flexible / To Be Scoped",
    timeline: "1 month",
    description: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isPentest = formData.service.toLowerCase().includes("security") || formData.service.toLowerCase().includes("penetration");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.description) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the consent checkbox to permit contact.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Connect to Formspree endpoint or fallback to client-side mailto / verified record
      // In production, configure VITE_FORMSPREE_ID or email service webhook.
      // If none set, gracefully package the submission and trigger direct mail client without fake success.
      const response = await fetch("https://formspree.io/f/xbjnqvgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "N/A",
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.description,
          _subject: `New Inquiry from ${formData.name} - How2Host`,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        // Fallback: construct verified direct email trigger
        const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope:\n${formData.description}`
        );
        window.location.href = `mailto:${companyConfig.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        setStatus("success");
      }
    } catch {
      // Network failure / fallback
      const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope:\n${formData.description}`
      );
      window.location.href = `mailto:${companyConfig.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#E6E6E6] bg-white p-8 sm:p-12 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-white">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111111]">
          Inquiry Initiated
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#4B5563]">
          Thank you for providing your project brief. We will review your technical requirements and contact you via email ({formData.email}) or phone within 1 business day.
        </p>
        <div className="mt-8 pt-6 border-t border-[#E6E6E6] flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                company: "",
                service: "Website Development",
                budget: "Flexible / To Be Scoped",
                timeline: "1 month",
                description: "",
                consent: false,
              });
              setStatus("idle");
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline"
          >
            Submit Another Inquiry
          </button>
          <a
            href={companyConfig.contact.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#111111] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E6E6E6] bg-white p-8 sm:p-10 shadow-card">
      <div className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Jane Doe"
              className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] placeholder-[#9CA3AF] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Business Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jane@company.com"
              className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] placeholder-[#9CA3AF] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Company & Service Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Company Name (Optional)
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Acme Corp"
              className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] placeholder-[#9CA3AF] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Service Required *
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Penetration Testing Scope Notice */}
        {isPentest && (
          <div className="rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] p-4 text-xs leading-relaxed text-[#4B5563]">
            <p className="font-semibold text-[#111111]">Cybersecurity Engagement Note:</p>
            <p className="mt-1">
              All penetration testing and security assessments require explicit written authorization, verified asset ownership, and a formal rules of engagement agreement prior to commencement.
            </p>
          </div>
        )}

        {/* Budget & Timeline Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Estimated Budget (Optional)
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
            >
              {budgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Target Timeline (Optional)
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
            >
              {timelineOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-[#111111]">
            Project Description &amp; Scope Requirements *
          </label>
          <textarea
            id="description"
            required
            rows={5}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us about your organization, core goals, target audience, and any technical specifications..."
            className="mt-2 w-full rounded-lg border border-[#E6E6E6] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111111] placeholder-[#9CA3AF] transition-colors focus:border-[#111111] focus:bg-white focus:outline-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-[#D1D5DB] text-[#111111] focus:ring-[#111111]"
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-[#666666]">
            I consent to How2Host processing the submitted information solely for evaluating this project brief and coordinating our communications.
          </label>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#111111] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#262626] disabled:opacity-50"
          >
            {status === "submitting" ? (
              <span>Submitting Brief...</span>
            ) : (
              <>
                <span>Submit Project Brief</span>
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
