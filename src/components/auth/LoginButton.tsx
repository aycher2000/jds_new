'use client'

import { useState } from 'react';
import { signIn } from "next-auth/react"

export function LoginButton() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn('email', { email, callbackUrl: '/dashboard' });
      setIsEmailSent(true);
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="text-center text-gray-300">
        <p className="text-xl font-semibold">Check your email!</p>
        <p className="text-sm mt-2">We sent you a magic link to sign in.</p>
        <p className="text-xs mt-4 text-gray-400">
          Don't see it? Check your spam folder or try again.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Email Sign In */}
      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#C4A484] transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-[#C4A484] hover:bg-[#B39374] text-white py-3 rounded-lg transition-colors duration-300 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Sending...' : 'Continue with Email'}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#3D3D3D]"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-400 bg-[#232323]">Or</span>
        </div>
      </div>

      {/* Google Sign In */}
      <button
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        className="w-full flex items-center justify-center space-x-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] text-white px-6 py-3 rounded-lg transition-colors duration-300"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>
    </div>
  )
} 