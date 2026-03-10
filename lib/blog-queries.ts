import "server-only";
import { createClient } from "@/lib/supabase-server";
import { calculateReadingTime } from "@/lib/blog-helpers";

// Re-export für Server Components
export { generateSlug, calculateReadingTime } from "@/lib/blog-helpers";

// --- Typen ---

export type BlogPost = {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category_id: string | null;
  status: "draft" | "published";
  published_at: string | null;
  author_name: string;
  meta_title: string | null;
  meta_description: string | null;
  reading_time_min: number | null;
};

export type BlogPostWithCategory = BlogPost & {
  blog_categories: BlogCategory | null;
};

export type BlogCategory = {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  description: string | null;
};

export type CreatePostData = {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  cover_image_url?: string;
  category_id?: string | null;
  status: "draft" | "published";
  published_at?: string | null;
  author_name?: string;
  meta_title?: string;
  meta_description?: string;
  reading_time_min?: number;
};

export type UpdatePostData = Partial<CreatePostData>;

// --- Oeffentliche Abfragen ---

/**
 * Holt alle veroeffentlichten Blog-Beitraege, optional gefiltert nach Kategorie-Slug.
 * Sortiert nach Veroeffentlichungsdatum absteigend.
 */
export async function getPublishedPosts(
  categorySlug?: string
): Promise<BlogPostWithCategory[]> {
  const supabase = await createClient();

  let query = supabase
    .from("blog_posts")
    .select("*, blog_categories(*)")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (categorySlug) {
    // Zuerst die Kategorie-ID anhand des Slugs finden
    const { data: category } = await supabase
      .from("blog_categories")
      .select("id")
      .eq("slug", categorySlug)
      .single();

    if (category) {
      query = query.eq("category_id", category.id);
    } else {
      // Kategorie nicht gefunden — leeres Ergebnis
      return [];
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error("[Blog] Fehler beim Laden der Beitraege:", error);
    return [];
  }

  return (data as BlogPostWithCategory[]) ?? [];
}

/**
 * Holt einen einzelnen veroeffentlichten Beitrag anhand des Slugs.
 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPostWithCategory | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(*)")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("[Blog] Fehler beim Laden des Beitrags:", error);
    return null;
  }

  return data as BlogPostWithCategory;
}

/**
 * Holt alle Kategorien.
 */
export async function getAllCategories(): Promise<BlogCategory[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("[Blog] Fehler beim Laden der Kategorien:", error);
    return [];
  }

  return (data as BlogCategory[]) ?? [];
}

// --- Admin-Abfragen ---

/**
 * Holt alle Beitraege (Draft + Published) fuer den Admin-Bereich.
 * Sortiert nach Erstellungsdatum absteigend.
 */
export async function getAdminPosts(): Promise<BlogPostWithCategory[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[Admin] Fehler beim Laden der Beitraege:", error);
    return [];
  }

  return (data as BlogPostWithCategory[]) ?? [];
}

/**
 * Holt einen einzelnen Beitrag anhand der ID (fuer Bearbeitung im Admin).
 */
export async function getPostById(
  id: string
): Promise<BlogPostWithCategory | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error("[Admin] Fehler beim Laden des Beitrags:", error);
    return null;
  }

  return data as BlogPostWithCategory;
}

/**
 * Erstellt einen neuen Blog-Beitrag.
 */
export async function createPost(
  data: CreatePostData
): Promise<{ data: BlogPost | null; error: string | null }> {
  const supabase = await createClient();

  // Lesezeit berechnen falls nicht angegeben
  const reading_time_min =
    data.reading_time_min ?? calculateReadingTime(data.content);

  // published_at setzen falls Status "published"
  const published_at =
    data.status === "published"
      ? data.published_at ?? new Date().toISOString()
      : data.published_at ?? null;

  const { data: post, error } = await supabase
    .from("blog_posts")
    .insert({
      ...data,
      reading_time_min,
      published_at,
    })
    .select()
    .single();

  if (error) {
    console.error("[Admin] Fehler beim Erstellen des Beitrags:", error);
    return { data: null, error: "Beitrag konnte nicht erstellt werden." };
  }

  return { data: post as BlogPost, error: null };
}

/**
 * Aktualisiert einen bestehenden Blog-Beitrag.
 */
export async function updatePost(
  id: string,
  data: UpdatePostData
): Promise<{ data: BlogPost | null; error: string | null }> {
  const supabase = await createClient();

  // Lesezeit neu berechnen falls Inhalt geaendert wurde
  const updateData: UpdatePostData & { updated_at: string } = {
    ...data,
    updated_at: new Date().toISOString(),
  };

  if (data.content) {
    updateData.reading_time_min =
      data.reading_time_min ?? calculateReadingTime(data.content);
  }

  // published_at setzen falls Status auf "published" wechselt
  if (data.status === "published" && !data.published_at) {
    updateData.published_at = new Date().toISOString();
  }

  const { data: post, error } = await supabase
    .from("blog_posts")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("[Admin] Fehler beim Aktualisieren des Beitrags:", error);
    return { data: null, error: "Beitrag konnte nicht aktualisiert werden." };
  }

  return { data: post as BlogPost, error: null };
}

/**
 * Loescht einen Blog-Beitrag.
 */
export async function deletePost(
  id: string
): Promise<{ error: string | null }> {
  const supabase = await createClient();

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) {
    console.error("[Admin] Fehler beim Loeschen des Beitrags:", error);
    return { error: "Beitrag konnte nicht geloescht werden." };
  }

  return { error: null };
}
