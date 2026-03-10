import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Hoba Automation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-muted-foreground">
          Stand: Februar 2026
        </p>

        <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):
            </p>
            <p className="mt-2">
              Hoba Automation GmbH
              <br />
              Musterstraße 42
              <br />
              60311 Frankfurt am Main
              <br />
              Deutschland
              <br />
              E-Mail: info@hoba-consulting.com
              <br />
              Telefon: +49 69 123 456 78
            </p>
          </div>

          {/* 2. Allgemeines zur Datenverarbeitung */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
              nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
              sowie unserer Inhalte und Leistungen erforderlich ist. Die
              Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach
              Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in
              denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
              Gründen nicht möglich ist und die Verarbeitung der Daten durch
              gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          {/* 3. Bereitstellung der Website und Logfiles */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Bereitstellung der Website und Erstellung von Logfiles
            </h2>
            <p>
              Bei jedem Aufruf unserer Internetseite erfasst unser System
              automatisiert Daten und Informationen vom Computersystem des
              aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Informationen über den Browsertyp und die verwendete Version</li>
              <li>Das Betriebssystem des Nutzers</li>
              <li>Die IP-Adresse des Nutzers</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>
                Websites, von denen das System des Nutzers auf unsere
                Internetseite gelangt
              </li>
            </ul>
            <p className="mt-3">
              Die vorübergehende Speicherung der IP-Adresse durch das System ist
              notwendig, um eine Auslieferung der Website an den Rechner des
              Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für
              die Dauer der Sitzung gespeichert bleiben. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 4. Kontaktformular */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Kontaktformular und E-Mail-Kontakt
            </h2>
            <p>
              Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches
              für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein
              Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske
              eingegeben Daten an uns übermittelt und gespeichert. Diese Daten
              sind:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachrichtentext</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung der personenbezogenen Daten aus dem Kontaktformular
              dient uns allein zur Bearbeitung der Kontaktaufnahme. Die Daten
              werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer
              Erhebung nicht mehr erforderlich sind. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b DSGVO.
            </p>
          </div>

          {/* 5. Calendly */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Terminbuchung über Calendly
            </h2>
            <p>
              Wir nutzen den Dienst Calendly (Calendly LLC, Atlanta, USA) zur
              Online-Terminvereinbarung. Wenn Sie über unser Calendly-Widget einen
              Termin buchen, werden Ihre eingegebenen Daten (Name, E-Mail-Adresse,
              ggf. Telefonnummer) an Calendly übermittelt und dort verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Weitere
              Informationen finden Sie in der Datenschutzerklärung von Calendly:
              {" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                https://calendly.com/privacy
              </a>
              .
            </p>
          </div>

          {/* 6. Cookies */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Cookies
            </h2>
            <p>
              Unsere Internetseiten verwenden teilweise sogenannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
              effektiver und sicherer zu machen.
            </p>
            <p className="mt-3">
              Die meisten der von uns verwendeten Cookies sind sogenannte
              &quot;Session-Cookies&quot;. Sie werden nach Ende Ihres Besuchs
              automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
              gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns,
              Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
              Cookies informiert werden und Cookies nur im Einzelfall erlauben,
              die Annahme von Cookies für bestimmte Fälle oder generell
              ausschließen sowie das automatische Löschen der Cookies beim
              Schließen des Browsers aktivieren.
            </p>
          </div>

          {/* 7. Hosting */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut,
              CA 91789, USA) gehostet. Vercel kann beim Abruf dieser Website
              personenbezogene Daten (insbesondere die IP-Adresse) verarbeiten.
              Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          {/* 8. Ihre Rechte */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Ihre Rechte
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>
                Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a
                href="mailto:info@hoba-consulting.com"
                className="text-primary underline underline-offset-2"
              >
                info@hoba-consulting.com
              </a>
            </p>
          </div>

          {/* Platzhalter-Hinweis */}
          <div className="rounded-xl border-2 border-dashed border-muted p-4 text-center text-sm">
            Platzhalter -- die finale Datenschutzerklärung sollte von einem
            Rechtsanwalt oder Datenschutzbeauftragten geprüft werden
          </div>
        </div>
      </div>
    </section>
  );
}
