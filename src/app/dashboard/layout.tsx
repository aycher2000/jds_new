'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { User, ShoppingBag, Settings } from 'lucide-react';

const navigation = [
  { name: 'Profile', href: '/dashboard', icon: User },
  { name: 'Orders', href: '/dashboard/orders', icon: ShoppingBag },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#C4A484]"></div>
      </div>
    );
  }

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64">
            <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-4">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">Dashboard</h2>
                <p className="text-sm text-gray-400">{session.user?.email}</p>
              </div>
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors',
                        isActive
                          ? 'bg-[#C4A484] text-white'
                          : 'text-gray-400 hover:text-white hover:bg-[#3A3A3A]'
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 