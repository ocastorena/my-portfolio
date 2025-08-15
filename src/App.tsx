import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <div id="section-2" className="scroll-mt-15">
        <About />
        <Skills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
