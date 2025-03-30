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

export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  inStock,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden bg-[#2A2A2A] border-[#3A3A3A] transition-all duration-300 hover:border-[#C4A484]/50 hover:shadow-xl">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!inStock && (
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
      <CardContent className="p-4 pt-0">
        <div className="text-2xl font-bold text-[#C4A484]">
          ${price.toFixed(2)}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-[#C4A484] hover:bg-[#A67B5B] text-white transition-colors duration-300"
          disabled={!inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}