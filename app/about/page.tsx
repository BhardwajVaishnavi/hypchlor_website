'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-32 sm:pt-48 pb-8 sm:pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="px-4 sm:px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold mb-3 sm:mb-4 text-blue-900 sm:bg-gradient-to-r sm:from-purple-600 sm:to-black sm:bg-clip-text sm:text-transparent px-2">
              Aman Biotech & Research Laboratories
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Leading manufacturer of premium sodium hypochlorite solutions, serving industries worldwide with high-quality chemical products.
            </p>
          </motion.div>

          {/* Company Overview with Image */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative h-[250px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                <Image
                  src="/images/about.jpg"
                  alt="HYPCHLOR Factory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 sm:px-0">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Company Overview</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  Since our establishment, HYPCHLOR® has been at the forefront of chemical manufacturing excellence. 
                  Our state-of-the-art facility in Mohali, Punjab, combines cutting-edge technology with stringent 
                  quality control measures to produce superior sodium hypochlorite solutions.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Founded</h3>
                    <p className="text-gray-600 text-sm sm:text-base">2005</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Location</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Mohali, Punjab</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-20 px-4 sm:px-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Our Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: "BIS Certified",
                  description: "Meeting Bureau of Indian Standards requirements",
                  icon: "🏅"
                },
                {
                  title: "ISO 9001:2015",
                  description: "Quality Management System certified",
                  icon: "✓"
                },
                {
                  title: "GMP Certified",
                  description: "Following Good Manufacturing Practices",
                  icon: "⭐"
                }
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{cert.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-12 mx-4 sm:mx-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To provide high-quality sodium hypochlorite solutions while maintaining
                  the highest standards of safety and environmental responsibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To be the global leader in chemical manufacturing, known for quality,
                  innovation, and sustainable practices.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}