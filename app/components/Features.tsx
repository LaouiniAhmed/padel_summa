import { Cloud, Zap, Users } from "lucide-react";
import productImage from '../../assets/padel2.jpg';
import scoreboardImage from '../../assets/padel3.jpg';

export function Features() {
  return (
    <section id="features" className="bg-black py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart Scoring for the <br />
            <span className="text-[#EEFF00]">Next Gen of Padel</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience seamless integration, real-time syncing, and professional-grade performance on every court.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {/* Feature 1 */}
          <div className="group">
            <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#EEFF00] transition-colors">
              <Zap className="w-8 h-8 text-[#EEFF00] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Syncing</h3>
            <p className="text-gray-400 leading-relaxed">
              Instant score updates across all connected devices. Never miss a point with our ultra-responsive system.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group">
            <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#EEFF00] transition-colors">
              <Cloud className="w-8 h-8 text-[#EEFF00] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Cloud-based Match History</h3>
            <p className="text-gray-400 leading-relaxed">
              Access every match, every statistic, forever. Your complete playing history in one secure location.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group">
            <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#EEFF00] transition-colors">
              <Users className="w-8 h-8 text-[#EEFF00] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Interactive Player Displays</h3>
            <p className="text-gray-400 leading-relaxed">
              Engage your audience with stunning visual displays that bring every match to life.
            </p>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image 1 */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#EEFF00]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={productImage} 
              alt="Padel Equipment" 
              className="w-full h-auto"
            />
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-[#EEFF00]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={scoreboardImage} 
              alt="Digital Scoreboard Display" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mt-32 bg-[#0A0A0A] border border-[#1A1A1A] p-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Display</div>
              <div className="text-white text-xl">LED Matrix</div>
            </div>
            <div>
              <div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Connectivity</div>
              <div className="text-white text-xl">Wi-Fi 6</div>
            </div>
            <div>
              <div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Battery</div>
              <div className="text-white text-xl">48h+</div>
            </div>
            <div>
              <div className="text-[#EEFF00] mb-2 text-sm uppercase tracking-wider">Warranty</div>
              <div className="text-white text-xl">3 Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
