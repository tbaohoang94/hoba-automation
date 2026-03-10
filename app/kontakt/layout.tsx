import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit Hoba Automation auf. Buchen Sie Ihre kostenlose Potenzialanalyse oder schreiben Sie uns eine Nachricht.",
  openGraph: {
    title: "Kontakt | Hoba Automation",
    description:
      "Nehmen Sie Kontakt mit Hoba Automation auf. Kostenlose Potenzialanalyse buchen.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
