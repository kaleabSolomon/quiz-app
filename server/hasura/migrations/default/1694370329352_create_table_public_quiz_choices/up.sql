CREATE TABLE "public"."quiz_choices" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "question_id" uuid NOT NULL, "choice" text NOT NULL, "isCorrect" boolean NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("question_id") REFERENCES "public"."quiz_questions"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
