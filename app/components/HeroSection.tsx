'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] mt-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
      >
        <Image
          src="/images/banner.png"
          alt="HYPCHLOR Banner"
          fill
          priority
        />
      </motion.div>
    </section>
  );
}