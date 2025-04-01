'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OrderSummary() {
  const { items, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-[#2A2A2A] p-6 rounded-lg border border-[#3A3A3A]">
        <h2 className="text-xl font-semibold text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-6">Add some items to your cart to proceed with checkout.</p>
        <Link href="/shop">
          <Button className="w-full bg-[#C4A484] hover:bg-[#A67B5B] text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#2A2A2A] p-6 rounded-lg border border-[#3A3A3A]">
      <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">{item.name}</h3>
              <p className="text-gray-400">Quantity: {item.quantity}</p>
              <p className="text-[#C4A484] font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#3A3A3A] pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-white">${getTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">Shipping</span>
          <span className="text-white">Free</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-white font-semibold">Total</span>
          <span className="text-[#C4A484] text-xl font-bold">
            ${getTotal().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
} 