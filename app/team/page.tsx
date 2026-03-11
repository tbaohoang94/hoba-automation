import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Unser Team",
  description:
    "Lernen Sie das Team hinter Hoba Automation kennen. Erfahrene Experten für Automatisierung, Consulting und Software-Entwicklung.",
  openGraph: {
    title: "Unser Team | Hoba Automation",
    description:
      "Lernen Sie das Team hinter Hoba Automation kennen.",
  },
};

/* Platzhalter -- Team-Daten werden vom Kunden geliefert */
const teamMembers = [
  {
    initials: "AH",
    name: "Alexander Hofmann",
    role: "Gründer & CEO",
    bio: "Alexander verbindet jahrelange Erfahrung in der Unternehmensberatung mit einer Leidenschaft für Technologie. Er gründete Hoba Automation mit dem Ziel, Automatisierung für den Mittelstand zugänglich zu machen.",
  },
  {
    initials: "MW",
    name: "Marie Weber",
    role: "Head of Automation",
    bio: "Marie ist Expertin für Workflow-Automatisierung und System-Integrationen. Mit ihrem Background in Prozessoptimierung gestaltet sie Automations, die im Alltag wirklich funktionieren.",
  },
  {
    initials: "LS",
    name: "Lukas Schmidt",
    role: "Senior Developer",
    bio: "Lukas entwickelt individuelle Weblösungen und Dashboards. Als Full-Stack-Entwickler bringt er komplexe Anforderungen in elegante, wartbare Software.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero — dunkel (bg-base) */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--bg-base)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              Unser Team
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Die Menschen hinter{" "}
              <span className="text-blue-300">Hoba Automation</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Ein kleines, erfahrenes Team mit einem klaren Ziel: den
              Mittelstand effizienter zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid — hell (bg-light) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          {/* Platzhalter-Hinweis */}
          <div className="mb-10 rounded-xl border-2 border-dashed border-blue-200/60 p-4 text-center text-sm text-[var(--text-on-light-muted)]">
            Platzhalter-Inhalte -- Fotos und finale Texte werden vom Kunden
            geliefert
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-blue-200/60 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Avatar-Platzhalter */}
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-2xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-on-light)]">{member.name}</h3>
                <p className="mt-1 font-medium text-blue-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-[var(--text-on-light-secondary)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dunkel (bg-raised) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-raised)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Lust, Teil des Teams zu werden?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Wir suchen immer nach motivierten Menschen, die den Mittelstand
              mit uns verändern wollen.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blue-500 px-8 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/40"
              >
                <Link href="/karriere">
                  Offene Stellen ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-blue-400/20 bg-blue-400/5 px-8 text-white hover:bg-blue-400/10 hover:border-blue-400/30"
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
