'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth < 640);

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="relative w-full mt-32 sm:mt-32 md:mt-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
      >
        {/* Desktop Banner */}
        <div className="hidden sm:block relative w-full h-[40vh] lg:h-[60vh]">
          <Image
            src="/images/banner.png"
            alt="HYPCHLOR Banner"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Mobile Banner */}
        <div className="block sm:hidden relative w-full">
          <Image
            src="/images/banner_mobile.png"
            alt="HYPCHLOR Banner"
            width={1080}
            height={720}
            priority
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}