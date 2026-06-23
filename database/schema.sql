-- =============================================================================
-- NikShafik Portfolio — Content database schema (PostgreSQL)
-- =============================================================================
-- Matches the collections managed by the admin panel (src/admin/store.js).
-- Each table = one collection. JSON-ish fields (arrays / nested objects) are
-- stored as JSONB so the shapes stay identical to src/data/*.js.
--
-- RUN IT:
--   createdb nikshafik_portfolio
--   psql -d nikshafik_portfolio -f database/schema.sql
-- or with a connection string:
--   psql "$DATABASE_URL" -f database/schema.sql
--
-- Supabase: paste this file into the SQL editor and run.
-- =============================================================================

BEGIN;

-- ----------------------------------------------------------------------------
-- companies
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS companies (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  role          TEXT,
  status        TEXT,
  logo          TEXT,
  founded       TEXT,
  ssm           TEXT,
  location      TEXT,
  website       TEXT,
  website_label TEXT,
  description   TEXT,
  tags          JSONB DEFAULT '[]'::jsonb,
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- products
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT,
  sector      TEXT,                       -- All / Enterprise / Agriculture / Security
  status      TEXT,
  image       TEXT,
  description TEXT,
  features    JSONB DEFAULT '[]'::jsonb,
  link        TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- clients
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS clients (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  logo        TEXT,
  industry    TEXT,
  project     TEXT,
  description TEXT,
  link        TEXT,
  tech        JSONB DEFAULT '[]'::jsonb,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- experience  (timeline)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS experience (
  id          SERIAL PRIMARY KEY,
  idx         TEXT,                        -- node label shown on screen, e.g. "08"
  company     TEXT NOT NULL,
  logo        TEXT,
  position    TEXT,
  duration    TEXT,
  is_current  BOOLEAN DEFAULT FALSE,       -- maps to `current` in the data
  description TEXT,
  tech        JSONB DEFAULT '[]'::jsonb,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- achievements
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS achievements (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  category    TEXT,                        -- Award / Recognition / Milestone
  year        INTEGER,
  issuer      TEXT,
  icon        TEXT,
  description TEXT,
  impact      TEXT,
  image       TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- case_studies  (collection key: caseStudies)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS case_studies (
  id             SERIAL PRIMARY KEY,
  title          TEXT NOT NULL,
  client         TEXT,
  industry       TEXT,
  image          TEXT,
  challenge      TEXT,
  solution       TEXT,
  results        TEXT,
  technologies   JSONB DEFAULT '[]'::jsonb,
  timeline       TEXT,
  impact_metrics JSONB DEFAULT '[]'::jsonb,  -- [{ metric, value }]
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- team
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS team (
  id             SERIAL PRIMARY KEY,
  name           TEXT NOT NULL,
  position       TEXT,
  company        TEXT,
  bio            TEXT,
  image          TEXT,
  specialization JSONB DEFAULT '[]'::jsonb,
  linkedin       TEXT,
  twitter        TEXT,
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- testimonials
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS testimonials (
  id         SERIAL PRIMARY KEY,
  author     TEXT NOT NULL,
  position   TEXT,
  company    TEXT,
  text       TEXT,
  rating     SMALLINT CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- admin_users  (for real auth — replaces the demo passphrase)
-- Store a password HASH only (e.g. bcrypt). Never store plain text.
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_users (
  id            SERIAL PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role          TEXT DEFAULT 'editor',     -- editor / admin
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- keep updated_at fresh on every UPDATE
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'companies','products','clients','experience','achievements',
    'case_studies','team','testimonials'
  ] LOOP
    EXECUTE format(
      'DROP TRIGGER IF EXISTS trg_%1$s_updated ON %1$s;
       CREATE TRIGGER trg_%1$s_updated BEFORE UPDATE ON %1$s
       FOR EACH ROW EXECUTE FUNCTION set_updated_at();', t);
  END LOOP;
END $$;

COMMIT;

-- =============================================================================
-- Seeding: the shipped content lives in src/data/*.js. Two options:
--   1) Generate INSERTs from those files, or
--   2) From the running app's admin panel, POST each collection to your API.
-- The collection key -> table name mapping (see src/admin/store.js):
--   companies->companies, products->products, clients->clients,
--   experience->experience, achievements->achievements,
--   caseStudies->case_studies, team->team, testimonials->testimonials
-- =============================================================================
