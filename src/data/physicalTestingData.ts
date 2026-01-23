export type PhysicalTestProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export type PhysicalTestCategory = {
  categoryId: number;
  categoryName: string;
  products: PhysicalTestProduct[];
};

export const physicalTestingProducts: PhysicalTestCategory[] = [
  {
    categoryId: 1,
    categoryName: "Universal Testing Machines",
    products: [
      
      {
        id: 8001,
        name: "Computerized Universal Testing Machine",
        image: "/images/physical/utm-computer.jpg",
        description:
          "Computer-controlled UTM with electronic extensometer for precise measurements.",
        specifications: {
          Control: "Computer controlled",
          Extensometer: "Electronic",
          Application: "Advanced material testing",
        },
      },
      {
        id: 8002,
        name: "Electronic Extensometer",
        image: "/images/physical/utm-computer.jpg",
        description:
          "Computer-controlled UTM with electronic extensometer for precise measurements.",
        specifications: {
          Control: "Computer controlled",
          Extensometer: "Electronic",
          Application: "Advanced material testing",
        },
      },
      {
        id: 8003,
        name: "Accessories for UTM",
        image: "/images/physical/utm-computer.jpg",
        description:
          "Computer-controlled UTM with electronic extensometer for precise measurements.",
        specifications: {
          Control: "Computer controlled",
          Extensometer: "Electronic",
          Application: "Advanced material testing",
        },
      },
    ],
  },

  {
    categoryId: 2,
    categoryName: "Impact Testing Machine(Izod & Charpy)",
    products: [
      
      {
        id: 8102,
        name: "Manual Impact Testing Machine",
        image: "/images/physical/izod.jpg",
        description:
          "Used to determine impact strength of metallic and non-metallic materials.",
        specifications: {
          TestType: "Izod",
          Capacity: "Up to 300 Joules",
          Application: "Impact testing",
        },
      },
      {
        id: 8103,
        name: "Digital Impact Testing Machine",
        image: "/images/physical/izod.jpg",
        description:
          "Used to determine impact strength of metallic and non-metallic materials.",
        specifications: {
          TestType: "Izod",
          Capacity: "Up to 300 Joules",
          Application: "Impact testing",
        },
      },
      {
        id: 8104,
        name: "Digital Motorized Impact Testing Machine",
        image: "/images/physical/izod.jpg",
        description:
          "Used to determine impact strength of metallic and non-metallic materials.",
        specifications: {
          TestType: "Izod",
          Capacity: "Up to 300 Joules",
          Application: "Impact testing",
        },
      },
    ],
  },

  {
    categoryId: 3,
    categoryName: " Hardness Testers",
    products: [
      {
        id: 8201,
        name: "Brinell Hardness Tester",
        image: "/images/physical/brinell.jpg",
        description:
          "Used for hardness testing of soft to medium-hard materials.",
        specifications: {
          Method: "Brinell",
          LoadRange: "500–3000 kgf",
          Application: "Metals & alloys",
        },
      },
      {
        id: 8202,
        name: "Rockwell Hardness Tester",
        image: "/images/physical/rockwell.jpg",
        description:
          "Quick and direct hardness testing for production environments.",
        specifications: {
          Method: "Rockwell",
          Scales: "HRA, HRB, HRC",
          Application: "Production testing",
        },
      },
      {
        id: 8203,
        name: "Vickers Hardness Tester",
        image: "/images/physical/vickers.jpg",
        description:
          "Precision hardness testing for thin materials and coatings.",
        specifications: {
          Method: "Vickers",
          LoadRange: "1–100 kgf",
          Application: "Research & QA",
        },
      },
      {
        id: 8204,
        name: "Micro Vickers Hardness Tester",
        image: "/images/physical/micro.jpg",
        description:
          "Used for micro-level hardness measurement of small components.",
        specifications: {
          Method: "Micro Vickers / Knoop",
          Load: "10g – 1kg",
          Application: "Microstructure analysis",
        },
      },
    ],
  },

  {
    categoryId: 4,
    categoryName: "Portable Hardness Testers",
    products: [
      {
        id: 8301,
        name: "Poldi Hardness Tester",
        image: "/images/physical/poldi.jpg",
        description:
          "Portable tester for on-site hardness measurement.",
        specifications: {
          Type: "Poldi",
          Portability: "High",
          Application: "Field testing",
        },
      },
      {
        id: 8302,
        name: "Dynamic Portable Hardness Tester",
        image: "/images/physical/dynamic-hardness.jpg",
        description:
          "Digital dynamic hardness tester for rapid on-site inspection.",
        specifications: {
          Method: "Dynamic",
          Display: "Digital",
          Application: "Industrial inspection",
        },
      },
      {
        id: 8303,
        name: "UCI High Precision Portable Hardness Tester",
        image: "/images/physical/dynamic-hardness.jpg",
        description:
          "Digital dynamic hardness tester for rapid on-site inspection.",
        specifications: {
          Method: "Dynamic",
          Display: "Digital",
          Application: "Industrial inspection",
        },
      },
    ],
  },

  {
    categoryId: 5,
    categoryName: "Rubber & Plastic Hardness Testers",
    products: [
      {
        id: 8401,
        name: "Shore A Durometer",
        image: "/images/physical/shore-a.jpg",
        description:
          "Used for hardness testing of soft rubber materials.",
        specifications: {
          Scale: "Shore A",
          Application: "Rubber testing",
        },
      },
      {
        id: 8402,
        name: "Shore D Durometer",
        image: "/images/physical/shore-d.jpg",
        description:
          "Used for testing harder plastics and polymers.",
        specifications: {
          Scale: "Shore D",
          Application: "Plastic testing",
        },
      },
      {
        id: 8403,
        name: "Foam Durometer",
        image: "/images/physical/foam.jpg",
        description:
          "Specialized hardness tester for foam and sponge materials.",
        specifications: {
          Material: "Foam & sponge",
          Application: "Foam testing",
        },
      },
    ],
  },

  {
    categoryId: 6,
    categoryName: "Spring Testing Machines",
    products: [
      {
        id: 8501,
        name: "Spring Testing Machine",
        image: "/images/physical/spring-testing.jpg",
        description:
          "Used for load and deflection testing of springs.",
        specifications: {
          TestType: "Compression & tension",
          Control: "Manual / Digital",
          Application: "Spring testing",
        },
      },
    ],
  },

  {
    categoryId: 7,
    categoryName: "Fatigue Testing Machines",
    products: [
      {
        id: 8601,
        name: "Fatigue Testing Machine",
        image: "/images/physical/fatigue.jpg",
        description:
          "Used to test fatigue life of materials under cyclic loading.",
        specifications: {
          Loading: "Cyclic",
          Control: "Computer controlled",
          Application: "Fatigue analysis",
        },
      },
    ],
  },

  {
    categoryId: 8,
    categoryName: "Compression Testing Machines",
    products: [
      {
        id: 8701,
        name: "Compression Testing Machine",
        image: "/images/physical/compression.jpg",
        description:
          "Used for compressive strength testing of materials.",
        specifications: {
          Capacity: "Up to 3000 kN",
          Control: "Hydraulic",
          Application: "Compression testing",
        },
      },
    ],
  },

  {
    categoryId: 9,
    categoryName: "Dynamic Balancing Machines",
    products: [
      {
        id: 8801,
        name: "Dynamic Balancing Machine",
        image: "/images/physical/balancing.jpg",
        description:
          "Used to balance rotating components for vibration reduction.",
        specifications: {
          Operation: "Dynamic",
          Application: "Rotating components",
          Industries: "Automotive, Aerospace",
        },
      },
    ],
  },
];
