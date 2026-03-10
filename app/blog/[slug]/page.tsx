import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog-queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ImageIcon,
} from "lucide-react";

// ISR: Seite wird alle 60 Sekunden neu generiert
export const revalidate = 60;

// Statische Pfade fuer alle veroeffentlichten Beitraege generieren
export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

// Dynamische SEO-Metadaten
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        title: "Beitrag nicht gefunden",
      };
    }

    const title = post.meta_title || post.title;
    const description =
      post.meta_description || post.excerpt || `${post.title} — Hoba Automation Blog`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime: post.published_at ?? undefined,
        authors: [post.author_name],
        images: post.cover_image_url ? [post.cover_image_url] : undefined,
      },
    };
  } catch {
    return {
      title: "Blog | Hoba Automation",
    };
  }
}

// --- Einfacher Markdown-Renderer ---

function renderMarkdown(content: string): string {
  // Zeilen verarbeiten
  const lines = content.split("\n");
  let html = "";
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Leere Zeile: Absatz beenden / Liste beenden
    if (line.trim() === "") {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    // Inline-Formatierung anwenden
    line = applyInlineFormatting(line);

    // H3
    if (line.startsWith("### ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h3 class="mt-8 mb-3 text-xl font-semibold">${line.slice(4)}</h3>`;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h2 class="mt-10 mb-4 text-2xl font-bold">${line.slice(3)}</h2>`;
      continue;
    }

    // H1
    if (line.startsWith("# ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h1 class="mt-10 mb-4 text-3xl font-bold">${line.slice(2)}</h1>`;
      continue;
    }

    // Listenpunkt
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) {
        html += '<ul class="my-4 ml-6 list-disc space-y-2">';
        inList = true;
      }
      html += `<li>${line.slice(2)}</li>`;
      continue;
    }

    // Nummerierte Liste
    const numberedMatch = line.match(/^\d+\.\s+(.*)/);
    if (numberedMatch) {
      if (!inList) {
        html += '<ol class="my-4 ml-6 list-decimal space-y-2">';
        inList = true;
      }
      html += `<li>${numberedMatch[1]}</li>`;
      continue;
    }

    // Normaler Absatz
    if (inList) {
      html += inList ? "</ul>" : "</ol>";
      inList = false;
    }
    html += `<p class="mb-4 leading-relaxed text-muted-foreground">${line}</p>`;
  }

  // Liste am Ende schliessen
  if (inList) {
    html += "</ul>";
  }

  return html;
}

function applyInlineFormatting(text: string): string {
  // Fettdruck: **text**
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
  // Kursiv: *text*
  text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  // Inline-Code: `code`
  text = text.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">$1</code>'
  );
  // Links: [text](url)
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary underline underline-offset-4 hover:text-primary/80">$1</a>'
  );
  return text;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// --- JSON-LD Structured Data ---

function ArticleJsonLd({
  post,
}: {
  post: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt || post.title,
    author: {
      "@type": "Organization",
      name: post.author_name,
    },
    publisher: {
      "@type": "Organization",
      name: "Hoba Automation",
      url: "https://hoba-consulting.com",
    },
    datePublished: post.published_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hoba-consulting.com/blog/${post.slug}`,
    },
    ...(post.cover_image_url && { image: post.cover_image_url }),
    ...(post.blog_categories && {
      articleSection: post.blog_categories.name,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Pruefen ob Supabase konfiguriert ist
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-lg text-muted-foreground">
            Der Blog wird gerade eingerichtet.
          </p>
        </div>
      </section>
    );
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd post={post} />

      <article className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          {/* Zurueck-Link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Zurueck zum Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            {/* Kategorie */}
            {post.blog_categories && (
              <Link
                href={`/blog?kategorie=${post.blog_categories.slug}`}
                className="mb-4 inline-block"
              >
                <Badge variant="secondary">
                  {post.blog_categories.name}
                </Badge>
              </Link>
            )}

            <h1 className="font-playfair text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Meta-Infos */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="size-4" />
                {post.author_name}
              </span>
              {post.published_at && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {formatDate(post.published_at)}
                </span>
              )}
              {post.reading_time_min && (
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.reading_time_min} Min. Lesezeit
                </span>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.cover_image_url ? (
            <div className="mb-10 overflow-hidden rounded-xl">
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : (
            <div className="mb-10 flex h-64 items-center justify-center rounded-xl bg-muted">
              <ImageIcon className="size-16 text-muted-foreground/30" />
            </div>
          )}

          {/* Inhalt */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Trennlinie */}
          <hr className="my-12 border-border" />

          {/* CTA am Ende */}
          <div className="rounded-xl border bg-muted/30 p-8 text-center md:p-12">
            <h2 className="font-playfair text-2xl font-bold md:text-3xl">
              Bereit fuer Ihre Potenzialanalyse?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Erfahren Sie, wie Automatisierung Ihr Unternehmen voranbringen
              kann — kostenlos und unverbindlich.
            </p>
            <Link href="/kontakt" className="mt-6 inline-block">
              <Button size="lg">
                Jetzt Termin buchen
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
