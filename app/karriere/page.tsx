import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  Heart,
  Zap,
  GraduationCap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Arbeite bei Hoba Automation und gestalte die Zukunft des Mittelstands mit. Offene Stellen in Automation, Consulting und Entwicklung.",
  openGraph: {
    title: "Karriere | Hoba Automation",
    description:
      "Arbeite bei Hoba Automation und gestalte die Zukunft des Mittelstands mit.",
  },
};

const benefits = [
  {
    icon: MapPin,
    title: "Remote-first",
    description:
      "Arbeite von überall in der DACH-Region -- flexibel und eigenverantwortlich.",
  },
  {
    icon: GraduationCap,
    title: "Weiterbildung",
    description:
      "Budget für Kurse, Konferenzen und Zertifizierungen -- wir investieren in dein Wachstum.",
  },
  {
    icon: Users,
    title: "Kleines Team, großer Impact",
    description:
      "Flache Hierarchien, kurze Wege und die Chance, wirklich etwas zu bewegen.",
  },
  {
    icon: Heart,
    title: "Work-Life-Balance",
    description:
      "Flexible Arbeitszeiten und ein Umfeld, das dein Wohlbefinden ernst nimmt.",
  },
];

/* Platzhalter -- Offene Stellen */
const openPositions = [
  {
    title: "Automation Engineer (m/w/d)",
    location: "Remote / DACH",
    type: "Vollzeit",
    description:
      "Du entwickelst und implementierst Automatisierungslösungen für unsere Kunden. Du arbeitest mit n8n, Make und weiteren Tools, um Workflows zu optimieren und Systeme zu integrieren.",
    tasks: [
      "Entwicklung von Automatisierungs-Workflows mit n8n und Make",
      "Integration von CRM-, ERP- und Kommunikationssystemen",
      "Analyse und Optimierung bestehender Prozesse",
      "Dokumentation und Schulung der Kunden",
    ],
  },
  {
    title: "Business Consultant (m/w/d)",
    location: "Remote / DACH",
    type: "Vollzeit",
    description:
      "Du berätst Geschäftsführer und Teams von KMUs zu Digitalisierung und Automatisierung. Du führst Potenzialanalysen durch und entwickelst maßgeschneiderte Strategien.",
    tasks: [
      "Durchführung von Potenzialanalysen und Prozess-Audits",
      "Entwicklung von Digitalisierungsstrategien",
      "Begleitung der Kunden von der Strategie bis zur Umsetzung",
      "Aufbau und Pflege langfristiger Kundenbeziehungen",
    ],
  },
];

export default function KarrierePage() {
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
              Karriere bei Hoba Automation
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Gestalte die Zukunft{" "}
              <span className="text-blue-300">des Mittelstands</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Wir suchen Menschen, die Technologie lieben und den Mittelstand
              voranbringen wollen. Werde Teil eines kleinen Teams mit großem
              Anspruch.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits — hell (bg-light) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Warum bei uns <span className="text-blue-600">arbeiten</span>?
            </h2>
            <p className="mt-4 text-[var(--text-on-light-secondary)]">
              Bei Hoba Automation zählt nicht, wo du arbeitest -- sondern was du
              bewirkst.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-blue-200/60 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[var(--text-on-light)]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-on-light-secondary)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offene Stellen — dunkel (bg-raised) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-raised)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Offene <span className="text-blue-300">Stellen</span>
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Aktuelle Positionen, die wir besetzen möchten.
            </p>
          </div>

          {/* Platzhalter-Hinweis */}
          <div className="mb-8 rounded-xl border-2 border-dashed border-blue-400/20 p-4 text-center text-sm text-[var(--text-muted)]">
            Platzhalter-Inhalte -- finale Stellenbeschreibungen werden ergänzt
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="rounded-2xl border border-blue-400/[0.08] p-7"
                style={{ background: "var(--bg-surface)" }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                    <MapPin className="mr-1 h-3 w-3" />
                    {position.location}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-blue-400/20 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
                    <Clock className="mr-1 h-3 w-3" />
                    {position.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {position.description}
                </p>
                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-semibold text-white">Deine Aufgaben:</h4>
                  <ul className="space-y-2">
                    {position.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="rounded-full bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                  >
                    <a href="mailto:karriere@hoba-consulting.com">
                      Jetzt bewerben
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiativbewerbung — hell (bg-light) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Keine passende Stelle dabei?
            </h2>
            <p className="mt-4 text-[var(--text-on-light-secondary)]">
              Kein Problem! Wir freuen uns immer über Initiativbewerbungen. Schick
              uns einfach eine E-Mail mit deinem Lebenslauf und ein paar Zeilen
              über dich.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blue-600 px-8 font-bold text-white hover:bg-blue-700"
              >
                <a href="mailto:karriere@hoba-consulting.com">
                  <Mail className="mr-2 h-5 w-5" />
                  karriere@hoba-consulting.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
