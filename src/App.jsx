import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-dark-900 min-h-screen">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Nav />

      {/* Sidebar occupies the left 300px on desktop; content scrolls beside it */}
      <div className="lg:pl-[300px]">
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* The sidebar takes over at lg and already carries the social links
            and resume, so the footer is mobile/tablet only. */}
        <div className="lg:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
