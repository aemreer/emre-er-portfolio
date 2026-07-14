import React from "react";
import { motion } from "framer-motion";

const stats = [
  ["React", "Component Odaklı Geliştirme"],
  ["Arayüz", "Kullanıcı Odaklı Tasarım"],
  ["Performans", "Hızlı ve Duyarlı Arayüzler"],
];

export default function Stats() {
  return (
    <section className="relative -mt-10 pb-12">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map(([value, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-5"
          >
            <p className="text-2xl font-semibold text-white sm:text-3xl">{value}</p>
            <p className="mt-2 text-sm text-mist">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
