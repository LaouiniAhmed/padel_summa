import React, { useState } from "react";
import { Landing } from "./components/Landing";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CTASection } from "./components/CTASection";
import Scoreboard from "./components/Scoreboard";
import { SmartDispenser } from "../SmartDispenser";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'summa' | 'dispenser'>('landing');

  if (currentPage === 'landing') {
    return <Landing onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'dispenser') {
    return (
      <div className="min-h-screen bg-black">
        <button
          onClick={() => setCurrentPage('landing')}
          className="fixed top-8 left-8 z-50 px-6 py-3 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 transition"
        >
          ← Back to Home
        </button>
        <div className="pt-20">
          <SmartDispenser />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* ULTIMA Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
              <span className="text-black font-bold text-xl">U</span>
            </div>
            <span className="text-white tracking-[0.2em] text-sm font-bold">ULTIMA</span>
          </div>
          
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('landing')}
            className="px-6 py-2.5 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 transition"
          >
            ← Back Home
          </button>
        </div>
      </header>

      <main className="pt-24">
        <Hero />
        <Features />

        <section id="summa" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <Scoreboard />
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
}