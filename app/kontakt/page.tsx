"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/*
 * Metadata muss in einer separaten Datei exportiert werden, da diese
 * Seite "use client" verwendet. Alternativ kann das Formular in eine
 * eigene Client-Komponente ausgelagert werden.
 * Vorerst wird die Metadata aus layout.tsx / der Root-Metadata verwendet.
 */

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@hoba-consulting.com",
    href: "mailto:info@hoba-consulting.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 69 123 456 78",
    href: "tel:+4969123456 78",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Musterstraße 42, 60311 Frankfurt am Main",
    href: null,
  },
];

export default function KontaktPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // [OFFEN] Server Action oder API-Route für Kontaktformular
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen.");
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              Kontakt
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Lassen Sie uns{" "}
              <span className="text-primary">sprechen</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Buchen Sie direkt Ihre kostenlose Potenzialanalyse oder schreiben
              Sie uns eine Nachricht. Wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt-Info + Formular */}
      <section className="border-y bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Linke Seite: Info + Calendly */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Kontaktdaten
              </h2>
              <p className="mt-2 text-muted-foreground">
                Platzhalter -- finale Kontaktdaten werden ergänzt
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Calendly Platzhalter */}
              <div className="mt-10">
                <h3 className="mb-4 text-lg font-semibold">
                  Potenzialanalyse buchen
                </h3>
                <div className="rounded-xl border-2 border-dashed border-muted p-10 text-center text-muted-foreground">
                  <CalendarCheck className="mx-auto mb-3 h-10 w-10" />
                  <p className="text-sm font-medium">
                    Calendly-Widget wird hier eingebettet
                  </p>
                  <p className="mt-1 text-xs">
                    Platzhalter -- Calendly-Embed folgt nach Account-Einrichtung
                  </p>
                </div>
              </div>
            </div>

            {/* Rechte Seite: Kontaktformular */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Nachricht senden</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ihr vollständiger Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Wie können wir Ihnen helfen?"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full font-bold"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <Link
                      href="/datenschutz"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      Datenschutzerklärung
                    </Link>{" "}
                    zu.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
