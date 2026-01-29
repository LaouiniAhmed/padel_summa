import React from "react";
import padel4 from "../../assets/padel4.jpg";

interface SummaProps {
  onBack: () => void;
}

export function Summa({ onBack }: SummaProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
              <span className="text-black font-bold">U</span>
            </div>
            <span className="text-white tracking-widest font-black">SUMMA</span>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-md bg-[#EEFF00] text-black font-bold"
          >
            ← Back
          </button>
        </div>
      </header>

      <main className="pt-24">
        <section className="relative py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-7xl font-black mb-6">SUMMA</h1>
            <p className="text-gray-400 mb-12">Padel Sports Dashboard — overview, scores and analytics.</p>

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl max-w-4xl mx-auto">
              <img src={padel4} alt="Padel" className="w-full h-96 object-cover" />
              <div className="p-8 bg-black/60 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Live Match Overview</h3>
                <p className="text-gray-400">This is a placeholder for the SUMMA dashboard content. Replace with your analytics and components.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
