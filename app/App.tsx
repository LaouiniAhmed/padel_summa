import React, { useState } from "react";
import { SmartDispenser } from "../SmartDispenser";

export default function App() {
  const [view, setView] = useState<'summa' | 'dispenser'>('summa');

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-zinc-900 p-1 rounded-xl border border-white/10">
        <button
          onClick={() => setView('summa')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition ${view === 'summa' ? 'bg-[#d4ff00] text-black' : 'text-white hover:bg-white/5'}`}
        >
          SUMMA PADEL
        </button>
        <button
          onClick={() => setView('dispenser')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition ${view === 'dispenser' ? 'bg-[#d4ff00] text-black' : 'text-white hover:bg-white/5'}`}
        >
          SMART DISPENSER
        </button>
      </div>

      <main className="pt-20">
        {view === 'summa' ? (
          <div className="text-white text-center mt-20">
             <h1 className="text-4xl font-black italic uppercase">Summa Padel Scoring</h1>
             <p className="text-zinc-500 mt-2">Ready to integrate your scoring logic</p>
          </div>
        ) : (
          <SmartDispenser />
        )}
      </main>
    </div>
  );
}