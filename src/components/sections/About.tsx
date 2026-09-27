const values = [
  "Compassion",
  "Love",
  "Spirituality",
  "Learning",
  "Service",
  "Consistency",
];
export function About() {
  return (
    <section id="about" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl text-plum sm:text-4xl">
          About Soul Spark
        </h2>
        <p className="mt-5 text-plum/70">
          Soul Spark is a personal-growth and guidance brand created to help
          people understand themselves, develop strengths, learn practical life
          skills and move forward with greater clarity and purpose.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {values.map((value) => (
            <span
              key={value}
              className="rounded-full border border-gold/40 bg-lavender/40 px-4 py-1.5 text-sm"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
