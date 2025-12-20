import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Senior QA Engineer",
    company: "BHEL",
    quote:
      "Metsonic’s testing equipment has significantly improved the accuracy and reliability of our inspection processes. Their support team is highly knowledgeable and responsive.",
  },
  {
    name: "Project Manager",
    company: "HAL",
    quote:
      "We rely on Metsonic for critical material testing solutions. The build quality and precision of their instruments meet aerospace-grade standards.",
  },
  {
    name: "NDT Specialist",
    company: "DRDO – RCI",
    quote:
      "Metsonic Engineers delivers dependable ultrasonic testing solutions that perform consistently even in demanding defense applications.",
  },
  {
    name: "Inspection Head",
    company: "MIDHANI",
    quote:
      "Metsonic’s ultrasonic testing instruments deliver consistent results for metallurgical inspection and quality assurance.",
  },
  {
    name: "Quality Manager",
    company: "DMRL",
    quote:
      "The accuracy and durability of Metsonic equipment meets the stringent standards required in defense research facilities.",
  },
  {
    name: "Testing Lead",
    company: "ARC International",
    quote:
      "Metsonic solutions integrate smoothly into our industrial testing workflows and deliver dependable results.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // detect screen size
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const itemsPerView = getItemsPerView();
  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const prev = () =>
    setIndex((i) => (i === 0 ? totalPages - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === totalPages - 1 ? 0 : i + 1));

  const visible = testimonials.slice(
    index * itemsPerView,
    index * itemsPerView + itemsPerView
  );

  return (
    <section className="relative bg-slate-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Trusted by leading organizations across power, aerospace, defense,
            and research sectors.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <motion.div
              key={`${index}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="
                relative
                rounded-2xl
                bg-white
                p-8
                shadow-sm
                border
                border-slate-200
                hover:shadow-md
                transition
              "
            >
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-serif">
                “
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                {t.quote}
              </p>

              <div>
                <p className="font-medium text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= ARROWS ================= */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="h-11 w-11 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 transition"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>

          <button
            onClick={next}
            className="h-11 w-11 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 transition"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
    </section>
  );
}
