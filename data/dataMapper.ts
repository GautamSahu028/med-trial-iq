// Data mapping utility to transform JSON data to dashboard format
export interface RawNeurologyData {
  term: string;
  cancerType: string; // This actually contains the disorder name in neurology data
  category: string;
  trialPercentage: string;
  inclusionExclusion: string;
  fhirResource: string;
  standardCode: string;
  unstructured: string;
}

export interface RawOncologyData {
  term: string;
  cancerType: string;
  category: string;
  trialPercentage: string;
  inclusionExclusion: string;
  fhirResource: string;
  standardCode: string;
  unstructured: string;
}

export interface EligibilityTerm {
  term: string;
  disorder?: string;
  cancerType?: string;
  category: string;
  trialPercentage: string;
  inclusionExclusion: "Inclusion" | "Exclusion";
  fhirResource: string;
  standardCode: string;
  unstructured: string;
}

// Transform neurology data
export const transformNeurologyData = (
  rawData: RawNeurologyData[]
): EligibilityTerm[] => {
  return rawData.map((item) => ({
    term: item.term,
    disorder: item.cancerType, // In neurology data, cancerType field contains disorder name
    category: item.category,
    trialPercentage: item.trialPercentage,
    inclusionExclusion: item.inclusionExclusion as "Inclusion" | "Exclusion",
    fhirResource: item.fhirResource,
    standardCode: item.standardCode,
    unstructured: item.unstructured,
  }));
};

// Transform oncology data
export const transformOncologyData = (
  rawData: RawOncologyData[]
): EligibilityTerm[] => {
  return rawData.map((item) => ({
    term: item.term,
    cancerType: item.cancerType,
    category: item.category,
    trialPercentage: item.trialPercentage,
    inclusionExclusion: item.inclusionExclusion as "Inclusion" | "Exclusion",
    fhirResource: item.fhirResource,
    standardCode: item.standardCode,
    unstructured: item.unstructured,
  }));
};

// Trial mappings for each condition (based on common clinical trials)
export const trialMappings = {
  neurology: {
    "Alzheimer's Disease": [
      "CLARITY-AD",
      "EMERGE",
      "ENGAGE",
      "EXPEDITION3",
      "GRADUATE I",
      "GRADUATE II",
      "TRAILBLAZER-ALZ",
      "AMARANTH",
      "TAURIEL",
      "DIAN-TU",
      "A4 Study",
      "TOMMORROW",
    ],
    "Parkinson's Disease": [
      "SPARK",
      "STEADY-PD III",
      "SURE-PD3",
      "PROUD",
      "PASADENA",
      "BIIB054-201",
      "PRASINEZUMAB",
      "CINPANEMAB",
    ],
    Epilepsy: [
      "ELEVATE",
      "NAUTILUS",
      "YKP3089-E01",
      "REALIZE",
      "EPIMAG",
      "FREEDOM",
      "RESTORE-1",
    ],
    "Multiple Sclerosis": [
      "ASCLEPIOS I",
      "ASCLEPIOS II",
      "DECIDE",
      "OPERA I",
      "OPERA II",
      "LIBERTY",
      "OLYMPUS",
      "ORATORIO",
      "CLARITY",
      "ADVANCE",
    ],
    ALS: [
      "CENTAUR",
      "PHOENIX",
      "HEALEY ALS",
      "VALOR",
      "FORTITUDE-ALS",
      "LIGHTHOUSE",
      "ATLAS",
      "COURAGE-ALS",
    ],
    "Huntington's Disease": [
      "GENERATION HD1",
      "PRECISION-HD1",
      "PRECISION-HD2",
      "SIGNAL",
      "PROOF-HD",
      "VIBRANT-HD",
      "KINECT-HD",
      "LEGATO-HD",
      "MITIGATE-HD",
    ],
  },
  oncology: {
    Lung: [
      "KEYNOTE-189",
      "KEYNOTE-407",
      "IMpower150",
      "ADAURA",
      "FLAURA",
      "ALEX",
      "ALINA",
      "CROWN",
      "MARIPOSA",
      "KEYNOTE-042",
      "CheckMate 9LA",
      "IMpower130",
      "KEYNOTE-024",
      "TROPION-Lung01",
      "DESTINY-Lung02",
    ],
    Breast: [
      "KATHERINE",
      "APHINITY",
      "CLEOPATRA",
      "EMILIA",
      "DESTINY-Breast01",
      "MONARCH 2",
      "MONARCH 3",
      "PALOMA-2",
      "PALOMA-3",
      "KEYNOTE-355",
      "IMpassion130",
      "DESTINY-Breast03",
      "TROPiCS-02",
    ],
    Blood: [
      "ZUMA-1",
      "JULIET",
      "SCHOLAR-1",
      "TRANSCEND",
      "CARTITUDE-1",
      "KarMMa",
      "LEGEND-2",
      "CARTITUDE-2",
      "ZUMA-2",
      "ELARA",
      "CARTITUDE-4",
      "MajesTEC-1",
    ],
    Skin: [
      "KEYNOTE-006",
      "CheckMate 067",
      "COMBI-d",
      "COMBI-v",
      "COLUMBUS",
      "BEACON",
      "RELATIVITY-047",
      "DREAMseq",
      "KEYNOTE-716",
      "CheckMate 238",
      "IMspire150",
      "KEYNOTE-054",
    ],
    "Lung Cancer": [
      "KEYNOTE-189",
      "KEYNOTE-407",
      "IMpower150",
      "ADAURA",
      "FLAURA",
      "ALEX",
      "ALINA",
      "CROWN",
      "MARIPOSA",
      "KEYNOTE-042",
      "CheckMate 9LA",
    ],
    "Breast Cancer": [
      "KATHERINE",
      "APHINITY",
      "CLEOPATRA",
      "EMILIA",
      "DESTINY-Breast01",
      "MONARCH 2",
      "MONARCH 3",
      "PALOMA-2",
      "PALOMA-3",
      "KEYNOTE-355",
    ],
    "Blood Cancer": [
      "ZUMA-1",
      "JULIET",
      "SCHOLAR-1",
      "TRANSCEND",
      "CARTITUDE-1",
      "KarMMa",
      "LEGEND-2",
      "CARTITUDE-2",
      "ZUMA-2",
      "ELARA",
    ],
    "Skin Cancer": [
      "KEYNOTE-006",
      "CheckMate 067",
      "COMBI-d",
      "COMBI-v",
      "COLUMBUS",
      "BEACON",
      "RELATIVITY-047",
      "DREAMseq",
      "KEYNOTE-716",
      "CheckMate 238",
    ],
  },
};
