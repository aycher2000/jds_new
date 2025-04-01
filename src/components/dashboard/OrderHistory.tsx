'use client';

import Image from 'next/image';
import { Order } from '@/types/order';
import { getOrderStatus, formatDate } from '@/lib/orders';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface OrderHistoryProps {
  orders: Order[];
}

export default function OrderHistory({ orders }: OrderHistoryProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-white mb-2">No orders yet</h3>
        <p className="text-gray-400 mb-6">Start shopping to see your orders here.</p>
        <Link href="/shop">
          <Button className="bg-[#C4A484] hover:bg-[#A67B5B] text-white">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const status = getOrderStatus(order.status);
        return (
          <div
            key={order.id}
            className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] overflow-hidden"
          >
            <div className="p-4 border-b border-[#3A3A3A] flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Order #{order.id}</p>
                <p className="text-sm text-gray-400">
                  Placed on {formatDate(order.createdAt)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${status.bgColor} ${status.color}`}
                >
                  {status.label}
                </span>
                <Link href={`/dashboard/orders/${order.id}`}>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                      <p className="text-[#C4A484] font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#3A3A3A]">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total</span>
                  <span className="text-[#C4A484] font-bold">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 