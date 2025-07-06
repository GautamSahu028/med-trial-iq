**Mapping Clinical Trial Eligibility Criteria to EMR Data (Breast Cancer Trials)**

---

### 1. Demographic Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| Sex | Patient.gender | N/A | Admission notes, discharge summaries |
| Age | Patient.birthDate | N/A | Discharge summaries, intake forms |
| Menopausal Status | Observation | LOINC 45820-6 (e.g., FSH level) | Clinical notes, pathology reports |
| Reproductive Status | Observation, QuestionnaireResponse | LOINC 19080-1 (Pregnancy status) | Consent forms, clinical notes |
| Caregiver Consent | Not standard | N/A | Consent notes, trial intake summary |

**Rules:**
- Sex: Must be female unless trial specifies inclusion of males.
- Age: Must be ≥18, sometimes ≤70 (check protocol).
- Menopausal status: Required for hormone therapy trials; inferred if not documented.
- Reproductive status: Women of childbearing potential must use contraception and have negative pregnancy test.
- Caregiver consent: Only needed if trial specifies or patient lacks decisional capacity.

---

### 2. Clinical Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| ECOG Performance Status | Observation | LOINC 89243-0 | Oncologist notes, clinic flowsheets |
| Comorbidities | Condition | ICD-10, SNOMED | Problem list, discharge summaries |
| Cardiac Function (LVEF) | Observation, DiagnosticReport | LOINC 33878-0 | Echo/MUGA reports |
| Liver Function | Observation | LOINC 1742-6 (AST), 1920-8 (ALT), 1975-2 (bilirubin) | Lab summaries, scan follow-ups |
| Renal Function | Observation | LOINC 2160-0 (Creatinine), 62238-1 (eGFR) | Lab panels, nephrology notes |
| HIV/Hepatitis Status | Observation, Condition | LOINC 25835-0 (HIV), SNOMED for diagnoses | Infectious disease notes |

**Rules:**
- ECOG must be 0–1, sometimes 2 accepted.
- No significant uncontrolled comorbidities (e.g., Class III/IV heart failure).
- LVEF must be ≥50% (HER2 trials).
- Liver enzymes (AST/ALT) must be ≤2.5× ULN (≤5× ULN with liver mets).
- Creatinine clearance ≥50–60 mL/min.
- No uncontrolled infections (HIV with detectable viral load, active hepatitis).

---

### 3. Diagnosis Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| Breast Cancer Diagnosis | Condition | ICD-10 C50.*, SNOMED | Pathology report, problem list |
| Stage | Condition.stage or Observation | AJCC, TNM | Oncology summaries, imaging reports |

**Rules:**
- Must have histologically confirmed breast cancer.
- Stage must match trial focus (e.g., non-metastatic for adjuvant trials, Stage IV for metastatic trials).

---

### 4. Pathology/Biomarker Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| ER/PR/HER2 | Observation | LOINC 85337-4, 85339-0, 85340-8 | Pathology reports |
| BRCA Mutation | Observation, FamilyMemberHistory | LOINC 81247-9, SNOMED for mutation presence | Genetic reports, clinical notes |
| PIK3CA | Observation | Custom/local codes or sequencing panel IDs | Molecular reports, NGS panel PDFs |
| PD-L1 | Observation | LOINC 81288-3 | Pathology addenda |
| Oncotype DX / Recurrence Score | Observation | LOINC 77353-1 | External lab reports (PDF) |
| Node Status | Observation, Condition | SNOMED or TNM coding | Pathology report (synoptic) |

**Rules:**
- ER/PR ≥1% = hormone receptor positive; HER2 3+ or FISH+ = HER2 positive.
- Triple-negative = ER/PR <1%, HER2 0–1+ (or 2+ FISH−).
- Must match trial subtype (e.g., HER2+, HR+, TNBC).
- BRCA mutation required for PARP inhibitor trials.
- PIK3CA mutation required for PI3K inhibitor trials.
- Oncotype score used for risk stratification in some adjuvant trials.
- Nodal status (e.g., ≥4 positive nodes) used for eligibility in early-stage trials.

---

### 5. Treatment History Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| Chemotherapy Regimens | MedicationAdministration, Procedure | RxNorm | Oncologist notes, chemo flowsheets |
| Surgery | Procedure | SNOMED, CPT | Operative reports |
| Radiation | Procedure | SNOMED, CPT | Radiation oncology summaries |
| Treatment Lines | CarePlan (summary), Encounter sequence | N/A | Oncology treatment summaries |

