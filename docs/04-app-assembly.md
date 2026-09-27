# App Assembly and Notes

Reference snippets from the original Soul Spark landing-page brief.

## 14. `src/App.tsx`

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Services } from "@/components/sections/Services";
import { HandwritingProgram } from "@/components/sections/HandwritingProgram";
import { WhySoulSpark } from "@/components/sections/WhySoulSpark";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Values } from "@/components/sections/Values";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <HandwritingProgram />
        <WhySoulSpark />
        <HowItWorks />
        <Values />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

`main.tsx`, `index.html`, `tailwind.config.ts`, `index.css`, and the `@/` alias setup
are unchanged from the earlier doc — reuse those as-is. Add `html { scroll-behavior:
smooth; }` to `index.css` if you'd rather not rely on the `scroll-smooth` class.

---

## What's different from the earlier multi-page build

- No React Router — this is one page with anchor-link (`#section`) navigation.
- The anime-girl character, floating orbit nav, and page transitions are gone;
  replaced with your real portrait in the Founder section only.
- All copy now reflects Ridhi Mahtta, the four real services, and the 15-Day program —
  no invented stats, testimonials, or credentials.
- WhatsApp/email/Instagram links are wired to real values in `src/data/site.ts`.

## Still open

- No testimonials or "why Soul Spark" numbers were supplied, so none are shown —
  add them to `src/data/site.ts` once you have real ones.
- Scroll-reveal animations on each section (fade/slide as you scroll into view) aren't
  wired in yet — say the word and I'll add `whileInView` variants throughout.
- If you'd like the earlier anime-character work kept as a secondary page or Easter
  egg rather than discarded, let me know and I'll fold it in as an optional route.

