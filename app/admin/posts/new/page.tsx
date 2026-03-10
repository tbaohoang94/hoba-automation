"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { generateSlug, calculateReadingTime } from "@/lib/blog-helpers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Loader2, Save } from "lucide-react";

type Category = {
  id: string;
  name: string;
  slug: string;
};

export default function NewPostPage() {
  const router = useRouter();

  // Formular-State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  // Laden
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Kategorien laden
  useEffect(() => {
    async function loadCategories() {
      try {
        const supabase = createClient();
        const { data } = await supabase
          .from("blog_categories")
          .select("id, name, slug")
          .order("name");

        setCategories((data as Category[]) ?? []);
      } catch {
        console.error("[Admin] Kategorien konnten nicht geladen werden.");
      }
    }

    loadCategories();
  }, []);

  // Slug automatisch generieren wenn Titel sich aendert
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(generateSlug(title));
    }
  }, [title, slugManuallyEdited]);

  function handleSlugChange(value: string) {
    setSlugManuallyEdited(true);
    setSlug(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    // Validierung
    if (!title.trim()) {
      setError("Bitte geben Sie einen Titel ein.");
      setLoading(false);
      return;
    }

    if (!slug.trim()) {
      setError("Bitte geben Sie einen Slug ein.");
      setLoading(false);
      return;
    }

    if (!content.trim()) {
      setError("Bitte geben Sie einen Inhalt ein.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();

      const postData = {
        title: title.trim(),
        slug: slug.trim(),
        content: content.trim(),
        excerpt: excerpt.trim() || null,
        category_id: categoryId || null,
        meta_title: metaTitle.trim() || null,
        meta_description: metaDescription.trim() || null,
        status: isPublished ? "published" : "draft",
        published_at: isPublished ? new Date().toISOString() : null,
        reading_time_min: calculateReadingTime(content),
        author_name: "Hoba Automation",
      };

      const { error: insertError } = await supabase
        .from("blog_posts")
        .insert(postData);

      if (insertError) {
        if (insertError.message.includes("duplicate key")) {
          setError(
            "Ein Beitrag mit diesem Slug existiert bereits. Bitte waehlen Sie einen anderen."
          );
        } else {
          console.error("[Admin] Fehler:", insertError);
          setError("Beitrag konnte nicht erstellt werden.");
        }
        return;
      }

      setSuccess(true);
      // Kurze Verzoegerung damit die Erfolgsmeldung sichtbar ist
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 500);
    } catch {
      setError("Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin">
          <Button variant="ghost" size="icon-sm">
            <ArrowLeft className="size-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Neuer Beitrag</h1>
          <p className="text-sm text-muted-foreground">
            Erstellen Sie einen neuen Blog-Beitrag.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Fehlermeldung */}
        {error && (
          <div className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Erfolgsmeldung */}
        {success && (
          <div className="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
            Beitrag wurde erfolgreich erstellt! Weiterleitung...
          </div>
        )}

        {/* Titel + Slug */}
        <Card>
          <CardHeader>
            <CardTitle>Grunddaten</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titel *</Label>
              <Input
                id="title"
                placeholder="z.B. 5 Automatisierungen, die jedes KMU kennen sollte"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                placeholder="5-automatisierungen-die-jedes-kmu-kennen-sollte"
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                disabled={loading}
                required
              />
              <p className="text-xs text-muted-foreground">
                URL-Pfad: /blog/{slug || "..."}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Kurzbeschreibung</Label>
              <Textarea
                id="excerpt"
                placeholder="Eine kurze Zusammenfassung fuer die Vorschau und Meta-Description..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                disabled={loading}
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategorie</Label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kategorie waehlen..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Inhalt */}
        <Card>
          <CardHeader>
            <CardTitle>Inhalt</CardTitle>
            <CardDescription>
              Schreiben Sie den Inhalt in Markdown. Unterstuetzt: ## Ueberschrift, ### Unterueberschrift, **fett**, *kursiv*, - Listenpunkte, [Link](URL).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="content">Inhalt *</Label>
              <Textarea
                id="content"
                placeholder="## Einleitung&#10;&#10;Hier beginnt Ihr Beitrag..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={loading}
                className="min-h-80 font-mono text-sm"
                required
              />
              {content && (
                <p className="text-xs text-muted-foreground">
                  Geschaetzte Lesezeit: {calculateReadingTime(content)} Min.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* SEO */}
        <Card>
          <CardHeader>
            <CardTitle>SEO-Einstellungen</CardTitle>
            <CardDescription>
              Optional. Wenn leer, werden Titel und Kurzbeschreibung verwendet.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="metaTitle">Meta-Titel</Label>
              <Input
                id="metaTitle"
                placeholder={title || "SEO-Titel (Standard: Beitragstitel)"}
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta-Beschreibung</Label>
              <Textarea
                id="metaDescription"
                placeholder={
                  excerpt || "SEO-Beschreibung (Standard: Kurzbeschreibung)"
                }
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                disabled={loading}
                className="min-h-20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Veroeffentlichung + Speichern */}
        <Card>
          <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Switch
                id="status"
                checked={isPublished}
                onCheckedChange={setIsPublished}
                disabled={loading}
              />
              <Label htmlFor="status" className="cursor-pointer">
                {isPublished ? "Veroeffentlichen" : "Als Entwurf speichern"}
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/admin">
                <Button type="button" variant="outline" disabled={loading}>
                  Abbrechen
                </Button>
              </Link>
              <Button type="submit" disabled={loading} className="gap-2">
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Speichern...
                  </>
                ) : (
                  <>
                    <Save className="size-4" />
                    Beitrag erstellen
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
