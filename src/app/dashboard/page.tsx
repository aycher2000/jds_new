'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { User, Mail, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <p className="text-gray-400 mt-1">
          Manage your account information
        </p>
      </div>

      <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#C4A484] flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              {session?.user?.name || 'User'}
            </h2>
            <p className="text-gray-400">{session?.user?.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-400">
            <Mail className="w-5 h-5" />
            <span>{session?.user?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Member since {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-8">
          <Button className="bg-[#C4A484] hover:bg-[#A67B5B] text-white">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
} 