'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
}

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    {
      name: "HYPCHLOR® (Grade-1) 4%-6% (IS 11673 Part 1)",
      image: "/products/1.png",
      description: "BIS certified solution meeting IS 11673(Part1):2019 standards",
      features: ["ISI Marked", "Premium Quality", "Industrial Grade"]
    },
    {
      name: "HYPCHLOR® (Grade-1) 1% (IS 11673 Part 2)",
      image: "/products/2.png",
      description: "BIS certified solution conforming to IS 11673(Part2):2019",
      features: ["ISI Marked", "Consistent Quality", "Reliable Performance"]
    },
    {
      name: "HYPCHLOR® 10% ± 1% (IS 11673 Part 3)",
      image: "/products/3.png",
      description: "Precise concentration for specialized applications",
      features: ["Accurate Concentration", "Stable Formula", "Versatile Use"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-white to-blue-50 mt-4 sm:mt-32">
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-1.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        ←
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-1.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        →
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-3 sm:p-12">
            {/* Content Section */}
            <motion.div 
              className="flex flex-col justify-center space-y-2 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-1 sm:space-y-4">
                <h3 className="text-base sm:text-4xl font-bold text-gray-800 leading-tight">
                  {products[currentIndex].name}
                </h3>
                <p className="text-xs sm:text-lg text-gray-600">
                  {products[currentIndex].description}
                </p>
              </div>
              
              <ul className="space-y-1 sm:space-y-4">
                {products[currentIndex].features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-1.5 sm:space-x-3"
                  >
                    <span className="flex-shrink-0 w-3 h-3 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] sm:text-sm">✓</span>
                    </span>
                    <span className="text-xs sm:text-base text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 sm:mt-8 bg-blue-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl w-fit
                          shadow-lg hover:bg-blue-700 transition-colors duration-300
                          flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-base"
              >
                <span>Learn More</span>
                <span>→</span>
              </motion.button>
            </motion.div>

            {/* Image Section - Increased size */}
            <div className="relative flex items-center justify-center h-[250px] sm:h-[500px]">
              <div className="relative w-[250px] h-[250px] sm:w-[500px] sm:h-[500px]">
                {/* Decorative backgrounds */}
                <div className="absolute inset-0 bg-blue-100/50 rounded-3xl transform -rotate-6" />
                <div className="absolute inset-0 bg-blue-50/50 rounded-3xl transform rotate-3" />
                
                {/* Image container */}
                <motion.div 
                  className="relative w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={products[currentIndex].image}
                        alt={products[currentIndex].name}
                        fill
                        sizes="(max-width: 640px) 250px, 500px"
                        className="object-contain product-image-float"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-1 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-3 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-110
                      ${index === currentIndex 
                        ? 'bg-blue-600 w-4 sm:w-8' 
                        : 'bg-gray-300 hover:bg-blue-400'}`}
          />
        ))}
      </div>
    </div>
  );
};