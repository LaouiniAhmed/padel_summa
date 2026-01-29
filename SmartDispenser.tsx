import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Snowflake, Citrus, ChevronLeft, Wine } from 'lucide-react';

// Salla7na el paths mta3 el logos hasb el Sidebar mte3ek
import cocaColaLogo from './assets/KO.png';
import fantaLogo from './assets/fanta.png';
import spriteLogo from './assets/sprite.png';
import cassiseLogo from './assets/cassiseLogo.png';
import pechePassionLogo from './assets/pechePassionLogo.png';
import pastequeLogo from './assets/pastequeLogo.png';
import citronLogo from './assets/citronLogo.png';

// Lezem el "export" ykoun maktoub hakka:
export function SmartDispenser() {
  type BeverageType = 'water' | 'fanta' | 'coca' | 'sprite' | 'cassise' | 'peche_passion' | 'pasteque' | 'citron_jus' | null;

  interface BeverageConfig {
    name: string;
    liquidGradient: string;
    shadowColor: string;
    streamGradient: string;
    hasBubbles: boolean;
    logo?: string;
  }

  const beverageConfigs: Record<Exclude<BeverageType, null>, BeverageConfig> = {
    water: { name: 'Water', liquidGradient: 'bg-gradient-to-t from-cyan-400/80 to-blue-300/60', shadowColor: '0 0 20px rgba(6, 182, 212, 0.4)', streamGradient: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.9), rgba(34, 211, 238, 0.3))', hasBubbles: false },
    coca: { name: 'Coca Cola', logo: cocaColaLogo, liquidGradient: 'bg-gradient-to-t from-amber-950 to-amber-900', shadowColor: '0 0 20px rgba(120, 53, 15, 0.6)', streamGradient: 'linear-gradient(to bottom, rgba(120, 53, 15, 0.9), rgba(120, 53, 15, 0.3))', hasBubbles: true },
    fanta: { name: 'Fanta', logo: fantaLogo, liquidGradient: 'bg-gradient-to-t from-orange-600 to-orange-400', shadowColor: '0 0 20px rgba(249, 115, 22, 0.5)', streamGradient: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.3))', hasBubbles: true },
    sprite: { name: 'Sprite', logo: spriteLogo, liquidGradient: 'bg-gradient-to-t from-lime-300/70 to-lime-200/50', shadowColor: '0 0 20px rgba(132, 204, 22, 0.4)', streamGradient: 'linear-gradient(to bottom, rgba(190, 242, 100, 0.9), rgba(190, 242, 100, 0.3))', hasBubbles: true },
    cassise: { name: 'Cassise', logo: cassiseLogo, liquidGradient: 'bg-gradient-to-t from-purple-900 to-purple-600', shadowColor: '0 0 20px rgba(147, 51, 234, 0.5)', streamGradient: 'linear-gradient(to bottom, #7e22ce, #a855f7)', hasBubbles: false },
    peche_passion: { name: 'Pêche & Passion', logo: pechePassionLogo, liquidGradient: 'bg-gradient-to-t from-orange-500 to-yellow-400', shadowColor: '0 0 20px rgba(249, 115, 22, 0.4)', streamGradient: 'linear-gradient(to bottom, #f97316, #fbbf24)', hasBubbles: false },
    pasteque: { name: 'Pastèque', logo: pastequeLogo, liquidGradient: 'bg-gradient-to-t from-red-600 to-pink-400', shadowColor: '0 0 20px rgba(220, 38, 38, 0.4)', streamGradient: 'linear-gradient(to bottom, #dc2626, #f87171)', hasBubbles: false },
    citron_jus: { name: 'Citron / Citron Vert', logo: citronLogo, liquidGradient: 'bg-gradient-to-t from-lime-500 to-yellow-300', shadowColor: '0 0 20px rgba(101, 163, 13, 0.4)', streamGradient: 'linear-gradient(to bottom, #65a30d, #bef264)', hasBubbles: false },
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
        setIceCubes(Array.from({ length: 5 }, (_, i) => ({
          id: Date.now() + i, delay: i * 0.12, x: 10 + Math.random() * 60, y: 10 + Math.random() * 70, rotation: Math.random() * 360, size: 24 + Math.random() * 8,
        })));
      } else { setAddIce(false); setIceCubes([]); }
    };

    const handleNewCup = () => {
      setIsFull(false); setFillLevel(0); setSelectedBeverage(null);
      setAddIce(false); setAddLemon(false); setIceCubes([]); setMenuView('main');
    };

    const handleDispense = (beverage: BeverageType) => {
      if (isDispensing || isFull) return;
      setSelectedBeverage(beverage); setIsDispensing(true); setFillLevel(0);
      const interval = setInterval(() => {
        setFillLevel(prev => {
          if (prev >= 100) { clearInterval(interval); setTimeout(() => { setIsDispensing(false); setIsFull(true); }, 500); return 100; }
          return prev + 1.5;
        });
      }, 30);
    };

    const currentConfig = selectedBeverage ? beverageConfigs[selectedBeverage] : null;

    return (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="bg-gradient-to-br from-white/5 via-zinc-900/80 to-black/90 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                <span className="text-[#d4ff00]">Almus</span> Smart Dispenser
            </h2>
          </div>

          <div className="relative h-80 mb-8 flex items-end justify-center">
            <div className="relative w-32 h-64 rounded-b-2xl border-4 border-zinc-400/40 bg-gradient-to-b from-white/5 to-black/50 overflow-hidden backdrop-blur-sm">
              <AnimatePresence>
                {addIce && iceCubes.map((cube) => (
                  <motion.div key={cube.id} initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1, rotate: cube.rotation }} exit={{ opacity: 0 }} transition={{ duration: 0.7, delay: cube.delay }} className="absolute bg-white/40 backdrop-blur-md border border-white/50 rounded-sm" style={{ left: `${cube.x}%`, bottom: `${cube.y}%`, width: cube.size, height: cube.size }} />
                ))}
              </AnimatePresence>
              
              <AnimatePresence>
                {addLemon && [1, 2].map((i) => (
                  <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} className="absolute w-9 h-9 rounded-full border-2 border-yellow-400 bg-yellow-300/80 z-10" style={{ left: `${20 * i}%`, top: `${30 * i}%` }} />
                ))}
              </AnimatePresence>

              {(isDispensing || isFull) && currentConfig && (
                <motion.div initial={{ height: 0 }} animate={{ height: `${fillLevel}%` }} className={`absolute bottom-0 left-0 right-0 ${currentConfig.liquidGradient}`} style={{ boxShadow: currentConfig.shadowColor }} />
              )}
              
              {isDispensing && fillLevel < 95 && currentConfig && (
                <div className="absolute top-0 left-1/2 w-1.5 -translate-x-1/2 h-full" style={{ background: currentConfig.streamGradient }} />
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-6 justify-center">
            <button onClick={handleIceToggle} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${addIce ? 'bg-blue-500/20 border-blue-400 text-white shadow-lg' : 'bg-white/5 border-white/20 text-zinc-400 hover:bg-white/10'}`}>
              <Snowflake size={16}/> Ice
            </button>
            <button onClick={() => setAddLemon(!addLemon)} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${addLemon ? 'bg-yellow-500/20 border-yellow-400 text-white shadow-lg' : 'bg-white/5 border-white/20 text-zinc-400 hover:bg-white/10'}`}>
              <Citrus size={16}/> Lemon
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isFull ? (
              <motion.div key="full" className="flex justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <button onClick={handleNewCup} className="group relative overflow-hidden rounded-2xl px-12 py-4 border-2 border-white/30 bg-white/10 text-white font-bold hover:bg-white/20 transition-all">New Cup</button>
              </motion.div>
            ) : menuView === 'main' ? (
              <motion.div key="main" className="grid grid-cols-3 gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <MenuBtn icon={<Droplet/>} label="Water" onClick={() => handleDispense('water')} />
                <MenuBtn icon={<Wine/>} label="Soda" onClick={() => setMenuView('soda')} />
                <MenuBtn icon={<Citrus/>} label="Jus" onClick={() => setMenuView('jus')} />
              </motion.div>
            ) : (
              <motion.div key="sub" className="space-y-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <button onClick={() => setMenuView('main')} className="text-[#d4ff00] flex items-center gap-2 text-xs uppercase font-bold tracking-widest"><ChevronLeft size={16}/> Back</button>
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
                      <FlavorCard img={pechePassionLogo} label="Pêche & Passion" onClick={() => handleDispense('peche_passion')} />
                      <FlavorCard img={pastequeLogo} label="Pastèque" onClick={() => handleDispense('pasteque')} />
                      <FlavorCard img={citronLogo} label="Citron" onClick={() => handleDispense('citron_jus')} />
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  const MenuBtn = ({ icon, label, onClick }: any) => (
    <button onClick={onClick} className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#d4ff00] hover:bg-white/10 transition-all group">
      <div className="text-zinc-400 group-hover:text-[#d4ff00] transition-colors">{icon}</div>
      <span className="text-white text-[10px] font-bold uppercase tracking-tighter">{label}</span>
    </button>
  );

  const FlavorCard = ({ img, label, onClick }: any) => (
    <button onClick={onClick} className="flex flex-col items-center gap-2 group transition-transform active:scale-90">
      <div className="w-14 h-14 rounded-full bg-white p-2 overflow-hidden shadow-lg group-hover:ring-2 group-hover:ring-[#d4ff00] transition-all">
        <img src={img} alt={label} className="w-full h-full object-contain" />
      </div>
      <span className="text-[8px] text-zinc-500 uppercase font-black text-center group-hover:text-white leading-tight">{label}</span>
    </button>
  );