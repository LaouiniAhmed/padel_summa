import { ArrowRight } from "lucide-react";
import heroImage from '../../assets/padel1.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Padel Court with Digital Scoreboard" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
        {/* Product Label */}
        <div className="inline-block mb-6">
          <span className="text-[#EEFF00] tracking-[0.3em] text-sm uppercase border border-[#EEFF00]/30 px-4 py-2">
            Revolutionary Scoring System
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
          SUMMA
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
          The future of Padel scoring has arrived. Real-time, cloud-connected, and designed for the next generation.
        </p>

        {/* CTA Button */}
        <button className="group inline-flex items-center gap-3 bg-[#EEFF00] text-black px-10 py-5 hover:bg-[#EEFF00]/90 transition-all text-lg">
          Order System
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Stats */}
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#EEFF00] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}