
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 backdrop-blur-md">
      <div className="relative w-full mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
            Aman Biotech & Research Laboratories
          </h2>
          <p className="text-xs md:text-sm text-blue-950 leading-relaxed">
            Leading manufacturer of premium Sodium Hypochlorite Solution. 
            BIS, ISO, and GMP certified.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Visit Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <h3 className="text-sm md:text-base font-semibold text-blue-900 mb-2">Visit Us</h3>
            <address className="not-italic text-blue-950 text-xs md:text-sm space-y-0.5">
              <p>Plot No. 619, Sector 82,</p>
              <p>JLPL Industrial Area</p>
              <p>Mohali, Punjab - India</p>
            </address>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <h3 className="text-sm md:text-base font-semibold text-blue-900 mb-2">Contact Us</h3>
            <div className="space-y-0.5 text-xs md:text-sm">
              <a href="tel:+919814189230" className="block hover:text-blue-950 transition-colors">
                +91 98141 89230
              </a>
              <a href="tel:+919814165536" className="block hover:text-blue-950 transition-colors">
                +91 98141 65536
              </a>
              <a href="mailto:amanbio@hotmail.com" className="block hover:text-blue-950 transition-colors">
                amanbio@hotmail.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <h3 className="text-sm md:text-base font-semibold text-blue-900 mb-2">Quick Links</h3>
            <div className="space-y-0.5 text-xs md:text-sm">
              <a href="/products" className="block hover:text-blue-950 transition-colors">Products</a>
              <a href="/about" className="block hover:text-blue-950 transition-colors">About Us</a>
              <a href="/contact" className="block hover:text-blue-950 transition-colors">Contact</a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <h3 className="text-sm md:text-base font-semibold text-blue-900 mb-2">Follow Us</h3>
            <SocialIcons />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-6 pt-4 border-t border-blue-950"
        >
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[10px] md:text-xs text-center text-blue-950">
              © {currentYear} Aman Biotech & Research Laboratories. All rights reserved.
            </p>
            <p className="text-[10px] md:text-xs text-center text-blue-950">
              Designed by{' '}
              <a 
                href="https://wipstertechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-950 hover:text-blue-900 transition-colors"
              >
                Wipster Technologies Private Limited
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;