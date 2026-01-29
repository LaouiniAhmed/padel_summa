import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import beverage logos from assets
import cocaLogo from './assets/KO.png';
import fantaLogo from './assets/fanta.png';
import spriteLogo from './assets/sprite.png';
import cassiseLogo from './assets/cassiseLogo.png';
import pechePassionLogo from './assets/pechePassionLogo.png';
import pastequeLogo from './assets/pastequeLogo.png';
import citronLogo from './assets/citronLogo.png';

type MenuState = 'main' | 'soda' | 'jus';
type DrinkType = 'water' | 'coca' | 'fanta' | 'sprite' | 'cassise' | 'peche' | 'pasteque' | 'citron';

interface Drink {
  name: string;
  value: DrinkType;
  icon?: string;
  logo?: string;
  color: string;
}

const sodaDrinks: Drink[] = [
  { name: 'Coca', value: 'coca', logo: cocaLogo, color: 'bg-amber-900' },
  { name: 'Fanta', value: 'fanta', logo: fantaLogo, color: 'bg-orange-500' },
  { name: 'Sprite', value: 'sprite', logo: spriteLogo, color: 'bg-lime-300' },
];

const juiceDrinks: Drink[] = [
  { name: 'Cassise', value: 'cassise', logo: cassiseLogo, color: 'bg-purple-900' },
  { name: 'Pêche', value: 'peche', logo: pechePassionLogo, color: 'bg-orange-400' },
  { name: 'Pastèque', value: 'pasteque', logo: pastequeLogo, color: 'bg-red-500' },
  { name: 'Citron', value: 'citron', logo: citronLogo, color: 'bg-yellow-300' },
];

const liquidColors: Record<DrinkType, string> = {
  water: 'bg-blue-300',
  coca: 'bg-amber-900',
  fanta: 'bg-orange-500',
  sprite: 'bg-lime-300',
  cassise: 'bg-purple-900',
  peche: 'bg-orange-400',
  pasteque: 'bg-red-500',
  citron: 'bg-yellow-300',
};

