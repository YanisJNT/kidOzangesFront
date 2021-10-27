-- Deploy koza:init to pg

BEGIN;

-- Verifying that rate's between 1 and 5
CREATE DOMAIN between_one_and_five AS INT CHECK(VALUE > 0 AND VALUE < 6);
CREATE DOMAIN email_verif AS TEXT CHECK (
  VALUE ~ '.+@[a-z0-9\-]+(\.[a-z]{1,63})?\p{Ll}{1,3}'
);

--verify an e-mail address with a mandatory "@" & "."
CREATE DOMAIN postal_code_fr AS TEXT CHECK (
  VALUE ~ '^\d{5}$' -- global case  \d is [0-9] in SQL
  AND (
    VALUE ~ '^0[1-9]\d{3}$' -- codes beginning by 0 without 00
    OR VALUE ~ '^9[0-6]\d{3}$' -- codes beginning by 9 without DOM and TOM
    OR VALUE ~ '^[1-8]\d{4}$' --others metropolitan zipcodes
    OR VALUE ~ '^9[78][12478]\d{2}$' -- codes DOM and TOM
  )
);

--password with at least one digit, one special character, one uppercase, onelowercase and minimal length 8 characters.
CREATE DOMAIN password_verif AS TEXT CHECK (
    VALUE ~ '(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}'
);

CREATE TABLE IF NOT EXISTS "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "level" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

--data tables
CREATE TABLE IF NOT EXISTS "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nickname" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" email_verif NOT NULL UNIQUE,
    "password" password_verif NOT NULL,
    "gender" TEXT NOT NULL,
    "role_id" INT NOT NULL REFERENCES "role"("id") DEFAULT 1,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "activity" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL UNIQUE,
  "description" TEXT NOT NULL,
  "slug" TEXT,
  "zipcode" postal_code_fr NOT NULL,
  "location" POINT,
  "town" TEXT NOT NULL,
  "free" BOOLEAN NOT NULL,
  "certify" BOOLEAN NOT NULL DEFAULT 'false',
  "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "certify" BOOLEAN NOT NULL DEFAULT 'false',
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "report" BOOLEAN NOT NULL DEFAULT 'false',
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "activity_id" INT NOT NULL REFERENCES "activity"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "picture" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "url" TEXT NOT NULL UNIQUE,
    "activity_id" INT NOT NULL REFERENCES "activity"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW()
);


CREATE TABLE IF NOT EXISTS "rating" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "rate" between_one_and_five NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

-- association tables
CREATE TABLE IF NOT EXISTS "user_rates_activity" (
  "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "activity_id" INT NOT NULL REFERENCES "activity"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "activity_has_rating" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "activity_id" INT NOT NULL REFERENCES "activity"("id") ON DELETE CASCADE,
  "note_id" INT NOT NULL REFERENCES "rating"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

COMMIT;
