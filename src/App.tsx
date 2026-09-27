import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Founder } from "@/components/sections/Founder";
import { HandwritingProgram } from "@/components/sections/HandwritingProgram";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Values } from "@/components/sections/Values";
import { WhySoulSpark } from "@/components/sections/WhySoulSpark";

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
