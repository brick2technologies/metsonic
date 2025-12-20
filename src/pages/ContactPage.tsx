import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Get in touch with Metsonic Engineers Pvt. Ltd. for material testing
            equipment, ultrasonic solutions, calibration services, or technical
            support. Our team is here to assist you.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* ================= LEFT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-slate-700" />
              <div>
                <h4 className="font-medium text-slate-900">Office Address</h4>
                <p className="mt-1 text-slate-600 text-sm leading-relaxed">
                 Metsonic Engineers Pvt. Ltd. <br /> H.No-3-9-113/A, Anjaiah Gardens, Opp: Radhika Colony, <br /> West Marredpally, Secunderabad-500 026 T.S., India<br />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-slate-700" />
              <div>
                <h4 className="font-medium text-slate-900">Phone</h4>
                <p className="mt-1 text-slate-600 text-sm">+91 94901670002</p>
                <p className="text-slate-600 text-sm">040-27847000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-slate-700" />
              <div>
                <h4 className="font-medium text-slate-900">Email</h4>
                <p className="mt-1 text-slate-600 text-sm">
                  metsonic.engineers@gmail.com
                </p>
              </div>
            </div>

            {/* Office Hours */}
            {/* <div className="flex items-start gap-4">
              <Clock className="mt-1 text-slate-700" />
              <div>
                <h4 className="font-medium text-slate-900">Office Hours</h4>
                <p className="mt-1 text-slate-600 text-sm">
                  Monday – Saturday
                </p>
                <p className="text-slate-600 text-sm">
                  9:30 AM – 6:30 PM
                </p>
              </div>
            </div> */}

            {/* Extra trust text */}
            <p className="text-sm text-slate-500 max-w-md">
              We work closely with aerospace, defence, power, nuclear, and
              industrial clients. All inquiries are handled with strict
              confidentiality and prompt response.
            </p>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-slate-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Product inquiry / Service / Support"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Please share your requirement in detail..."
              />
            </div>

            <button
              type="submit"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-8
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-slate-800
              "
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* ================= MAP SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-medium text-slate-900 mb-4">
            Our Location
          </h3>

          <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Metsonic Engineers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1034442358514!2d78.50390107462847!3d17.45476230086182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a46d5ee9767%3A0xb7e91dcbaed21ceb!2sMETSONIC%20ENGINEERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1766225097200!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
