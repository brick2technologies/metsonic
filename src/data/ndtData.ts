export type NDTProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export type NDTCategory = {
  categoryId: number;
  categoryName: string;
  products: NDTProduct[];
};

export const ndtProducts: NDTCategory[] = [
  {
    categoryId: 1,
    categoryName: "Ultrasonic Flaw Detectors",
    products: [
      {
        id: 101,
        name: "Dolphitech Dolphcam2",
        image: "/dolphitech/dolphicam2.jpg",
        description:
          "Compact ultrasonic flaw detector used for detecting internal defects in welds and materials.",
        specifications: {
          Type: "Portable",
          Display: "Digital A-scan",
          Application: "Weld inspection, forgings",
        },
      },
      {
        id: 1001,
        name: "Portable Ultrasonic Flaw Detector",
        image: "/ndt/flaw-detector/portable.jpeg",
        description:
          "Compact ultrasonic flaw detector used for detecting internal defects in welds and materials.",
        specifications: {
          Type: "Portable",
          Display: "Digital A-scan",
          Application: "Weld inspection, forgings",
        },
      },
      {
        id: 1002,
        name: "Palm Top Ultrasonic Flaw Detector (Recordable)",
        image: "/ndt/flaw-detector/palm.jpeg",
        description:
          "Hand-held palm top flaw detector with data recording capability.",
        specifications: {
          Type: "Palm Top",
          DataStorage: "Internal memory",
          Application: "Field inspections",
        },
      },
      {
        id: 1003,
        name: "Multichannel Ultrasonic Flaw Detector",
        image: "/ndt/flaw-detector/multi-channel.jpeg",
        description:
          "Advanced microprocessor-controlled system for complex ultrasonic inspections.",
        specifications: {
          Channels: "Multi-channel",
          Control: "Microprocessor controlled",
          Application: "Aerospace, pipelines",
        },
      },
      {
        id: 1004,
        name: "Ultrasonic Immersion Testing System",
        image: "/ndt/flaw-detector/immersion.webp",
        description:
          "High-precision ultrasonic system used for immersion testing of components.",
        specifications: {
          TestingType: "Immersion",
          Automation: "Computer controlled",
          Application: "High-accuracy inspections",
        },
      },
    ],
  },

  {
    categoryId: 2,
    categoryName: "Ultrasonic Thickness Gauges",
    products: [
      {
        id: 2001,
        name: "Microprocessor Based Thickness Gauge",
        image: "/ndt/flaw-detector/thickness-microprocessor.png",
        description:
          "Advanced thickness gauge with microprocessor-based signal processing.",
        specifications: {
          Control: "Microprocessor based",
          Display: "Digital LCD",
          Application: "Industrial inspections",
        },
      },
      {
        id: 2002,
        name: "Through-Coat Ultrasonic Thickness Gauge",
        image: "/ndt/flaw-detector/thickness-through-coat.jpeg",
        description:
          "Measures thickness without removing surface coatings.",
        specifications: {
          Feature: "Through coating measurement",
          CoatingThickness: "Up to 20 mm",
          Application: "Painted structures",
        },
      },
      
      {
        id: 2003,
        name: "High Precision Thickness Gauge",
        image: "/ndt/flaw-detector/coating-thickness.jpg",
        description:
          "Used for measuring coating thickness on ferrous and non-ferrous materials.",
        specifications: {
          MeasurementType: "Coating thickness",
          Material: "Ferrous & Non-ferrous",
          Application: "Paint & coating inspection",
        },
      },
      {
        id: 2004,
        name: "Coating Thickness Gauge",
        image: "/ndt/flaw-detector/coating-thickness.jpeg",
        description:
          "Used for measuring coating thickness on ferrous and non-ferrous materials.",
        specifications: {
          MeasurementType: "Coating thickness",
          Material: "Ferrous & Non-ferrous",
          Application: "Paint & coating inspection",
        },
      },
    ],
  },

  {
    categoryId: 3,
    categoryName: "Magnetic Crack Detectors",
    products: [
      {
        id: 3001,
        name: "Magnetic Yoke Crack Detector",
        image: "/ndt/flaw-detector/magnetic-yoke.webp",
        description:
          "Portable yoke type detector for surface and near-surface crack detection.",
        specifications: {
          Type: "Yoke",
          Operation: "AC / DC",
          Application: "Weld inspection",
        },
      },
      {
        id: 3002,
        name: "Magnetic Prod Crack Detector",
        image: "/ndt/flaw-detector/magnetic-prod.webp",
        description:
          "Prod type detector for localized magnetic particle inspection.",
        specifications: {
          Type: "Prod",
          Current: "High current output",
          Application: "Localized crack detection",
        },
      },
      {
        id: 3003,
        name: "Bench Type Magnetic Crack Detector",
        image: "/ndt/flaw-detector/bench.jpeg",
        description:
          "Stationary magnetic particle inspection system for batch testing.",
        specifications: {
          Type: "Bench type",
          Operation: "Stationary",
          Application: "Production inspection",
        },
      },
      
    ],
  },

  {
    categoryId: 4,
    categoryName: "Portable X-Ray Systems",
    products: [
      {
        id: 4001,
        name: "Portable Industrial X-Ray System",
        image: "/ndt/flaw-detector/xray-portable.jpeg",
        description:
          "Portable X-ray system for radiographic inspection of welds and castings.",
        specifications: {
          Portability: "Portable",
          RadiationType: "X-ray",
          Application: "Radiographic testing",
        },
      },
    ],
  },

  {
    categoryId: 5,
    categoryName: "Dye Penetrant Chemicals",
    products: [
      {
        id: 5001,
        name: "Visual Dye Penetrant Chemical",
        image: "/ndt/flaw-detector/penetrant.jpeg",
        description:
          "Visible dye penetrant for detecting surface-breaking defects.",
        specifications: {
          Type: "Visual",
          Inspection: "Daylight inspection",
          Application: "Surface crack detection",
        },
      },
      {
        id: 5002,
        name: "Fluorescent Dye Penetrant Chemical",
        image: "/ndt/flaw-detector/dpt-fluorescent.jpeg",
        description:
          "Fluorescent penetrant used under UV light for high sensitivity inspection.",
        specifications: {
          Type: "Fluorescent",
          Inspection: "UV light",
          Application: "Critical component inspection",
        },
      },
      {
        id: 5003,
        name: "Automated Dye Penetrant System",
        image: "/ndt/flaw-detector/dpt-automated.jpeg",
        description:
          "Automated penetrant inspection system for mass production.",
        specifications: {
          Automation: "Fully automated",
          Process: "Penetrant, developer, wash",
          Application: "Production lines",
        },
      },
    ],
  },

  {
    categoryId: 6,
    categoryName: "Accessories",
    products: [
      {
        id: 6001,
        name: "UV Lamp",
        image: "/ndt/flaw-detector/lamp.jpeg",
        description:
          "UV lamp used for fluorescent magnetic particle and penetrant inspection.",
        specifications: {
          Wavelength: "365 nm",
          LightSource: "UV-A",
          Application: "Fluorescent inspection",
        },
      },
      {
        id: 6002,
        name: "Test Panels",
        image: "/ndt/flaw-detector/test-pannel.jpeg",
        description:
          "Reference panels used to verify performance of penetrant systems.",
        specifications: {
          Usage: "System verification",
          Material: "Standard test panels",
          Application: "Quality assurance",
        },
      },
      {
        id: 6003,
        name: "UV Bulbs & Gauz Meters",
        image: "/ndt/flaw-detector/gauz.jpeg",
        description:
          "Accessories used for UV intensity measurement and replacement.",
        specifications: {
          Measurement: "UV intensity",
          Accessories: "Bulbs & meters",
          Application: "Inspection accuracy",
        },
      },

      {
        id: 6004,
        name: "Pie Guage",
        image: "/ndt/flaw-detector/gauge.jpeg",
        description:
          "Accessories used for UV intensity measurement and replacement.",
        specifications: {
          Measurement: "UV intensity",
          Accessories: "Bulbs & meters",
          Application: "Inspection accuracy",
        },
      },
      {
        id: 6005,
        name: "Lux Meter",
        image: "/ndt/flaw-detector/lux-meter.jpeg",
        description:
          "Accessories used for UV intensity measurement and replacement.",
        specifications: {
          Measurement: "UV intensity",
          Accessories: "Bulbs & meters",
          Application: "Inspection accuracy",
        },
      },
      {
        id: 6006,
        name: "UV Indensity Meter",
        image: "/ndt/flaw-detector/uv-meter.webp",
        description:
          "Accessories used for UV intensity measurement and replacement.",
        specifications: {
          Measurement: "UV intensity",
          Accessories: "Bulbs & meters",
          Application: "Inspection accuracy",
        },
      },
    ],
  },
];
