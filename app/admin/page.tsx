"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PenSquare,
  Pencil,
  Trash2,
  Loader2,
  FileText,
  Eye,
  Plus,
} from "lucide-react";

type BlogPostRow = {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  published_at: string | null;
  blog_categories: { name: string; slug: string } | null;
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Supabase-Konfiguration pruefen
  const supabaseConfigured =
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false);
      setError(
        "Supabase ist noch nicht konfiguriert. Bitte setzen Sie die Umgebungsvariablen."
      );
      return;
    }

    loadPosts();
  }, [supabaseConfigured]);

  async function loadPosts() {
    try {
      const supabase = createClient();
      const { data, error: fetchError } = await supabase
        .from("blog_posts")
        .select("id, created_at, title, slug, status, published_at, blog_categories(name, slug)")
        .order("created_at", { ascending: false });

      if (fetchError) {
        console.error("[Admin] Fehler beim Laden:", fetchError);
        setError("Beitraege konnten nicht geladen werden.");
        return;
      }

      setPosts((data as unknown as BlogPostRow[]) ?? []);
    } catch {
      setError("Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Beitrag "${title}" wirklich loeschen? Diese Aktion kann nicht rueckgaengig gemacht werden.`)) {
      return;
    }

    setDeletingId(id);

    try {
      const supabase = createClient();
      const { error: deleteError } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (deleteError) {
        console.error("[Admin] Fehler beim Loeschen:", deleteError);
        alert("Beitrag konnte nicht geloescht werden.");
        return;
      }

      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch {
      alert("Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setDeletingId(null);
    }
  }

  // Statistiken
  const publishedCount = posts.filter((p) => p.status === "published").length;
  const draftCount = posts.filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Verwalten Sie Ihre Blog-Beitraege.
          </p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="gap-2">
            <Plus className="size-4" />
            Neuer Beitrag
          </Button>
        </Link>
      </div>

      {/* Statistik-Karten */}
      {!loading && !error && (
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Gesamt</CardDescription>
              <CardTitle className="text-3xl">{posts.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Beitraege</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Veroeffentlicht</CardDescription>
              <CardTitle className="text-3xl text-green-600">
                {publishedCount}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Oeffentlich sichtbar</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Entwuerfe</CardDescription>
              <CardTitle className="text-3xl text-muted-foreground">
                {draftCount}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Noch nicht veroeffentlicht</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Fehlermeldung */}
      {error && (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Ladezustand */}
      {loading && (
        <Card>
          <CardContent className="flex items-center justify-center py-20">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Lade Beitraege...</span>
          </CardContent>
        </Card>
      )}

      {/* Beitraege-Liste */}
      {!loading && !error && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="size-5" />
              Alle Beitraege
            </CardTitle>
          </CardHeader>
          <CardContent>
            {posts.length === 0 ? (
              <div className="py-10 text-center">
                <PenSquare className="mx-auto size-10 text-muted-foreground/40" />
                <p className="mt-3 text-muted-foreground">
                  Noch keine Beitraege vorhanden.
                </p>
                <Link href="/admin/posts/new" className="mt-4 inline-block">
                  <Button variant="outline" className="gap-2">
                    <Plus className="size-4" />
                    Ersten Beitrag erstellen
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="divide-y">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    {/* Linke Seite: Titel + Infos */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-medium">{post.title}</p>
                        <Badge
                          variant={
                            post.status === "published"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            post.status === "published"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : ""
                          }
                        >
                          {post.status === "published"
                            ? "Veroeffentlicht"
                            : "Entwurf"}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        {post.blog_categories && (
                          <span>{post.blog_categories.name}</span>
                        )}
                        <span>
                          {post.published_at
                            ? formatDate(post.published_at)
                            : formatDate(post.created_at)}
                        </span>
                      </div>
                    </div>

                    {/* Rechte Seite: Aktionen */}
                    <div className="flex items-center gap-2">
                      {post.status === "published" && (
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Button variant="ghost" size="icon-sm" title="Ansehen">
                            <Eye className="size-4" />
                          </Button>
                        </Link>
                      )}
                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Button variant="ghost" size="icon-sm" title="Bearbeiten">
                          <Pencil className="size-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        title="Loeschen"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(post.id, post.title)}
                        disabled={deletingId === post.id}
                      >
                        {deletingId === post.id ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <Trash2 className="size-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
