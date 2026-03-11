import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  TrendingUp,
  Users,
  AlertTriangle,
  Search,
  Route,
  CheckCircle2,
  Star,
  Quote,
  Shield,
  Award,
  Zap,
  BarChart3,
  Bot,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroDashboard } from "@/components/sections/hero-dashboard";
import { WorkflowVisualizer } from "@/components/sections/workflow-visualizer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/sections/animated-section";
import { AnimatedCounter, Marquee } from "@/components/sections/marquee";
import { ToolMarquee } from "@/components/sections/tool-icons";
import { IntegrationWheel } from "@/components/sections/integration-wheel";
import { ProcessTimeline } from "@/components/sections/process-timeline";

export const metadata: Metadata = {
  title: "Hoba Automation — AI Automation für den Mittelstand",
  description:
    "Befreien Sie Ihr KMU von manuellen Prozessen. Consulting, Automation und Software-Entwicklung für die DACH-Region. Kostenlose Potenzialanalyse buchen.",
  openGraph: {
    title: "Hoba Automation — AI Automation für den Mittelstand",
    description:
      "Befreien Sie Ihr KMU von manuellen Prozessen. AI-gestützte Automatisierung für die DACH-Region.",
  },
};

// --- Daten ---

// Tools-Liste wurde in ToolMarquee-Komponente ausgelagert (components/sections/tool-icons.tsx)

const painPoints = [
  {
    icon: Clock,
    title: "Stunden für Routineaufgaben",
    description:
      "Rechnungen, Berichte, Kundendaten — Aufgaben die kein Fachwissen brauchen, aber wertvolle Zeit kosten.",
  },
  {
    icon: AlertTriangle,
    title: "Keine Übersicht über KPIs",
    description:
      "Wichtige Kennzahlen liegen verstreut in verschiedenen Tools. Entscheidungen aus dem Bauch statt datenbasiert.",
  },
  {
    icon: Workflow,
    title: "Systeme sprechen nicht miteinander",
    description:
      "ERP, CRM, Shop, Buchhaltung — jedes Tool lebt für sich. Doppelerfassungen und Informationslücken.",
  },
];

const services = [
  {
    icon: Search,
    title: "Consulting & Strategie",
    result: "Klarer Fahrplan statt Digitalisierungschaos",
    description:
      "Prozessanalyse mit konkretem ROI-Potenzial, priorisierte Automatisierungsroadmap, Technologieberatung ohne Vendor-Lock-in.",
    href: "/leistungen#consulting",
    color: "#2563eb",
  },
  {
    icon: Route,
    title: "Automation-Projekte",
    result: "20+ Stunden pro Woche zurückgewinnen",
    description:
      "Workflows zwischen allen Systemen verknüpfen, manuelle Dateneingabe eliminieren, automatische Reportings.",
    href: "/leistungen#automation",
    color: "#7c3aed",
  },
  {
    icon: BarChart3,
    title: "Software & Dashboards",
    result: "Alle KPIs in Echtzeit auf einen Blick",
    description:
      "Individuelle Web-Dashboards, API-Integrationen nach Maß, datengestützte Entscheidungen ermöglichen.",
    href: "/leistungen#software",
    color: "#059669",
  },
];

const steps = [
  {
    number: "01",
    title: "Potenzialanalyse",
    description:
      "In 30 Minuten analysieren wir Ihre Prozesse, identifizieren die größten Zeitfresser und berechnen Ihr Einsparpotenzial.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategie & Roadmap",
    description:
      "Sie erhalten einen konkreten Umsetzungsplan mit Prioritäten, Zeitrahmen und erwartetem ROI.",
    icon: Route,
  },
  {
    number: "03",
    title: "Umsetzung & Übergabe",
    description:
      "Wir implementieren, testen und schulen Ihr Team. Sie sind ab Tag 1 unabhängig.",
    icon: Zap,
  },
];

const testimonials = [
  {
    quote:
      "Innerhalb von 4 Wochen haben wir unsere Auftragsverarbeitung komplett automatisiert. Was vorher 3 Stunden am Tag gekostet hat, läuft jetzt im Hintergrund.",
    name: "Thomas Becker",
    role: "Geschäftsführer",
    company: "Becker Maschinenbau GmbH",
  },
  {
    quote:
      "Endlich sehe ich alle wichtigen Zahlen auf einen Blick. Das Dashboard hat die Art verändert, wie wir Entscheidungen treffen.",
    name: "Sandra Klein",
    role: "COO",
    company: "Klein & Partner Logistik",
  },
  {
    quote:
      "Hoba hat uns nicht nur die Technik geliefert, sondern den ganzen Prozess durchdacht. Das Consulting war genauso wertvoll wie die Umsetzung.",
    name: "Markus Lehmann",
    role: "Inhaber",
    company: "Lehmann Elektrotechnik",
  },
];

