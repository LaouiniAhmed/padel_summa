import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Snowflake, Citrus, ChevronLeft } from 'lucide-react';

// Import brand logos
const cocaColaLogo = undefined;
const fantaLogo = undefined;
const spriteLogo = undefined;

type BeverageType = 'water' | 'fanta' | 'coca' | 'sprite' | null;

interface BeverageConfig {
  name: string;
  liquidGradient: string;
  shadowColor: string;
  streamGradient: string;
  hasBubbles: boolean;
}

const beverageConfigs: Record<Exclude<BeverageType, null>, BeverageConfig> = {
  water: {
    name: 'Water',
    liquidGradient: 'bg-gradient-to-t from-cyan-400/80 to-blue-300/60',
    shadowColor: '0 0 20px rgba(6, 182, 212, 0.4)',
    streamGradient: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.9), rgba(34, 211, 238, 0.3))',
    hasBubbles: false,
  },
  fanta: {
    name: 'Fanta',
    liquidGradient: 'bg-gradient-to-t from-orange-600 to-orange-400',
    shadowColor: '0 0 20px rgba(249, 115, 22, 0.5)',
    streamGradient: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.3))',
    hasBubbles: true,
  },
  coca: {
    name: 'Coca Cola',
    liquidGradient: 'bg-gradient-to-t from-amber-950 to-amber-900',
    shadowColor: '0 0 20px rgba(120, 53, 15, 0.6)',
    streamGradient: 'linear-gradient(to bottom, rgba(120, 53, 15, 0.9), rgba(120, 53, 15, 0.3))',
    hasBubbles: true,
  },
  sprite: {
    name: 'Sprite',
    liquidGradient: 'bg-gradient-to-t from-lime-300/70 to-lime-200/50',
    shadowColor: '0 0 20px rgba(132, 204, 22, 0.4)',
    streamGradient: 'linear-gradient(to bottom, rgba(190, 242, 100, 0.9), rgba(190, 242, 100, 0.3))',
    hasBubbles: true,
  },
};

interface IceCube {
  id: number;
  delay: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
}

