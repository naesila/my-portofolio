import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Journey } from './components/Journey';
import { Testimonials } from './components/Testimonials';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Journey />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
