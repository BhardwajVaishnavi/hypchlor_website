'use client';
import { Carousel } from './Carousel';

export default function ProductSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-500">
          Our Product Range
        </h2>
        <Carousel />
      </div>
    </section>
  );
}