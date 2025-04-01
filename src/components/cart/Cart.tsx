'use client';

import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import Link from 'next/link';

export default function Cart() {
  const { items, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some items to your cart to see them here.</p>
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-2xl font-semibold">${getTotal().toFixed(2)}</span>
        </div>
        
        <div className="flex gap-4">
          <Link
            href="/shop"
            className="flex-1 text-center border border-black px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/checkout"
            className="flex-1 text-center bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
} 