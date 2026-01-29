import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Snowflake, Citrus, ChevronLeft, Wine } from 'lucide-react';

import cocaColaLogo from './assets/KO.png';
import fantaLogo from './assets/fanta.png';
import spriteLogo from './assets/sprite.png';
import cassiseLogo from './assets/cassiseLogo.png';
import pechePassionLogo from './assets/pechePassionLogo.png';
import pastequeLogo from './assets/pastequeLogo.png';
import citronLogo from './assets/citronLogo.png';

type BeverageType = 'water' | 'fanta' | 'coca' | 'sprite' | 'cassise' | 'peche_passion' | 'pasteque' | 'citron_jus' | null;

const beverageConfigs: any = {
  water: { name: 'Water', liquidGradient: 'bg-gradient-to-t from-cyan-400/80 to-blue-300/60', shadowColor: '0 0 20px rgba(6, 182, 212, 0.4)', streamGradient: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.9), rgba(34, 211, 238, 0.3))' },
  coca: { name: 'Coca Cola', logo: cocaColaLogo, liquidGradient: 'bg-gradient-to-t from-amber-950 to-amber-900', shadowColor: '0 0 20px rgba(120, 53, 15, 0.6)', streamGradient: 'linear-gradient(to bottom, rgba(120, 53, 15, 0.9), rgba(120, 53, 15, 0.3))' },
  fanta: { name: 'Fanta', logo: fantaLogo, liquidGradient: 'bg-gradient-to-t from-orange-600 to-orange-400', shadowColor: '0 0 20px rgba(249, 115, 22, 0.5)', streamGradient: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.3))' },
  sprite: { name: 'Sprite', logo: spriteLogo, liquidGradient: 'bg-gradient-to-t from-lime-300/70 to-lime-200/50', shadowColor: '0 0 20px rgba(132, 204, 22, 0.4)', streamGradient: 'linear-gradient(to bottom, rgba(190, 242, 100, 0.9), rgba(190, 242, 100, 0.3))' },
  cassise: { name: 'Cassise', logo: cassiseLogo, liquidGradient: 'bg-gradient-to-t from-purple-900 to-purple-600', shadowColor: '0 0 20px rgba(147, 51, 234, 0.5)', streamGradient: 'linear-gradient(to bottom, #7e22ce, #a855f7)' },
  peche_passion: { name: 'Pêche', logo: pechePassionLogo, liquidGradient: 'bg-gradient-to-t from-orange-500 to-yellow-400', shadowColor: '0 0 20px rgba(249, 115, 22, 0.4)', streamGradient: 'linear-gradient(to bottom, #f97316, #fbbf24)' },
  pasteque: { name: 'Pastèque', logo: pastequeLogo, liquidGradient: 'bg-gradient-to-t from-red-600 to-pink-400', shadowColor: '0 0 20px rgba(220, 38, 38, 0.4)', streamGradient: 'linear-gradient(to bottom, #dc2626, #f87171)' },
  citron_jus: { name: 'Citron', logo: citronLogo, liquidGradient: 'bg-gradient-to-t from-lime-500 to-yellow-300', shadowColor: '0 0 20px rgba(101, 163, 13, 0.4)', streamGradient: 'linear-gradient(to bottom, #65a30d, #bef264)' },
};

