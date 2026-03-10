import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hoba Automation — Automatisierung für den Mittelstand",
    template: "%s | Hoba Automation",
  },
  description:
    "Consulting, Automation und Software-Entwicklung für KMUs in der DACH-Region. Buchen Sie Ihre kostenlose Potenzialanalyse.",
  metadataBase: new URL("https://hoba-consulting.com"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Hoba Automation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
