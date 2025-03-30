'use client';

import { ProductGrid } from '@/components/products/ProductGrid';

const products = [
  {
    id: '1',
    name: 'MPC Ring - Gold Edition',
    description: 'Inspired by the legendary MPC (Music Production Center), this unique ring resembles the iconic MPC drum pad layout.',
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
    description: 'Inspired by the legendary MPC (Music Production Center), this unique ring resembles the iconic MPC drum pad layout.',
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
    description: 'Complete DJ equipment testing and maintenance kit for professionals.',
    price: 499.99,
    image: '/images/jds300.png',
    category: 'Audio',
    inStock: true
  },
];

export default function ShopPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Shop</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">All Products</h2>
        <ProductGrid products={products} />
      </section>
    </main>
  );
} 