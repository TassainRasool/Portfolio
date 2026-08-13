import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingChatButton } from "./components/FloatingChatButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
      <FloatingChatButton />
      <Toaster />
    </div>
  );
}
