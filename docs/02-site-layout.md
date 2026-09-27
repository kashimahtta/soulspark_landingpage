# Site Layout

Reference snippets from the original Soul Spark landing-page brief.

## 2. `src/components/layout/Navbar.tsx`

```tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, whatsappLink } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-cream/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl tracking-widest text-plum">
          SOUL SPARK
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hi Ridhi, I'd like to know more about Soul Spark.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-plum font-medium hover:shadow-[0_0_0_4px_rgba(217,164,65,0.3)] transition"
          >
            Start Your Journey
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
```

---

## 13. `src/components/layout/Footer.tsx`

```tsx
import { whatsappLink, emailLink, instagramLink } from "@/data/site";
import { MessageCircle, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12 bg-charcoal text-cream/70 text-center">
      <p className="font-display text-xl text-cream">SOUL SPARK</p>
      <p className="mt-1 text-sm">Guiding You Towards Your Better Self.</p>
      <p className="mt-4 text-sm">Ridhi Mahtta · Handwriting Improvement Coach</p>
      <div className="mt-4 flex justify-center gap-5">
        <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <MessageCircle size={18} />
        </a>
        <a href={emailLink} aria-label="Email">
          <Mail size={18} />
        </a>
        <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={18} />
        </a>
      </div>
      <p className="mt-6 text-xs">© Soul Spark</p>
    </footer>
  );
}
```

---

