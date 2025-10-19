import { useState } from "react";
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[92%] max-w-5xl -translate-x-1/2 rounded-full border border-gray-200 bg-white/85 px-6 py-3 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          id="my-name"
          className="text-lg font-semibold tracking-tight text-gray-900 transition hover:text-gray-600"
        >
          Irfan <span className="text-gray-500">Ashraf</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get in touch button - only on lg */}
        <a
          href="#contact"
          className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900 lg:inline-flex"
        >
          Get in touch
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col items-start gap-3 rounded-xl border border-gray-200 bg-white/90 p-4 shadow-md backdrop-blur-sm lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-full rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
