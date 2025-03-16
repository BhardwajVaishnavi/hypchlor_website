'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      id: "hypchlor-grade1",
      name: "HYPCHLOR® 4%-6%",
      concentration: "4%-6%",
      description: "High-concentration sodium hypochlorite for industrial applications",
      applications: ["Water Treatment", "Textile Industry", "Paper & Pulp"],
      image: "/products/1.png"
    },
    {
      id: "hypchlor-grade2",
      name: "HYPCHLOR® 1%",
      concentration: "1%",
      description: "Medium-concentration solution for commercial use",
      applications: ["Swimming Pools", "Commercial Cleaning", "Sanitization"],
      image: "/products/2.png"
    },
    {
      id: "hypchlor-grade3",
      name: "HYPCHLOR® 10% ± 1%",
      concentration: "3-5%",
      description: "Suitable for household cleaning and disinfection",
      applications: ["Home Cleaning", "Laundry", "General Sanitization"],
      image: "/products/3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-4 sm:py-8 pt-32 sm:pt-60">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r to-blue-600 from-blue-800 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality sodium hypochlorite solutions
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                              transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-64 bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 
                                 transition-colors duration-300">
                      {product.name}
                    </h2>
                    
                    <div className="inline-block px-3 py-1 mb-4 bg-blue-100 text-blue-600 rounded-full 
                                  font-semibold text-sm">
                      Concentration: {product.concentration}
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>

                    {/* Applications */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-700">Applications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm
                                     hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-6 flex justify-end">
                      <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800">
                        View Details
                        <svg 
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}