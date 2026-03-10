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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              Über Hoba Automation
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Wir machen den Mittelstand{" "}
              <span className="text-primary">effizienter</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Hoba Automation ist Ihr Partner für Automatisierung,
              Digitalisierung und individuelle Softwarelösungen -- spezialisiert
              auf kleine und mittlere Unternehmen in der DACH-Region.
            </p>
          </div>
        </div>
      </section>

      {/* Unsere Geschichte */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Unsere Geschichte
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6">
              Unsere Mission
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              KMUs durch intelligente Automatisierung effizienter machen
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Wir glauben daran, dass jedes Unternehmen -- unabhängig von seiner
              Größe -- von Automatisierung profitieren kann. Unser Ziel ist es,
              diese Technologie für den Mittelstand zugänglich, verständlich und
              bezahlbar zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Unsere Werte
            </h2>
            <p className="mt-4 text-muted-foreground">
              Diese Prinzipien leiten unsere tägliche Arbeit -- in jedem Projekt
              und bei jeder Entscheidung.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Hoba Automation */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Warum Hoba Automation?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Was uns von anderen Anbietern unterscheidet.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <Card key={reason.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Lernen Sie uns kennen
            </h2>
            <p className="mt-4 text-muted-foreground">
              In einem unverbindlichen Erstgespräch finden wir heraus, wie wir
              Ihnen helfen können.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full px-8 font-bold">
                <Link href="/kontakt">
                  Kostenlose Potenzialanalyse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
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
