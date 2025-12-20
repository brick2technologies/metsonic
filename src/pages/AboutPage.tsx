import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="bg-white text-slate-800">

            {/* ================= ABOUT COMPANY ================= */}
            <section className="py-20 border-b">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-3xl lg:text-4xl font-semibold text-blue-900 mb-6">
                            About Metsonic Engineers Pvt. Ltd.
                        </h1>

                        <p className="text-slate-600 leading-relaxed mb-4">
                            Metsonic Engineers Pvt. Ltd. is a trusted name in the field of
                            material testing, non-destructive testing (NDT), and industrial
                            inspection solutions. We specialize in delivering reliable,
                            high-precision equipment designed to meet the demanding standards
                            of modern industries.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Our solutions are widely used across aerospace, defense, power,
                            nuclear, and manufacturing sectors, helping organizations achieve
                            accuracy, safety, and operational excellence.
                        </p>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="/about/company.jpg"
                        alt="Metsonic Engineers Facility"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
            </section>

            {/* ================= FOUNDER / DIRECTOR ================= */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">

                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="founder.jpg"
                        alt="Director of Metsonic Engineers"
                        className="rounded-2xl shadow-md w-full object-cover"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
                            Mohan Prabhakaran Nair
                        </h2>

                        <p className="text-sm text-slate-500 mb-4">
                            Founder & Director | Past Multiple Council Chairman
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-4">
                            Mohan Prabhakaran Nair is a highly respected leader with over three decades
                            of distinguished service in leadership, governance, and professional
                            excellence. He joined the Lions movement in 1992 and has held several key
                            leadership positions including Club President, Zone Chairman, Region
                            Chairman, District Governor (2019–2020), and Multiple Council Chairperson
                            of MD 320 (2020–2021), elected with a 100% mandate.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-4">
                            Renowned for his visionary and inclusive leadership, he led Multiple
                            District 320 to historic achievements across leadership development,
                            membership growth, service initiatives, LCIF contributions, and the Leo
                            movement. During the COVID-19 pandemic, he spearheaded the Mammoth Oxygen
                            Concentrator Project, delivering 250 oxygen concentrators valued at ₹1.6
                            crores through LCIF.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-4">
                            A recipient of numerous prestigious international awards, including the
                            Presidential Medal, International President’s Leadership Medal, and
                            multiple International President’s Awards, he is a Progressive Melvin
                            Jones Fellow with contributions made thrice.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Beyond the Lions movement, he has served as Chairman of the Indian Society
                            for Non-Destructive Testing (ISNT) and currently serves as Vice Chairman of
                            the Indian Institute of Metals (IIM). Guided by his leadership philosophy,
                            “Be the Change,” he continues to inspire excellence, integrity, and
                            impactful service. He is supported by his wife, Lion Mridula Mohan, and is
                            blessed with a daughter and a son.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* ================= VISION & MISSION ================= */}
            <section className="py-20 border-b">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-blue-50"
                    >
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Our Vision
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                            To become a globally recognized leader in material testing and
                            inspection solutions by delivering innovative, reliable, and
                            high-performance technologies that enhance industrial safety and
                            quality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-slate-100"
                    >
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Our Mission
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                            Our mission is to provide precise, dependable, and advanced
                            testing solutions while maintaining the highest standards of
                            integrity, customer satisfaction, and technical support.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* ================= CLIENTS (INFINITE SCROLL) ================= */}
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-10">
                        Prestigious Clients
                    </h2>

                    {/* SCROLL CONTAINER */}
                    <div className="relative w-full overflow-hidden">
                        <div className="flex w-max animate-client-scroll gap-16 items-center">

                            {/* LOGO SET 1 */}
                            <img src="/clients/BHEL.png" alt="BHEL" className="h-12" />
                            <img src="/clients/HAL.jpg" alt="HAL" className="h-12" />
                            <img src="/clients/DRDO.png" alt="DRDO" className="h-12" />
                            <img src="/clients/NFC.jpg" alt="NFC" className="h-12" />
                            <img src="/clients/midhani.png" alt="MIDHANI" className="h-12" />
                            <img src="/clients/NAL.png" alt="MIDHANI" className="h-12" />
                            <img src="/clients/BDL.png" alt="MIDHANI" className="h-12" />
                            <img src="/clients/azad.png" alt="MIDHANI" className="h-12" />


                            {/* LOGO SET 2 (DUPLICATE FOR LOOP) */}
                            <img src="/clients/BHEL.png" alt="BHEL" className="h-12" />
                            <img src="/clients/HAL.jpg" alt="HAL" className="h-12" />
                            <img src="/clients/DRDO.png" alt="DRDO" className="h-12" />
                            <img src="/clients/NFC.jpg" alt="NFC" className="h-12" />
                            <img src="/clients/midhani.png" alt="MIDHANI" className="h-12" />
                            <img src="/clients/NAL.png" alt="MIDHANI" className="h-12" />
                            <img src="/clients/BDL.png" alt="MIDHANI" className="h-12" />
                            <img src="/clients/azad.png" alt="MIDHANI" className="h-12" />

                        </div>
                    </div>
                </div>
            </section>


            {/* ================= CERTIFICATIONS ================= */}
            <section className="py-20 border-b">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-6">
                        Our Certifications
                    </h2>

                    <p className="max-w-3xl mx-auto text-slate-600 mb-10">
                        Our certifications reflect our commitment to international quality
                        standards, safety, and continuous improvement.
                    </p>

                    <div className="flex flex-wrap justify-center gap-10">
                        <img src="/certifications/iso.png" alt="ISO Certification" className="h-14" />
                        <img src="/certifications/ndt.png" alt="NDT Certification" className="h-14" />
                        <img src="/certifications/qms.png" alt="Quality Management" className="h-14" />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-10"
                    >
                        Our Team
                    </motion.h2>

                    {/* TEAM GROUP IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <img
                            src="/team/team-group.jpg"
                            alt="Metsonic Engineers Team"
                            className="
          mx-auto
          w-full
          max-w-4xl
          rounded-2xl
          shadow-lg
          object-cover
        "
                        />
                    </motion.div>

                    <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                        Our team consists of experienced engineers, certified inspectors,
                        technical specialists, and support professionals who are deeply committed
                        to precision, safety, and quality. Together, we work collaboratively to
                        deliver reliable material testing and inspection solutions that meet
                        international standards and exceed client expectations.
                    </p>

                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="py-20 bg-blue-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                        Let’s Build Quality & Trust Together
                    </h2>

                    <p className="text-blue-100 mb-8">
                        Partner with Metsonic Engineers for reliable material testing and
                        inspection solutions you can trust.
                    </p>

                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-full bg-white text-blue-900 font-medium hover:bg-blue-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </main>
    );
}
