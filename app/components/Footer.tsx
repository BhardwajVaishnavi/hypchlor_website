
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 backdrop-blur-md">
      <div className="relative w-full mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Aman Biotech & Research Laboratories</h2>
            <p className="text-blue-950 text-sm leading-relaxed">
              Leading manufacturer of premium Sodium Hypochlorite Solution. 
              BIS, ISO, and GMP certified.
            </p>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Visit Us</h3>
            <address className="not-italic text-blue-950 text-sm space-y-1">
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
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-blue-950">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <a href="tel:+919814189230" className="hover:text-blue-950 transition-colors">+91 98141 89230</a>
                  <a href="tel:+919814165536" className="hover:text-blue-950 transition-colors">+91 98141 65536</a>
                </div>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-950">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <a href="mailto:amanbio@hotmail.com" className="hover:text-blue-950 transition-colors">
                  amanbio@hotmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-950">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>TELEFAX: 0172-2970619</span>
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Follow Us</h3>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-blue-950">
            <p>© {currentYear} Aman Biotech & Research Laboratories. All rights reserved.</p>
            <p className="text-center md:text-right">
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