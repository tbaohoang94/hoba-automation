import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts, getAllCategories } from "@/lib/blog-queries";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ImageIcon, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Praxiswissen rund um Automatisierung, Digitalisierung und Effizienzsteigerung fuer den Mittelstand. Tipps, Strategien und Einblicke von Hoba Automation.",
  openGraph: {
    title: "Blog | Hoba Automation",
    description:
      "Praxiswissen rund um Automatisierung, Digitalisierung und Effizienzsteigerung fuer den Mittelstand.",
    type: "website",
  },
};

// ISR: Seite wird alle 60 Sekunden neu generiert
export const revalidate = 60;

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategorie?: string }>;
}) {
  const params = await searchParams;
  const categorySlug = params.kategorie;

  // Pruefen ob Supabase konfiguriert ist
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-playfair text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Der Blog wird gerade eingerichtet. Schauen Sie bald wieder vorbei!
          </p>
        </div>
      </section>
    );
  }

  const [posts, categories] = await Promise.all([
    getPublishedPosts(categorySlug),
    getAllCategories(),
  ]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Praxiswissen rund um Automatisierung, Digitalisierung und
            Effizienzsteigerung fuer den Mittelstand.
          </p>
        </div>

        {/* Kategorie-Filter */}
        {categories.length > 0 && (
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <Link href="/blog">
              <Badge
                variant={!categorySlug ? "default" : "outline"}
                className="cursor-pointer px-3 py-1 text-sm"
              >
                Alle
              </Badge>
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog?kategorie=${category.slug}`}
              >
                <Badge
                  variant={
                    categorySlug === category.slug ? "default" : "outline"
                  }
                  className="cursor-pointer px-3 py-1 text-sm"
                >
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {/* Beitraege */}
        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              Noch keine Beitraege vorhanden.
            </p>
            {categorySlug && (
              <Link href="/blog" className="mt-4 inline-block">
                <Button variant="outline">Alle Beitraege anzeigen</Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  {/* Cover Image Placeholder */}
                  <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-t-xl bg-muted">
                    {post.cover_image_url ? (
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <ImageIcon className="size-12 text-muted-foreground/40" />
                    )}
                  </div>

                  <CardHeader>
                    {/* Kategorie */}
                    {post.blog_categories && (
                      <Badge variant="secondary" className="w-fit">
                        {post.blog_categories.name}
                      </Badge>
                    )}
                    <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    {post.excerpt && (
                      <p className="line-clamp-3 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    )}
                  </CardContent>

                  <CardFooter className="flex items-center gap-4 text-xs text-muted-foreground">
                    {post.published_at && (
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {formatDate(post.published_at)}
                      </span>
                    )}
                    {post.reading_time_min && (
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.reading_time_min} Min. Lesezeit
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* CTA am Ende */}
        {posts.length > 0 && (
          <div className="mt-16 rounded-xl border bg-muted/30 p-8 text-center md:p-12">
            <h2 className="font-playfair text-2xl font-bold md:text-3xl">
              Bereit fuer Ihre Potenzialanalyse?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Erfahren Sie, wie Automatisierung Ihr Unternehmen voranbringen
              kann — kostenlos und unverbindlich.
            </p>
            <Link href="/kontakt" className="mt-6 inline-block">
              <Button size="lg">
                Potenzialanalyse buchen
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
