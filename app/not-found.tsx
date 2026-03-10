import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-6xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-4 text-muted-foreground">
            Die angeforderte Seite existiert leider nicht oder wurde
            verschoben. Kehren Sie zur Startseite zurück, um weiterzumachen.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-8 font-bold">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
