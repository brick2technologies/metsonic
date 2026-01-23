export type FoundryProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export type FoundryCategory = {
  categoryId: number;
  categoryName: string;
  products: FoundryProduct[];
};

export const foundryProducts: FoundryCategory[] = [
  {
    categoryId: 1,
    categoryName: "Moulding & Sand Preparation Machines",
    products: [
      {
        id: 10001,
        name: "Moulding Machine",
        image: "/images/foundry/moulding-machine.jpg",
        description:
          "Used for compacting sand around patterns to form moulds for metal casting.",
        specifications: {
          Operation: "Manual / Pneumatic",
          Application: "Green sand moulding",
        },
      },
      {
        id: 10002,
        name: "Sand Muller",
        image: "/images/foundry/sand-muller.jpg",
        description:
          "Used to uniformly mix foundry sand with binders and additives.",
        specifications: {
          MixingType: "Batch mixing",
          Application: "Sand preparation",
        },
      },
      {
        id: 10003,
        name: "Intensive Sand Mixer",
        image: "/images/foundry/intensive-mixer.jpg",
        description:
          "High-efficiency mixer for consistent sand quality.",
        specifications: {
          Mixing: "Intensive",
          Application: "Shell & green sand",
        },
      },
      {
        id: 10004,
        name: "Sand Siever",
        image: "/images/foundry/sand-siever.jpg",
        description:
          "Used for sieving sand to remove lumps and foreign particles.",
        specifications: {
          Operation: "Vibratory",
          Application: "Sand cleaning",
        },
      },
    ],
  },

  {
    categoryId: 2,
    categoryName: "Core & Auxiliary Foundry Equipment",
    products: [
      {
        id: 10101,
        name: "Centrifugal Liner Set",
        image: "/images/foundry/centrifugal-liner.jpg",
        description:
          "Used in centrifugal casting for liner manufacturing.",
        specifications: {
          CastingType: "Centrifugal",
          Application: "Pipe & liner casting",
        },
      },
      {
        id: 10102,
        name: "Electrical Core Oven",
        image: "/images/foundry/core-oven.jpg",
        description:
          "Used for baking sand cores to achieve required strength.",
        specifications: {
          Heating: "Electric",
          Application: "Core hardening",
        },
      },
      {
        id: 10103,
        name: "Sand Blasting Machine",
        image: "/images/foundry/sand-blasting.jpg",
        description:
          "Used for cleaning castings by abrasive blasting.",
        specifications: {
          BlastingType: "Abrasive",
          Application: "Casting surface cleaning",
        },
      },
      {
        id: 10104,
        name: "Cupola Charger",
        image: "/images/foundry/cupola-charger.jpg",
        description:
          "Mechanized system for charging cupola furnaces.",
        specifications: {
          Operation: "Mechanical",
          Application: "Cupola furnace charging",
        },
      },
    ],
  },

  {
    categoryId: 3,
    categoryName: "Finishing & Material Handling Equipment",
    products: [
      {
        id: 10201,
        name: "Snagging Grinder",
        image: "/images/foundry/snagging-grinder.jpg",
        description:
          "Used for removing excess metal from castings.",
        specifications: {
          Grinding: "Heavy duty",
          Application: "Casting finishing",
        },
      },
      {
        id: 10202,
        name: "Swing Frame Grinder",
        image: "/images/foundry/swing-frame-grinder.jpg",
        description:
          "Used for large and heavy casting grinding operations.",
        specifications: {
          Frame: "Swing type",
          Application: "Heavy castings",
        },
      },
      {
        id: 10203,
        name: "Tumbling Barrel",
        image: "/images/foundry/tumbling-barrel.jpg",
        description:
          "Used for deburring and surface finishing of castings.",
        specifications: {
          Operation: "Rotary tumbling",
          Application: "Surface finishing",
        },
      },
      {
        id: 10204,
        name: "Sand Aerator",
        image: "/images/foundry/sand-aerator.jpg",
        description:
          "Used to loosen and aerate foundry sand.",
        specifications: {
          Function: "Aeration",
          Application: "Sand conditioning",
        },
      },
    ],
  },

  {
    categoryId: 4,
    categoryName: "Complete Foundry Systems",
    products: [
      {
        id: 10301,
        name: "Green Sand Foundry Equipment Package",
        image: "/images/foundry/green-sand-foundry.jpg",
        description:
          "Complete foundry setup for green sand moulding operations.",
        specifications: {
          SandType: "Green sand",
          Scope: "Complete foundry line",
        },
      },
      {
        id: 10302,
        name: "Shell Sand Foundry Equipment Package",
        image: "/images/foundry/shell-sand-foundry.jpg",
        description:
          "Complete foundry solution for shell moulding process.",
        specifications: {
          SandType: "Shell sand",
          Scope: "Complete foundry line",
        },
      },
    ],
  },

  {
    categoryId: 5,
    categoryName: "Foundry Sand Testing Equipment",
    products: [
      {
        id: 10401,
        name: "Foundry Sand Testing Equipment Set",
        image: "/images/foundry/sand-testing.jpg",
        description:
          "Complete range of instruments for testing foundry sand properties.",
        specifications: {
          Tests: "Moisture, permeability, strength",
          Application: "Quality control",
        },
      },
    ],
  },
];
