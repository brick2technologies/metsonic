import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_DURATION = 5000;

const slides = [
  {
    type: "quote",
    title: "Your Trusted Partner in Material Testing Solutions",
    subtitle:
      "At Metsonic Engineers Pvt. Ltd., we deliver high-performance testing equipment engineered for precision, reliability, and durability—empowering industries to achieve unmatched accuracy and efficiency.",
  },

  {
    type: "product",
    title: "Dolphitech Dolphcam2",
    desc: "Experience ultrasonic flaw detection like never before with Dolphitech Dolphcam2, offering superior imaging and accuracy for all your testing needs.",
    images: [
      "/dolphitech/dolphicam2.jpg",
      "/dolphitech/dolphicam3.jpg",
    ],
  },

  {
    type: "product",
    title: "Ultrasonic Flaw Detector",
    desc: "An ultrasonic flaw detector is designed to locate and size discontinuities such as cracks, voids, porosity, and other injurious discontinuities in various materials and welded joints.",
    images: [
      "/UltraSonic/Echo.jpg",
      "/UltraSonic/arjun30.png",
      "/UltraSonic/DGS.jpg",

    ],
  },

  {
    type: "product",
    title: "Ultrasonic Thickness Gauge",
    desc: "A non-destructive testing (NDT) device that measures material thickness by sending high-frequency sound waves (ultrasonic pulses) into a material and timing how long it takes for the echo from the back wall to return.",
    images: ["/UltraSonic/edisson1.png",
      "/UltraSonic/utg-10.jpg",
    ],

  },
  {
    type: "product",
    title: "Portable Hardness Tester",
    desc: "Handheld device for rapid, on-site metal hardness measurement using methods like Leeb rebound, UCI, or Rockwell probing.",
    images: [
      "/HardnessTester/ht10-handheld-hardness-tester-1.jpg",
      "/HardnessTester/portable-dynamic-hardness-tester-dht.jpg",

    ]
  },
  {
    type: "product",
    title: "Metallurgical Lab Equipments",
    desc: "Analyzes metal properties, ranging from sample prep (cutters, grinders, polishers, mounting presses) for a mirror finish, to microscopy (metallurgical/stereo microscopes for grain structure), and testing machines (hardness, impact, tensile, fatigue) for mechanical properties.",
    images: [
      "/Metallurgy/dg-victory-trinocular-inverted-dark-microscope.jpeg",
      "/Metallurgy/labcut.jpg",
      "/Metallurgy/metallographic-disc-polishing-lapping-table-top-model.png",
      "/Metallurgy/mounting-press.png"

    ]
  },

  {
    type: "product",
    title: "Physical Testing Equipments",
    desc: "Evaluates material properties like strength, hardness, elasticity, and durability by subjecting samples to controlled forces or conditions.",
    images: [
      "/PhysicalTesting/UTM.png",
      "/PhysicalTesting/Computerized-Brinell-Hardness-Tester.jpg",
      "/PhysicalTesting/digital-rockwell-hardness-tester.jpg",
      "/PhysicalTesting/vickers-hardness-testing.jpg",
    ]
  },

  {
    type: "product",
    title: "Foundry Lab Equipments",
    desc: "Foundry testing equipment checks both sand and metal quality, crucial for casting integrity. Sand testers assess properties like moisture and strength, while metal testers evaluate composition and mechanical properties to ensure high-quality castings.",
    images: [
      "/FoundryTesting/digital-permeability-testers-3.jpg",
      "/FoundryTesting/sand-mullers.png",
      "/FoundryTesting/sand-sievers-1.jpg",
      "/FoundryTesting/universal-strength-machines-digital.jpg",
    ]
  },
  {
    type: "product",
    title: "Consumables",
    desc: "From high-grade mounting resins to diamond suspensions, we provide the essential single-use supplies industrial labs need to ensure repeatable, zero-error results.",
    image: "/consumables.webp",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  const handleDotClick = (i: number) => {
    setIndex(i);
    startTimer();
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 min-h-[90vh] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            {/* ================= QUOTE SLIDE ================= */}
            {slides[index].type === "quote" && (
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-900 leading-tight">
                  {slides[index].title}
                </h1>
                <p className="mt-6 text-gray-600 text-lg">
                  {slides[index].subtitle}
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 rounded-full border border-blue-900 text-sm hover:bg-blue-900 hover:text-white transition">
                    Explore Products
                  </button>
                  <button className="px-8 py-3 rounded-full border border-gray-300 text-sm hover:border-blue-900 transition">
                    Download Catalog
                  </button>
                </div>
              </div>
            )}

            {/* ================= PRODUCT SLIDES ================= */}
            {slides[index].type === "product" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* ===== LEFT: TEXT ===== */}
                <div className="order-2 lg:order-1 lg:col-span-5">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-900 leading-tight">
                    {slides[index].title}
                  </h2>

                  <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {slides[index].desc}
                  </p>

                  <div className="mt-8 flex gap-4">
                    <button className="px-8 py-3 rounded-full border border-blue-900 text-sm hover:bg-blue-900 hover:text-white transition">
                      Explore Products
                    </button>

                    <a
                      href="/Metsonic-Catalog.pdf"
                      download
                      className="px-8 py-3 rounded-full border border-gray-300 text-sm hover:border-blue-900 transition"
                    >
                      Download Catalog
                    </a>
                  </div>
                </div>

                {/* ===== RIGHT: IMAGES ===== */}
                <div className="order-1 lg:order-2 lg:col-span-6">
                  {slides[index].images ? (

                    slides[index].images.length === 2 ? (
                      <div className="grid grid-cols-2 gap-3 aspect-[4/3] max-h-[420px]">
                        {slides[index].images.map((img, i) => (
                          <div
                            key={i}
                            className="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"
                          >
                            <img
                              src={img}
                              alt=""
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>

                    ) : slides[index].images.length === 4 ? (
                      <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-[4/3] max-h-[420px]">
                        {slides[index].images.map((img, i) => (
                          <div
                            key={i}
                            className="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"
                          >
                            <img
                              src={img}
                              alt=""
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>

                    ) : (
                      <div className="grid grid-cols-2 gap-3 aspect-[4/3] max-h-[420px]">

                        {/* Left big */}
                        <div className="row-span-2 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img
                            src={slides[index].images[0]}
                            alt={slides[index].title}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        {/* Right top */}
                        <div className="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img
                            src={slides[index].images[1]}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                        </div>

                        {/* Right bottom */}
                        <div className="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img
                            src={slides[index].images[2]}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                        </div>

                      </div>
                    )

                  ) : (
                    <div className="bg-gray-50 rounded-xl flex items-center justify-center max-h-[420px]">
                      <img
                        src={slides[index].image}
                        alt={slides[index].title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 w-2 rounded-full transition ${i === index ? "bg-gray-900 w-6" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
