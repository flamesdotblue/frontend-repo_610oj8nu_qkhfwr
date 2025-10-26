import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a video editor focused on storytelling, pacing, and sound design. Over the past few years, I’ve worked with creators and brands to deliver scroll-stopping shorts, compelling promos, and cinematic visuals.
            </p>
            <p className="mt-3 text-gray-700">
              My toolkit includes Premiere Pro, After Effects, Davinci Resolve, Audition, and a healthy dose of curiosity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Short-form', 'YouTube', 'Commercial', 'Motion Graphics', 'Color'].map((chip) => (
                <span key={chip} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 p-2">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                alt="Editing setup"
                className="rounded-xl w-full h-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
