import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s work together</h2>
          <p className="mt-2 text-gray-600">Open for freelance projects and collaborations.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="you@example.com" href="mailto:you@example.com" />
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value="+1 (555) 010-0101" href="tel:+15550100101" />
          <ContactCard icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="linkedin.com/in/yourname" href="https://www.linkedin.com" />
          <ContactCard icon={<Instagram className="h-5 w-5" />} label="Instagram" value="@yourhandle" href="https://www.instagram.com" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      whileHover={{ y: -2 }}
      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </motion.a>
  );
}