const stats = [
  { value: 20, suffix: "+", prefix: "", label: "Stunden Ersparnis / Woche" },
  { value: 3, suffix: "", prefix: "<", label: "Monate bis ROI" },
  { value: 98, suffix: "%", prefix: "", label: "Kundenzufriedenheit" },
  { value: 100, suffix: "%", prefix: "", label: "DSGVO-konform" },
];

const faqs = [
  {
    question: "Ist Automatisierung auch für kleine Unternehmen sinnvoll?",
    answer:
      "Absolut. Gerade KMUs profitieren überproportional, weil jede eingesparte Stunde direkt spürbar ist. Wir starten mit den Prozessen, die den größten Hebel haben — oft reichen 2-3 Automationen, um 20+ Stunden pro Woche freizusetzen.",
  },
  {
    question: "Was kostet das und wie schnell rechnet es sich?",
    answer:
      "Die meisten Projekte amortisieren sich innerhalb von 2-4 Monaten. In der kostenlosen Potenzialanalyse berechnen wir gemeinsam Ihren konkreten ROI. Typische Projekte starten ab 3.000 € — der entscheidende Faktor ist, was Sie danach jeden Monat einsparen.",
  },
  {
    question: "Wir nutzen bereits ERP/CRM/Branchensoftware — geht das trotzdem?",
    answer:
      "Gerade dann. Wir integrieren bestehende Systeme, statt sie zu ersetzen. Ob SAP, DATEV, Salesforce, WooCommerce oder Branchenlösungen — über APIs und Middleware wie n8n verbinden wir praktisch jedes System miteinander.",
  },
  {
    question: "Brauchen wir dafür technisches Know-how im Team?",
    answer:
      "Nein. Wir übergeben fertige, dokumentierte Lösungen, die Ihr bestehendes Team bedienen kann. Bei Bedarf schulen wir Ihre Mitarbeiter.",
  },
  {
    question: "Was passiert nach der Umsetzung — sind wir dann von euch abhängig?",
    answer:
      "Unabhängigkeit ist unser Ziel. Alle Automationen laufen auf Ihrer Infrastruktur, Code und Dokumentation gehören Ihnen. Kein Vendor-Lock-in, keine laufenden Lizenzkosten an uns.",
  },
];

// --- Gradient Separator ---
function GradientSeparator({ light = false }: { light?: boolean }) {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <div className={`h-px bg-gradient-to-r from-transparent ${light ? "via-blue-300/30" : "via-blue-400/20"} to-transparent`} />
    </div>
  );
}

