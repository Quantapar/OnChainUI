import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { ChainStrip } from "./components/landing/ChainStrip";
import { ComponentPreview } from "./components/landing/ComponentPreview";
import { HowItWorks } from "./components/landing/HowItWorks";
import { Features } from "./components/landing/Features";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <ChainStrip />
      <ComponentPreview />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
