'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface CheckoutFormData {
  email: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export default function CheckoutForm() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement Stripe payment processing
      // For now, we'll just simulate a successful order
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Clear the cart
      clearCart();
      
      // Show success message
      toast.success('Order placed successfully!');
      
      // Redirect to success page
      router.push('/order-confirmation');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-[#2A2A2A] p-6 rounded-lg border border-[#3A3A3A]">
        <h2 className="text-xl font-semibold text-white mb-4">Checkout</h2>
        <p className="text-gray-400 mb-6">Your cart is empty. Please add items to proceed with checkout.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#2A2A2A] p-6 rounded-lg border border-[#3A3A3A]">
      <h2 className="text-xl font-semibold text-white mb-6">Shipping Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
          />
        </div>

        <div>
          <Label htmlFor="name" className="text-white">Full Name</Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
          />
        </div>

        <div>
          <Label htmlFor="address" className="text-white">Address</Label>
          <Input
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="text-white">City</Label>
            <Input
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
            />
          </div>

          <div>
            <Label htmlFor="state" className="text-white">State</Label>
            <Input
              id="state"
              name="state"
              required
              value={formData.state}
              onChange={handleInputChange}
              className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="zipCode" className="text-white">ZIP Code</Label>
            <Input
              id="zipCode"
              name="zipCode"
              required
              value={formData.zipCode}
              onChange={handleInputChange}
              className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
            />
          </div>

          <div>
            <Label htmlFor="country" className="text-white">Country</Label>
            <Input
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleInputChange}
              className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-white">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-[#3A3A3A] border-[#4A4A4A] text-white"
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          className="w-full bg-[#C4A484] hover:bg-[#A67B5B] text-white"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : `Pay $${getTotal().toFixed(2)}`}
        </Button>
      </div>
    </form>
  );
} 