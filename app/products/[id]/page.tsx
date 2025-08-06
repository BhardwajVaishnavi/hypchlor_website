'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

const getProductDetails = (id: string) => {
  const products = {
    "hypchlor-grade1": {
      name: "HYPCHLOR® (Grade-1) 1%",
      fullName: "",
      manufacturer: "Aman Biotech (India) & Research Laboratories",
      location: "Plot No. 619, Sector 82, JLPL, Industrial Area, Mohali (Punjab)",
      certification: "IS 11673 Part 2 Certified",
      specifications: {
        concentration: "1% available chlorine",
        standard: "",
        appearance: "Clear, pale yellow-green liquid",
        odor: "Mild chlorine-like",
        density: "1.07 - 1.18 at 25°C",
        pH: "11.0 - 11.5",
        stability: "Stable under recommended storage conditions",
        solubility: "Complete in water",
      },
      applications: [
        "Drinking water treatment",
        "Swimming pool sanitization",
        "Food industry sanitization",
        "Healthcare facilities",
        "General disinfection",
        "Water purification"
      ],
      usage: {
        dilution: "Ready to use for most applications",
        safety: [
          "Store in cool, dark place",
          "Keep away from direct sunlight",
          "Wear protective gloves when handling",
          "Avoid contact with eyes",
          "Do not mix with other chemicals",
          "Use in well-ventilated areas"
        ]
      },
      image: "/products/2.png"
    },
    "hypchlor-grade2": {
      name: "HYPCHLOR® (Grade-1) 4.0%-6.0%",
      fullName: "Sodium Hypochlorite Solution (IS 11673 Part 1)",
      manufacturer: "Aman Biotech (India) & Research Laboratories",
      location: "Plot No. 619, Sector 82, JLPL, Industrial Area, Mohali (Punjab)",
      certification: "IS 11673 Part 1 Certified",
      specifications: {
        concentration: "4.0-6.0% available chlorine",
        standard: "IS 11673 Part 1",
        appearance: "Clear yellow-green liquid",
        odor: "Strong chlorine-like",
        density: "1.07 - 1.18 g/ml at 25°C",
        pH: "11.5 - 12.0",
        stability: "Stable under recommended storage conditions",
        solubility: "Complete in water",
      },
      applications: [
        "Industrial water treatment",
        "Municipal water treatment",
        "Commercial cleaning",
        "Industrial sanitization",
        "Wastewater treatment",
        "Textile industry"
      ],
      usage: {
        dilution: "Dilute according to specific application requirements",
        safety: [
          "Use appropriate PPE",
          "Store in cool, dark place",
          "Handle with care",
          "Avoid direct sunlight",
          "Keep away from acids",
          "Use in well-ventilated areas"
        ]
      },
      image: "/products/1.png"
    },
    "hypchlor-grade3": {
      name: "HYPCHLOR® 9% - 11%",
      fullName: "Sodium Hypochlorite Solution (IS 11673 Part 1)",
      manufacturer: "Aman Biotech (India) & Research Laboratories",
      location: "Plot No. 619, Sector 82, JLPL, Industrial Area, Mohali (Punjab)",
      certification: "IS 11673 Part 1 Certified",
      specifications: {
        concentration: "9% - 11% available chlorine",
        standard: "IS 11673 Part 1",
        appearance: "Clear yellow-green liquid",
        odor: "Strong chlorine-like",
        density: "1.20 at 25°C",
        pH: "12.0 - 13.0",
        stability: "Stable under recommended storage conditions",
        solubility: "Complete in water",
      },
      applications: [
        "Heavy industrial cleaning",
        "Paper & pulp processing",
        "Advanced water treatment",
        "Chemical processing",
        "Industrial bleaching",
        "Heavy-duty sanitization"
      ],
      usage: {
        dilution: "Must be diluted before use according to application",
        safety: [
          "Mandatory use of full PPE",
          "Store in cool, dark place",
          "Handle with extreme care",
          "Avoid direct sunlight",
          "Keep away from acids and organics",
          "Use only in well-ventilated areas"
        ]
      },
      image: "/products/3.png"
    },
    "hypchlor1": {
      name: "HYPCHLOR® 12.5% - 15.0%",
      fullName: "Sodium Hypochlorite Solution (IS 11673 Part 2)",
      manufacturer: "Aman Biotech (India) & Research Laboratories",
      location: "Plot No. 619, Sector 82, JLPL, Industrial Area, Mohali (Punjab)",
      certification: "IS 11673 Part 1 Certified",
      specifications: {
        concentration: "12.5% - 15.0% available chlorine",
        standard: "IS 11673 Part 2",
        appearance: "Clear yellow-green liquid",
        odor: "Strong chlorine-like",
        density: "1.20 at 25°C",
        pH: "12.0 - 13.0",
        stability: "Stable under recommended storage conditions",
        solubility: "Complete in water",
      },
      applications: [
        "Heavy industrial cleaning",
        "Paper & pulp processing",
        "Advanced water treatment",
        "Chemical processing",
        "Industrial bleaching",
        "Heavy-duty sanitization"
      ],
      usage: {
        dilution: "Must be diluted before use according to application",
        safety: [
          "Mandatory use of full PPE",
          "Store in cool, dark place",
          "Handle with extreme care",
          "Avoid direct sunlight",
          "Keep away from acids and organics",
          "Use only in well-ventilated areas"
        ]
      },
      image: ""
    }
  };
  
  return products[id as keyof typeof products];
};

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const product = getProductDetails(id as string);
  const [activeTab, setActiveTab] = useState('specifications');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' },
    { id: 'usage', label: 'Usage Guidelines' },
  ];

  return (
    <main className="min-h-screen pt-60 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Back Button */}
        <Link href="/products">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 
                     bg-white rounded-xl shadow-md hover:shadow-xl 
                     transition-all duration-300 group cursor-pointer
                     relative z-10"
          >
            <motion.span 
              className="text-blue-600 text-xl font-bold"
              animate={{ x: 0 }}
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ←
            </motion.span>
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors font-medium">
              Back to Products
            </span>
          </motion.div>
        </Link>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Product Image with Modal */}
            <div className="w-full md:w-1/2 relative">
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer
                         shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setIsImageModalOpen(true)}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Image Modal */}
              <AnimatePresence>
                {isImageModalOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsImageModalOpen(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                      className="relative w-full max-w-3xl aspect-square"
                      onClick={e => e.stopPropagation()}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="80vw"
                        priority
                      />
                      <button
                        onClick={() => setIsImageModalOpen(false)}
                        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2
                                 hover:bg-black/70 transition-colors"
                      >
                        ✕
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 
                           bg-clip-text text-transparent">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.fullName}</p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-4 mb-6"
              >
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
                  {product.certification}
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full font-medium">
                  {product.specifications.concentration}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 text-lg font-medium transition-colors duration-300
                           ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8"
            >
              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <h3 className="text-gray-600 capitalize mb-2">{key.replace(/([A-Z])/g, ' $1')}</h3>
                      <p className="text-lg font-medium text-gray-900">{value}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.applications.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-gray-50 rounded-xl text-center hover:bg-blue-50 
                               transition-colors duration-300 cursor-pointer"
                    >
                      <p className="text-lg font-medium text-gray-800">{app}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-blue-50 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold mb-4">Dilution Ratio</h3>
                    <p className="text-gray-700">{product.usage.dilution}</p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.usage.safety.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-red-50 rounded-lg"
                      >
                        <span className="text-red-500 text-2xl">⚠</span>
                        <p className="text-gray-700">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

const InfoSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-xl shadow-md"
  >
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </motion.section>
);