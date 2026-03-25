import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { ComponentPreview } from "./components/landing/ComponentPreview";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <ComponentPreview />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
