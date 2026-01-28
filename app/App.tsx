import { useState } from "react";
// Importi el components. Thabbet f'el path mta3 el dispenser:
import { SmartDispenser } from "./components/SmartDispenser"; 

export default function App() {
  // 'summa' hya el page mta3 el padel, 'dispenser' hya mta3 el boisson
  const [view, setView] = useState<'summa' | 'dispenser'>('summa');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Menu sghir mel fouq bch t'badel bin el pages */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-zinc-900/90 p-1 rounded-xl border border-white/10 backdrop-blur-md">
        <button 
          onClick={() => setView('summa')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'summa' ? 'bg-[#d4ff00] text-black shadow-lg shadow-[#d4ff00]/20' : 'text-zinc-400 hover:text-white'}`}
        >
          SUMMA SCORING
        </button>
        <button 
          onClick={() => setView('dispenser')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'dispenser' ? 'bg-[#d4ff00] text-black shadow-lg shadow-[#d4ff00]/20' : 'text-zinc-400 hover:text-white'}`}
        >
          SMART DISPENSER
        </button>
      </nav>

      {/* Logic mta3 el switch */}
      <main className="pt-24">
        {view === 'summa' ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
             <h1 className="text-5xl font-black italic uppercase tracking-tighter italic">Summa Padel</h1>
             <p className="text-zinc-500 mt-4 font-mono">Prêt pour l'intégration du score...</p>
          </div>
        ) : (
          <SmartDispenser />
        )}
      </main>
    </div>
  );
}
