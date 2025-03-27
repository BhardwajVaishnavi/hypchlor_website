'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

   useEffect(() => {
      AOS.init({
        duration: 1500,  
        once: true,     
      });
    }, []);
  return (
    <div>
      <div
        className="relative about-banner p-12 bg-cover bg-center bg-no-repeat pt-[134px]"
        style={{ backgroundImage: "url(../images/about-banner.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center flex flex-col items-center">
        <h1 className="text-5xl font-medium text-white mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg font-normal text-white text-center">
        Leading manufacturer of premium sodium hypochlorite solutions, serving industries worldwide with high-quality chemical products.
        </p>
        </div>
      </div>

      <div className="overviews grid grid-cols-1 lg:grid-cols-2 p-12 gap-8">
      
      {/* Left Side (Fixed Grid with Images and Experience Card) */}
      <div className="flex justify-center items-center">
  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[800px]"  data-aos="zoom-in">
    
    {/* Main Image */}
    <div className="relative w-full h-[385px]">
      <Image
        src="/images/image-1.jpg"  // Replace with your image path
        alt="Graduating child"
        layout="fill"
        objectFit="cover"
        className="rounded-t-2xl"
      />
    </div>

    {/* Bottom-Left Box (Experience) */}
    <motion.div
      className="absolute bottom-4 left-4 bg-white p-4 shadow-md rounded-xl flex items-center"
      animate={{ y: [0, -15, 0] }}  // Smooth jump
      transition={{
        duration: 1.8,         // Slightly slower duration
        repeat: Infinity,      // Infinite loop
        repeatType: "mirror",  // Smooth yoyo-like effect
        ease: "easeInOut"      // Smooth motion
      }}
    >
      <span className="text-[#4c0efa] text-4xl font-bold mr-2">20+</span>
      <div>
        <p className="text-sm font-semibold">YEARS EXPERIENCE</p>
        <p className="text-xs text-gray-500">JUST ACHIEVED</p>
      </div>
    </motion.div>

    {/* Top-Right Box (Location) */}
    <motion.div
      className="absolute top-8 right-4 bg-white p-4 shadow-md rounded-xl flex items-center"
      animate={{ y: [0, -15, 0] }}  // Smooth jump
      transition={{
        duration: 1.8,         // Slightly slower duration
        repeat: Infinity,      // Infinite loop
        repeatType: "mirror",  // Smooth yoyo-like effect
        ease: "easeInOut"      // Smooth motion
      }}
    >
      <div>
        <p className="text-sm font-semibold">LOCATION</p>
        <span className="text-[#4c0efa] text-lg font-bold">Mohali, Punjab</span>
      </div>
    </motion.div>

  </div>
</div>


      {/* Right Side (Content Section) */}
      <div className="content p-12 flex flex-col justify-center" data-aos="zoom-in-left">
        <h1 className="text-4xl font-bold mb-6">Company Overview</h1>
        <p className="text-lg leading-relaxed">
          Since our establishment, <span className="font-bold">HYPCHLOR®</span> has been at the forefront of chemical manufacturing excellence. Our state-of-the-art facility in Mohali, Punjab, combines cutting-edge technology with stringent quality control measures to produce superior sodium hypochlorite solutions.
        </p>
      </div>

    </div>

      <div>
        <div className="p-12">

          {/* Certifications */}
          <div 
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
                <div
                  key={cert.title}
                  className="bg-white p-6 sm:p-8 shadow hover:shadow-xl transition-shadow about-boxes" data-aos="fade-up"
                >
                  <div className="text-3xl sm:text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{cert.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-12 mx-4 sm:mx-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className='flex gap-2'>
                <img src="/images/mission.png" alt="" className='w-[20%] h-[35%]'/>
                <div className="content">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To provide high-quality sodium hypochlorite solutions while maintaining
                  the highest standards of safety and environmental responsibility.
                </p>
                </div>
              </div>
              <div className='flex gap-2'>
                <img src="/images/vision.png" alt="" className='w-[20%] h-[40%]'/>
                <div className="content">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To be the global leader in chemical manufacturing, known for quality,
                  innovation, and sustainable practices.
                </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}