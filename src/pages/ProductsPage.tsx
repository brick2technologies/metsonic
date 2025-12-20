import { motion } from "framer-motion";
import { useEnquiryModal } from "../context/useEnquiryModal";

const products = [
  {
    title: "Metallurgical Laboratory Equipment",
    description:
      "Advanced solutions for microstructural analysis, heat treatment, sample preparation, and metallographic examination to ensure superior material quality and performance.",
    image: "/Metallurgy/metallographic.jpg",
    link: "/products/metallurgical",
    bg: false,
  },
  {
    title: "Physical Testing Equipment",
    description:
      "Equipment engineered to evaluate tensile strength, compression, hardness, impact resistance, and fatigue properties for reliable mechanical testing results.",
    image: "/PhysicalTesting/physical.webp",
    link: "/products/physical-testing",
    bg: true,
    reverse: true,
  },
  {
    title: "Non-Destructive Testing (NDT)",
    description:
      "Comprehensive NDT solutions including ultrasonic, radiographic, magnetic particle, and dye penetrant testing to detect internal and surface defects without damaging components.",
    image: "/dolphitech/dolphicam2.jpg",
    link: "/products/ndt",
    bg: false,
  },
  {
    title: "Foundry Lab Equipments",
    description:
      "A complete range of foundry testing equipment supporting sample preparation, casting evaluation, and production quality control.",
    image: "/FoundryTesting/foundary.jpg",
    link: "/products/foundry",
    bg: false,
  },
  {
    title: "Consumables",
    description:
      "Consumables are items that are used up, depleted, or worn out during regular use and must be replaced frequently to maintain operations.",
    image: "/consumables.webp",
    link: "/products/chemical",
    bg: true,
    reverse: true,
  },
];

export default function ProductsPage() {
    const { openModal } = useEnquiryModal();
  return (
    <main className="bg-white text-gray-800">

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-medium text-blue-900"
          >
            Our Products
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            At Metsonic Engineers Pvt. Ltd., we design and supply high-precision
            testing equipment that ensures accuracy, reliability, and compliance
            with international standards across industries.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      {products.map((item, index) => (
        <section
          key={index}
          className={`py-20 ${item.bg ? "bg-gray-50" : ""}`}
        >
          <div
            className={`
              max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
            `}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className={`
                rounded-2xl shadow-lg
                ${item.reverse ? "lg:order-2" : ""}
              `}
            />

            {/* CONTENT */}
            <div className={`${item.reverse ? "lg:order-1" : ""}`}>
              <h2 className="text-3xl font-medium text-blue-900">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex gap-4 flex-wrap">
                <a
                  href={item.link}
                  className="px-7 py-3 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
                >
                  View Products
                </a>
                <button
                  onClick={openModal}
                  className="px-7 py-3 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition"
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
