import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useState } from "react";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    company: "",
    email: "",
    requirement: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);

    // 👉 API call here

    setSubmitted(true);

    // Auto close after 3 seconds (optional)
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {/* ================= THANK YOU STATE ================= */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-14 w-14 text-green-600" />
                <h3 className="mb-2 text-xl font-semibold text-slate-800">
                  Thank You!
                </h3>
                <p className="max-w-sm text-sm text-slate-600">
                  Your enquiry has been submitted successfully.
                  <br />
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                {/* Title */}
                <h2 className="mb-6 text-center text-2xl font-semibold text-slate-800">
                  Request a Quote
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
                  />

                  <select
                    name="requirement"
                    required
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
                  >
                    <option value="">Select Requirement</option>
                    <option value="Metallurgical Testing">
                      Metallurgical Testing
                    </option>
                    <option value="Physical Testing">
                      Physical Testing
                    </option>
                    <option value="Foundry Lab Equipment">
                      Foundry Lab Equipment
                    </option>
                    <option value="NDT Equipment">NDT Equipment</option>
                    <option value="Consumables">Consumables</option>
                    <option value="Other Testing Solutions">
                      Other Testing Solutions
                    </option>
                  </select>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-900 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
