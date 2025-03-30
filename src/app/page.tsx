import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to JustDopeShop
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your one-stop destination for premium products and exclusive deals
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#C4A484] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#B39474] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards will be added here */}
            <div className="bg-[#2A2A2A] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/product-placeholder.jpg"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-400 mb-4">Product description goes here...</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#C4A484] font-semibold">$99.99</span>
                  <button className="bg-[#C4A484] text-white px-4 py-2 rounded hover:bg-[#B39474] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#2A2A2A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-[#1A1A1A] text-white border border-gray-700 focus:outline-none focus:border-[#C4A484]"
            />
            <button
              type="submit"
              className="bg-[#C4A484] text-white px-6 py-2 rounded-lg hover:bg-[#B39474] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
