'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, Home, Store, CheckCircle, Info, Mail, LogIn, LogOut, User } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/shop', icon: Store, label: 'Store' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart' },
    { href: '/checkout', icon: CheckCircle, label: 'Checkout' },
    { href: '/about', icon: Info, label: 'About' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className={`bg-[#1A1A1A] border-b border-[#2A2A2A] transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-lg' : 'py-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-[75px] h-[75px] overflow-hidden rounded-full bg-[#232323] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <Image
                  src="/images/logo.png"
                  alt="JustDopeShop Logo"
                  width={75}
                  height={75}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C4A484]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-white">JustDopeShop</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white relative group inline-block"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C4A484]/70 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                </Link>
              ))}
            </nav>

            {/* Auth and Cart Buttons */}
            <div className="flex items-center space-x-4">
              {/* Shopping Cart */}
              <button 
                className="text-white hover:text-[#C4A484] transition-colors relative group"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-[#C4A484] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
              </button>

              {/* Auth Button */}
              {status === 'loading' ? (
                <div className="h-6 w-6 animate-pulse bg-gray-600 rounded-full"></div>
              ) : session ? (
                <div className="flex items-center space-x-3">
                  <Link
                    href="/dashboard"
                    className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white relative group"
                  >
                    <User className="w-5 h-5" />
                    <span className="text-sm">{session.user?.name || session.user?.email}</span>
                    <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="text-gray-300 hover:text-white relative group"
                    aria-label="Sign Out"
                  >
                    <LogOut className="w-5 h-5" />
                    <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white relative group"
                >
                  <LogIn className="w-5 h-5" />
                  <span className="hidden md:inline text-sm">Sign In</span>
                  <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                className="text-white hover:text-[#C4A484] transition-colors md:hidden relative group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed right-0 top-0 h-full w-72 bg-[#1A1A1A] transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
              <span className="text-lg font-bold text-white">Menu</span>
              <button
                onClick={closeMenu}
                className="text-gray-400 hover:text-white transition-colors relative group"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
                <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {/* Auth Status for Mobile */}
                {session && (
                  <div className="px-4 py-3 bg-[#2A2A2A] rounded-lg mb-4">
                    <div className="text-sm text-gray-300">Signed in as:</div>
                    <div className="text-white font-medium truncate">
                      {session.user?.name || session.user?.email}
                    </div>
                  </div>
                )}
                
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-all relative group"
                      onClick={closeMenu}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                    </Link>
                  );
                })}

                {/* Auth Button for Mobile */}
                {session ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-all relative group"
                      onClick={closeMenu}
                    >
                      <User className="w-5 h-5" />
                      <span className="font-medium">Dashboard</span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                    </Link>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: '/' });
                        closeMenu();
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-all relative group"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Sign Out</span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-all relative group"
                    onClick={closeMenu}
                  >
                    <LogIn className="w-5 h-5" />
                    <span className="font-medium">Sign In</span>
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
                  </Link>
                )}
              </div>
            </nav>
            
            <div className="p-4 border-t border-[#2A2A2A]">
              <div className="text-sm text-gray-400 text-center">
                © {new Date().getFullYear()} JustDopeShop
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16" /> {/* Spacer to prevent content from hiding under fixed header */}
    </>
  );
}