export function SmartDispenser() {
  const [selectedBeverage, setSelectedBeverage] = useState<BeverageType>(null);
  const [isDispensing, setIsDispensing] = useState(false);
  const [fillLevel, setFillLevel] = useState(0);
  const [addIce, setAddIce] = useState(false);
  const [addLemon, setAddLemon] = useState(false);
  const [iceCubes, setIceCubes] = useState<IceCube[]>([]);
  const [showSodaMenu, setShowSodaMenu] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const handleIceToggle = () => {
    if (isDispensing || isFull) return;
    
    if (!addIce) {
      // Add ice - drop cubes with random positions
      setAddIce(true);
      const cubes: IceCube[] = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        delay: i * 0.12,
        x: 10 + Math.random() * 60,
        y: 10 + Math.random() * 70,
        rotation: Math.random() * 360,
        size: 24 + Math.random() * 8,
      }));
      setIceCubes(cubes);
    } else {
      setAddIce(false);
      setIceCubes([]);
    }
  };

  const handleLemonToggle = () => {
    if (isDispensing || isFull) return;
    setAddLemon(!addLemon);
  };

  const handleNewCup = () => {
    setIsFull(false);
    setFillLevel(0);
    setSelectedBeverage(null);
    setAddIce(false);
    setAddLemon(false);
    setIceCubes([]);
    setShowSodaMenu(false);
  };

  const handleDispense = (beverage: BeverageType) => {
    if (isDispensing || isFull) return;
    
    setSelectedBeverage(beverage);
    setIsDispensing(true);
    setFillLevel(0);
    setShowSodaMenu(false);

    const duration = 3000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    let currentFill = 0;
    const interval = setInterval(() => {
      currentFill += increment;
      if (currentFill >= 100) {
        setFillLevel(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDispensing(false);
          setIsFull(true);
        }, 500);
      } else {
        setFillLevel(currentFill);
      }
    }, intervalTime);
  };

  const currentConfig = selectedBeverage ? beverageConfigs[selectedBeverage] : null;

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="bg-gradient-to-br from-white/5 via-zinc-900/80 to-black/90 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-white mb-2">Smart Dispenser</h2>
          <p className="text-zinc-400 text-sm">Select your beverage</p>
        </div>

        {/* Glass Display Area */}
        <div className="relative h-80 mb-8 flex items-end justify-center">
          {/* Glass Container */}
          <div className="relative w-32 h-64 rounded-b-2xl border-4 border-zinc-400/40 bg-gradient-to-b from-white/5 to-black/50 overflow-hidden backdrop-blur-sm">
            {/* Glass Highlight */}
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/50 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            {/* Ice Cubes */}
            <AnimatePresence>
              {addIce && iceCubes.map((cube) => (
                <motion.div
                  key={cube.id}
                  initial={{ y: -300, opacity: 0, rotate: 0 }}
                  animate={{ 
                    y: 0,
                    opacity: 1,
                    rotate: cube.rotation
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.7,
                    delay: cube.delay,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="absolute bg-gradient-to-br from-blue-100/90 to-blue-200/70 backdrop-blur-sm border-2 border-blue-200/60 rounded-sm shadow-lg"
                  style={{
                    left: `${cube.x}%`,
                    bottom: `${cube.y}%`,
                    width: `${cube.size}px`,
                    height: `${cube.size}px`,
                    boxShadow: '0 2px 10px rgba(255, 255, 255, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <div className="absolute top-0 left-0 w-2 h-2 bg-white/80 rounded-sm" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-blue-300/60" />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Lemon Slices */}
            <AnimatePresence>
              {addLemon && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0, rotate: 0 }}
                      animate={{ scale: 1, opacity: 1, rotate: 360 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: i * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="absolute w-9 h-9 rounded-full border-3 border-yellow-300 bg-gradient-to-br from-yellow-200 to-yellow-300"
                      style={{
                        left: `${25 + i * 25}%`,
                        top: `${25 + i * 30}%`,
                        boxShadow: '0 2px 8px rgba(250, 204, 21, 0.4)',
                      }}
                    >
                      <div className="absolute inset-1 rounded-full bg-yellow-100/60" />
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        {[...Array(8)].map((_, j) => (
                          <div
                            key={j}
                            className="absolute w-full h-px bg-yellow-400/50 top-1/2 left-1/2 origin-left"
                            style={{
                              transform: `rotate(${j * 45}deg)`,
                              width: '50%'
                            }}
                          />
                        ))}
                      </div>
                      <div className="absolute w-1 h-1.5 bg-yellow-600/60 rounded-full top-1/2 left-1/3" />
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Liquid Fill */}
            <AnimatePresence>
              {(isDispensing || isFull) && currentConfig && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${fillLevel}%` }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                  className={`absolute bottom-0 left-0 right-0 ${currentConfig.liquidGradient}`}
                  style={{
                    boxShadow: currentConfig.shadowColor
                  }}
                >
                  {currentConfig.hasBubbles && fillLevel < 95 && !isFull && (
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-white/70 rounded-full"
                          initial={{ 
                            bottom: 0,
                            left: `${10 + i * 11}%`,
                          }}
                          animate={{
                            bottom: '100%',
                            opacity: [0.7, 0.9, 0],
                          }}
                          transition={{
                            duration: 1.2 + Math.random() * 0.5,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: 'linear'
                          }}
                          style={{
                            boxShadow: '0 0 3px rgba(255, 255, 255, 0.5)'
                          }}
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        transform: ['translateX(0%)', 'translateX(100%)']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      style={{
                        clipPath: 'polygon(0% 50%, 10% 30%, 20% 50%, 30% 30%, 40% 50%, 50% 30%, 60% 50%, 70% 30%, 80% 50%, 90% 30%, 100% 50%, 100% 100%, 0% 100%)'
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dispensing Stream */}
            <AnimatePresence>
              {isDispensing && fillLevel < 95 && currentConfig && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: '40%' }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full"
                  style={{
                    background: currentConfig.streamGradient,
                    filter: 'blur(0.5px)'
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {isDispensing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 text-sm text-white font-light"
            >
              Dispensing...
            </motion.div>
          )}
        </div>

        {/* Ice & Lemon Options */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={handleIceToggle}
            disabled={isDispensing || isFull}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              addIce
                ? 'bg-blue-500/20 border-blue-400/60 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/5 border-white/20 text-zinc-400 hover:border-white/40 hover:bg-white/10'
            } ${isDispensing || isFull ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Snowflake className={`w-4 h-4 ${addIce ? 'text-blue-300' : ''}`} />
            <span className="text-sm">Ice</span>
          </button>

          <button
            onClick={handleLemonToggle}
            disabled={isDispensing || isFull}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              addLemon
                ? 'bg-yellow-500/20 border-yellow-400/60 text-white shadow-lg shadow-yellow-500/20'
                : 'bg-white/5 border-white/20 text-zinc-400 hover:border-white/40 hover:bg-white/10'
            } ${isDispensing || isFull ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Citrus className={`w-4 h-4 ${addLemon ? 'text-yellow-300' : ''}`} />
            <span className="text-sm">Lemon</span>
          </button>
        </div>

        {/* Beverage Selection */}
        <AnimatePresence mode="wait">
          {isFull ? (
            <motion.div
              key="new-cup-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center"
            >
              <button
                onClick={handleNewCup}
                className="group relative overflow-hidden rounded-2xl px-8 py-4 transition-all duration-300 border-2 border-white/30 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 hover:scale-105 active:scale-95 hover:border-white/50"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-white/10 to-lime-500/20"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-white text-lg font-light">New Cup</span>
                </div>
              </button>
            </motion.div>
          ) : !showSodaMenu ? (
            <motion.div
              key="main-menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 gap-4"
            >
              <button
                onClick={() => handleDispense('water')}
                disabled={isDispensing || isFull}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border border-white/20 ${
                  isDispensing || isFull
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-105 hover:border-cyan-500/50 hover:bg-white/5 active:scale-95'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />

                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-2 border-cyan-400/30">
                    <Droplet className="w-8 h-8 text-cyan-400" />
                  </div>
                  <span className="text-white text-lg font-light">Water</span>
                </div>
              </button>

              <button
                onClick={() => setShowSodaMenu(true)}
                disabled={isDispensing || isFull}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border border-white/20 ${
                  isDispensing || isFull
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-105 hover:border-white/40 hover:bg-white/5 active:scale-95'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-zinc-800/20"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5
                  }}
                />

                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-zinc-700/20 flex items-center justify-center border-2 border-white/30">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 via-red-600 to-lime-400" />
                  </div>
                  <span className="text-white text-lg font-light">Soda</span>
                </div>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="soda-menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button
                onClick={() => setShowSodaMenu(false)}
                className="flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm">Back</span>
              </button>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleDispense('fanta')}
                  disabled={isDispensing || isFull}
                  className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 border border-white/20 ${
                    isDispensing || isFull
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 hover:border-orange-500/50 hover:bg-white/5 active:scale-95'
                  }`}
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                      <img src={fantaLogo} alt="Fanta" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white text-sm font-light">Fanta</span>
                  </div>
                </button>

                <button
                  onClick={() => handleDispense('coca')}
                  disabled={isDispensing || isFull}
                  className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 border border-white/20 ${
                    isDispensing || isFull
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 hover:border-red-600/50 hover:bg-white/5 active:scale-95'
                  }`}
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                      <img src={cocaColaLogo} alt="Coca Cola" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white text-sm font-light">Coca</span>
                  </div>
                </button>

                <button
                  onClick={() => handleDispense('sprite')}
                  disabled={isDispensing || isFull}
                  className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 border border-white/20 ${
                    isDispensing || isFull
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 hover:border-lime-500/50 hover:bg-white/5 active:scale-95'
                  }`}
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                      <img src={spriteLogo} alt="Sprite" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white text-sm font-light">Sprite</span>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}