// --- Komponente ---

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          1. HERO — dunkel + Glow
          ============================================================ */}
      <section className="relative overflow-hidden py-20 md:py-32" style={{ background: "var(--bg-base)" }}>
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />
          <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <Bot className="h-4 w-4" />
              AI-gestützte Automatisierung für KMUs
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Dein Unternehmen.
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Ein System.
              </span>
              <br />
              Volle Kontrolle.
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              Wir bauen Ihr Operating System — ein zentrales Dashboard mit
              automatisierten Workflows, das alle Abteilungen verbindet und
              manuelle Arbeit eliminiert.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-blue-500 px-10 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/40 hover:-translate-y-0.5"
              >
                <Link href="/kontakt">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Kostenlose Potenzialanalyse
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-full border-blue-400/20 bg-blue-400/5 px-10 text-base text-white hover:bg-blue-400/10 hover:border-blue-400/30"
              >
                <Link href="/leistungen">
                  Leistungen entdecken
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <HeroDashboard />
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="mt-16">
            <p className="mb-4 text-center text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Integriert mit Ihren bestehenden Tools
            </p>
            <ToolMarquee />
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================
          2. PROBLEM — HELL (hellblau)
          ============================================================ */}
      <section className="relative py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-300/40 bg-red-50 px-3 py-1 text-sm text-red-600">
              Kommt Ihnen das bekannt vor?
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Ihr Team arbeitet hart —{" "}
              <span className="text-red-500">aber an den falschen Dingen</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-on-light-secondary)]">
              Die meisten KMUs verlieren jede Woche 20+ Stunden an manuelle
              Routineaufgaben, die längst automatisiert sein könnten.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {painPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="group rounded-2xl border border-blue-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:border-red-300/60 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 transition-colors group-hover:bg-red-100">
                    <point.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-on-light)]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-on-light-secondary)]">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          3. WORKFLOW VISUALIZER — dunkel
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Von manuell zu{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                vollautomatisiert
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-secondary)]">
              Klicken Sie zwischen den Modi um den Unterschied zu sehen — live,
              in Echtzeit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <WorkflowVisualizer />
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================
          4. LEISTUNGEN — HELL (hellblau)
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Was wir für Sie tun —{" "}
              <span className="text-blue-600">und was sich ändert</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-on-light-secondary)]">
              Drei Kernbereiche, ein Ziel: Ihrem Unternehmen Zeit und Geld
              zurückgeben.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-blue-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ background: `linear-gradient(to right, transparent, ${service.color}, transparent)` }}
                  />
                  <div className="relative">
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                      style={{ backgroundColor: `${service.color}12` }}
                    >
                      <service.icon
                        className="h-6 w-6"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-on-light)]">
                      {service.title}
                    </h3>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: service.color }}
                    >
                      {service.result}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-on-light-secondary)]">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          5. WIE ES FUNKTIONIERT — dunkel
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-raised)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              In 3 Schritten zum{" "}
              <span className="text-blue-300">automatisierten Unternehmen</span>
            </h2>
          </AnimatedSection>

          <ProcessTimeline />

          <AnimatedSection delay={0.4} className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-full bg-blue-500 px-10 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/40 hover:-translate-y-0.5"
            >
              <Link href="/kontakt">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Schritt 1 starten — Potenzialanalyse buchen
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================
          6. SOCIAL PROOF — HELL (hellblau)
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          {/* Statistiken */}
          <StaggerContainer className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 md:text-4xl lg:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-on-light-secondary)]">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <GradientSeparator light />

          {/* Testimonials */}
          <AnimatedSection className="mx-auto mb-12 mt-20 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Das sagen unsere Kunden
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative overflow-hidden rounded-2xl border border-blue-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-6xl font-serif leading-none text-blue-300/50 mb-4">&ldquo;</div>
                  <p className="text-sm leading-relaxed text-[var(--text-on-light-secondary)]">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-blue-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-semibold text-white">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-on-light)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--text-on-light-muted)]">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          7. ÜBER UNS — dunkel
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Wir kennen Ihre Herausforderungen —{" "}
                <span className="text-blue-300">aus eigener Erfahrung</span>
              </h2>
              <p className="mt-6 max-w-[640px] leading-relaxed text-[var(--text-secondary)]">
                Hoba Automation wurde gegründet, weil wir selbst erlebt haben,
                wie viel Potenzial in mittelständischen Unternehmen
                brachliegt. Unser Ansatz ist pragmatisch: Was funktioniert,
                wird umgesetzt. Was keinen messbaren Mehrwert bringt, lassen
                wir weg.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-blue-400/[0.1] px-4 py-2 text-sm text-blue-200/80" style={{ background: "rgba(96,165,250,0.06)" }}>
                  <Shield className="h-4 w-4 text-blue-300" />
                  DSGVO-konform
                </div>
                <div className="flex items-center gap-2 rounded-full border border-blue-400/[0.1] px-4 py-2 text-sm text-blue-200/80" style={{ background: "rgba(96,165,250,0.06)" }}>
                  <Award className="h-4 w-4 text-blue-300" />
                  Zertifizierte Experten
                </div>
                <div className="flex items-center gap-2 rounded-full border border-blue-400/[0.1] px-4 py-2 text-sm text-blue-200/80" style={{ background: "rgba(96,165,250,0.06)" }}>
                  <Users className="h-4 w-4 text-blue-300" />
                  DACH-Region
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-8 h-12 rounded-full border-blue-400/20 bg-blue-400/5 px-8 text-base text-white hover:bg-blue-400/10 hover:border-blue-400/30"
              >
                <Link href="/ueber-uns">
                  Mehr über uns
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <IntegrationWheel />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FAQ — HELL (hellblau)
          ============================================================ */}
      <section className="py-20" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
                Häufige Fragen
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-on-light-secondary)]">
                Antworten auf die wichtigsten Fragen zur Automatisierung im
                Mittelstand.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-blue-200/60"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-[var(--text-on-light)] hover:text-blue-600 [&[data-state=open]]:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-[var(--text-on-light-secondary)]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. FINALER CTA — dunkel + starker Glow
          ============================================================ */}
      <section className="py-32" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <AnimatedSection>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-blue-400/20 p-10 text-center shadow-2xl shadow-blue-500/10 md:p-16" style={{ background: "var(--bg-surface)" }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(96,165,250,0.18),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.08),transparent_50%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Bereit für Ihr Operating System?
                </h2>
                <p className="mx-auto mt-4 max-w-[640px] text-lg text-blue-100/50">
                  In einer kostenlosen 30-Minuten-Analyse zeigen wir Ihnen
                  genau, welche Prozesse Sie sofort automatisieren können.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-blue-500 px-12 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/40 hover:-translate-y-0.5"
                  >
                    <Link href="/kontakt">
                      <CalendarCheck className="mr-2 h-5 w-5" />
                      Kostenlose Potenzialanalyse buchen
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-[var(--text-muted)]">
                  Kein Risiko. Kein Verkaufsdruck. Nur Klarheit.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
