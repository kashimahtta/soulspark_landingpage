import { Instagram, Mail, MessageCircle } from "lucide-react";
import { emailLink, instagramLink, whatsappLink } from "@/data/site";
export function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-12 text-center text-cream/70">
      <img
        src="/soulspark%20logo.jpeg"
        alt="Soul Spark"
        className="mx-auto h-14 rounded bg-cream p-1"
      />
      <p className="mt-3 text-sm">Guiding You Towards Your Better Self.</p>
      <p className="mt-4 text-sm">
        Ridhi Mahtta · Handwriting Improvement Coach
      </p>
      <div className="mt-4 flex justify-center gap-5">
        <a href={whatsappLink()} aria-label="WhatsApp">
          <MessageCircle size={18} />
        </a>
        <a href={emailLink} aria-label="Email">
          <Mail size={18} />
        </a>
        <a href={instagramLink} aria-label="Instagram">
          <Instagram size={18} />
        </a>
      </div>
      <p className="mt-6 text-xs">© Soul Spark</p>
    </footer>
  );
}