export function SmartDispenser() {
  const [menu, setMenu] = useState<MenuState>('main');
  const [selectedDrink, setSelectedDrink] = useState<DrinkType | null>(null);
  const [isDispensing, setIsDispensing] = useState(false);
  const [showIce, setShowIce] = useState(false);
  const [showLemon, setShowLemon] = useState(false);

  const handleSelectDrink = (drink: DrinkType) => {
    setSelectedDrink(drink);
  };

  const handleDispense = () => {
    if (selectedDrink && !isDispensing) {
      setIsDispensing(true);
      setTimeout(() => {
        setIsDispensing(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#EEFF00] rounded-full flex items-center justify-center text-xl">
              🔥
            </div>
            <span className="text-white font-bold tracking-widest">ALMUS</span>
          </div>
          <nav className="hidden md:flex gap-12 text-gray-400 text-sm font-semibold">
            <a href="#features" className="hover:text-white transition">FEATURES</a>
            <a href="#showcase" className="hover:text-white transition">TRY IT</a>
            <a href="#about" className="hover:text-white transition">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-8 overflow-hidden">
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
      <section id="showcase" className="py-16 px-8 flex-grow flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-gradient-to-br from-white/5 via-zinc-900/60 to-black/90 rounded-4xl p-20 shadow-2xl border border-white/10 backdrop-blur-sm">
            
            {/* Title */}
            <div className="text-center mb-20">
              <h3 className="text-5xl font-black text-white tracking-tight">
                <span className="text-[#EEFF00]">ALMUS</span> <span className="italic text-white">SMART DISPENSER</span>
              </h3>
            </div>

            {/* Ice & Lemon Options */}
            <div className="flex gap-6 justify-center mb-20">
              <button
                onClick={() => setShowIce(!showIce)}
                className={`px-8 py-4 rounded-full border-2 font-bold text-base transition-all duration-300 ${
                  showIce
                    ? 'border-[#EEFF00] text-white bg-white/15'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                ❄️ Ice
              </button>
              <button
                onClick={() => setShowLemon(!showLemon)}
                className={`px-8 py-4 rounded-full border-2 font-bold text-base transition-all duration-300 ${
                  showLemon
                    ? 'border-[#EEFF00] text-white bg-white/15'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                🍋 Lemon
              </button>
            </div>

            {/* Glass Cup - CENTERED & LARGE */}
            <div className="flex justify-center mb-20">
              <div className="relative w-72 h-96">
                {/* Glass */}
                <div className="absolute inset-0 rounded-3xl border-4 border-gray-500/70 bg-gradient-to-b from-white/20 to-black/40 overflow-hidden shadow-2xl backdrop-blur-lg">
                  
                  {/* Liquid */}
                  {selectedDrink && (
                    <motion.div
                      className={`absolute bottom-0 w-full ${liquidColors[selectedDrink]} opacity-85`}
                      initial={{ height: '0%' }}
                      animate={{ height: isDispensing ? '75%' : '0%' }}
                      transition={{ duration: 2.5, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Ice */}
                  {showIce && isDispensing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-6 h-6 bg-white/90 rounded-md shadow-lg"
                          animate={{
                            y: [Math.random() * 50, Math.random() * 50 + 40],
                            x: [Math.sin(i) * 20, Math.sin(i) * 20 + 10],
                            rotate: [0, 360],
                            opacity: [1, 0.4, 1],
                          }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.15,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Lemon */}
                  {showLemon && isDispensing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-lg"
                          animate={{
                            y: [0, 30, 0],
                            scale: [1, 0.6, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.35,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Stream */}
                  {isDispensing && selectedDrink && (
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-40 ${liquidColors[selectedDrink]} opacity-75 rounded-full blur-sm`}
                      animate={{ opacity: [0.8, 0.2, 0.8] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Drink Selection Buttons */}
            {menu === 'main' && (
              <div className="grid grid-cols-3 gap-6 mb-8">
                <button 
                  onClick={() => handleSelectDrink('water')}
                  className="p-8 rounded-2xl border-2 border-gray-600 bg-black/60 hover:border-[#EEFF00] transition text-white font-bold text-center text-lg"
                >
                  <div className="text-4xl mb-4">💧</div>
                  WATER
                </button>
                <button 
                  onClick={() => setMenu('soda')}
                  className="p-8 rounded-2xl border-2 border-gray-600 bg-black/60 hover:border-[#EEFF00] transition text-white font-bold text-center text-lg"
                >
                  <div className="text-4xl mb-4">🥤</div>
                  SODA
                </button>
                <button 
                  onClick={() => setMenu('jus')}
                  className="p-8 rounded-2xl border-2 border-gray-600 bg-black/60 hover:border-[#EEFF00] transition text-white font-bold text-center text-lg"
                >
                  <div className="text-4xl mb-4">🍊</div>
                  JUS
                </button>
              </div>
            )}

            {/* Soda Menu */}
            {menu === 'soda' && (
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {sodaDrinks.map((drink) => (
                    <button
                      key={drink.value}
                      onClick={() => handleSelectDrink(drink.value)}
                      className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${
                        selectedDrink === drink.value
                          ? 'border-[#EEFF00] ring-2 ring-[#EEFF00]/50 bg-white/15'
                          : 'border-gray-600 hover:border-gray-500 bg-black/60'
                      }`}
                    >
                      {drink.logo && (
                        <img src={drink.logo} alt={drink.name} className="w-16 h-16 object-contain" />
                      )}
                      <span className="text-white text-base font-bold">{drink.name}</span>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setMenu('main')}
                  className="w-full p-4 rounded-lg border-2 border-gray-600 bg-black/60 hover:border-gray-500 transition text-gray-400 text-base font-bold"
                >
                  ← Back to Menu
                </button>
              </div>
            )}

            {/* Juice Menu */}
            {menu === 'jus' && (
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {juiceDrinks.map((drink) => (
                    <button
                      key={drink.value}
                      onClick={() => handleSelectDrink(drink.value)}
                      className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${
                        selectedDrink === drink.value
                          ? 'border-[#EEFF00] ring-2 ring-[#EEFF00]/50 bg-white/15'
                          : 'border-gray-600 hover:border-gray-500 bg-black/60'
                      }`}
                    >
                      {drink.logo && (
                        <img src={drink.logo} alt={drink.name} className="w-16 h-16 object-contain" />
                      )}
                      <span className="text-white text-base font-bold">{drink.name}</span>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setMenu('main')}
                  className="w-full p-4 rounded-lg border-2 border-gray-600 bg-black/60 hover:border-gray-500 transition text-gray-400 text-base font-bold"
                >
                  ← Back to Menu
                </button>
              </div>
            )}

            {/* Creative Dispense Button */}
            <button
              onClick={handleDispense}
              disabled={!selectedDrink || isDispensing}
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-[#EEFF00] via-[#d4ff00] to-[#EEFF00] text-black font-black text-2xl hover:shadow-2xl hover:shadow-[#EEFF00]/60 transition-all disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-widest shadow-xl hover:scale-105 duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {isDispensing ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="relative z-10"
                >
                  DISPENSING...
                </motion.span>
              ) : (
                <span className="relative z-10">DISPENSE ✨</span>
              )}
            </button>
          </div>
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
            <p>&copy; 2026 ALMUS. Innovation in every drop.</p>
          </div>
        </div>
      </footer>
    </div>
  );
      {/* Header */}
      <header className="sticky top-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#EEFF00] rounded-full flex items-center justify-center text-xl">
              🔥
            </div>
            <span className="text-white font-bold tracking-widest">ALMUS</span>
          </div>
          <nav className="hidden md:flex gap-12 text-gray-400 text-sm font-semibold">
            <a href="#features" className="hover:text-white transition">FEATURES</a>
            <a href="#showcase" className="hover:text-white transition">TRY IT</a>
            <a href="#about" className="hover:text-white transition">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-8 px-4 py-2 border border-gray-700 rounded-full">
            <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">INNOVATION 2026</span>
          </div>
          <h1 className="text-8xl md:text-9xl font-black text-white mb-8 leading-tight">
            THE FUTURE OF<br/>
            <span className="text-[#EEFF00]">DISPENSING</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the next generation of smart technology. Sleek carbon design meets <span className="font-bold text-white">intelligent functionality.</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-8">
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
      <section id="showcase" className="py-40 px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-2">
              EXPERIENCE <span className="text-[#EEFF00]">ALMUS</span>
            </h2>
            <p className="text-gray-600 text-sm uppercase tracking-widest font-semibold">INTERACTIVE SHOWCASE</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 via-zinc-900/60 to-black/90 rounded-4xl p-16 shadow-2xl border border-white/10 backdrop-blur-sm">
            
            {/* Title */}
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-white tracking-tight">
                <span className="text-[#EEFF00]">ALMUS</span> <span className="italic text-white">SMART DISPENSER</span>
              </h3>
            </div>

            {/* Options Buttons */}
            <div className="flex gap-4 justify-center mb-12">
              <button
                onClick={() => setShowIce(!showIce)}
                className={`px-6 py-3 rounded-full border font-semibold text-sm transition-all ${
                  showIce
                    ? 'border-[#EEFF00] text-white bg-white/10'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                ❄️ Ice
              </button>
              <button
                onClick={() => setShowLemon(!showLemon)}
                className={`px-6 py-3 rounded-full border font-semibold text-sm transition-all ${
                  showLemon
                    ? 'border-[#EEFF00] text-white bg-white/10'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                🍋 Lemon
              </button>
            </div>

            {/* Glass Container - CENTERED AND VISIBLE */}
            <div className="flex justify-center mb-16 py-12">
              <div className="relative w-60 h-80">
                {/* Glass Shape */}
                <div className="absolute inset-0 rounded-3xl border-4 border-gray-400 bg-gradient-to-b from-white/15 to-black/60 overflow-hidden shadow-2xl backdrop-blur-md">
                  
                  {/* Liquid Fill Animation */}
                  {selectedDrink && (
                    <motion.div
                      className={`absolute bottom-0 w-full ${liquidColors[selectedDrink]} opacity-85`}
                      initial={{ height: '0%' }}
                      animate={{ height: isDispensing ? '75%' : '0%' }}
                      transition={{ duration: 2.5 }}
                    />
                  )}

                  {/* Ice Cubes */}
                  {showIce && isDispensing && (
                    <div className="absolute inset-0 flex items-center justify-center gap-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-5 h-5 bg-white/90 rounded-sm shadow-lg"
                          animate={{
                            y: [0, 40, 0],
                            rotate: [0, 360],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Lemon Slices */}
                  {showLemon && isDispensing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-7 h-7 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-lg"
                          animate={{
                            y: [0, 25, 0],
                            scale: [1, 0.7, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.3,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Liquid Stream */}
                  {isDispensing && selectedDrink && (
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-32 ${liquidColors[selectedDrink]} opacity-80 rounded-full`}
                      animate={{ opacity: [0.8, 0.3, 0.8] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Drink Selection Menu */}
            {menu === 'main' && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button 
                  onClick={() => handleSelectDrink('water')}
                  className="p-6 rounded-2xl border border-gray-600 bg-black/50 hover:border-[#EEFF00] transition text-white font-semibold text-center"
                >
                  <div className="text-2xl mb-2">💧</div>
                  WATER
                </button>
                <button 
                  onClick={() => setMenu('soda')}
                  className="p-6 rounded-2xl border border-gray-600 bg-black/50 hover:border-[#EEFF00] transition text-white font-semibold text-center"
                >
                  <div className="text-2xl mb-2">🥤</div>
                  SODA
                </button>
                <button 
                  onClick={() => setMenu('jus')}
                  className="p-6 rounded-2xl border border-gray-600 bg-black/50 hover:border-[#EEFF00] transition text-white font-semibold text-center"
                >
                  <div className="text-2xl mb-2">🍊</div>
                  JUS
                </button>
              </div>
            )}

            {/* Soda Menu */}
            {menu === 'soda' && (
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {sodaDrinks.map((drink) => (
                    <button
                      key={drink.value}
                      onClick={() => handleSelectDrink(drink.value)}
                      className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-3 ${
                        selectedDrink === drink.value
                          ? 'border-[#EEFF00] ring-2 ring-[#EEFF00] bg-white/10'
                          : 'border-gray-600 hover:border-gray-500 bg-black/50'
                      }`}
                    >
                      {drink.logo && (
                        <img src={drink.logo} alt={drink.name} className="w-12 h-12 object-contain" />
                      )}
                      <span className="text-white text-sm font-semibold">{drink.name}</span>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setMenu('main')}
                  className="w-full p-3 rounded-lg border border-gray-600 bg-black/50 hover:border-gray-500 transition text-gray-400 text-sm font-semibold"
                >
                  ← Back to Menu
                </button>
              </div>
            )}

            {/* Juice Menu */}
            {menu === 'jus' && (
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {juiceDrinks.map((drink) => (
                    <button
                      key={drink.value}
                      onClick={() => handleSelectDrink(drink.value)}
                      className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-3 ${
                        selectedDrink === drink.value
                          ? 'border-[#EEFF00] ring-2 ring-[#EEFF00] bg-white/10'
                          : 'border-gray-600 hover:border-gray-500 bg-black/50'
                      }`}
                    >
                      {drink.logo && (
                        <img src={drink.logo} alt={drink.name} className="w-12 h-12 object-contain" />
                      )}
                      <span className="text-white text-sm font-semibold">{drink.name}</span>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setMenu('main')}
                  className="w-full p-3 rounded-lg border border-gray-600 bg-black/50 hover:border-gray-500 transition text-gray-400 text-sm font-semibold"
                >
                  ← Back to Menu
                </button>
              </div>
            )}

            {/* Dispense Button */}
            <button
              onClick={handleDispense}
              disabled={!selectedDrink || isDispensing}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#EEFF00] via-[#d4ff00] to-[#EEFF00] text-black font-black text-xl hover:shadow-2xl hover:shadow-[#EEFF00]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest shadow-lg hover:scale-105 duration-300"
            >
              {isDispensing ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  DISPENSING...
                </motion.span>
              ) : (
                <span>DISPENSE ✨</span>
              )}
            </button>
          </div>
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
            <p>&copy; 2026 ALMUS. Innovation in every drop.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}