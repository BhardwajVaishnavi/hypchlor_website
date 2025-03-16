'use client';
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
    </main>
  );
}