export function SmartDispenser() {
  const [selectedBeverage, setSelectedBeverage] = useState<BeverageType>(null);
  const [isDispensing, setIsDispensing] = useState(false);
  const [fillLevel, setFillLevel] = useState(0);
  const [addIce, setAddIce] = useState(false);
  const [addLemon, setAddLemon] = useState(false);
  const [iceCubes, setIceCubes] = useState<any[]>([]);
  const [menuView, setMenuView] = useState<'main' | 'soda' | 'jus'>('main');
  const [isFull, setIsFull] = useState(false);

  const handleIceToggle = () => {
    if (isDispensing || isFull) return;
    if (!addIce) {
      setAddIce(true);
      setIceCubes(Array.from({ length: 5 }, (_, i) => ({ id: Date.now() + i, delay: i * 0.1, x: 10 + Math.random() * 60, y: 10 + Math.random() * 70, size: 24 })));
    } else { setAddIce(false); setIceCubes([]); }
  };

  const handleDispense = (beverage: BeverageType) => {
    if (isDispensing || isFull) return;
    setSelectedBeverage(beverage); setIsDispensing(true);
    const interval = setInterval(() => {
      setFillLevel(prev => {
        if (prev >= 100) { clearInterval(interval); setIsDispensing(false); setIsFull(true); return 100; }
        return prev + 2;
      });
    }, 40);
  };

  const current = selectedBeverage ? beverageConfigs[selectedBeverage] : null;

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-black text-center text-white mb-10 italic uppercase">
          <span className="text-[#d4ff00]">Almus</span> Smart Dispenser
        </h2>

        <div className="relative h-80 mb-8 flex items-end justify-center">
          <div className="relative w-32 h-64 rounded-b-2xl border-4 border-white/20 overflow-hidden bg-black/40">
            <AnimatePresence>
              {addIce && iceCubes.map(c => (
                <motion.div key={c.id} initial={{ y: -300 }} animate={{ y: 0 }} className="absolute bg-white/20 border border-white/30" style={{ left: `${c.x}%`, bottom: `${c.y}%`, width: c.size, height: c.size }} />
              ))}
            </AnimatePresence>
            {(isDispensing || isFull) && current && (
              <motion.div initial={{ height: 0 }} animate={{ height: `${fillLevel}%` }} className={`absolute bottom-0 left-0 right-0 ${current.liquidGradient}`} />
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-8 justify-center">
          <button onClick={handleIceToggle} className={`px-4 py-2 rounded-xl border ${addIce ? 'bg-blue-500/20 border-blue-400 text-white' : 'border-white/10 text-zinc-500'}`}><Snowflake size={16}/></button>
          <button onClick={() => setAddLemon(!addLemon)} className={`px-4 py-2 rounded-xl border ${addLemon ? 'bg-yellow-500/20 border-yellow-400 text-white' : 'border-white/10 text-zinc-500'}`}><Citrus size={16}/></button>
        </div>

        <AnimatePresence mode="wait">
          {isFull ? (
            <button onClick={() => { setIsFull(false); setFillLevel(0); setSelectedBeverage(null); }} className="w-full py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20">NEW CUP</button>
          ) : menuView === 'main' ? (
            <div className="grid grid-cols-3 gap-4">
              <MenuBtn icon={<Droplet/>} label="Water" onClick={() => handleDispense('water')} />
              <MenuBtn icon={<Wine/>} label="Soda" onClick={() => setMenuView('soda')} />
              <MenuBtn icon={<Citrus/>} label="Jus" onClick={() => setMenuView('jus')} />
            </div>
          ) : (
            <div className="space-y-4">
               <button onClick={() => setMenuView('main')} className="text-[#d4ff00] text-xs font-bold uppercase flex items-center gap-1"><ChevronLeft size={14}/> Back</button>
               <div className="grid grid-cols-4 gap-4">
                {menuView === 'soda' ? (
                  <>
                    <FlavorCard img={cocaColaLogo} label="Coca" onClick={() => handleDispense('coca')} />
                    <FlavorCard img={fantaLogo} label="Fanta" onClick={() => handleDispense('fanta')} />
                    <FlavorCard img={spriteLogo} label="Sprite" onClick={() => handleDispense('sprite')} />
                  </>
                ) : (
                  <>
                    <FlavorCard img={cassiseLogo} label="Cassise" onClick={() => handleDispense('cassise')} />
                    <FlavorCard img={pechePassionLogo} label="Pêche" onClick={() => handleDispense('peche_passion')} />
                    <FlavorCard img={pastequeLogo} label="Pastèque" onClick={() => handleDispense('pasteque')} />
                    <FlavorCard img={citronLogo} label="Citron" onClick={() => handleDispense('citron_jus')} />
                  </>
                )}
               </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const MenuBtn = ({ icon, label, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4ff00]">
    <div className="text-zinc-400">{icon}</div>
    <span className="text-white text-[10px] font-bold uppercase">{label}</span>
  </button>
);

const FlavorCard = ({ img, label, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-1">
    <div className="w-12 h-12 rounded-full bg-white p-1 shadow-lg hover:ring-2 hover:ring-[#d4ff00]">
      <img src={img} alt={label} className="w-full h-full object-contain" />
    </div>
    <span className="text-[8px] text-zinc-500 uppercase text-center">{label}</span>
  </button>
);