**Rules:**
- Adjuvant trials: must have completed surgery ± chemo/radiation ≥4 weeks prior.
- Metastatic trials: specify allowed prior lines (e.g., 0 for 1st-line, 1 for 2nd-line).
- Must not have had prior exposure to study drug class (e.g., CDK4/6 inhibitors).
- No major surgery or radiation within past 2–3 weeks unless allowed.

---

### 6. Imaging Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| Brain Metastases | Condition, DiagnosticReport | SNOMED | Radiology reports (MRI) |
| Measurable Disease | Observation | N/A | Radiology reports, tumor measurement notes |
| Staging Scans | DiagnosticReport | CPT codes for imaging | Radiology summaries, oncology staging notes |
| LVEF (again) | Observation | LOINC 33878-0 | Echo reports |

**Rules:**
- Brain metastases: Allowed only if treated and stable ≥4 weeks, off steroids.
- Measurable disease per RECIST 1.1 required unless otherwise stated.
- Early-stage: must show no metastasis on baseline imaging.
- LVEF must meet threshold (≥50%) confirmed via imaging.

---

### 7. Laboratory Criteria
| Term | Structured (FHIR) | Coding System | Unstructured Sources |
|------|--------------------|----------------|-----------------------|
| Hematology Panel | Observation | LOINC (e.g., 26464-8 CBC panel) | Lab reports |
| Liver Panel | Observation | LOINC (e.g., 24323-8) | Lab reports |
| Renal Panel | Observation | LOINC (e.g., 2160-0 creatinine) | Lab reports |
| Glucose & Lipids | Observation | LOINC (e.g., 4548-4 glucose, 2093-3 cholesterol) | Lab summaries |
| Calcium | Observation | LOINC 17861-6 | Lab reports |
| Pregnancy Test | Observation | LOINC 19080-1 | Lab results, intake forms |
| Viral Load (Hep B/C) | Observation | LOINC 29610-5 (HBV), 20416-4 (HCV RNA) | ID clinic notes, lab PDF |

**Rules:**
- ANC ≥ 1500/µL, Platelets ≥ 100,000, Hb ≥ 9–10 g/dL.
- Liver enzymes and bilirubin within defined limits (e.g., ≤2.5× ULN unless liver mets).
- CrCl ≥ 50–60 mL/min.
- Pregnancy test must be negative at baseline.
- HbA1c < 8% for drugs affecting glucose (e.g., AKT inhibitors).
- Lipids within normal or treated if drug impacts lipids.
- Normal calcium for bone-affecting drugs.
- Viral load for Hep B/C must be undetectable if infection present.

---

### A Term-to-Representation Mapping Table
| Category | Term | FHIR Resource | Coding System |
|----------|------|----------------|----------------|
| Demographic | Sex | Patient.gender | N/A |
| Demographic | Age | Patient.birthDate | N/A |
| Demographic | Menopausal Status | Observation | LOINC 45820-6 |
| Clinical | ECOG Status | Observation | LOINC 89243-0 |
| Clinical | Cardiac Function (LVEF) | Observation | LOINC 33878-0 |
| Clinical | Liver Function (AST/ALT) | Observation | LOINC 1742-6, 1920-8 |
| Clinical | Renal Function | Observation | LOINC 2160-0, 62238-1 |
| Diagnosis | Breast Cancer Dx | Condition | ICD-10 C50.*, SNOMED |
| Diagnosis | Stage | Condition.stage | TNM |
| Biomarker | ER/PR/HER2 | Observation | LOINC 85337-4, 85339-0, 85340-8 |
| Biomarker | BRCA Mutation | Observation | LOINC 81247-9 |
| Biomarker | PD-L1 | Observation | LOINC 81288-3 |
| Treatment | Chemotherapy | MedicationAdministration | RxNorm |
| Treatment | Surgery | Procedure | SNOMED, CPT |
| Imaging | Brain Metastases | Condition | SNOMED |
| Imaging | Measurable Disease | Observation | N/A |
| Lab | CBC Panel | Observation | LOINC 26464-8 |
| Lab | Pregnancy Test | Observation | LOINC 19080-1 |

---

**Note**: FHIR mappings may vary slightly across institutions depending on implementation. Validation often involves both automated and manual review of EMR data and supporting documents.

