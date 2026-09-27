import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, whatsappLink } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" aria-label="Soul Spark home">
          <img
            src="/soulspark%20logo.jpeg"
            alt="Soul Spark"
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium"
          >
            Start Your Journey
          </a>
        </nav>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 bg-cream px-6 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
