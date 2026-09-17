import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustIntro } from "./components/TrustIntro";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Portfolio } from "./components/Portfolio";
import { WhyHow2Host } from "./components/WhyHow2Host";
import { FeatureHighlight } from "./components/FeatureHighlight";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustIntro />
        <Services />
        <HowItWorks />
        <Pricing />
        <Portfolio />
        <WhyHow2Host />
        <FeatureHighlight />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
