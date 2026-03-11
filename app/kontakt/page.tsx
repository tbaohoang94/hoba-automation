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
      {/* Hero — dunkel (bg-base) */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--bg-base)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              Kontakt
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Lassen Sie uns{" "}
              <span className="text-blue-300">sprechen</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Buchen Sie direkt Ihre kostenlose Potenzialanalyse oder schreiben
              Sie uns eine Nachricht. Wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt-Info Karten — hell (bg-light) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Kontaktdaten
            </h2>
            <p className="mt-4 text-[var(--text-on-light-secondary)]">
              Platzhalter -- finale Kontaktdaten werden ergänzt
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-blue-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-[var(--text-on-light-muted)]">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block font-medium text-[var(--text-on-light)] transition-colors hover:text-blue-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-[var(--text-on-light)]">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formular + Calendly — dunkel (bg-raised) */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-raised)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Linke Seite: Calendly */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Potenzialanalyse buchen
              </h2>
              <p className="mt-2 text-[var(--text-secondary)]">
                Wählen Sie direkt einen passenden Termin für Ihre kostenlose Potenzialanalyse.
              </p>
              <div className="mt-8 rounded-2xl border-2 border-dashed border-blue-400/20 p-10 text-center" style={{ background: "var(--bg-surface)" }}>
                <CalendarCheck className="mx-auto mb-3 h-10 w-10 text-blue-300" />
                <p className="text-sm font-medium text-white">
                  Calendly-Widget wird hier eingebettet
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Platzhalter -- Calendly-Embed folgt nach Account-Einrichtung
                </p>
              </div>
            </div>

            {/* Rechte Seite: Kontaktformular */}
            <div className="rounded-2xl border border-blue-400/[0.08] p-8" style={{ background: "var(--bg-surface)" }}>
              <h3 className="mb-6 text-xl font-semibold text-white">Nachricht senden</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[var(--text-secondary)]">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ihr vollständiger Name"
                    required
                    className="border-blue-400/20 bg-[var(--bg-base)] text-white placeholder:text-[var(--text-muted)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[var(--text-secondary)]">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ihre@email.de"
                    required
                    className="border-blue-400/20 bg-[var(--bg-base)] text-white placeholder:text-[var(--text-muted)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[var(--text-secondary)]">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    className="min-h-[120px] border-blue-400/20 bg-[var(--bg-base)] text-white placeholder:text-[var(--text-muted)]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Nachricht senden
                </Button>
                <p className="text-xs text-[var(--text-muted)] text-center">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
