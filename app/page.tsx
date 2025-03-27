"use client";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[134px]">
        <HeroSection />
        <ProductSection />
      <FeaturesSection />
      </main>
    </div>
  );
}
