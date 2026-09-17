/**
 * Realistic "finished website" mockups.
 *
 * Each scene is a miniature but believable business website built from real
 * photography (via the central image catalog) + real typographic hierarchy +
 * believable UI chrome. No gray skeletons, no wireframe bars.
 *
 * NOTE: All business names are fictional. Labels in the portfolio mark these
 * as concepts / demos — nothing claims a real client.
 */
import type { ReactNode } from "react";
import { img } from "../../data/images";

export function Scene({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`absolute inset-0 overflow-hidden ${className}`}>{children}</div>;
}

/* --------------------------- shared mini-components --------------------------- */

function Nav({ brand, links = 3, light = false }: { brand: string; links?: number; light?: boolean }) {
  return (
    <div className="relative z-20 flex items-center justify-between px-[4%] py-[2.6%]">
      <span className={`text-[clamp(7px,1.5vw,11px)] font-bold tracking-wide ${light ? "text-white" : "text-neutral-900"}`}>
        {brand}
      </span>
      <div className="hidden items-center gap-[1.4em] sm:flex">
        {Array.from({ length: links }).map((_, i) => (
          <span
            key={i}
            className={`text-[clamp(6px,1.05vw,9px)] font-medium ${light ? "text-white/80" : "text-neutral-700"}`}
          >
            {["Home", "Menu", "About", "Services", "Contact"][i % 5]}
          </span>
        ))}
        <span className="rounded-full bg-[#0a0a0e] px-[1.1em] py-[0.45em] text-[clamp(6px,1vw,8.5px)] font-semibold text-white">
          Book now
        </span>
      </div>
    </div>
  );
}

function Photo({
  src,
  alt,
  className = "",
  overlay = "",
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      {overlay ? <div className={`absolute inset-0 ${overlay}`} /> : null}
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`text-[clamp(5.5px,0.95vw,8px)] font-semibold uppercase tracking-[0.28em] ${
        light ? "text-amber-300" : "text-[#1f8f7c]"
      }`}
    >
      {children}
    </span>
  );
}

function Headline({
  children,
  light = false,
  size = "big",
}: {
  children: ReactNode;
  light?: boolean;
  size?: "big" | "mid";
}) {
  return (
    <h3
      className={`font-serif leading-[1.04] tracking-tight ${
        light ? "text-white" : "text-neutral-900"
      } ${size === "big" ? "text-[clamp(11px,2.6vw,22px)]" : "text-[clamp(9px,1.9vw,16px)]"}`}
    >
      {children}
    </h3>
  );
}

function Copy({ light = false, w = "w-[85%]" }: { light?: boolean; w?: string }) {
  return (
    <p className={`${w} leading-snug text-[clamp(5.5px,1.05vw,9px)] ${light ? "text-white/70" : "text-neutral-500"}`}>
      Artisan coffee, seasonal plates and a warm room in the heart of the old town — open every day from 7am.
    </p>
  );
}

