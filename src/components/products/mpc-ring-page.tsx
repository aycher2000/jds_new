'use client';

import { MPCRingGrid } from '@/components/products/MPCRingGrid';

export default function MPCRingsPage() {
  // Sample data based on your provided information
  const mpcRings = [
    {
      id: 'mpc-ring-gold',
      name: 'MPC Ring - Gold Edition',
      description: 'Inspired by the legendary MPC (Music Production Center), this unique ring resembles the iconic MPC drum pad layout. Perfect for producers, DJs, and beatmakers.',
      price: 29.99,
      images: [
        '/images/mpc-ring-gold.jpg',
        '/images/mpc-ring-gold-angle.jpg',
      ],
      category: 'Jewelry',
      finishes: {
        gold: {
          '8': 5,
          '9': 7,
        },
        silver: {
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0,
          '11': 0,
        }
      }
    },
    {
      id: 'mpc-ring-silver',
      name: 'MPC Ring - Silver Edition',
      description: 'Inspired by the legendary MPC (Music Production Center), this unique ring resembles the iconic MPC drum pad layout. Perfect for producers, DJs, and beatmakers.',
      price: 29.99,
      images: [
        '/images/mpc-ring-silver.jpg',
        '/images/mpc-ring-silver-angle.jpg',
      ],
      category: 'Jewelry',
      finishes: {
        gold: {
          '8': 0,
          '9': 0,
        },
        silver: {
          '7': 4,
          '8': 8,
          '9': 7,
          '10': 1,
          '11': 1,
        }
      }
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">MPC Rings Collection</h1>
      <p className="text-gray-400 mb-6">
        Inspired by the legendary MPC (Music Production Center), these unique rings are a must-have for producers, DJs, and beatmakers who live for rhythm and creativity. Available in gold and silver finishes.
      </p>
      <MPCRingGrid products={mpcRings} />
    </div>
  );
}