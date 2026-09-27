import { howItWorks } from "@/data/site";
export function HowItWorks() {
  return (
    <section className="bg-lavender/30 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl text-plum sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step) => (
            <div key={step.n}>
              <div className="font-display text-3xl text-gold">{step.n}</div>
              <h3 className="mt-1 font-display text-xl text-plum">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-plum/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