function CTA({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-[1.2em] py-[0.5em] text-[clamp(5.5px,1vw,8.5px)] font-semibold ${
        light ? "bg-amber-400 text-neutral-900" : "bg-[#0a0a0e] text-white"
      }`}
    >
      {label}
    </span>
  );
}

/* ---------------------------------- cafe ---------------------------------- */

export function CafeSite() {
  return (
    <Scene>
      <div className="flex h-full flex-col bg-[#faf7f2]">
        <Nav brand="CAFÉ AURELIA" />
        <div className="relative flex flex-1 items-center">
          <Photo
            src={img.cafeInterior}
            alt="Cafe interior"
            className="absolute inset-0 h-full w-full"
            overlay="bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/85 to-transparent"
          />
          <div className="relative z-10 flex w-[58%] flex-col gap-[0.9em] pl-[5%]">
            <Eyebrow>Est. 2012 — Old Town</Eyebrow>
            <Headline>
              Slow mornings,
              <br />
              honest coffee.
            </Headline>
            <Copy />
            <div className="flex items-center gap-[0.8em]">
              <CTA label="View the menu" />
              <span className="text-[clamp(5.5px,1vw,8.5px)] font-semibold text-neutral-700 underline underline-offset-2">
                Find us
              </span>
            </div>
          </div>
          <Photo
            src={img.latteArt}
            alt="Latte art"
            className="absolute bottom-[-6%] right-[4%] h-[52%] w-[30%] rounded-t-[999px] shadow-xl ring-4 ring-white/60"
          />
        </div>
        <div className="flex items-center justify-between border-t border-neutral-200 bg-white px-[5%] py-[2.2%]">
          {["Espresso", "Filter", "Brunch", "Pastry"].map((t) => (
            <span key={t} className="font-serif text-[clamp(6px,1.2vw,10px)] italic text-neutral-600">
              {t}
            </span>
          ))}
          <span className="text-[clamp(5.5px,1vw,8.5px)] font-semibold text-[#1f8f7c]">Order →</span>
        </div>
      </div>
    </Scene>
  );
}

/* ------------------------------- restaurant ------------------------------- */

export function RestaurantSite() {
  return (
    <Scene>
      <div className="relative h-full bg-[#12100c]">
        <Photo
          src={img.fineDining}
          alt="Fine dining plate"
          className="absolute inset-0 h-full w-full"
          overlay="bg-gradient-to-t from-[#12100c] via-[#12100c]/45 to-[#12100c]/25"
        />
        <div className="relative z-10 flex h-full flex-col">
          <Nav brand="MASON'S TABLE" light />
          <div className="flex flex-1 flex-col items-center justify-center gap-[0.8em] px-[10%] text-center">
            <Eyebrow light>Modern European · Reservations open</Eyebrow>
            <Headline light>
              An evening worth
              <br />
              dressing up for.
            </Headline>
            <p className="w-[70%] leading-snug text-[clamp(5.5px,1.05vw,9px)] text-white/70">
              Seven courses, an honest wine list and a dining room that glows after dark.
            </p>
            <div className="mt-[0.4em] flex items-center gap-[0.8em]">
              <CTA label="Reserve a table" light />
              <span className="text-[clamp(5.5px,1vw,8.5px)] font-semibold text-white/85 underline underline-offset-2">
                The menu
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-white/15 bg-black/35 backdrop-blur-sm">
            {[
              { src: img.plating, t: "Tasting menu" },
              { src: img.winePour, t: "The cellar" },
              { src: img.chef, t: "Our kitchen" },
            ].map((c) => (
              <div key={c.t} className="relative">
                <Photo src={c.src} alt={c.t} className="h-[3.2em] w-full opacity-80" />
                <span className="absolute inset-0 flex items-center justify-center text-[clamp(5.5px,1vw,8.5px)] font-medium tracking-wide text-white">
                  {c.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}

/* ---------------------------------- salon --------------------------------- */

export function SalonSite() {
  return (
    <Scene>
      <div className="flex h-full bg-[#fdf9f7]">
        <div className="flex w-[52%] flex-col justify-center gap-[0.9em] pl-[5%]">
          <Nav brand="VELLURE" />
          <Eyebrow>Hair · Skin · Nails</Eyebrow>
          <Headline size="mid">
            Beauty that begins
            <br />
            with feeling calm.
          </Headline>
          <Copy w="w-[92%]" />
          <div className="flex gap-[0.7em]">
            <CTA label="Book appointment" />
            <CTA label="Price list" light />
          </div>
          <div className="mt-[0.3em] flex items-center gap-[0.6em] text-[clamp(5.5px,1vw,8.5px)] text-neutral-500">
            <span className="flex -space-x-[0.4em]">
              {[img.salonWork, img.spa, img.salonInterior].map((s, i) => (
                <Photo key={i} src={s} alt="" className="h-[1.7em] w-[1.7em] rounded-full ring-2 ring-[#fdf9f7]" />
              ))}
            </span>
            Open today until 8pm
          </div>
        </div>
        <Photo src={img.salonWork} alt="Salon styling" className="relative h-full w-[48%]" />
      </div>
    </Scene>
  );
}

/* ---------------------------------- fitness -------------------------------- */

export function GymSite() {
  return (
    <Scene>
      <div className="relative h-full bg-[#0b0d10]">
        <Photo
          src={img.gym}
          alt="Gym floor"
          className="absolute inset-0 h-full w-full"
          overlay="bg-gradient-to-r from-[#0b0d10] via-[#0b0d10]/55 to-transparent"
        />
        <div className="relative z-10 flex h-full flex-col">
          <Nav brand="ATLAS FIT" light />
          <div className="flex flex-1 flex-col justify-center gap-[0.8em] pl-[5%]">
            <Eyebrow light>Strength · Conditioning · Recovery</Eyebrow>
            <Headline light size="mid">
              Train loud.
              <br />
              Live stronger.
            </Headline>
            <Copy light w="w-[46%]" />
            <div className="flex items-center gap-[0.8em]">
              <CTA label="Start free week" light />
              <span className="text-[clamp(5.5px,1vw,8.5px)] font-semibold text-white/85">Classes →</span>
            </div>
          </div>
          <div className="flex justify-between border-t border-white/10 bg-black/40 px-[5%] py-[2%] backdrop-blur-sm">
            {[
              ["12+", "Coaches"],
              ["40", "Classes / wk"],
              ["7am–11pm", "Open daily"],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col">
                <span className="text-[clamp(7px,1.4vw,12px)] font-bold text-white">{v}</span>
                <span className="text-[clamp(5px,0.9vw,8px)] text-white/55">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}

/* -------------------------------- saas startup ------------------------------ */

export function StartupSite() {
  return (
    <Scene>
      <div className="flex h-full flex-col bg-[#f6f7fb]">
        <Nav brand="nimbusops" links={4} />
        <div className="flex flex-1 flex-col items-center gap-[0.7em] px-[7%] pt-[1%] text-center">
          <Eyebrow>Deploy · Monitor · Scale</Eyebrow>
          <Headline size="mid">Ship your product while we watch the servers.</Headline>
          <div className="flex gap-[0.7em]">
            <CTA label="Start free" />
            <span className="inline-block rounded-full border border-neutral-300 bg-white px-[1.2em] py-[0.5em] text-[clamp(5.5px,1vw,8.5px)] font-semibold text-neutral-700">
              Live demo
            </span>
          </div>
          {/* dashboard screenshot */}
          <div className="relative mt-[0.5em] w-[88%] flex-1 overflow-hidden rounded-t-lg border border-neutral-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-100 px-[3%] py-[1.5%]">
              <div className="flex gap-[0.35em]">
                {["bg-rose-300", "bg-amber-300", "bg-emerald-300"].map((c) => (
                  <span key={c} className={`h-[0.5em] w-[0.5em] rounded-full ${c}`} />
                ))}
              </div>
              <span className="rounded bg-neutral-100 px-[1em] py-[0.2em] text-[clamp(5px,0.85vw,7.5px)] text-neutral-400">
                app.nimbusops.io
              </span>
            </div>
            <div className="flex h-full">
              <div className="flex w-[22%] flex-col gap-[0.55em] border-r border-neutral-100 p-[4%]">
                {["Overview", "Deploys", "Metrics", "Logs", "Alerts"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded px-[0.5em] py-[0.25em] text-left text-[clamp(5px,0.9vw,7.5px)] ${
                      i === 0 ? "bg-indigo-50 font-semibold text-indigo-600" : "text-neutral-500"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex-1 p-[3%]">
                <div className="flex items-end justify-between gap-[2%] border-b border-neutral-100 pb-[2%]">
                  {[
                    ["99.98%", "Uptime"],
                    ["1.2s", "p95"],
                    ["482", "Deploys"],
                  ].map(([v, l]) => (
                    <div key={l} className="text-left">
                      <div className="text-[clamp(6.5px,1.3vw,11px)] font-bold text-neutral-900">{v}</div>
                      <div className="text-[clamp(4.5px,0.8vw,7px)] text-neutral-400">{l}</div>
                    </div>
                  ))}
                  <Photo src={img.analytics} alt="" className="h-[2.6em] w-[5em] rounded border border-neutral-100" />
                </div>
                <div className="flex h-[62%] items-end gap-[3%] pt-[6%]">
                  {[35, 55, 42, 70, 58, 82, 66, 90, 74, 95, 84, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-200 to-indigo-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}

/* ------------------------------- local shop -------------------------------- */

export function ShopSite() {
  return (
    <Scene>
      <div className="flex h-full flex-col bg-[#faf6ef]">
        <Nav brand="GREENLEAF" />
        <div className="flex flex-1 items-center gap-[4%] px-[5%]">
          <div className="flex w-[44%] flex-col gap-[0.8em]">
            <Eyebrow>Fresh · Local · Daily</Eyebrow>
            <Headline size="mid">The neighbourhood market, since 1998.</Headline>
            <Copy w="w-[95%]" />
            <div className="flex w-fit gap-[0.7em]">
              <CTA label="Shop now" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-[3%]">
            <Photo src={img.marketProduce} alt="Fresh produce" className="h-full rounded-lg shadow-md" />
            <div className="flex flex-col gap-[6%]">
              <Photo src={img.marketStall} alt="Market stall" className="flex-1 rounded-lg shadow-md" />
              <div className="flex flex-1 items-center justify-between rounded-lg bg-[#0a0a0e] px-[8%]">
                <span className="text-[clamp(5.5px,1vw,8.5px)] font-semibold text-white">Weekly box</span>
                <span className="font-serif text-[clamp(6.5px,1.3vw,11px)] italic text-emerald-300">₹499</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[1.6em] border-t border-neutral-200 py-[2.4%] text-[clamp(5.5px,1vw,8.5px)] font-medium text-neutral-500">
          <span>★ 4.9 on Google</span>
          <span>Same-day delivery</span>
          <span>100% local sourcing</span>
        </div>
      </div>
    </Scene>
  );
}

/* ------------------------------ corporate site ------------------------------ */

export function ServicesSite() {
  return (
    <Scene>
      <div className="flex h-full flex-col bg-white">
        <Nav brand="MERIDIAN" links={4} />
        <div className="relative flex-1">
          <div className="flex h-full">
            <div className="flex w-[46%] flex-col justify-center gap-[0.9em] pl-[5%]">
              <Eyebrow>Consulting · Since 2004</Eyebrow>
              <Headline size="mid">Clear thinking for complex businesses.</Headline>
              <Copy w="w-[92%]" />
              <div className="flex w-fit gap-[0.7em]">
                <CTA label="Talk to us" />
              </div>
            </div>
            <Photo src={img.office} alt="Modern office" className="h-full w-[54%]" />
          </div>
          {/* floating stat card */}
          <div className="absolute bottom-[8%] left-[38%] flex items-center gap-[0.7em] rounded-lg border border-neutral-100 bg-white/95 p-[3%] pr-[5%] shadow-xl backdrop-blur">
            <Photo src={img.handshake} alt="" className="h-[2.6em] w-[3.4em] rounded-md" />
            <div>
              <div className="text-[clamp(6.5px,1.3vw,11px)] font-bold text-neutral-900">+38% avg. growth</div>
              <div className="text-[clamp(4.5px,0.85vw,7.5px)] text-neutral-400">across 60+ engagements</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[2%] border-t border-neutral-100 bg-neutral-50 px-[5%] py-[2.6%]">
          {["Strategy", "Operations", "Technology", "People"].map((t) => (
            <div key={t} className="flex items-center gap-[0.5em]">
              <span className="h-[0.55em] w-[0.55em] rotate-45 bg-[#1f8f7c]" />
              <span className="text-[clamp(5.5px,1.05vw,9px)] font-medium text-neutral-700">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}

/* ------------------------------ service business ----------------------------- */

export function StudioSite() {
  return (
    <Scene>
      <div className="relative h-full bg-[#101014]">
        <Photo
          src={img.conference}
          alt="Studio event"
          className="absolute inset-0 h-full w-full opacity-45"
          overlay="bg-gradient-to-t from-[#101014] via-transparent to-[#101014]/60"
        />
        <div className="relative z-10 flex h-full flex-col">
          <Nav brand="STUDIO NOVA" light />
          <div className="flex flex-1 flex-col justify-center gap-[0.8em] px-[6%]">
            <Eyebrow light>Events · Brand films · Production</Eyebrow>
            <Headline light size="mid">
              Stories people remember.
            </Headline>
            <Copy light w="w-[52%]" />
            <div className="flex w-fit gap-[0.7em]">
              <CTA label="See our work" light />
              <CTA label="Start a project" />
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-[5%] py-[2.2%] backdrop-blur-sm">
            <div className="flex gap-[0.8em]">
              {[img.teamMeeting, img.code, img.office].map((s, i) => (
                <Photo key={i} src={s} alt="" className="h-[2.4em] w-[4.2em] rounded-md opacity-90" />
              ))}
            </div>
            <span className="text-[clamp(5.5px,1vw,8.5px)] font-medium text-white/70">120+ projects delivered</span>
          </div>
        </div>
      </div>
    </Scene>
  );
}

/* ------------------------- tiny fragments for services ------------------------ */

/** Mini website card used inside service cards as a realistic UI fragment. */
export function MiniSiteFragment({
  src,
  brand,
  accent = "#1f8f7c",
}: {
  src: string;
  brand: string;
  accent?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="flex items-center justify-between px-[6%] py-[4%]">
        <span className="text-[clamp(6px,1.2vw,10px)] font-bold text-neutral-900">{brand}</span>
        <span className="rounded-full bg-neutral-900 px-[1em] py-[0.3em] text-[clamp(5px,0.9vw,7.5px)] font-semibold text-white">
          Get started
        </span>
      </div>
      <div className="relative flex-1">
        <Photo src={src} alt="" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-[6%] bottom-[8%] rounded-md bg-white/92 p-[4%] shadow-lg backdrop-blur">
          <span className="text-[clamp(6px,1.15vw,9.5px)] font-bold text-neutral-900">Built by How2Host</span>
          <div className="mt-[0.3em] h-[0.45em] w-[70%] rounded-full" style={{ background: accent, opacity: 0.85 }} />
        </div>
      </div>
    </div>
  );
}
