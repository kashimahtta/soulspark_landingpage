# Page Sections

Reference snippets from the original Soul Spark landing-page brief.

## 3. `src/components/sections/Hero.tsx`

```tsx
import { motion } from "framer-motion";
import { whatsappLink } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lavender via-cream to-cream" />
      <div className="absolute -z-10 top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/25 blur-3xl" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-accent text-2xl text-gold"
      >
        Welcome to Soul Spark ✨
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mx-auto mt-4 max-w-3xl font-display text-4xl sm:text-6xl leading-tight text-plum"
      >
        Discover Your Potential. Find Your Direction. Grow With Purpose.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-5 max-w-xl text-plum/70"
      >
        Guidance, learning and personal growth to help you move forward with greater
        clarity, confidence and purpose.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#program"
          className="rounded-full bg-gold px-7 py-3 font-medium text-plum hover:shadow-[0_0_0_4px_rgba(217,164,65,0.3)] transition"
        >
          Start Your Journey
        </a>
        <a
          href={whatsappLink("Hi Ridhi, I'd like to know more about Soul Spark.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gold px-7 py-3 font-medium text-plum hover:bg-gold transition"
        >
          WhatsApp Soul Spark
        </a>
      </motion.div>
    </section>
  );
}
```

---

## 4. `src/components/sections/About.tsx`

```tsx
import { values } from "@/data/site";

export function About() {
  return (
    <section id="about" className="px-6 py-20 bg-cream">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-plum">About Soul Spark</h2>
        <p className="mt-5 text-plum/70">
          Soul Spark is a personal-growth and guidance brand created to help people
          understand themselves, develop their strengths, learn practical life skills
          and move forward with greater clarity and purpose.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Compassion", "Love", "Spirituality", "Learning", "Service", "Consistency"].map(
            (v) => (
              <span
                key={v}
                className="rounded-full border border-gold/40 bg-lavender/40 px-4 py-1.5 text-sm text-plum"
              >
                {v}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
```

---

## 5. `src/components/sections/Founder.tsx`

```tsx
import profile from "@/assets/profile.jpg";

export function Founder() {
  return (
    <section className="px-6 py-20 bg-lavender/30">
      <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
        <img
          src={profile}
          alt="Ridhi Mahtta, founder of Soul Spark"
          className="mx-auto h-72 w-72 rounded-full border-4 border-gold object-cover shadow-xl"
        />
        <div>
          <p className="text-sm uppercase tracking-widest text-gold">Meet Ridhi Mahtta</p>
          <h2 className="mt-2 font-display text-3xl text-plum">
            A Woman of Purpose, Faith and Determination
          </h2>
          <p className="mt-4 text-plum/70">
            Ridhi's vision is to help people find direction, develop life skills, face
            challenges and move forward with greater clarity and confidence. She
            believes that every person has potential, and that the right guidance,
            compassion, wisdom and practical solutions can help awaken it.
          </p>
          <p className="mt-4 text-plum/70">
            She brings more than 15 years of handwriting teaching experience and is
            building Soul Spark as a meaningful personal-growth brand — rooted in
            learning, teaching, service and personal growth.
          </p>
        </div>
      </div>
    </section>
  );
}
```

---

## 6. `src/components/sections/Services.tsx`

```tsx
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-cream">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-plum">What Soul Spark Offers</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gold/25 bg-lavender/20 p-6 text-left shadow-sm"
              >
                <Icon className="text-gold" size={28} />
                <h3 className="mt-4 font-display text-xl text-plum">{s.title}</h3>
                <p className="mt-2 text-sm text-plum/70">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## 7. `src/components/sections/HandwritingProgram.tsx`

The brief asks for this section to stand out visually from the plain service cards.

```tsx
import { programBenefits, whatsappLink } from "@/data/site";
import { Check } from "lucide-react";

