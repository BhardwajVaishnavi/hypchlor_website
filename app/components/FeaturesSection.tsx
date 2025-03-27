'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
   logo: { src: "/images/bis_logo.png" },
    title: "BIS Certified",
    description: "ISI marked products meeting Bureau of Indian Standards requirements"
  },
  {
    logo: { src: "/images/multiple.png" },
    title: "Multiple Variants",
    description: "Available in various grades and concentrations to suit your needs"
  },
  {
    logo: { src: "/images/flexible.png" },
    title: "Flexible Packaging",
    description: "Available in 1L, 5L, 20L, 25L, and 50L pack sizes"
  }
];

export default function FeaturesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,  
      once: true,     
    });
  }, []);

  return (
    <section className="py-8 sm:py-20 bg-[#eaf1ff]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="boxes bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg h-[220px] 
                         flex flex-col justify-center items-center text-center transition-all duration-300"
              data-aos="zoom-in"
            >
              {/* Logo */}
              <img
                src={feature.logo.src}
                alt={feature.title}
                className="w-[60px] sm:w-[80px] mb-4 transition-all duration-300"
              />

              {/* Title */}
              <h3 className="header text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="paragraph text-sm text-gray-600 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
