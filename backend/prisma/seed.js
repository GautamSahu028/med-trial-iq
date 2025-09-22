import prisma from "../config/db.js";
import fs from "fs";
import csv from "csv-parser";
import path from "path";

async function importCsv(filePath) {
  const results = [];

  console.log(`📂 Reading file: ${filePath}`);

  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => results.push(row))
      .on("end", resolve)
      .on("error", reject);
  });

  for (const row of results) {
    try {
      const trialId = row["Trial ID"];
      const conceptTerm = row["Concept (Precise Term)"];
      const qualifier = row["Constraint / Qualifier"];
      const cancerType = row["Cancer Type"];
      const category = row["Category"];
      const inclusionExclusion = row["Inclusion/Exclusion"];
      const fhirResource = row["FHIR Resource"];
      const code = row["Code (LOINC/SNOMED/ICD)"];
      const exampleEmr = row["Example EMR Text"];

      if (!trialId) {
        console.warn("⚠️ Skipping row without Trial ID:", row);
        continue;
      }

      // 1. Upsert Trial
      const trial = await prisma.trial.upsert({
        where: { id: trialId },
        update: {},
        create: {
          id: trialId,
          trialName: null, // CSV doesn’t have Trial Name
          cancerType: cancerType || null,
        },
      });

      // 2. Create Criteria
      const criteria = await prisma.criteria.create({
        data: {
          trialId: trial.id,
          category: category || null,
          inclusionFlag:
            inclusionExclusion?.toLowerCase() === "inclusion" ? true : false,
          fhirResource: fhirResource || null,
          criteriaText: `${conceptTerm || ""}${
            qualifier ? " - " + qualifier : ""
          }`,
        },
      });

      // 3. Upsert Concept and link if code is present
      if (code) {
        let system = "Unknown";
        let codeValue = code.trim();

        if (code.includes(":")) {
          const parts = code.split(":");
          system = parts[0].trim();
          codeValue = parts[1].trim();
        }

        // ✅ strip trailing "(...)" labels
        codeValue = codeValue.replace(/\s*\(.*\)$/, "");

        const concept = await prisma.concept.upsert({
          where: { ontologyCode: codeValue },
          update: {},
          create: {
            conceptName: conceptTerm || "Unknown",
            ontologySystem: system,
            ontologyCode: codeValue,
          },
        });

        await prisma.criteriaConcept.create({
          data: {
            criteriaId: criteria.id,
            conceptId: concept.id,
            qualifier: qualifier || null,
            exampleEmrText: exampleEmr || null,
          },
        });
      }
    } catch (err) {
      console.error("❌ Failed to import row:", row, err.message);
    }
  }

  console.log(`✅ Imported ${results.length} rows from ${filePath}`);
}

async function main() {
  const breastCancerPath = path.resolve(
    "../data/research/Oncology/Breast Cancer/MasterRecord.csv"
  );
  const lungCancerPath = path.resolve(
    "../data/research/Oncology/Lung Cancer/MasterRecord.csv"
  );

  await importCsv(breastCancerPath);
  await importCsv(lungCancerPath);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
