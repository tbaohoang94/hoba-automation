/**
 * Erzeugt einen URL-Slug aus einem deutschen Titel.
 * Ersetzt Umlaute, entfernt Sonderzeichen, Leerzeichen werden zu Bindestrichen.
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Berechnet die geschätzte Lesezeit in Minuten (200 Wörter/Minute).
 */
export function calculateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}
