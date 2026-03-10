-- Blog-Kategorien
CREATE TABLE blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text
);

-- Blog-Beiträge
CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  excerpt text,
  cover_image_url text,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at timestamptz,
  author_name text NOT NULL DEFAULT 'Hoba Automation',
  meta_title text,
  meta_description text,
  reading_time_min int
);

-- Indizes
CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX blog_posts_status_published_at_idx ON blog_posts(status, published_at DESC);
CREATE INDEX blog_posts_category_id_idx ON blog_posts(category_id);
CREATE INDEX blog_categories_slug_idx ON blog_categories(slug);

-- RLS aktivieren
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Blog-Posts: Öffentlich lesen (nur published)
CREATE POLICY "public_read_published" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Blog-Posts: Auth-User lesen alle
CREATE POLICY "admin_read_all" ON blog_posts
  FOR SELECT TO authenticated USING (true);

-- Blog-Posts: Auth-User schreiben
CREATE POLICY "admin_insert" ON blog_posts
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "admin_update" ON blog_posts
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_delete" ON blog_posts
  FOR DELETE TO authenticated USING (true);

-- Kategorien: Öffentlich lesen
CREATE POLICY "public_read" ON blog_categories
  FOR SELECT USING (true);

-- Kategorien: Auth-User schreiben
CREATE POLICY "admin_cat_insert" ON blog_categories
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "admin_cat_update" ON blog_categories
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- updated_at automatisch aktualisieren
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
