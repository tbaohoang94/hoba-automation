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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              Karriere bei Hoba Automation
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Gestalte die Zukunft{" "}
              <span className="text-primary">des Mittelstands</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Wir suchen Menschen, die Technologie lieben und den Mittelstand
              voranbringen wollen. Werde Teil eines kleinen Teams mit großem
              Anspruch.
            </p>
          </div>
        </div>
      </section>

      {/* Warum Hoba */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Warum bei uns arbeiten?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Bei Hoba Automation zählt nicht, wo du arbeitest -- sondern was du
              bewirkst.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offene Stellen */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Offene Stellen
            </h2>
            <p className="mt-4 text-muted-foreground">
              Aktuelle Positionen, die wir besetzen möchten.
            </p>
          </div>

          {/* Platzhalter-Hinweis */}
          <div className="mb-8 rounded-xl border-2 border-dashed border-muted p-4 text-center text-sm text-muted-foreground">
            Platzhalter-Inhalte -- finale Stellenbeschreibungen werden ergänzt
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {openPositions.map((position) => (
              <Card key={position.title}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">
                      <MapPin className="mr-1 h-3 w-3" />
                      {position.location}
                    </Badge>
                    <Badge variant="outline">
                      <Clock className="mr-1 h-3 w-3" />
                      {position.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{position.title}</CardTitle>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-3 text-sm font-semibold">Deine Aufgaben:</h4>
                  <ul className="space-y-2">
                    {position.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="rounded-full font-bold">
                    <a href="mailto:karriere@hoba-consulting.com">
                      Jetzt bewerben
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Initiativbewerbung */}
      <section className="border-t bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Keine passende Stelle dabei?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kein Problem! Wir freuen uns immer über Initiativbewerbungen. Schick
              uns einfach eine E-Mail mit deinem Lebenslauf und ein paar Zeilen
              über dich.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 font-bold"
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
