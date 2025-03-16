'use client';
import { Carousel } from './Carousel';

export default function ProductSection() {
  return (
    <section className="py-8 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-blue-500">
          Our Product Range
        </h2>
        <Carousel />
      </div>
    </section>
  );
}