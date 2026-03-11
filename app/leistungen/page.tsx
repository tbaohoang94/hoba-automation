import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Zap,
  BarChart3,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Consulting, Workflow-Automatisierung und individuelle Software-Entwicklung für KMUs. Erfahren Sie, wie Hoba Automation Ihr Unternehmen effizienter macht.",
  openGraph: {
    title: "Leistungen | Hoba Automation",
    description:
      "Consulting, Workflow-Automatisierung und individuelle Software-Entwicklung für KMUs.",
  },
};

const services = [
  {
    id: "consulting",
    icon: Lightbulb,
    badge: "Beratung",
    title: "Consulting",
    subtitle: "Klarheit schaffen, bevor Sie investieren",
    description:
      "Bevor Sie automatisieren, müssen Sie wissen, wo das größte Potenzial liegt. Wir analysieren Ihre bestehenden Prozesse, identifizieren Engpässe und entwickeln eine praxisnahe Digitalisierungsstrategie.",
    bullets: [
      "Prozessanalyse und Mapping Ihrer aktuellen Abläufe",
      "Identifikation von Automatisierungspotenzialen",
      "Entwicklung einer Digitalisierungsstrategie",
      "Kostenlose Potenzialanalyse als Einstieg",
      "Priorisierte Roadmap mit Quick Wins und langfristigen Zielen",
      "Technologieberatung: die richtigen Tools für Ihre Anforderungen",
    ],
  },
  {
    id: "automation",
    icon: Zap,
    badge: "Automatisierung",
    title: "Automation",
    subtitle: "Repetitive Aufgaben abschaffen, Zeit gewinnen",
    description:
      "Wir automatisieren Ihre wiederkehrenden Prozesse -- von einfachen Benachrichtigungen bis zu komplexen System-Integrationen. Mit bewährten Tools wie n8n und Make setzen wir zuverlässige Workflows um, die sofort Wirkung zeigen.",
    bullets: [
      "Workflow-Automatisierung mit n8n, Make und Zapier",
      "System-Integration: CRM, ERP, E-Mail, Buchhaltung und mehr",
      "Automatisierte Datenübertragung zwischen Ihren Tools",
      "Benachrichtigungen, Reportings und Eskalationen",
      "Dokumentenverarbeitung und -generierung",
      "Monitoring und Wartung Ihrer Automations",
    ],
  },
  {
    id: "software",
    icon: BarChart3,
    badge: "Entwicklung",
    title: "Software & Dashboards",
    subtitle: "Maßgeschneiderte Lösungen für Ihre Anforderungen",
    description:
      "Wenn Standardtools nicht ausreichen, entwickeln wir individuelle Weblösungen. Von interaktiven Dashboards über kundenspezifische Portale bis hin zu API-Integrationen -- alles aus einer Hand.",
    bullets: [
      "Individuelle Webanwendungen und Portale",
      "Interaktive Reporting-Dashboards in Echtzeit",
      "REST-API-Entwicklung und -Integration",
      "Datenbanken und Backend-Systeme",
      "Anbindung an bestehende Systeme und Schnittstellen",
      "Wartung, Hosting und Weiterentwicklung",
    ],
  },
];

export default function LeistungenPage() {
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
              Unsere Leistungen
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Drei Säulen für{" "}
              <span className="text-blue-300">Ihre Effizienz</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Von der strategischen Beratung über die Automatisierung bis zur
              individuellen Software-Entwicklung -- wir begleiten Sie auf dem
              gesamten Weg.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungsbereiche — alternierend hell/dunkel */}
      {services.map((service, index) => {
        const isLight = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-20 py-20 md:py-28"
            style={{ background: isLight ? "var(--bg-light)" : "var(--bg-raised)" }}
          >
            <div className="mx-auto max-w-[1280px] px-4 md:px-6">
              <div className="grid items-start gap-12 md:grid-cols-2">
                {/* Text-Seite */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      isLight
                        ? "border border-blue-200/60 bg-blue-50 text-blue-600"
                        : "border border-blue-400/30 bg-blue-400/10 text-blue-300"
                    }`}
                  >
                    {service.badge}
                  </div>
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isLight ? "bg-blue-100" : "bg-blue-400/10"
                    }`}
                  >
                    <service.icon
                      className={`h-7 w-7 ${isLight ? "text-blue-600" : "text-blue-300"}`}
                    />
                  </div>
                  <h2
                    className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
                      isLight ? "text-[var(--text-on-light)]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`mt-2 text-lg font-medium ${
                      isLight ? "text-blue-600" : "text-blue-300"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className={`mt-4 leading-relaxed ${
                      isLight ? "text-[var(--text-on-light-secondary)]" : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className={`rounded-full px-8 font-bold ${
                        isLight
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                      }`}
                    >
                      <Link href="/kontakt">
                        <CalendarCheck className="mr-2 h-5 w-5" />
                        Kostenlose Potenzialanalyse
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Bullet-Seite */}
                <div
                  className={`rounded-2xl border p-8 ${
                    isLight
                      ? "border-blue-200/60 bg-white shadow-sm"
                      : "border-blue-400/[0.08]"
                  } ${index % 2 === 1 ? "md:order-1" : ""}`}
                  style={!isLight ? { background: "var(--bg-surface)" } : undefined}
                >
                  <h3
                    className={`mb-6 text-lg font-semibold ${
                      isLight ? "text-[var(--text-on-light)]" : "text-white"
                    }`}
                  >
                    Das umfasst:
                  </h3>
                  <ul className="space-y-4">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <CheckCircle2
                          className={`mt-0.5 h-5 w-5 shrink-0 ${
                            isLight ? "text-blue-600" : "text-blue-300"
                          }`}
                        />
                        <span
                          className={
                            isLight
                              ? "text-[var(--text-on-light-secondary)]"
                              : "text-[var(--text-secondary)]"
                          }
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA — dunkel (bg-raised) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Nicht sicher, wo Sie anfangen sollen?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Kein Problem. In unserer kostenlosen Potenzialanalyse finden wir
              gemeinsam heraus, welcher Bereich den größten Hebel für Ihr
              Unternehmen bietet.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blue-500 px-8 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/40"
              >
                <Link href="/kontakt">
                  Jetzt Gespräch vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
