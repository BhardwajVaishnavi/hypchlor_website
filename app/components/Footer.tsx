
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      
      {/* <div className="last-part bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 backdrop-blur-md p-10"> */}

    <div className="last-part bg-[#011938] p-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center lg:justify-items-center">
        <div className="first-row">
          <div className='mb-5'>
            <img src="/images/bg-logo.png" alt="logo" className='w-[40%]'/>
            <h2 className="text-[17px] font-medium text-white mb-1">
            Aman Biotech & Research Laboratories
          </h2>
          <p className="text-xs md:text-sm text-[#a0bbdd] !leading-6">
            Leading manufacturer of premium Sodium Hypochlorite Solution. 
            BIS, ISO, and GMP certified.
          </p>
          </div>
          <div>
          <h3 className="text-sm md:text-base font-medium text-white mb-2">Follow Us</h3>
          <SocialIcons />
          </div>
        </div>
        <div className="second-row">
        <h3 className="text-lg font-medium text-white mb-2">Quick Links</h3>
            <div className="space-y-0.5 text-[15px] text-[#a0bbdd]">
              <a href="/products" className="block hover:text-[#2e8dcb] transition-colors mb-1">Products</a>
              <a href="/about" className="block hover:text-[#2e8dcb] transition-colors mb-1">About Us</a>
              <a href="/contact" className="block hover:text-[#2e8dcb] transition-colors mb-1">Contact</a>
              </div>
        </div>
        <div className="third-row">
        <h3 className="text-lg font-medium text-white mb-2">Contact Us</h3>
            <div className="space-y-0.5 text-[15px] text-[#a0bbdd]">
              <a href="tel:+919814189230" className="block hover:text-[#2e8dcb] transition-colors mb-1">
                +91 98141 89230
              </a>
              <a href="tel:+919814165536" className="block hover:text-[#2e8dcb] transition-colors mb-1">
                +91 98141 65536
              </a>
              <a href="mailto:amanbio@hotmail.com" className="block hover:text-[#2e8dcb] transition-colors mb-1">
                amanbio@hotmail.com
              </a>
            </div>
        </div>
        <div className="fourth-row">
        <h3 className="text-lg font-medium text-white mb-2">Visit Us</h3>
            <address className="not-italic text-[#a0bbdd] text-[15%] md:text-sm space-y-0.5">
              <p>Plot No. 619, Sector 82,</p>
              <p>JLPL Industrial Area</p>
              <p>Mohali, Punjab - India</p>
            </address>
        </div>

      </div>

    </div>
    <div className="flex flex-col items-center space-y-2 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 backdrop-blur-md p-3">
            <p className="text-[15px] text-center text-black">
              © {currentYear} Aman Biotech & Research Laboratories. All rights reserved.Designed by{' '}
              <a 
                href="https://wipstertechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-semibold hover:text-[#eb1d25] transition-colors"
              >
                Wipster Technologies Private Limited
              </a>
            </p>
          </div>
    </div>
  );
};

export default Footer;