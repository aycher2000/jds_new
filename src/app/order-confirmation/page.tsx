import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <CheckCircle className="w-16 h-16 text-[#C4A484] mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-gray-400 mb-8">
          Your order has been successfully placed. We'll send you an email with your order details shortly.
        </p>
        <div className="space-y-4">
          <Link href="/shop">
            <Button className="w-full bg-[#C4A484] hover:bg-[#A67B5B] text-white">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full border-[#C4A484] text-[#C4A484] hover:bg-[#C4A484]/10">
              View Order History
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 