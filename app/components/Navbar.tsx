'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar with Social Icons - Lighter color scheme */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="relative w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 backdrop-blur-md" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[gradient_15s_linear_infinite]" />
        
        <div className="relative max-w-7xl mx-auto px-2 md:px-10 py-1 md:py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 md:space-x-6 text-xs md:text-sm font-medium">
              <a href="mailto:amanbio@hotmail.com" className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="bg-white/90 p-1 md:p-1.5 rounded-full">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="hidden sm:inline">amanbio@hotmail.com</span>
              </a>
              <a href="tel:+919814189230" className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="bg-white/90 p-1 md:p-1.5 rounded-full">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="hidden sm:inline">+91 98141 89230</span>
              </a>
            </div>
            <SocialIcons className="justify-end scale-75 md:scale-100" />
          </div>
        </div>
      </motion.div>

      {/* Main Navigation - Modern and unique design */}
      <motion.nav 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="w-full bg-white border-b border-gray-100 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-2 md:px-10 py-2 md:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo_abrl.png"
                  alt="HYPCHLOR Logo"
                  width={100}
                  height={100}
                  className="w-20 md:w-32"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className="relative group px-1"
                >
                  <Link 
                    href={item.path}
                    className="relative inline-block px-4 py-2 text-gray-700 font-medium group"
                  >
                    {item.name}
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500/10 group-hover:bg-blue-500/30 rounded-lg" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
            className="md:hidden mt-4"
          >
            <div className="rounded-2xl bg-gray-50 p-4 space-y-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 10 }}
                  className="block"
                >
                  <Link 
                    href={item.path}
                    className="block px-4 py-2 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;