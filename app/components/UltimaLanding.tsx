import { motion } from "framer-motion";
import { Trophy, Droplets } from "lucide-react";
import padelImage from "../../assets/padel4.jpg";
import dispenserImage from "../../assets/smart.png";

interface UltimaLandingProps {
  onNavigate: (page: 'summa' | 'almus') => void;
}

export function UltimaLanding({ onNavigate }: UltimaLandingProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4ff00]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4ff00]/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-4 bg-gradient-to-r from-[#d4ff00] via-white to-[#d4ff00] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            style={{ backgroundSize: "200% auto" }}
          >
            ULTIMA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl text-gray-400 font-light tracking-wider"
          >
            Choose Your Experience
          </motion.p>
        </motion.div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SUMMA Card */}
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            onClick={() => onNavigate('summa')}
            className="group relative h-[400px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 hover:border-[#d4ff00] transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <img src={padelImage} alt="Padel" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#d4ff00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            <div className="relative h-full flex flex-col items-center justify-center p-8">
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }} className="w-32 h-32 rounded-full bg-gradient-to-br from-[#d4ff00] to-[#a3cc00] flex items-center justify-center mb-8 shadow-2xl" style={{ boxShadow: "0 0 60px rgba(212, 255, 0, 0.5)" }}>
                <Trophy className="w-16 h-16 text-black" strokeWidth={2.5} />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-black italic mb-4 text-[#d4ff00] group-hover:scale-110 transition-transform duration-300">SUMMA</h2>
              <p className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300">Padel Sports Dashboard</p>

              <motion.div className="absolute bottom-8 right-8" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <svg className="w-8 h-8 text-[#d4ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </div>
          </motion.button>

          {/* ALMUS Card */}
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            onClick={() => onNavigate('almus')}
            className="group relative h-[400px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 hover:border-[#d4ff00] transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <img src={dispenserImage} alt="Smart Dispenser" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#d4ff00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} />

            <div className="relative h-full flex flex-col items-center justify-center p-8">
              <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }} className="w-32 h-32 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] flex items-center justify-center mb-8 shadow-2xl" style={{ boxShadow: "0 0 60px rgba(96, 165, 250, 0.5)" }}>
                <Droplets className="w-16 h-16 text-white" strokeWidth={2.5} />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-black italic mb-4 text-[#d4ff00] group-hover:scale-110 transition-transform duration-300">ALMUS</h2>
              <p className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300">Smart Dispenser Station</p>

              <motion.div className="absolute bottom-8 right-8" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <svg className="w-8 h-8 text-[#d4ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* Footer Text */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="text-center mt-16">
          <p className="text-gray-600 text-sm uppercase tracking-widest">Premium Experience Platform</p>
        </motion.div>
      </div>
    </div>
  );
}
