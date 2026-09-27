import { Check } from "lucide-react";
import { programBenefits, whatsappLink } from "@/data/site";
const details = [
  ["15 Days", "Duration"],
  ["1-to-1", "Sessions"],
  ["Online & Offline", "Mode"],
  ["Age 7–14", "For"],
];
export function HandwritingProgram() {
  return (
    <section id="program" className="bg-plum px-6 py-20 text-cream">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-gold">
          Featured Program
        </p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">
          15-Day Handwriting Improvement Program
        </h2>
        <p className="mt-2 text-cream/70">For Children Aged 7–14 Years</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {details.map(([a, b]) => (
            <div
              key={b}
              className="rounded-lg border border-gold/30 p-4 text-center"
            >
              <div className="font-display text-lg text-gold">{a}</div>
              <div className="mt-1 text-xs">{b}</div>
            </div>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {programBenefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm">
              <Check size={16} className="shrink-0 text-gold" />
              {benefit}
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink(
            "Hi Ridhi, I'd like to enquire about the 15-Day Handwriting Improvement Program.",
          )}
          className="mt-8 inline-block rounded-full bg-gold px-7 py-3 font-medium text-plum"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </section>
  );
}
