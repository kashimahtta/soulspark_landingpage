import { values } from "@/data/site";
export function Values() {
  return (
    <section className="bg-plum px-6 py-20 text-center text-cream">
      <h2 className="font-display text-3xl sm:text-4xl">Live With Purpose</h2>
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-full border border-gold/40 px-4 py-1.5 text-sm"
          >
            {value}
          </span>
        ))}
      </div>
    </section>
  );
}
