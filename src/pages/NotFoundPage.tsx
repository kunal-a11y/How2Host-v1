import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "404 — Page Not Found | How2Host";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center pt-28 sm:pt-36 pb-20">
      <div className="container-site max-w-lg text-center space-y-6">
        <span className="editorial-badge">Error 404</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111]">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-[#666666]">
          The page you are looking for does not exist or may have been relocated.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#111111] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#262626] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