export function HandwritingProgram() {
  return (
    <section id="program" className="px-6 py-20 bg-plum text-cream relative overflow-hidden">
      <div className="absolute -z-0 top-0 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="mx-auto max-w-4xl relative">
        <p className="text-sm uppercase tracking-widest text-gold">Featured Program</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">
          15-Day Handwriting Improvement Program
        </h2>
        <p className="mt-2 text-cream/70">For Children Aged 7–14 Years</p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["15 Days", "Duration"],
            ["1-to-1", "Sessions"],
            ["Online & Offline", "Mode"],
            ["Age 7–14", "For"],
          ].map(([big, small]) => (
            <div key={small} className="rounded-xl border border-gold/30 bg-cream/5 p-4 text-center">
              <div className="font-display text-lg text-gold">{big}</div>
              <div className="text-xs text-cream/60 mt-1">{small}</div>
            </div>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {programBenefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-cream/85">
              <Check size={16} className="text-gold shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink("Hi Ridhi, I'd like to enquire about the 15-Day Handwriting Improvement Program.")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gold px-7 py-3 font-medium text-plum hover:shadow-[0_0_0_4px_rgba(217,164,65,0.3)] transition"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </section>
  );
}
```

---

## 8. `src/components/sections/WhySoulSpark.tsx`

```tsx
import { whySoulSpark } from "@/data/site";
import { Sparkles } from "lucide-react";

export function WhySoulSpark() {
  return (
    <section id="why" className="px-6 py-20 bg-cream">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-plum">Why Soul Spark</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whySoulSpark.map((w) => (
            <div
              key={w}
              className="flex items-center gap-3 rounded-xl border border-gold/25 bg-lavender/20 p-4 text-left"
            >
              <Sparkles size={18} className="text-gold shrink-0" />
              <span className="text-sm text-plum">{w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 9. `src/components/sections/HowItWorks.tsx`

```tsx
import { howItWorks } from "@/data/site";

export function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-lavender/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-plum">How It Works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-4">
          {howItWorks.map((s) => (
            <div key={s.n} className="text-left">
              <div className="font-display text-3xl text-gold">{s.n}</div>
              <h3 className="mt-1 font-display text-xl text-plum">{s.title}</h3>
              <p className="mt-1 text-sm text-plum/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 10. `src/components/sections/Values.tsx`

```tsx
import { values } from "@/data/site";

export function Values() {
  return (
    <section className="px-6 py-20 bg-plum text-cream text-center">
      <h2 className="font-display text-3xl sm:text-4xl">Live With Purpose</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {values.map((v) => (
          <span key={v} className="rounded-full border border-gold/40 px-4 py-1.5 text-sm">
            {v}
          </span>
        ))}
      </div>
    </section>
  );
}
```

---

## 11. `src/components/sections/FinalCTA.tsx`

The closing quote, used once, verbatim.

```tsx
import { whatsappLink } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="px-6 py-24 bg-cream text-center">
      <blockquote className="mx-auto max-w-xl font-display text-2xl sm:text-3xl leading-relaxed text-plum">
        "This is my life.
        <br />
        This is my responsibility.
        <br />
        This is my promise to myself —<br />
        and I will honour it."
      </blockquote>

      <h2 className="mt-12 font-display text-3xl sm:text-4xl text-plum">
        Ready to Begin Your Soul Spark Journey?
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={whatsappLink("Hi Ridhi, I'd like to begin my Soul Spark journey.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gold px-7 py-3 font-medium text-plum hover:shadow-[0_0_0_4px_rgba(217,164,65,0.3)] transition"
        >
          WhatsApp Soul Spark
        </a>
        <a
          href="#contact"
          className="rounded-full border border-gold px-7 py-3 font-medium text-plum hover:bg-gold transition"
        >
          Connect With Us
        </a>
      </div>
    </section>
  );
}
```

---

## 12. `src/components/sections/Contact.tsx`

```tsx
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { whatsappLink, emailLink, instagramLink, INSTAGRAM_HANDLE, EMAIL } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-lavender/30 text-center">
      <h2 className="font-display text-3xl sm:text-4xl text-plum">Get In Touch</h2>
      <p className="mt-2 text-plum/70">Ridhi Mahtta · Handwriting Improvement Coach</p>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={whatsappLink("Hi Ridhi, I'd like to connect with Soul Spark.")}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-gold px-6 py-3 hover:bg-gold transition"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a
          href={emailLink}
          className="flex items-center gap-2 rounded-full border border-gold px-6 py-3 hover:bg-gold transition"
        >
          <Mail size={18} /> {EMAIL}
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-gold px-6 py-3 hover:bg-gold transition"
        >
          <Instagram size={18} /> @{INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}
```

---

