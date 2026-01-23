export type UltrasonicProduct = {
  id: number;
  name: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
};

export const ultrasonicProducts: UltrasonicProduct[] = [
  {
    id: 11001,
    name: "Portable Ultrasonic Cleaner",
    image: "/images/ultrasonic/portable-cleaner.jpg",
    description:
      "Compact ultrasonic cleaner designed for on-site and laboratory cleaning of small components.",
    specifications: {
      Type: "Portable",
      Frequency: "40 kHz",
      TankCapacity: "2–5 Litres",
      Application: "Jewellery, tools, precision parts",
    },
  },
  {
    id: 11002,
    name: "Industrial Ultrasonic Cleaning System",
    image: "/images/ultrasonic/industrial-cleaner.jpg",
    description:
      "High-capacity ultrasonic cleaning system for heavy-duty industrial applications.",
    specifications: {
      Type: "Fixed system",
      Frequency: "25–40 kHz",
      TankCapacity: "50–500 Litres",
      Application: "Automotive, aerospace, manufacturing",
    },
  },
];
