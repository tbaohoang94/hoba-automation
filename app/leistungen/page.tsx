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
import { Badge } from "@/components/ui/badge";

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
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              Unsere Leistungen
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Drei Säulen für{" "}
              <span className="text-primary">Ihre Effizienz</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Von der strategischen Beratung über die Automatisierung bis zur
              individuellen Software-Entwicklung -- wir begleiten Sie auf dem
              gesamten Weg.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungsbereiche */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-20 py-20 ${
            index % 2 === 1 ? "border-y bg-card" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* Text-Seite */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <Badge variant="outline" className="mb-4">
                  {service.badge}
                </Badge>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-lg text-primary font-medium">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 font-bold"
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
                className={`rounded-2xl border bg-card p-8 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="mb-6 text-lg font-semibold">Das umfasst:</h3>
                <ul className="space-y-4">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Nicht sicher, wo Sie anfangen sollen?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kein Problem. In unserer kostenlosen Potenzialanalyse finden wir
              gemeinsam heraus, welcher Bereich den größten Hebel für Ihr
              Unternehmen bietet.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-8 font-bold">
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
