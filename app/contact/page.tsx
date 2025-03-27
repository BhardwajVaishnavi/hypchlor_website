'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

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
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: ["Plot No. 619, Sector 82,", "JLPL Industrial Area", "Mohali, Punjab - India"],
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: ["amanbio@hotmail.com", "support@hypchlor.com"],
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      details: ["+91 98141 89230", "+91 98141 65536"],
    }
  ];

  return (
    <main>
       <div
        className="relative contactus-banner p-12 bg-cover bg-center bg-no-repeat pt-[134px]"
        style={{ backgroundImage: "url(../images/contactus-banner.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center flex flex-col items-center">
        <h1 className="text-5xl font-medium text-white mb-4 text-center">
        Get in Touch
        </h1>
        <p className="text-lg font-normal text-white text-center">
        Have questions about our products or services? We're here to help.
        </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-12">
        

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
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl`}
              />
              <div className="contact-boxes relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-[200px]">
                <div className='flex flex-row gap-7'>
                <div className='icons text-[30px]'>
                  {info.icon}
                </div>
                <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2 hover:text-gray-800 transition-colors duration-300">
                    {detail}
                  </p>
                  ))}
                </div>
                  
                </div>
                
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
                className="w-full bg-[#011938] text-white px-8 py-4 rounded-xl font-semibold border 
                         hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:bg-[#fff] hover:border hover:border-[#011938] hover:text-black"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                <span className="relative">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}