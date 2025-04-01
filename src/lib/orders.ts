import { Order, OrderStatus } from '@/types/order';

export const getOrderStatus = (status: Order['status']): OrderStatus => {
  const statuses: Record<Order['status'], OrderStatus> = {
    pending: {
      label: 'Pending',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    processing: {
      label: 'Processing',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    shipped: {
      label: 'Shipped',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    delivered: {
      label: 'Delivered',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    cancelled: {
      label: 'Cancelled',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  };

  return statuses[status];
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Mock data for development
export const mockOrders: Order[] = [
  {
    id: '1',
    userId: 'user1',
    items: [
      {
        id: '1',
        name: 'Gold Chain Necklace',
        price: 99.99,
        quantity: 1,
        image: '/images/products/necklace.jpg',
        description: 'Beautiful gold chain necklace',
      },
    ],
    total: 99.99,
    status: 'delivered',
    shippingAddress: {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-18T15:30:00Z',
  },
  {
    id: '2',
    userId: 'user1',
    items: [
      {
        id: '2',
        name: 'Silver Ring',
        price: 49.99,
        quantity: 2,
        image: '/images/products/ring.jpg',
        description: 'Elegant silver ring',
      },
    ],
    total: 99.98,
    status: 'processing',
    shippingAddress: {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    createdAt: '2024-03-20T14:30:00Z',
    updatedAt: '2024-03-20T14:30:00Z',
  },
]; 