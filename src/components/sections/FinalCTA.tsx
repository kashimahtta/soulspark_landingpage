import { whatsappLink } from "@/data/site";
export function FinalCTA() {
  return (
    <section className="bg-cream px-6 py-24 text-center">
      <blockquote className="mx-auto max-w-xl font-display text-2xl leading-relaxed text-plum sm:text-3xl">
        “This is my life.
        <br />
        This is my responsibility.
        <br />
        This is my promise to myself —<br />
        and I will honour it.”
      </blockquote>
      <h2 className="mt-12 font-display text-3xl text-plum sm:text-4xl">
        Ready to Begin Your Soul Spark Journey?
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={whatsappLink(
            "Hi Ridhi, I'd like to begin my Soul Spark journey.",
          )}
          className="rounded-full bg-gold px-7 py-3 font-medium text-plum"
        >
          WhatsApp Soul Spark
        </a>
        <a
          href="#contact"
          className="rounded-full border border-gold px-7 py-3 font-medium text-plum"
        >
          Connect With Us
        </a>
      </div>
    </section>
  );
}
