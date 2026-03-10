import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              Unser Team
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Die Menschen hinter{" "}
              <span className="text-primary">Hoba Automation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ein kleines, erfahrenes Team mit einem klaren Ziel: den
              Mittelstand effizienter zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Platzhalter-Hinweis */}
          <div className="mb-10 rounded-xl border-2 border-dashed border-muted p-4 text-center text-sm text-muted-foreground">
            Platzhalter-Inhalte -- Fotos und finale Texte werden vom Kunden
            geliefert
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  {/* Avatar-Platzhalter */}
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Lust, Teil des Teams zu werden?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wir suchen immer nach motivierten Menschen, die den Mittelstand
              mit uns verändern wollen.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full px-8 font-bold">
                <Link href="/karriere">
                  Offene Stellen ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
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
