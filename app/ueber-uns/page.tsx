import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Handshake,
  Target,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Hoba Automation macht KMUs in der DACH-Region effizienter -- durch intelligente Automatisierung, praxisnahes Consulting und individuelle Softwarelösungen.",
  openGraph: {
    title: "Über uns | Hoba Automation",
    description:
      "Hoba Automation macht KMUs in der DACH-Region effizienter -- durch intelligente Automatisierung.",
  },
};

const values = [
  {
    icon: Eye,
    title: "Transparenz",
    description:
      "Offene Kommunikation von Anfang an. Sie wissen jederzeit, woran wir arbeiten, was es kostet und warum wir Entscheidungen treffen.",
  },
  {
    icon: Target,
    title: "Pragmatismus",
    description:
      "Wir suchen keine perfekte Lösung -- wir suchen die richtige. Schnelle Ergebnisse, die funktionieren und sich bewähren.",
  },
  {
    icon: Handshake,
    title: "Partnerschaftlichkeit",
    description:
      "Wir verstehen uns nicht als Dienstleister, sondern als Partner. Ihr Erfolg ist unser Erfolg -- langfristig und nachhaltig.",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "KMU-Expertise",
    description:
      "Wir kennen die Herausforderungen des Mittelstands aus erster Hand und entwickeln Lösungen, die zum Budget und zur Teamgröße passen.",
  },
  {
    icon: Sparkles,
    title: "Ganzheitlicher Ansatz",
    description:
      "Von der Beratung über die Automatisierung bis zur Software-Entwicklung -- alles aus einer Hand, ohne Schnittstellenprobleme.",
  },
  {
    icon: Heart,
    title: "DACH-Region im Fokus",
    description:
      "Wir sprechen Ihre Sprache, verstehen Ihre Marktbedingungen und sind in Ihrer Zeitzone erreichbar.",
  },
];

export default function UeberUnsPage() {
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
              Über Hoba Automation
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Wir machen den Mittelstand{" "}
              <span className="text-blue-300">effizienter</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Hoba Automation ist Ihr Partner für Automatisierung,
              Digitalisierung und individuelle Softwarelösungen -- spezialisiert
              auf kleine und mittlere Unternehmen in der DACH-Region.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Mission — hell (bg-light) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Unsere Geschichte
            </h2>
            <div className="mt-8 space-y-6 text-[var(--text-on-light-secondary)] leading-relaxed">
              <p>
                Hoba Automation entstand aus einer einfachen Beobachtung: Viele
                kleine und mittlere Unternehmen verbringen einen Großteil ihrer
                Zeit mit manuellen, wiederholbaren Aufgaben -- Daten kopieren,
                E-Mails weiterleiten, Tabellen pflegen, Informationen zwischen
                Systemen übertragen.
              </p>
              <p>
                Gleichzeitig sind die Tools und Technologien für Automatisierung
                heute so zugänglich wie nie zuvor. Doch den meisten KMUs fehlt
                die Zeit, das Know-how oder die Kapazität, diese Möglichkeiten
                zu nutzen.
              </p>
              <p>
                Genau hier setzen wir an. Wir verbinden tiefes technisches
                Wissen mit einem Verständnis für die Realität des Mittelstands.
                Keine überdimensionierten Enterprise-Lösungen, keine
                theoretischen Konzepte -- sondern pragmatische Automatisierung,
                die sofort Wirkung zeigt.
              </p>
            </div>

            <div className="mx-auto my-16 h-px max-w-md bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

            <div className="text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                Unsere Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
                KMUs durch intelligente Automatisierung effizienter machen
              </h2>
              <p className="mt-6 text-lg text-[var(--text-on-light-secondary)]">
                Wir glauben daran, dass jedes Unternehmen -- unabhängig von seiner
                Größe -- von Automatisierung profitieren kann. Unser Ziel ist es,
                diese Technologie für den Mittelstand zugänglich, verständlich und
                bezahlbar zu machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Werte — dunkel (bg-raised) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-raised)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Unsere <span className="text-blue-300">Werte</span>
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Diese Prinzipien leiten unsere tägliche Arbeit -- in jedem Projekt
              und bei jeder Entscheidung.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-blue-400/[0.08] p-7 text-center"
                style={{ background: "var(--bg-surface)" }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10">
                  <value.icon className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Hoba Automation — hell (bg-light) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Warum <span className="text-blue-600">Hoba Automation</span>?
            </h2>
            <p className="mt-4 text-[var(--text-on-light-secondary)]">
              Was uns von anderen Anbietern unterscheidet.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-2xl border border-blue-200/60 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <reason.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-on-light)]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-on-light-secondary)]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dunkel (bg-base) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Lernen Sie uns kennen
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              In einem unverbindlichen Erstgespräch finden wir heraus, wie wir
              Ihnen helfen können.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blue-500 px-8 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/40"
              >
                <Link href="/kontakt">
                  Kostenlose Potenzialanalyse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-blue-400/20 bg-blue-400/5 px-8 text-white hover:bg-blue-400/10 hover:border-blue-400/30"
              >
                <Link href="/team">Unser Team kennenlernen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
