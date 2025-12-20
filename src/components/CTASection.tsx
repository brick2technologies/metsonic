import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight"
        >
          Ready to Enhance Your Testing Accuracy?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600"
        >
          Metsonic Engineers delivers reliable, precision-engineered material
          testing solutions trusted by aerospace, defense, and industrial
          leaders.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/contact"
            className="
              rounded-full
              bg-blue-900
              px-8 py-3
              text-sm font-medium text-white
              transition hover:bg-blue-800
            "
          >
            Request a Quote
          </a>

          <a
            href="/catalog.pdf"
            download
            className="
              rounded-full
              border border-slate-300
              px-8 py-3
              text-sm font-medium text-slate-700
              transition hover:bg-slate-100
            "
          >
            Download Catalog
          </a>
        </motion.div>

      </div>
    </section>
  );
}
