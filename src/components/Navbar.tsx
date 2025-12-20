import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEnquiryModal } from "../context/useEnquiryModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openModal } = useEnquiryModal();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">

        {/* ================= LEFT: LOGO ================= */}
        <div className="flex items-center gap-3">
          {/* Icon / Symbol Logo */}
          <img
            src="logo.jpg"
            alt="Company Logo Icon"
            className="h-12 sm:h-14 w-auto object-contain"
          />

          {/* Company Name Logo */}
          <img
            src="name.jpg"
            alt="Company Name Logo"
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
        relative
        text-[15px] lg:text-[16px]
        font-normal
        tracking-wide
        text-gray-600
        transition-colors duration-300
        hover:text-blue-900
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[1.5px]
        after:w-0
        after:bg-blue-800
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
            >
              {link.name}
            </a>
          ))}
        </nav>


        {/* ================= RIGHT: CTA + ICONS ================= */}
        <div className="flex items-center gap-3">
          {/* Enquiry Button (Desktop only) */}
          <button
           onClick={openModal}
            className="
              hidden sm:inline-flex
              items-center
              rounded-full
              bg-blue-900
              px-5 py-2
              text-sm font-semibold
              text-white
              transition
              hover:bg-blue-800
            "
          >
            Enquiry Now
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
    inline-flex
    h-10 w-10
    items-center justify-center
    rounded-full
    bg-green-500
    transition
    hover:bg-green-600
  "
          >
            <img
              src="/whatsapp.svg"
              alt="WhatsApp"
              className="h-8 w-8 object-contain"
            />
          </a>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
    px-4 py-3
    text-[15px]
    font-normal
    tracking-wide
    text-gray-700
    hover:bg-gray-100
    rounded-md
  "
              >
                {link.name}
              </a>

            ))}

            {/* Mobile Enquiry Button */}
            <a
              href="/enquiry"
              className="
                mt-2
                text-center
                rounded-lg
                bg-blue-900
                px-4 py-3
                text-sm font-semibold
                text-white
                hover:bg-blue-800
              "
            >
              Enquiry Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
