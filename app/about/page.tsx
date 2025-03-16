'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-40 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r to-black from-purple-600 bg-clip-text text-transparent">
              "Aman Biotech & Research Laboratories"
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading manufacturer of premium sodium hypochlorite solutions, serving industries worldwide with high-quality chemical products.
            </p>
          </motion.div>

          {/* Company Overview with Image */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about.jpg"
                  alt="HYPCHLOR Factory"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Company Overview</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Since our establishment, HYPCHLOR® has been at the forefront of chemical manufacturing excellence. 
                  Our state-of-the-art facility in Mohali, Punjab, combines cutting-edge technology with stringent 
                  quality control measures to produce superior sodium hypochlorite solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-800">Founded</h3>
                    <p className="text-gray-600">2005</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Mohali, Punjab</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality sodium hypochlorite solutions while maintaining
                  the highest standards of safety and environmental responsibility.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
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