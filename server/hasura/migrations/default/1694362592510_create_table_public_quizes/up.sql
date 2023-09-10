CREATE TABLE "public"."quizes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "img" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
