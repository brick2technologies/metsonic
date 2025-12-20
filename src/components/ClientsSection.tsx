import { motion } from "framer-motion";

/* ================= CLIENT DATA ================= */
const clients = [
  { name: "BHEL", logo: "/clients/BHEL.png", sector: "Power" },
  { name: "HAL", logo: "/clients/HAL.jpg", sector: "Aerospace" },
  { name: "NFC", logo: "/clients/NFC.jpg", sector: "Nuclear" },
  { name: "DMRL", logo: "/clients/DMRL.jpg", sector: "Defence" },
  { name: "DLRL", logo: "/clients/DLRL.jpg", sector: "Defence" },
  { name: "RCI", logo: "/clients/RCI.png", sector: "Research" },
  { name: "BDL", logo: "/clients/BDL.png", sector: "Defence" },
  { name: "ARC International", logo: "/clients/ARC.jpg", sector: "Industrial" },
  { name: "MIDHANI", logo: "/clients/MIDHANI.png", sector: "Metallurgy" },
  { name: "ISRO", logo: "/clients/ISRO.png", sector: "Space" },
  { name: "DRDO", logo: "/clients/DRDO.png", sector: "Defence" },
  { name: "NPCIL", logo: "/clients/NPCIL.png", sector: "Nuclear" },
  { name: "VSSC", logo: "/clients/VSSC.jpg", sector: "Space" },
  { name: "BARC", logo: "/clients/BARC.png", sector: "Research" },
  { name: "NAL", logo: "/clients/NAL.png", sector: "Aerospace" },
];

/* split into rows */
const row1 = clients.slice(0, 5);
const row2 = clients.slice(5, 10);
const row3 = clients.slice(10, 15);

/* ================= ROW COMPONENT ================= */
function LogoRow({
  items,
  reverse = false,
  duration = 30,
}: {
  items: typeof clients;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max items-center gap-16 py-4"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((client, index) => (
          <div
            key={index}
            className="flex min-w-[180px] items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 w-auto max-w-full object-contain"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================= SECTION ================= */
export default function ClientsSection() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Trusted By Industry Leaders
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-light text-slate-900">
            Our Esteemed Clients
          </h2>
        </motion.div>

        {/* Rows */}
        <div className="space-y-8">
          <LogoRow items={row1} duration={26} />
          <LogoRow items={row2} reverse duration={30} />
          <LogoRow items={row3} duration={34} />
        </div>
      </div>
    </section>
  );
}
