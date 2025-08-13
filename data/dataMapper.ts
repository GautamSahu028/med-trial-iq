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
      "EMERGE",
      "ENGAGE",
      "CLARITY-AD",
      "TRAILBLAZER-ALZ",
      "GRADUATE I",
      "GRADUATE II",
      "DIAN-TU",
      "AHEAD 3-45",
      "ADCS-ADL",
      "APOLLOE4",
      "BAN2401-G000-301",
    ],
    "Parkinson's Disease": [
      "SPARK",
      "PASADENA",
      "PD-STAT",
      "STEADY-PD III",
      "EXenatide-PD Trial",
      "SURE-PD3",
      "NI-PARK",
      "VY-AADC02",
      "LEAP",
      "PROSPECT",
    ],
    Epilepsy: [
      "SANTÉ",
      "FREEDOM ",
      "SKYLINE ",
      "VNS Therapy",
      "EP0062 ",
      "FAME",
      "Zogenix",
      "EPISTOP",
      "FIREFISH ",
    ],
    "Multiple Sclerosis": [
      "OPERA I",
      "OPERA II",
      "ORATORIO",
      "ASCLEPIOS I",
      "ASCLEPIOS II",
      "TERIKID",
      "ADVANCE",
      "CLARITY",
      "CARE-MS I",
      "CARE-MS II",
      "MAVENCLAD EXT",
      "EXPAND",
      "TOPAZ",
    ],
    ALS: [
      "CENTAUR",
      "VALOR",
      "RESCUE-ALS",
      "PHOENIX",
      "MIROCALS",
      "ATLAS",
      "HEALEY ALS",
      "ALS Biomarker",
      "BHV-4157",
      "TUDCA-ALS",
    ],
    "Huntington's Disease": [
      "GENERATION HD1",
      "GENERATION HD2",
      "PIVOT-HD",
      "VIBRANT-HD",
      "HD Natural History",
      "SHIELD HD",
      "HD-CAB",
      "PRECISION HD1",
      "PRECISION HD1",
      "AMARYLLIS ",
    ],
  },
  oncology: {
    Lung: [
      "CheckMate-227",
      "CheckMate-078",
      "KEYNOTE-042",
      "KEYNOTE-407",
      "IMpower150",
      "IMpower010",
      "ALEX",
      "FLAURA",
      "ARCHER1050",
      "CASPIAN",
    ],
    Breast: [
      "TAILORx",
      "KEYNOTE-355",
      "CLEOPATRA",
      "EMBRACA",
      "APHINITY",
      "KATHERINE",
      "IMpassion130",
      "OLYMPIA",
      "SOFT",
      "TEXT",
      "NeoSphere",
    ],
    Blood: [
      "ZUMA-1",
      "MURANO",
      "DREAMM-2",
      "CASSIOPEIA",
      "E1910 (ECOG)",
      "GALLIUM",
      "AETHERA",
      "ALCYONE",
      "BELLINI",
    ],
    Skin: [
      "CheckMate-067",
      "KEYNOTE-006",
      "COMBI-d",
      "CheckMate 238",
      "IMspire150",
      "KEYNOTE-054",
      "CheckMate 069",
      "COLUMBUS",
      "BRIM-3",
    ],
    "Lung Cancer": [
      "CheckMate-227",
      "CheckMate-078",
      "KEYNOTE-042",
      "KEYNOTE-407",
      "IMpower150",
      "IMpower010",
      "ALEX",
      "FLAURA",
      "CASPIAN",
    ],
    "Breast Cancer": [
      "TAILORx",
      "KEYNOTE-355",
      "CLEOPATRA",
      "EMBRACA",
      "APHINITY",
      "KATHERINE",
      "IMpassion130",
      "OLYMPIA",
      "SOFT",
      "TEXT",
      "NeoSphere",
    ],
    "Blood Cancer": [
      "ZUMA-1",
      "MURANO",
      "DREAMM-2",
      "CASSIOPEIA",
      "E1910 (ECOG)",
      "GALLIUM",
      "AETHERA",
      "ALCYONE",
      "BELLINI",
    ],
    "Skin Cancer": [
      "CheckMate-067",
      "KEYNOTE-006",
      "COMBI-d",
      "CheckMate 238",
      "IMspire150",
      "KEYNOTE-054",
      "CheckMate 069",
      "COLUMBUS",
      "BRIM-3",
    ],
  },
};
