import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MapPin, Users, DollarSign } from 'lucide-react';

interface Court {
  id: string;
  name: string;
  type: string;
  price_per_hour: number;
  image_url: string;
  is_active: boolean;
}

export const BookingPage: React.FC = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourts = async () => {
      const { data, error } = await supabase
        .from('courts')
        .select('*')
        .eq('is_active', true);

      if (!error) setCourts(data || []);
      setLoading(false);
    };
    fetchCourts();
  }, []);

  if (loading) return <div className="p-10 text-zinc-500">Searching for available courts...</div>;

  return (
    <div className="p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          BOOK A <span className="text-[#EEFF00]">COURT</span>
        </h1>
        <p className="text-zinc-500 mt-2">Select your preferred court for your next match.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courts.map((court) => (
          <div key={court.id} className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-[#EEFF00]/50 transition-all duration-300 shadow-2xl">
            {/* Image du Court */}
            <div className="relative h-48 bg-zinc-800">
              {court.image_url ? (
                <img src={court.image_url} alt={court.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold">IMAGE PADEL</div>
              )}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[#EEFF00] text-xs font-bold uppercase">{court.type}</span>
              </div>
            </div>

            {/* Détails du Court */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">{court.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin size={18} className="text-[#EEFF00]" />
                  <span className="text-sm">Summa Padel Club, Tunis</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Users size={18} className="text-[#EEFF00]" />
                  <span className="text-sm">Max. 4 Players</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <DollarSign size={18} className="text-[#EEFF00]" />
                  <span className="text-sm font-bold text-white">{court.price_per_hour} DT / hour</span>
                </div>
              </div>

              <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-[#EEFF00] transition-colors uppercase tracking-widest text-xs">
                Choose a time slot.
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};