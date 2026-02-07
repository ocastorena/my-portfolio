import { Footer, Navbar } from "./components/layout";
import { About, Contact, Hero, Projects, Skills } from "./features";
import { SECTION_IDS } from "./config/sections";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <div id={SECTION_IDS.about} className="scroll-mt-15">
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
