'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="group relative overflow-hidden bg-[#2A2A2A] border-[#3A3A3A] transition-all duration-300 hover:border-[#C4A484]/50 hover:shadow-xl">
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
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-2">
        <Button
          className="w-full sm:w-1/2 bg-[#C4A484] hover:bg-[#A67B5B] text-white transition-colors duration-300"
          disabled={!inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="w-full sm:w-1/2 border-[#C4A484] text-[#C4A484] hover:bg-[#C4A484]/10 hover:text-[#C4A484] transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            setShowDetails(true);
          }}
        >
          <Info className="w-4 h-4 mr-2" />
          Details
        </Button>
      </CardFooter>

      {/* Details Panel */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/70 backdrop-blur-sm transform transition-transform duration-300 flex flex-col",
          showDetails ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b border-[#3A3A3A]">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
            onClick={() => setShowDetails(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-4 flex-grow overflow-auto">
          <p className="text-white/90 mb-6 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex justify-between">
              <span className="text-white/70">Category:</span>
              <span className="text-white font-medium">{category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Price:</span>
              <span className="text-[#C4A484] font-bold">${price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Availability:</span>
              <span className={inStock ? "text-green-400" : "text-red-400"}>
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-[#3A3A3A]">
          <Button
            className="w-full bg-[#C4A484] hover:bg-[#A67B5B] text-white transition-colors duration-300"
            disabled={!inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}