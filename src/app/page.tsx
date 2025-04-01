'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Truck, Star, Globe } from 'lucide-react';
import { ProductGrid } from '@/components/products/ProductGrid';

const featuredProducts = [
  {
    id: '1',
    name: 'MPC Ring - Gold Edition',
    description: 'Inspired by the legendary MPC 2000XL, this unique ring resembles the iconic MPC drum pad layout.',
    price: 29.99,
    image: '/images/products/mpc-ring/gold.jpg',
    category: 'Jewelry',
    inStock: true,
    finishes: {
      gold: {
        '7': 10,
        '8': 10,
        '9': 10,
        '10': 10,
        '11': 10
      },
      silver: {
        '7': 10,
        '8': 10,
        '9': 10,
        '10': 10,
        '11': 10
      }
    }
  },
  {
    id: '2',
    name: 'MPC Ring - Silver Edition',
    description: 'Inspired by the legendary MPC 2000XL, this unique ring resembles the iconic MPC drum pad layout.',
    price: 29.99,
    image: '/images/products/mpc-ring/silver.jpg',
    category: 'Jewelry',
    inStock: true,
    finishes: {
      gold: {
        '7': 10,
        '8': 10,
        '9': 10,
        '10': 10,
        '11': 10
      },
      silver: {
        '7': 10,
        '8': 10,
        '9': 10,
        '10': 10,
        '11': 10
      }
    }
  },
  {
    id: '3',
    name: 'Sucker DJ Testing Kit',
    description: 'Complete fake/sucker DJ testing kit for professionals. Comes with a USB cord cutter!',
    price: 499.99,
    image: '/images/jds300.png',
    category: 'Audio',
    inStock: true
  },
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Image"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Welcome to JustDopeShop
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            Live. Unfiltered. Authentic.
          </p>
          <Link
            href="/shop"
            className="bg-[#C4A484] hover:bg-[#8B7355] text-white px-8 py-4 rounded-full 
            transition-all duration-300 flex items-center gap-2 text-lg"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Products
        </h2>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Why Shop With Us */}
      <section className="bg-[#2A2A2A] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: 'Limited Edition Drops', desc: 'Exclusive items you won\'t find elsewhere' },
              { icon: Truck, title: 'Fast & Secure Checkout', desc: 'Quick, safe, and reliable delivery' },
              { icon: Globe, title: 'Worldwide Shipping', desc: 'We deliver to collectors globally' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <feature.icon className="w-12 h-12 text-[#C4A484] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              name: 'James K.',
              text: 'Best collection of rare items I\'ve ever seen. The quality is unmatched!',
              rating: 5,
            },
            {
              id: 2,
              name: 'Sarah M.',
              text: 'Fast shipping and amazing customer service. Will definitely shop here again!',
              rating: 5,
            },
            {
              id: 3,
              name: 'Mike R.',
              text: 'Found pieces here that I couldn\'t find anywhere else. True collectors\' paradise!',
              rating: 5,
            },
          ].map((testimonial) => (
            <div key={testimonial.id} className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C4A484] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="text-[#C4A484] font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2A2A2A] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Exclusive Drops
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter and be the first to know about new releases
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full bg-[#1A1A1A] text-white border border-[#3A3A3A] 
              focus:outline-none focus:border-[#C4A484]"
            />
            <button className="px-8 py-3 bg-[#C4A484] hover:bg-[#8B7355] text-white rounded-full 
            transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
