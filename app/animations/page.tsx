import type { Metadata } from "next";
import { AnimationShowcase } from "@/components/sections/animation-showcase";

export const metadata: Metadata = {
  title: "Animation Showcase",
  description:
    "Vorschau aller animierten Komponenten fuer die Hoba Automation Website.",
  robots: { index: false, follow: false },
};

export default function AnimationsPage() {
  return (
    <>
      {/* Hero-Header fuer die Uebersichtsseite */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-4 text-center md:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            Internes Preview
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Animation Showcase
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-lg text-[var(--text-secondary)]">
            Vorschau und Test aller animierten Sektionen — bereit zur
            Integration in die echten Seiten.
          </p>
        </div>
      </section>

      <AnimationShowcase />
    </>
  );
}
