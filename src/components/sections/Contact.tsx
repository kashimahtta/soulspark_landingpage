import { Instagram, Mail, MessageCircle } from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  emailLink,
  instagramLink,
  whatsappLink,
} from "@/data/site";
export function Contact() {
  return (
    <section id="contact" className="bg-lavender/30 px-6 py-20 text-center">
      <h2 className="font-display text-3xl text-plum sm:text-4xl">
        Get In Touch
      </h2>
      <p className="mt-2 text-plum/70">
        Ridhi Mahtta · Handwriting Improvement Coach
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={whatsappLink("Hi Ridhi, I'd like to connect with Soul Spark.")}
          className="flex items-center gap-2 rounded-full border border-gold px-6 py-3"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={emailLink}
          className="flex items-center gap-2 rounded-full border border-gold px-6 py-3"
        >
          <Mail size={18} />
          {EMAIL}
        </a>
        <a
          href={instagramLink}
          className="flex items-center gap-2 rounded-full border border-gold px-6 py-3"
        >
          <Instagram size={18} />@{INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}
