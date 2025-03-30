'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';

export interface MPCRingCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  finishes: {
    gold: { [size: string]: number };
    silver: { [size: string]: number };
  };
}

export function MPCRingCard({
  id,
  name,
  description,
  price,
  images,
  category,
  finishes,
}: MPCRingCardProps) {
  const [selectedFinish, setSelectedFinish] = useState<'gold' | 'silver'>('gold');
  const [selectedSize, setSelectedSize] = useState<string>(
    Object.keys(finishes[selectedFinish])[0] || ''
  );
  
  const availableSizes = Object.entries(finishes[selectedFinish])
    .filter(([_, quantity]) => quantity > 0)
    .map(([size]) => size);
  
  const isInStock = availableSizes.length > 0;
  const quantity = selectedSize ? finishes[selectedFinish][selectedSize] || 0 : 0;
  
  // Update selected size when finish changes
  const handleFinishChange = (finish: 'gold' | 'silver') => {
    setSelectedFinish(finish);
    const newAvailableSizes = Object.entries(finishes[finish])
      .filter(([_, quantity]) => quantity > 0)
      .map(([size]) => size);
    
    if (newAvailableSizes.length > 0) {
      setSelectedSize(newAvailableSizes[0]);
    } else {
      setSelectedSize('');
    }
  };

  return (
    <Card className="group overflow-hidden bg-[#2A2A2A] border-[#3A3A3A] transition-all duration-300 hover:border-[#C4A484]/50 hover:shadow-xl">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!isInStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#C4A484] text-white">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold text-white line-clamp-1">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-400 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="text-2xl font-bold text-[#C4A484]">
          ${price.toFixed(2)}
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <button
              onClick={() => handleFinishChange('gold')}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFinish === 'gold'
                  ? 'bg-[#C4A484] text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              Gold
            </button>
            <button
              onClick={() => handleFinishChange('silver')}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFinish === 'silver'
                  ? 'bg-[#C4A484] text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              Silver
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 rounded-md text-xs ${
                  selectedSize === size
                    ? 'bg-[#C4A484] text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                Size {size}
              </button>
            ))}
          </div>
          
          {selectedSize && (
            <div className="text-sm text-gray-400">
              {quantity} in stock (Size {selectedSize})
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-[#C4A484] hover:bg-[#A67B5B] text-white transition-colors duration-300"
          disabled={!isInStock || quantity === 0}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}