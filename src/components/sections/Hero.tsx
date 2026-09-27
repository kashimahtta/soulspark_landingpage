import { motion } from "framer-motion";
import { whatsappLink } from "@/data/site";
export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-lavender to-cream px-6 pb-20 pt-36 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-accent text-2xl text-gold"
      >
        Welcome to Soul Spark
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-plum sm:text-6xl"
      >
        Discover Your Potential. Find Your Direction. Grow With Purpose.
      </motion.h1>
      <p className="mx-auto mt-5 max-w-xl text-plum/70">
        Guidance, learning and personal growth to help you move forward with
        clarity, confidence and purpose.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#program"
          className="rounded-full bg-gold px-7 py-3 font-medium text-plum"
        >
          Start Your Journey
        </a>
        <a
          href={whatsappLink(
            "Hi Ridhi, I'd like to know more about Soul Spark.",
          )}
          className="rounded-full border border-gold px-7 py-3 font-medium text-plum"
        >
          WhatsApp Soul Spark
        </a>
      </div>
    </section>
  );
}
