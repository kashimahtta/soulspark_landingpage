import { Sparkles } from "lucide-react";
import { whySoulSpark } from "@/data/site";
export function WhySoulSpark() {
  return (
    <section id="why" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl text-plum sm:text-4xl">
          Why Soul Spark
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whySoulSpark.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-3 rounded-lg border border-gold/25 bg-lavender/20 p-4 text-left"
            >
              <Sparkles className="shrink-0 text-gold" size={18} />
              <span className="text-sm">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
