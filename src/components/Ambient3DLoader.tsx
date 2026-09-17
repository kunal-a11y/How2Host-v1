import { useEffect, useState, lazy, Suspense } from "react";
import { useReducedMotion } from "framer-motion";

const Ambient3D = lazy(() => import("./Ambient3D"));

export function Ambient3DLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    const webgl = (() => {
      try {
        const c = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
      } catch {
        return false;
      }
    })();
    if (reduce || coarse || small || !webgl) return;
    const t = window.setTimeout(() => setShow(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-70" aria-hidden="true">
      <Suspense fallback={null}>
        <Ambient3D />
      </Suspense>
    </div>
  );
}
