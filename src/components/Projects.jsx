import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const sampleProjects = [
  {
    title: 'Product Launch Reel',
    thumb:
      'https://images.unsplash.com/photo-1520357456831-049768987cb5?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Commercial', 'Short-Form'],
  },
  {
    title: 'Travel Montage',
    thumb:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Vlog', 'Cinematic'],
  },
  {
    title: 'Music Video Cut',
    thumb:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Music', 'Performance'],
  },
  {
    title: 'Event Highlight',
    thumb:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1400&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Events', 'Recap'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of edits I loved crafting.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <h3 className="text-white drop-shadow font-semibold">{p.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] rounded-full bg-white/90 px-2 py-0.5 text-gray-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full bg-white/90 p-3 text-gray-900 shadow">
                  <Play className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
