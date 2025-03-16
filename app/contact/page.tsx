'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Plot No. 619, Sector 82,", "JLPL Industrial Area", "Mohali, Punjab - India"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["amanbio@hotmail.com", "support@hypchlor.com"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 98141 89230", "+91 98141 65536"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <main className="min-h-screen pt-60 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-blue-800 to-pink-600">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help and would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl`}
              />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2 hover:text-gray-800 transition-colors duration-300">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Location</h2>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.2638604989816!2d76.72764927536979!3d30.654697574622112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe959051d4693%3A0x816a71dcf4a9209d!2sAman%20Biotech%20(India)%20%26%20Research%20Laboratories!5e0!3m2!1sen!2sin!4v1742155513511!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -2 }} className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 group-hover:bg-white"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 group-hover:bg-white"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ y: -2 }} className="relative group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 group-hover:bg-white"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 group-hover:bg-white resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold 
                         hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                <span className="relative">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}