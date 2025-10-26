import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full bg-black text-white px-4 py-1 text-xs tracking-wider uppercase mb-4">
              Video Editor • Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Crafting impactful stories through <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">cinematic edits</span>
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg">
              I turn raw footage into engaging narratives. Explore my latest client work, passion projects, and commercial edits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-medium shadow hover:opacity-90 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-3 font-medium shadow border border-black/10 hover:bg-white transition">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
