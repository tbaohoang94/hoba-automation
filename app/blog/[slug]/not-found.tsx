import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileX } from "lucide-react";

export default function BlogNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-md px-4 text-center">
        <FileX className="mx-auto size-16 text-muted-foreground/40" />
        <h1 className="mt-6 font-playfair text-3xl font-bold">
          Beitrag nicht gefunden
        </h1>
        <p className="mt-3 text-muted-foreground">
          Der gesuchte Blog-Beitrag existiert nicht oder wurde entfernt.
        </p>
        <Link href="/blog" className="mt-8 inline-block">
          <Button variant="outline">
            <ArrowLeft className="mr-2 size-4" />
            Zurueck zum Blog
          </Button>
        </Link>
      </div>
    </section>
  );
}
