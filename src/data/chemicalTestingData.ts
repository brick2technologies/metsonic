export type ChemicalTestProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export type ChemicalTestCategory = {
  categoryId: number;
  categoryName: string;
  products: ChemicalTestProduct[];
};

export const chemicalTestingProducts: ChemicalTestCategory[] = [
  {
    categoryId: 1,
    categoryName: "Spectrometers & PMI Systems",
    products: [
      {
        id: 9001,
        name: "Optical Emission Spectrometer (Lab Model)",
        image: "/images/chemical/oes-lab.jpg",
        description:
          "Laboratory-based optical emission spectrometer used for precise elemental analysis of metals and alloys.",
        specifications: {
          Type: "Lab model",
          Analysis: "Multi-element",
          Application: "Metallurgical & chemical analysis",
        },
      },
      {
        id: 9002,
        name: "Portable XRF PMI Analyzer",
        image: "/images/chemical/xrf-portable.jpg",
        description:
          "Portable XRF system for positive material identification and alloy verification.",
        specifications: {
          Type: "Portable XRF",
          PMI: "Positive Material Identification",
          Application: "On-site alloy verification",
        },
      },
    ],
  },

  {
    categoryId: 2,
    categoryName: "Carbon & Sulphur Analysis Equipment",
    products: [
      {
        id: 9101,
        name: "Carbon & Sulphur Analyzer",
        image: "/images/chemical/carbon-sulphur.jpg",
        description:
          "Used for rapid and accurate determination of carbon and sulphur content in metals.",
        specifications: {
          Method: "Combustion",
          Elements: "Carbon & Sulphur",
          Application: "Steel & alloy analysis",
        },
      },
    ],
  },

  {
    categoryId: 3,
    categoryName: "Furnaces",
    products: [
      {
        id: 9201,
        name: "Laboratory Muffle Furnace",
        image: "/images/chemical/muffle-furnace.jpg",
        description:
          "High-temperature furnace used for ashing, heat treatment, and material testing.",
        specifications: {
          TemperatureRange: "Up to 1200°C",
          Chamber: "Ceramic insulated",
          Application: "Heat treatment & ashing",
        },
      },
      {
        id: 9202,
        name: "Induction Furnace",
        image: "/images/chemical/muffle-furnace.jpg",
        description:
          "High-temperature furnace used for ashing, heat treatment, and material testing.",
        specifications: {
          TemperatureRange: "Up to 1200°C",
          Chamber: "Ceramic insulated",
          Application: "Heat treatment & ashing",
        },
      },
      {
        id: 9203,
        name: "Tilting Furnace",
        image: "/images/chemical/muffle-furnace.jpg",
        description:
          "High-temperature furnace used for ashing, heat treatment, and material testing.",
        specifications: {
          TemperatureRange: "Up to 1200°C",
          Chamber: "Ceramic insulated",
          Application: "Heat treatment & ashing",
        },
      },
    ],
  },

  {
    categoryId: 4,
    categoryName: "Hot Plates",
    products: [
      {
        id: 9301,
        name: "Laboratory Hot Plate",
        image: "/images/chemical/hot-plate.jpg",
        description:
          "Electric hot plate used for heating chemical samples and solutions.",
        specifications: {
          HeatingType: "Electric",
          Surface: "Chemical resistant",
          Application: "Laboratory heating",
        },
      },
    ],
  },

  {
    categoryId: 5,
    categoryName: "Electric Ovens",
    products: [
      {
        id: 9401,
        name: "Laboratory Electric Oven",
        image: "/images/chemical/electric-oven.jpg",
        description:
          "Used for drying, curing, and thermal testing of laboratory samples.",
        specifications: {
          TemperatureRange: "Ambient to 300°C",
          Control: "Digital temperature controller",
          Application: "Drying & heat treatment",
        },
      },
    ],
  },

  {
    categoryId: 6,
    categoryName: "Water Stills",
    products: [
      {
        id: 9501,
        name: "Laboratory Water Still",
        image: "/images/chemical/water-still.jpg",
        description:
          "Produces distilled water for laboratory and analytical use.",
        specifications: {
          Output: "Distilled water",
          Capacity: "Laboratory grade",
          Application: "Chemical & analytical labs",
        },
      },
    ],
  },

  {
    categoryId: 7,
    categoryName: "Fume Chambers",
    products: [
      {
        id: 9601,
        name: "Laboratory Fume Chamber",
        image: "/images/chemical/fume-chamber.jpg",
        description:
          "Ventilated enclosure used for safe handling of hazardous chemicals.",
        specifications: {
          Ventilation: "Exhaust system",
          Safety: "Chemical fumes control",
          Application: "Chemical laboratories",
        },
      },
    ],
  },

  {
    categoryId: 8,
    categoryName: "High Accuracy Weighing Balances",
    products: [
      {
        id: 9701,
        name: "Digital Precision Weighing Balance",
        image: "/images/chemical/digital-balance.jpg",
        description:
          "High-precision digital balance for accurate weight measurement.",
        specifications: {
          Accuracy: "High precision",
          Display: "Digital",
          Application: "Chemical analysis",
        },
      },
      {
        id: 9702,
        name: "Single Pan Analytical Balance",
        image: "/images/chemical/analytical-balance.jpg",
        description:
          "Analytical balance designed for ultra-precise laboratory weighing.",
        specifications: {
          Type: "Single pan analytical",
          Readability: "0.1 mg",
          Application: "Analytical laboratories",
        },
      },
    ],
  },
];
