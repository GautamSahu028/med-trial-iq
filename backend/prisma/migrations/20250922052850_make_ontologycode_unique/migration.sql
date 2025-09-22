/*
  Warnings:

  - A unique constraint covering the columns `[ontologyCode]` on the table `Concept` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Concept_ontologyCode_key" ON "public"."Concept"("ontologyCode");
