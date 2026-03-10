"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
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

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  category_id: string | null;
  status: "draft" | "published";
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_url: string | null;
  author_name: string;
};

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  // Formular-State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  // Laden
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Beitrag und Kategorien laden
  useEffect(() => {
    async function loadData() {
      try {
        const supabase = createClient();

        // Parallel laden
        const [postRes, catRes] = await Promise.all([
          supabase
            .from("blog_posts")
            .select("*")
            .eq("id", postId)
            .single(),
          supabase
            .from("blog_categories")
            .select("id, name, slug")
            .order("name"),
        ]);

        if (postRes.error || !postRes.data) {
          setNotFound(true);
          return;
        }

        const post = postRes.data as BlogPost;

        // Formularfelder befuellen
        setTitle(post.title);
        setSlug(post.slug);
        setContent(post.content);
        setExcerpt(post.excerpt ?? "");
        setCategoryId(post.category_id ?? "");
        setMetaTitle(post.meta_title ?? "");
        setMetaDescription(post.meta_description ?? "");
        setIsPublished(post.status === "published");

        setCategories((catRes.data as Category[]) ?? []);
      } catch {
        setError("Beitrag konnte nicht geladen werden.");
      } finally {
        setLoadingPost(false);
      }
    }

    loadData();
  }, [postId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSaving(true);

    // Validierung
    if (!title.trim()) {
      setError("Bitte geben Sie einen Titel ein.");
      setSaving(false);
      return;
    }

    if (!slug.trim()) {
      setError("Bitte geben Sie einen Slug ein.");
      setSaving(false);
      return;
    }

    if (!content.trim()) {
      setError("Bitte geben Sie einen Inhalt ein.");
      setSaving(false);
      return;
    }

    try {
      const supabase = createClient();

      const updateData: Record<string, unknown> = {
        title: title.trim(),
        slug: slug.trim(),
        content: content.trim(),
        excerpt: excerpt.trim() || null,
        category_id: categoryId || null,
        meta_title: metaTitle.trim() || null,
        meta_description: metaDescription.trim() || null,
        status: isPublished ? "published" : "draft",
        reading_time_min: calculateReadingTime(content),
        updated_at: new Date().toISOString(),
      };

      // published_at setzen wenn zum ersten Mal veroeffentlicht
      if (isPublished) {
        // Nur setzen wenn noch kein published_at vorhanden
        const { data: currentPost } = await supabase
          .from("blog_posts")
          .select("published_at")
          .eq("id", postId)
          .single();

        if (!currentPost?.published_at) {
          updateData.published_at = new Date().toISOString();
        }
      }

      const { error: updateError } = await supabase
        .from("blog_posts")
        .update(updateData)
        .eq("id", postId);

      if (updateError) {
        if (updateError.message.includes("duplicate key")) {
          setError(
            "Ein Beitrag mit diesem Slug existiert bereits. Bitte waehlen Sie einen anderen."
          );
        } else {
          console.error("[Admin] Fehler:", updateError);
          setError("Beitrag konnte nicht aktualisiert werden.");
        }
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 500);
    } catch {
      setError("Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setSaving(false);
    }
  }

  // Ladezustand
  if (loadingPost) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Lade Beitrag...</span>
      </div>
    );
  }

  // Nicht gefunden
  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-lg font-medium">Beitrag nicht gefunden</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Der gesuchte Beitrag existiert nicht oder wurde geloescht.
            </p>
            <Link href="/admin" className="mt-4 inline-block">
              <Button variant="outline">Zurueck zum Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
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
          <h1 className="text-2xl font-bold">Beitrag bearbeiten</h1>
          <p className="text-sm text-muted-foreground">
            Aendern Sie den bestehenden Blog-Beitrag.
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
            Beitrag wurde erfolgreich aktualisiert! Weiterleitung...
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
                placeholder="Titel des Beitrags"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={saving}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                placeholder="url-slug-des-beitrags"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                disabled={saving}
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
                placeholder="Eine kurze Zusammenfassung..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                disabled={saving}
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
                disabled={saving}
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
                placeholder={title || "SEO-Titel"}
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                disabled={saving}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta-Beschreibung</Label>
              <Textarea
                id="metaDescription"
                placeholder={excerpt || "SEO-Beschreibung"}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                disabled={saving}
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
                disabled={saving}
              />
              <Label htmlFor="status" className="cursor-pointer">
                {isPublished ? "Veroeffentlicht" : "Entwurf"}
              </Label>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/admin">
                <Button type="button" variant="outline" disabled={saving}>
                  Abbrechen
                </Button>
              </Link>
              <Button type="submit" disabled={saving} className="gap-2">
                {saving ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Speichern...
                  </>
                ) : (
                  <>
                    <Save className="size-4" />
                    Aenderungen speichern
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
