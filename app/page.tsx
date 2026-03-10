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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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

const tools = [
  "n8n",
  "Make",
  "OpenAI",
  "Claude",
  "Salesforce",
  "HubSpot",
  "SAP",
  "DATEV",
  "Slack",
  "Google Workspace",
  "Microsoft 365",
  "Airtable",
];

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
    color: "#3b82f6",
  },
  {
    icon: Route,
    title: "Automation-Projekte",
    result: "20+ Stunden pro Woche zurückgewinnen",
    description:
      "Workflows zwischen allen Systemen verknüpfen, manuelle Dateneingabe eliminieren, automatische Reportings.",
    href: "/leistungen#automation",
    color: "#8b5cf6",
  },
  {
    icon: BarChart3,
    title: "Software & Dashboards",
    result: "Alle KPIs in Echtzeit auf einen Blick",
    description:
      "Individuelle Web-Dashboards, API-Integrationen nach Maß, datengestützte Entscheidungen ermöglichen.",
    href: "/leistungen#software",
    color: "#10b981",
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
  { value: 50, suffix: "+", label: "Automatisierte Prozesse" },
  { value: 2400, suffix: "+", label: "Eingesparte Stunden / Jahr" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit" },
  { value: 4, prefix: "<", suffix: " Wo.", label: "Time-to-Value" },
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

// --- Komponente ---

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          1. HERO — Interaktives Dashboard als Blickfang
          ============================================================ */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          {/* Text — zentriert */}
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              <Bot className="h-4 w-4" />
              AI-gestützte Automatisierung für KMUs
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Dein Unternehmen.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ein System.
              </span>
              <br />
              Volle Kontrolle.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
              Wir bauen Ihr Operating System — ein zentrales Dashboard mit
              automatisierten Workflows, das alle Abteilungen verbindet und
              manuelle Arbeit eliminiert.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blue-600 px-8 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
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
                className="rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
              >
                <Link href="/leistungen">
                  Leistungen entdecken
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Interaktives Dashboard */}
          <AnimatedSection delay={0.3}>
            <HeroDashboard />
          </AnimatedSection>

          {/* Tool-Marquee */}
          <AnimatedSection delay={0.5} className="mt-12">
            <p className="mb-4 text-center text-xs uppercase tracking-widest text-slate-500">
              Integriert mit Ihren bestehenden Tools
            </p>
            <Marquee className="py-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm text-slate-400"
                >
                  <Zap className="h-3.5 w-3.5 text-blue-400" />
                  {tool}
                </span>
              ))}
            </Marquee>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================
          2. PROBLEM — Schmerzpunkte
          ============================================================ */}
      <section className="relative border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm text-red-400">
              Kommt Ihnen das bekannt vor?
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ihr Team arbeitet hart —{" "}
              <span className="text-red-400">aber an den falschen Dingen</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Die meisten KMUs verlieren jede Woche 20+ Stunden an manuelle
              Routineaufgaben, die längst automatisiert sein könnten.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {painPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-red-500/20 hover:bg-red-500/[0.03]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                    <point.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          3. WORKFLOW VISUALIZER — Interaktive Vorher/Nachher
          ============================================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Von manuell zu{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                vollautomatisiert
              </span>
            </h2>
            <p className="mt-4 text-slate-400">
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
          4. LEISTUNGEN — Ergebnisse statt Features
          ============================================================ */}
      <section className="border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Was wir für Sie tun —{" "}
              <span className="text-blue-400">und was sich ändert</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Drei Kernbereiche, ein Ziel: Ihrem Unternehmen Zeit und Geld
              zurückgeben.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10">
                  {/* Glow on hover */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.color}10, transparent 40%)`,
                    }}
                  />
                  <div className="relative">
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon
                        className="h-6 w-6"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: service.color }}
                    >
                      {service.result}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-white transition-colors hover:text-blue-400"
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
          5. WIE ES FUNKTIONIERT — 3 Schritte
          ============================================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AnimatedSection className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              In 3 Schritten zum{" "}
              <span className="text-blue-400">automatisierten Unternehmen</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="relative grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 shadow-lg shadow-blue-500/10">
                    <step.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="mb-2 text-sm font-bold text-blue-400">
                    Schritt {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 px-8 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500"
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
          6. SOCIAL PROOF — Zahlen + Testimonials
          ============================================================ */}
      <section className="border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Statistiken */}
          <StaggerContainer className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white md:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Testimonials */}
          <AnimatedSection className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Das sagen unsere Kunden
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <Quote className="mb-3 h-8 w-8 text-blue-500/20" />
                  <p className="leading-relaxed text-slate-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================
          7. ÜBER UNS — Kurz, Vertrauen
          ============================================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Wir kennen Ihre Herausforderungen —{" "}
                <span className="text-blue-400">aus eigener Erfahrung</span>
              </h2>
              <p className="mt-6 leading-relaxed text-slate-400">
                Hoba Automation wurde gegründet, weil wir selbst erlebt haben,
                wie viel Potenzial in mittelständischen Unternehmen
                brachliegt. Unser Ansatz ist pragmatisch: Was funktioniert,
                wird umgesetzt. Was keinen messbaren Mehrwert bringt, lassen
                wir weg.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Shield className="h-4 w-4 text-blue-400" />
                  DSGVO-konform
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Award className="h-4 w-4 text-blue-400" />
                  Zertifizierte Experten
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Users className="h-4 w-4 text-blue-400" />
                  DACH-Region
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/ueber-uns">
                  Mehr über uns
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                    <p className="text-3xl font-bold text-blue-400">
                      <AnimatedCounter value={350} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs text-slate-400">System-Builds</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                    <p className="text-3xl font-bold text-purple-400">
                      <AnimatedCounter value={6} />
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Wochen Setup</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                    <p className="text-3xl font-bold text-green-400">98%</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Zufriedenheit
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                    <p className="text-3xl font-bold text-yellow-400">24/7</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Automation aktiv
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FAQ
          ============================================================ */}
      <section className="border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Häufige Fragen
              </h2>
              <p className="mt-4 text-slate-400">
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
                    className="border-white/5"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-white hover:text-blue-400 [&[data-state=open]]:text-blue-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-slate-400">
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
          9. FINALER CTA
          ============================================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AnimatedSection>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-10 text-center shadow-2xl shadow-blue-500/10 md:p-16">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />

              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Bereit für Ihr Operating System?
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  In einer kostenlosen 30-Minuten-Analyse zeigen wir Ihnen
                  genau, welche Prozesse Sie sofort automatisieren können.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-blue-600 px-8 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500"
                  >
                    <Link href="/kontakt">
                      <CalendarCheck className="mr-2 h-5 w-5" />
                      Kostenlose Potenzialanalyse buchen
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-slate-500">
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
