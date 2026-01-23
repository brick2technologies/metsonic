export type MetallographicProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export type MetallographicCategory = {
  categoryId: number;
  categoryName: string;
  products: MetallographicProduct[];
};

export const metallographicProducts: MetallographicCategory[] = [
  {
    categoryId: 1,
    categoryName: "Metallurgical Microscopes",
    products: [
      {
        id: 101,
        name: "Monocular Metallurgical Microscope",
        image: "/images/microscopes/monocular.jpg",
        description:
          "Basic metallurgical microscope suitable for routine microstructural examination using reflected light.",
        specifications: {
          viewingHead: "Monocular",
          magnification: "50x – 1000x",
          illumination: "Reflected LED",
          application: "Educational labs, basic inspection",
        },
      },
      {
        id: 102,
        name: "Binocular Metallurgical Microscope",
        image: "/images/microscopes/binocular.jpg",
        description:
          "Provides comfortable two-eye viewing for prolonged metallographic analysis.",
        specifications: {
          viewingHead: "Binocular",
          magnification: "50x – 1500x",
          illumination: "Reflected Halogen / LED",
          application: "Quality control laboratories",
        },
      },
      {
        id: 103,
        name: "Trinocular Metallurgical Microscope",
        image: "/images/microscopes/trinocular.jpg",
        description:
          "Allows simultaneous visual observation and digital image capture.",
        specifications: {
          viewingHead: "Trinocular",
          cameraPort: "Yes",
          magnification: "50x – 1500x",
          application: "Documentation and reporting",
        },
      },
      {
        id: 104,
        name: "Inverted Metallurgical Microscope",
        image: "/images/microscopes/inverted.jpg",
        description:
          "Designed for examination of large, heavy, or mounted samples without sectioning.",
        specifications: {
          stageType: "Fixed stage",
          magnification: "50x – 1000x",
          illumination: "Reflected light",
          application: "Industrial metallography",
        },
      },
      {
        id: 105,
        name: "Computer Image Capture System",
        image: "/images/microscopes/image-capture.jpg",
        description:
          "Integrated system with colour camera and software for image capture and analysis.",
        specifications: {
          camera: "Colour CMOS",
          output: "USB / HDMI",
          software: "Image analysis supported",
          application: "R&D and quality control",
        },
      },
      {
        id: 106,
        name: "Computer Imaging & Image Analyser System",
        image: "/images/microscopes/image-analyser.jpg",
        description:
          "Advanced metallographic system for quantitative microstructure analysis.",
        specifications: {
          analysis: "Grain size and phase analysis",
          software: "PC-based image analyser",
          camera: "High-resolution digital",
          application: "Research and failure analysis",
        },
      },
    ],
  },

  {
    categoryId: 2,
    categoryName: "Metallurgical Polishing Machines",
    products: [
      {
        id: 201,
        name: "Single Disc Polishing Machine",
        image: "/images/polishing/single-disc.jpg",
        description:
          "Compact polishing machine for basic metallographic sample preparation.",
        specifications: {
          disc: "Single",
          discDiameter: "200–250 mm",
          operation: "Manual",
        },
      },
      {
        id: 202,
        name: "Double Disc Polishing Machine",
        image: "/images/polishing/double-disc.jpg",
        description:
          "Dual-disc system for efficient and faster sample preparation.",
        specifications: {
          disc: "Double",
          discDiameter: "250–300 mm",
          operation: "Manual / Semi-automatic",
        },
      },
      {
        id: 203,
        name: "Single Disc Variable Speed Polishing Machine",
        image: "/images/polishing/triple-disc.jpg",
        description:
          "High-throughput polishing system for laboratories with heavy workload.",
        specifications: {
          disc: "Triple",
          speedControl: "Variable",
          operation: "Manual",
        },
      },
      {
        id: 204,
        name: "Double Disc Variable Speed Polishing Machine",
        image: "/images/polishing/triple-disc.jpg",
        description:
          "High-throughput polishing system for laboratories with heavy workload.",
        specifications: {
          disc: "Triple",
          speedControl: "Variable",
          operation: "Manual",
        },
      },
      {
        id: 205,
        name: "Automatic Computer Controlled Polishing Machine",
        image: "/images/polishing/automatic.jpg",
        description:
          "Fully automatic polishing system ensuring repeatable and consistent results.",
        specifications: {
          control: "Computer controlled",
          programs: "Programmable cycles",
          application: "Advanced laboratories",
        },
      },
    ],
  },

  {
    categoryId: 3,
    categoryName: "In-situ Metallography Kit",
    products: [
      {
        id: 301,
        name: "Portable In-situ Metallography Kit",
        image: "/images/in-situ/portable-kit.jpg",
        description:
          "Used for on-site metallographic examination without cutting samples.",
        specifications: {
          portability: "High",
          magnification: "Up to 500x",
          application: "Field metallography",
        },
      },
    ],
  },

  {
    categoryId: 4,
    categoryName: "Belt Grinding Machines",
    products: [
      {
        id: 401,
        name: "Dry Type Belt Grinder",
        image: "/images/belt-polisher/dry.jpg",
        description:
          "Dry belt polishing machine for rapid material removal.",
        specifications: {
          type: "Dry",
          beltSize: "Standard abrasive belts",
          application: "Pre-grinding",
        },
      },
      {
        id: 402,
        name: "Wet & Dry Belt Grinder",
        image: "/images/belt-polisher/wet-dry.jpg",
        description:
          "Versatile belt polisher supporting both wet and dry operations.",
        specifications: {
          type: "Wet & Dry",
          cooling: "Water cooling supported",
          application: "Surface preparation",
        },
      },
    ],
  },

  {
    categoryId: 5,
    categoryName: "Specimen Mounting Press",
    products: [
      {
        id: 501,
        name: "Mechanical Mounting Press",
        image: "/images/mounting/mechanical.jpg",
        description:
          "Manual mounting press for routine metallographic specimen mounting.",
        specifications: {
          operation: "Mechanical",
          mountingType: "Hot mounting",
          application: "Basic laboratories",
        },
      },
      {
        id: 502,
        name: "Hydraulic Mounting Press",
        image: "/images/mounting/hydraulic.jpg",
        description:
          "Hydraulically operated press for consistent mounting quality.",
        specifications: {
          operation: "Hydraulic",
          pressureControl: "Automatic",
          application: "Production laboratories",
        },
      },
      {
        id: 503,
        name: "Pneumatic Automatic Mounting Press",
        image: "/images/mounting/pneumatic.jpg",
        description:
          "Fully automatic pneumatic press for high-volume laboratories.",
        specifications: {
          operation: "Pneumatic automatic",
          control: "Programmable",
          application: "Advanced laboratories",
        },
      },
    ],
  },

  {
    categoryId: 6,
    categoryName: "Cut-off Machines",
    products: [
      {
        id: 601,
        name: "Abrasive Wheel Cut-off Machine",
        image: "/images/cutoff/abrasive.jpg",
        description:
          "Used for sectioning hard metallic samples using abrasive wheels.",
        specifications: {
          cuttingType: "Abrasive wheel",
          cooling: "Wet cutting",
          application: "Routine cutting",
        },
      },
      {
        id: 602,
        name: "Diamond Wheel Cut-off Machine",
        image: "/images/cutoff/diamond.jpg",
        description:
          "Precision cutting machine for delicate and hard materials.",
        specifications: {
          cuttingType: "Diamond wheel",
          precision: "High",
          application: "Precision sectioning",
        },
      },
      {
        id: 603,
        name: "Thin Sectioning Cut-off Machine",
        image: "/images/cutoff/thin-section.jpg",
        description:
          "Specialized machine for ultra-thin metallographic sectioning.",
        specifications: {
          cuttingType: "Thin sectioning",
          thickness: "Micron-level",
          application: "Research & analysis",
        },
      },
    ],
  },

  {
    categoryId: 7,
    categoryName: "Electrolytic Polishing-cum-Etching Machines",
    products: [
      {
        id: 701,
        name: "Electrolytic Polishing-cum-Etching Machine",
        image: "/images/electrolytic/polishing-etching.jpg",
        description:
          "Used to reveal true microstructure through electrolytic polishing and etching.",
        specifications: {
          process: "Electrolytic polishing and etching",
          control: "Voltage & current controlled",
          application: "Stainless steel, super alloys",
        },
      },
    ],
  },
];
