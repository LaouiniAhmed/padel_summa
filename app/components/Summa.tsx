import React, { useState, useEffect } from 'react'; 
import { supabase } from '../lib/supabaseClient';
import { User } from 'lucide-react'; 
import padel1 from '../../assets/padel1.jpg';
import padel2 from '../../assets/padel2.jpg';
import padel3 from '../../assets/padel3.png';
import padel4 from '../../assets/padel4.jpg';


interface SummaProps {
  onBack: () => void;
  // Cette ligne permet à Summa de demander à changer de page
  onNavigate: (page: 'login' | 'landing' | 'dashboard') => void; 
}

export const Summa = ({ onBack, onNavigate }: SummaProps): React.ReactNode => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérifier la session au chargement
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkUser();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* GAUCHE : Bouton Back Home (Inchangé) */}
          <div className="flex-1 flex justify-start">
            <button 
              onClick={onBack} 
              className="group flex items-center gap-2 text-zinc-500 hover:text-[#EEFF00] transition-colors uppercase text-xs font-bold tracking-widest"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back Home
            </button>
          </div>

          {/* CENTRE : Logo ULTIMA (Inchangé) */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
                <span className="text-black font-bold text-xl">U</span>
              </div>
              <span className="text-white tracking-[0.2em] text-sm font-bold">ULTIMA</span>
            </div>
          </div>

          {/* DROITE : Bouton Dynamique (MODIFIÉ ICI) */}
          <div className="flex-1 flex justify-end">
            {isLoggedIn ? (
              /* Design quand connecté : Un bouton "pill" avec icône */
              <button 
                onClick={() => onNavigate('login')} 
                className="flex items-center gap-3 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full hover:border-[#EEFF00]/50 transition-all group"
              >
                <div className="w-7 h-7 bg-[#EEFF00] rounded-full flex items-center justify-center text-black">
                  <User size={14} strokeWidth={3} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-white group-hover:text-[#EEFF00]">
                  Dashboard
                </span>
              </button>
            ) : (
              /* Design quand déconnecté (Votre design original) */
              <button 
                onClick={() => onNavigate('login')}
                className="px-6 py-2 border border-[#d4ff00]/40 text-[#d4ff00] rounded-full hover:bg-[#d4ff00] hover:text-black transition-all font-bold text-xs uppercase cursor-pointer"
              >
                Login / Sign Up
              </button>
            )}
          </div>

        </div>
      </header>

      <main className="pt-24">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img src={padel1} alt="Padel Court with Digital Scoreboard" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
            <div className="inline-block mb-6">
              <span className="text-[#EEFF00] tracking-[0.3em] text-sm uppercase border border-[#EEFF00]/30 px-4 py-2">Revolutionary Scoring System</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">SUMMA</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">The future of Padel scoring has arrived. Real-time, cloud-connected, and designed for the next generation.</p>

            <button onClick={() => onNavigate('login')} className="group inline-flex items-center gap-3 bg-[#EEFF00] text-black px-10 py-5 hover:bg-[#EEFF00]/90 transition-all text-lg">Order System
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#EEFF00] mb-2">&lt;1ms</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#EEFF00] mb-2">Cloud</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Connected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#EEFF00] mb-2">24/7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-[#EEFF00] rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        <section id="features" className="bg-black py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Smart Scoring for the <br />
                <span className="text-[#EEFF00]">Next Gen of Padel</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Experience seamless integration, real-time syncing, and professional-grade performance on every court.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
              <div className="group">
                <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#EEFF00] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-8 h-8 text-[#EEFF00] group-hover:text-black transition-colors" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Syncing</h3>
                <p className="text-gray-400 leading-relaxed">Instant score updates across all connected devices. Never miss a point with our ultra-responsive system.</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#EEFF00] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud w-8 h-8 text-[#EEFF00] group-hover:text-black transition-colors" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud-based Match History</h3>
                <p className="text-gray-400 leading-relaxed">Access every match, every statistic, forever. Your complete playing history in one secure location.</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#EEFF00] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-[#EEFF00] group-hover:text-black transition-colors" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Player Displays</h3>
                <p className="text-gray-400 leading-relaxed">Engage your audience with stunning visual displays that bring every match to life.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden"><div className="absolute inset-0 bg-[#EEFF00]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={padel2} alt="Padel Equipment" className="w-full h-auto" />
              </div>
              <div className="relative group overflow-hidden"><div className="absolute inset-0 bg-[#EEFF00]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={padel3} alt="Digital Scoreboard Display" className="w-full h-auto" />
              </div>
            </div>

            <div className="mt-32 bg-[#0A0A0A] border border-[#1A1A1A] p-12">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical Excellence</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div><div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Display</div><div className="text-white text-xl">LED Matrix</div></div>
                <div><div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Connectivity</div><div className="text-white text-xl">Wi-Fi 6</div></div>
                <div><div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Battery</div><div className="text-white text-xl">48h+</div></div>
                <div><div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Warranty</div><div className="text-white text-xl">3 Years</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="summa" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-white">
              <div className="mb-8 flex justify-center">
                <div className="px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 shadow-sm">
                  <div className="text-center font-black italic uppercase text-3xl">Scoreboard</div>
                  <div className="text-zinc-400 text-xs mt-1">Padel / Tennis style scoring</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-6 bg-white/3 rounded-2xl text-center"><div className="text-zinc-400 text-xs uppercase">Team A</div><div className="text-6xl font-extrabold mt-2">0</div><div className="text-sm text-zinc-300 mt-2">Games: 0 • Sets: 0</div></div>
                <div className="p-6 bg-white/3 rounded-2xl text-center"><div className="text-zinc-400 text-xs uppercase">Team B</div><div className="text-6xl font-extrabold mt-2">0</div><div className="text-sm text-zinc-300 mt-2">Games: 0 • Sets: 0</div></div>
              </div>

              <div className="flex gap-4 justify-center mb-6"><button className="px-6 py-3 bg-[#d4ff00] rounded-lg font-bold text-black">Point A</button><button className="px-6 py-3 bg-white/10 rounded-lg font-bold text-white">Point B</button></div>
              <div className="flex gap-4 justify-center"><button disabled className="px-4 py-2 rounded-lg border border-white/10 text-zinc-300 disabled:opacity-40">Undo</button><button className="px-4 py-2 rounded-lg border border-white/10 text-zinc-300">Reset</button></div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Ready to Transform <br />Your <span className="text-[#EEFF00]">Padel Court?</span></h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">Join the future of professional Padel scoring. Get a custom quote for your facility today.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => onNavigate('login')} className="group inline-flex items-center gap-3 bg-[#EEFF00] text-black px-12 py-6 hover:bg-[#EEFF00]/90 transition-all text-lg w-full sm:w-auto">Order System<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
                <button className="group inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-12 py-6 hover:bg-white hover:text-black transition-all text-lg w-full sm:w-auto">Get a Quote<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 hover:border-[#EEFF00] transition-colors group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-8 h-8 text-[#EEFF00] mb-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg><h3 className="text-white text-xl font-bold mb-2">Email Us</h3><p className="text-gray-400 mb-4">Get in touch with our sales team</p><a href="mailto:sales@summa.com" className="text-[#EEFF00] hover:underline">sales@summa.com</a></div>
              <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 hover:border-[#EEFF00] transition-colors group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-8 h-8 text-[#EEFF00] mb-4" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg><h3 className="text-white text-xl font-bold mb-2">Call Us</h3><p className="text-gray-400 mb-4">Speak with a specialist</p><a href="tel:+1234567890" className="text-[#EEFF00] hover:underline">+1 (234) 567-890</a></div>
            </div>

            <div className="border-t border-[#1A1A1A] pt-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-2"><div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center"><span className="text-black font-bold text-xl">U</span></div><div><div className="text-white tracking-[0.2em] text-sm">ULTIMA</div><div className="text-gray-500 text-xs">by SUMMA</div></div></div>
                <div className="flex items-center gap-8 text-sm text-gray-400"><a href="#" className="hover:text-white transition-colors">Privacy Policy</a><a href="#" className="hover:text-white transition-colors">Terms of Service</a><a href="#" className="hover:text-white transition-colors">Support</a></div>
                <div className="text-gray-500 text-sm">© 2026 SUMMA. All rights reserved.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
