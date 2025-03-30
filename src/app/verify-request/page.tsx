'use client';

import { Mail } from 'lucide-react';

export default function VerifyRequest() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-[#232323] p-8 rounded-lg shadow-xl text-center">
        <div className="mx-auto w-16 h-16 bg-[#2A2A2A] rounded-full flex items-center justify-center">
          <Mail className="w-8 h-8 text-[#C4A484]" />
        </div>
        <h2 className="text-3xl font-bold text-white">Check your email</h2>
        <p className="text-gray-400">
          A sign in link has been sent to your email address. Please check your inbox and click the link to continue.
        </p>
      </div>
    </div>
  );
} 