import { useEffect, useState, lazy, Suspense } from "react";
import { FounderWorkstationIllustration } from "./animated/FounderWorkstationIllustration";

const Ambient3D = lazy(() => import("./Ambient3D"));

export function Ambient3DLoader() {
  const [load3D, setLoad3D] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    const webglSupported = (() => {
      try {
        const c = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
      } catch {
        return false;
      }
    })();

    setHasWebGL(webglSupported);

    if (reduce || coarse || small || !webglSupported) {
      setLoad3D(false);
      return;
    }

    const timer = window.setTimeout(() => setLoad3D(true), 150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {load3D && hasWebGL ? (
        <Suspense
          fallback={
            <div className="w-full h-full p-6 flex items-center justify-center opacity-85">
              <FounderWorkstationIllustration />
            </div>
          }
        >
          <div className="w-full h-full">
            <Ambient3D />
          </div>
        </Suspense>
      ) : (
        /* Static & Reduced Motion / Mobile Fallback */
        <div className="w-full h-full p-6 flex items-center justify-center opacity-90">
          <FounderWorkstationIllustration />
        </div>
      )}
    </div>
  );
}
