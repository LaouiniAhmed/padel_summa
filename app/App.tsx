import React, { useState } from "react";
import { Landing } from "./components/Landing";
import { SmartDispenser } from "../SmartDispenser";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'summa' | 'dispenser'>('landing');

  if (currentPage === 'landing') {
    return <Landing onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'dispenser') {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #ffffff 0px,
                #ffffff 2px,
                transparent 2px,
                transparent 60px
              )`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-90" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('landing')}>
              <div className="w-10 h-10 bg-[#EEFF00] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">⚡</span>
              </div>
              <span className="text-white font-black tracking-widest">ALMUS</span>
            </div>
            <nav className="hidden md:flex gap-12 text-gray-400 text-sm font-semibold">
              <a href="#features" className="hover:text-white transition">FEATURES</a>
              <a href="#showcase" className="hover:text-white transition">TRY IT</a>
              <a href="#about" className="hover:text-white transition">ABOUT</a>
            </nav>
            <button
              onClick={() => setCurrentPage('landing')}
              className="px-6 py-2.5 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 transition"
            >
              ← Back Home
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-8 overflow-hidden mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full">
              <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">INNOVATION 2026</span>
            </div>
            <h1 className="text-8xl md:text-9xl font-black text-white mb-6 leading-tight">
              THE FUTURE OF<br/>
              <span className="text-[#EEFF00]">DISPENSING</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Experience the next generation of smart technology. Sleek carbon design meets <span className="font-bold text-white">intelligent functionality.</span>
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl border-2 border-[#EEFF00] bg-black/50 backdrop-blur">
                <div className="text-4xl mb-6">✨</div>
                <h3 className="text-white font-black text-xl mb-4">SMART TECH</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Advanced sensors for precise fill levels.</p>
              </div>
              <div className="p-8 rounded-3xl border border-gray-700 bg-black/50 backdrop-blur hover:border-gray-600 transition">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="text-white font-black text-xl mb-4">INSTANT RESPONSE</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Lightning-fast dispensing with zero delay.</p>
              </div>
              <div className="p-8 rounded-3xl border border-gray-700 bg-black/50 backdrop-blur hover:border-gray-600 transition">
                <div className="text-4xl mb-6">🔥</div>
                <h3 className="text-white font-black text-xl mb-4">MULTIPLE DRINKS</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Customizable options for every taste.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Showcase */}
        <section id="showcase" className="py-20 px-8 flex-grow flex items-center justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white tracking-tight">
                <span className="text-[#EEFF00]">EXPERIENCE</span> <span className="text-white">ALMUS</span>
              </h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-4">INTERACTIVE SHOWCASE</p>
            </div>

            <SmartDispenser />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-48 px-8 bg-[#EEFF00] mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 leading-tight">
              INNOVATION<br/>MEETS DESIGN
            </h2>
            <p className="text-black text-lg mb-12 max-w-2xl leading-relaxed">
              Almus represents the pinnacle of beverage technology. Our minimalist carbon philosophy creates an unparalleled user experience.
            </p>
            <button className="px-10 py-4 bg-black text-[#EEFF00] font-black text-lg rounded-full hover:scale-105 transition uppercase tracking-widest shadow-lg">
              GET A QUOTE →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                    <span>✉️</span>
                    <a href="mailto:info@almus.com">info@almus.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                    <span>📞</span>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Product</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Features</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition">Specs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Legal</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition">Support</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-gray-600">
              <p>© 2026 ALMUS. Innovation in every drop.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
              <span className="text-black font-bold text-xl">U</span>
            </div>
            <span className="text-white tracking-[0.2em] text-sm font-bold">ULTIMA</span>
          </div>
          
          <button
            onClick={() => setCurrentPage('landing')}
            className="px-6 py-2.5 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 transition"
          >
            ← Back Home
          </button>
        </div>
      </header>

      <main className="pt-24">
        {/* Summa Page Content */}
      </main>
    </div>
  );
}