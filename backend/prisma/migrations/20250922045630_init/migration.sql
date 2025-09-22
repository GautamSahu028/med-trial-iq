-- CreateTable
CREATE TABLE "public"."Trial" (
    "trial_id" TEXT NOT NULL,
    "trialName" TEXT,
    "cancerType" TEXT,

    CONSTRAINT "Trial_pkey" PRIMARY KEY ("trial_id")
);

-- CreateTable
CREATE TABLE "public"."Criteria" (
    "id" SERIAL NOT NULL,
    "trialId" TEXT NOT NULL,
    "category" TEXT,
    "inclusionFlag" BOOLEAN NOT NULL,
    "fhirResource" TEXT,
    "criteriaText" TEXT,

    CONSTRAINT "Criteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Concept" (
    "id" SERIAL NOT NULL,
    "conceptName" TEXT NOT NULL,
    "ontologySystem" TEXT NOT NULL,
    "ontologyCode" TEXT NOT NULL,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CriteriaConcept" (
    "criteriaId" INTEGER NOT NULL,
    "conceptId" INTEGER NOT NULL,
    "qualifier" TEXT,
    "exampleEmrText" TEXT,

    CONSTRAINT "CriteriaConcept_pkey" PRIMARY KEY ("criteriaId","conceptId")
);

-- AddForeignKey
ALTER TABLE "public"."Criteria" ADD CONSTRAINT "Criteria_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "public"."Trial"("trial_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CriteriaConcept" ADD CONSTRAINT "CriteriaConcept_criteriaId_fkey" FOREIGN KEY ("criteriaId") REFERENCES "public"."Criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CriteriaConcept" ADD CONSTRAINT "CriteriaConcept_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "public"."Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
