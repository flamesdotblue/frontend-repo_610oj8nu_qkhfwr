import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // Ensure smooth scroll for in-page anchors
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => document.documentElement.classList.remove('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">Your Name</span>
            <span className="text-gray-800"> • Editor</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm shadow hover:opacity-90 transition">
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  );
}

export default App;
