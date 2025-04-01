import OrderHistory from '@/components/dashboard/OrderHistory';
import { mockOrders } from '@/lib/orders';

export default function OrdersPage() {
  // In a real application, we would fetch orders from an API
  // For now, we'll use the mock data
  const orders = mockOrders;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Order History</h1>
        <p className="text-gray-400 mt-1">
          View and track your orders
        </p>
      </div>

      <OrderHistory orders={orders} />
    </div>
  );
} 