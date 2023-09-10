CREATE TABLE "public"."quiz_questions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "subject_id" uuid NOT NULL, "question" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("subject_id") REFERENCES "public"."quiz_types"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
