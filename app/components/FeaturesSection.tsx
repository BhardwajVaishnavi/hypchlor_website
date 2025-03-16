'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: "BIS Certified",
    description: "ISI marked products meeting Bureau of Indian Standards requirements"
  },
  {
    title: "Multiple Variants",
    description: "Available in various grades and concentrations to suit your needs"
  },
  {
    title: "Flexible Packaging",
    description: "Available in 1L, 5L, 20L, 25L, and 50L pack sizes"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-8 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}