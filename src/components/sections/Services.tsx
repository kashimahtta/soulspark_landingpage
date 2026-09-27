import { Compass, PenLine, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/site";
const icons = [PenLine, Compass, Sparkles, Users];
export function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl text-plum sm:text-4xl">
          What Soul Spark Offers
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={service.title}
                whileHover={{ y: -5 }}
                className="rounded-lg border border-gold/25 bg-lavender/20 p-6 text-left"
              >
                <Icon className="text-gold" size={28} />
                <h3 className="mt-4 font-display text-xl text-plum">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-plum/70">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
