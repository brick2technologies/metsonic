import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Top Section */}
            <div className="mx-auto max-w-7xl px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* ================= COMPANY ================= */}
                <div>
  {/* Logo + Company Name */}
  <div className="flex items-center  mb-4">
    <img
      src="/logo.jpg"
      alt="Metsonic Engineers Pvt. Ltd. logo"
      className="h-12 w-auto object-contain"
    />

    <img
      src="/name.jpg"
      alt="Metsonic Engineers Pvt. Ltd."
      className="h-8 w-auto object-contain"
    />
  </div>

  {/* Description */}
  <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
    Delivering precision-engineered material testing and NDT solutions trusted
    by leading industries across power, aerospace, defense, and research sectors.
  </p>
</div>

                {/* ================= QUICK LINKS ================= */}
                <div>
                    <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/" className="hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-white transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-white transition">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* ================= PRODUCTS ================= */}
                <div>
                    <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
                        Products
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>NDT Equipments & Accessories</li>
                        <li>Metallurgical Lab Equipments</li>
                        <li>Physical Testing Equipments</li>
                        <li>Foundry Lab Equipments</li>
                        <li>Consumables</li>
                    </ul>
                </div>

                {/* ================= CONTACT ================= */}
                <div>
                    <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
                        Contact
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 text-slate-400" />
                            <span>
                                Hyderabad, Telangana <br />
                                India
                            </span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Phone size={16} className="text-slate-400" />
                            <a
                                href="tel:+919999999999"
                                className="hover:text-white transition"
                            >
                                +91 9490167000  /02 /03 /04 /05
                            </a>
                        </li>

                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-slate-400" />
                            <a
                                href="mailto:info@metsonic.in"
                                className="hover:text-white transition"
                            >
                                metsonic.engineers@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ================= BOTTOM BAR ================= */}
            <div className="border-t border-slate-800">
                <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                    <span>
                        © {new Date().getFullYear()} Metsonic Engineers Pvt. Ltd. All rights
                        reserved.
                    </span>

                    <span className="flex gap-4">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms of Use
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
