import React, { JSX } from 'react';

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ULTIMA Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
            <span className="text-black font-bold text-xl">U</span>
          </div>
          <span className="text-white tracking-[0.2em] text-sm">ULTIMA</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#EEFF00] text-black px-6 py-2.5 hover:bg-[#EEFF00]/90 transition-all">
          Get a Quote
        </button>
      </div>
    </header>
  );
}
