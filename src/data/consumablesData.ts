export type ConsumableProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export const consumablesProducts: ConsumableProduct[] = [
  {
    id: 12001,
    name: "Lavigated Polishing Alumina",
    image: "/images/consumables/alumina.jpg",
    description:
      "High-purity lavigated alumina used for fine and final polishing of metallographic specimens.",
    specifications: {
      Grades:
        "Grade-I, Grade-II, Grade-III (Water Suspension), Grade-A, Grade-B, Grade-C (Powder)",
      Application: "Metallographic polishing",
      Form: "Powder & suspension",
    },
  },

  {
    id: 12002,
    name: "Diamond Lapping Compound",
    image: "/images/consumables/diamond-lapping.jpg",
    description:
      "High-performance diamond lapping compound suitable for precision polishing and lapping.",
    specifications: {
      MicronSizes: "All micron sizes available",
      Base: "Oil / Water soluble",
      Application: "Precision lapping & polishing",
    },
  },

  {
    id: 12003,
    name: "Polishing Cloths",
    image: "/images/consumables/polishing-cloths.jpg",
    description:
      "Wide range of polishing cloths for different polishing stages and materials.",
    specifications: {
      Types:
        "Selvyt, Duro, Velvet, Nylon, Micro",
      Origin: "Indigenous & Imported",
      Application: "Metallographic polishing",
    },
  },

  {
    id: 12004,
    name: "Polishing Papers",
    image: "/images/consumables/polishing-papers.jpg",
    description:
      "High-quality polishing papers for surface preparation and grinding.",
    specifications: {
      IndianGrits: "1/0, 2/0, 3/0, 4/0",
      ImportedGrits:
        "240, 500, 1000, 1500, 2000, 3000, 4000",
      Application: "Surface preparation",
    },
  },

  {
    id: 12005,
    name: "Silicon Carbide Waterproof Papers & Emery Belts",
    image: "/images/consumables/sic-papers.jpg",
    description:
      "Durable silicon carbide waterproof papers and emery cloth belts for grinding operations.",
    specifications: {
      Grits: "All grit sizes",
      Material: "Silicon carbide",
      Application: "Grinding & polishing",
    },
  },

  {
    id: 12006,
    name: "Standard Test Blocks & Indenters",
    image: "/images/consumables/test-blocks.jpg",
    description:
      "Standard hardness test blocks and indenters for calibration and testing.",
    specifications: {
      Includes:
        "Standard test blocks, Diamond indenters, Ball indenters, Poldi test bars",
      Application: "Hardness testing calibration",
    },
  },

  {
    id: 12007,
    name: "Magnetic Powders, Pastes & Inks",
    image: "/images/consumables/magnetic-powders.jpg",
    description:
      "Consumables used for magnetic particle testing in visual and fluorescent inspections.",
    specifications: {
      Types: "Magnetic powders, Pastes, Inks",
      Application: "MPI – Visual & Fluorescent",
    },
  },

  {
    id: 12008,
    name: "Ultrasonic Probes, Cables & Test Blocks",
    image: "/images/consumables/ultrasonic-accessories.jpg",
    description:
      "Accessories and consumables for ultrasonic testing equipment.",
    specifications: {
      Includes: "Ultrasonic probes, Cables, Test blocks",
      Application: "Ultrasonic testing",
    },
  },

  {
    id: 12009,
    name: "Industrial Sprays & Chemicals",
    image: "/images/consumables/industrial-sprays.jpg",
    description:
      "Industrial-use sprays and chemicals for foundry and fabrication applications.",
    specifications: {
      Products:
        "Anti-spatter spray & gel, Silicon mould release spray, Rust remover",
      Application: "Welding & moulding operations",
    },
  },
];
