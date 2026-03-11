import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Hoba Automation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-light)" }}>
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-on-light)]">Impressum</h1>

          <div className="mt-10 space-y-8 text-[var(--text-on-light-secondary)] leading-relaxed">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Angaben gemäß &sect; 5 TMG
              </h2>
              <p>
                Hoba Automation GmbH
                <br />
                Musterstraße 42
                <br />
                60311 Frankfurt am Main
                <br />
                Deutschland
              </p>
            </div>

            {/* Vertreten durch */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Vertreten durch
              </h2>
              <p>Alexander Hofmann, Geschäftsführer</p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Kontakt
              </h2>
              <p>
                Telefon: +49 69 123 456 78
                <br />
                E-Mail: info@hoba-consulting.com
              </p>
            </div>

            {/* Handelsregister */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Handelsregister
              </h2>
              <p>
                Registergericht: Amtsgericht Frankfurt am Main
                <br />
                Registernummer: HRB XXXXXX
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß &sect; 27a
                Umsatzsteuergesetz:
                <br />
                DE XXX XXX XXX
              </p>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Verantwortlich für den Inhalt nach &sect; 55 Abs. 2 RStV
              </h2>
              <p>
                Alexander Hofmann
                <br />
                Musterstraße 42
                <br />
                60311 Frankfurt am Main
              </p>
            </div>

            {/* Streitschlichtung */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß &sect; 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[var(--text-on-light)]">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            {/* Platzhalter-Hinweis */}
            <div className="rounded-xl border-2 border-dashed border-blue-200/60 p-4 text-center text-sm text-[var(--text-on-light-muted)]">
              Platzhalter -- finale Angaben (Handelsregisternummer,
              Umsatzsteuer-ID etc.) werden ergänzt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
