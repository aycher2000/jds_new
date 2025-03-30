'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, ShoppingBag, CreditCard, Truck, HeadphonesIcon } from 'lucide-react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmailInput('');
    }
  };

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '/shop' },
        { name: 'Featured', href: '/shop/featured' },
        { name: 'New Arrivals', href: '/shop/new' },
        { name: 'Sale', href: '/shop/sale' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Blog', href: '/blog' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/justdopeshop/?igsh=MTVncG1qdXZycDc5Nw%3D%3D&utm_source=qr', label: 'Instagram' },
    { icon: Mail, href: 'mailto:info@justdopeshop.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#1A1A1A] via-[#202020] to-[#1A1A1A] border-t border-[#2A2A2A]">
      {/* Features section */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-[#2A2A2A]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center md:items-start space-y-2 p-4 rounded-lg bg-[#232323]/50 hover:bg-[#232323] transition-colors duration-300 group">
            <div className="p-2 bg-[#2D2D2D] rounded-lg group-hover:bg-[#C4A484]/20 transition-colors duration-300">
              <ShoppingBag className="w-6 h-6 text-[#C4A484]" />
            </div>
            <h3 className="font-semibold text-white">Secure Shopping</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">100% secure payment processing</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-2 p-4 rounded-lg bg-[#232323]/50 hover:bg-[#232323] transition-colors duration-300 group">
            <div className="p-2 bg-[#2D2D2D] rounded-lg group-hover:bg-[#C4A484]/20 transition-colors duration-300">
              <Truck className="w-6 h-6 text-[#C4A484]" />
            </div>
            <h3 className="font-semibold text-white">Fast Shipping</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">Free shipping on orders over $50</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-2 p-4 rounded-lg bg-[#232323]/50 hover:bg-[#232323] transition-colors duration-300 group">
            <div className="p-2 bg-[#2D2D2D] rounded-lg group-hover:bg-[#C4A484]/20 transition-colors duration-300">
              <CreditCard className="w-6 h-6 text-[#C4A484]" />
            </div>
            <h3 className="font-semibold text-white">Easy Payments</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">Multiple payment options available</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-2 p-4 rounded-lg bg-[#232323]/50 hover:bg-[#232323] transition-colors duration-300 group">
            <div className="p-2 bg-[#2D2D2D] rounded-lg group-hover:bg-[#C4A484]/20 transition-colors duration-300">
              <HeadphonesIcon className="w-6 h-6 text-[#C4A484]" />
            </div>
            <h3 className="font-semibold text-white">24/7 Support</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">Customer support when you need it</p>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
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
            
            <p className="text-gray-400 text-sm">
              Discover the latest trends and premium quality products. 
              Our mission is to provide you with exceptional items that 
              match your unique style.
            </p>
            
            {/* Newsletter signup */}
            <div className="pt-2">
              <h3 className="text-white font-semibold mb-3">Join Our Newsletter</h3>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-[#232323] border border-[#2A2A2A] rounded-lg py-2 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C4A484]/50 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className={`absolute right-1 top-1 px-3 py-1 bg-gradient-to-r from-[#C4A484] to-[#A67B5B] text-white text-sm rounded-md transition-all duration-300 hover:from-[#A67B5B] hover:to-[#C4A484] ${
                    subscribed ? 'bg-green-600' : ''
                  }`}
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-semibold tracking-wider relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#C4A484]"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm inline-block transition-colors duration-300 relative group"
                    >
                      <span>{link.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C4A484]/70 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} JustDopeShop. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-[#C4A484] transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-full bg-[#232323] hover:bg-[#2A2A2A] transition-colors duration-300 transform group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}