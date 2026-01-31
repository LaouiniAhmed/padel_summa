import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Trophy, Clock, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';

interface Match {
  id: string;
  start_time: string;
  status: string;
  courts: {
    name: string;
    type: string;
  };
}

export const MyMatches: React.FC = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const fetchMatches = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data, error } = await supabase
          .from('bookings')
          .select(`
            id,
            start_time,
            status,
            court_id,
            courts (
              name,
              type
            )
          `)
          .eq('user_id', user.id)
          .neq('status', 'cancelled') 
          .order('start_time', { ascending: filter === 'upcoming' });

        if (error) throw error;

        const now = new Date();
        const filteredData = data?.filter((match: Match) => {
          const matchDate = new Date(match.start_time);
          return filter === 'upcoming' ? matchDate >= now : matchDate < now;
        });

        setMatches(filteredData || []);
      }
    } catch (err) {
      console.error("Error fetching matches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, [filter]);

  const handleCancel = async (bookingId: string) => {
    const confirmCancel = window.confirm("Voulez-vous vraiment annuler ce match ?");
    if (!confirmCancel) return;

    try {
      const { error } = await (supabase
        .from('bookings') as any) 
        .update({ status : 'cancelled' })
        .eq('id', bookingId);

      if (error) throw error;

      alert("Match annulé avec succès.");
      setMatches(prev => prev.filter(m => m.id !== bookingId));
    } catch (err) {
      console.error("Error:", err);
      alert("Une erreur est survenue lors de l'annulation.");
    }
  };

  return (
    <div className="p-10 text-white animate-in fade-in duration-700">
      <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            MES <span className="text-[#EEFF00]">MATCHS</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-medium">
            {filter === 'upcoming' ? "Vos prochains défis sur le terrain." : "Consultez vos performances passées."}
          </p>
        </div>

        <div className="flex bg-zinc-900 p-1 rounded-xl border border-white/5 shadow-xl">
          <button 
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-2 rounded-lg text-xs font-black transition-all duration-300 ${filter === 'upcoming' ? 'bg-[#EEFF00] text-black shadow-lg shadow-[#EEFF00]/20' : 'text-zinc-500 hover:text-white'}`}
          >
            À VENIR
          </button>
          <button 
            onClick={() => setFilter('past')}
            className={`px-6 py-2 rounded-lg text-xs font-black transition-all duration-300 ${filter === 'past' ? 'bg-[#EEFF00] text-black shadow-lg shadow-[#EEFF00]/20' : 'text-zinc-500 hover:text-white'}`}
          >
            PASSÉS
          </button>
        </div>
      </header>

      {loading ? (
        <div className="flex items-center gap-3 text-zinc-500 animate-pulse">
          <Clock className="animate-spin" size={20} />
          <span className="font-bold tracking-widest text-sm">RECHERCHE DE VOS MATCHS...</span>
        </div>
      ) : matches.length > 0 ? (
        <div className="grid gap-4">
          {matches.map((match) => (
            <div 
              key={match.id} 
              className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between group hover:border-[#EEFF00]/40 hover:bg-zinc-900/60 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#EEFF00] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Trophy size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                      {match.courts?.name || "Court Standard"}
                    </h3>
                    <span className="text-[10px] bg-[#EEFF00]/10 text-[#EEFF00] border border-[#EEFF00]/20 px-2 py-0.5 rounded-md font-black">
                      {match.courts?.type?.toUpperCase() || "INDOOR"}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-6 mt-2 text-sm text-zinc-400">
                    <span className="flex items-center gap-2 font-medium">
                      <CalendarIcon size={14} className="text-zinc-600"/> 
                      {new Date(match.start_time).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </span>
                    <span className="flex items-center gap-2 font-medium">
                      <Clock size={14} className="text-zinc-600"/> 
                      {new Date(match.start_time).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 w-full md:w-auto mt-4 md:mt-0">
                <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full border ${
                  match.status === 'confirmed' 
                  ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                  : 'bg-zinc-800 text-zinc-500 border-white/5'
                }`}>
                  {match.status === 'confirmed' ? 'Confirmé' : match.status}
                </span>

                {filter === 'upcoming' && (
                  <button 
                    onClick={() => handleCancel(match.id)}
                    className="text-[10px] text-red-500/70 hover:text-red-500 font-black uppercase tracking-widest transition-all hover:underline"
                  >
                    Annuler le match
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900/20 border-2 border-dashed border-white/5 rounded-[40px] p-24 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-white/5">
            <AlertCircle size={40} className="text-zinc-800" />
          </div>
          <p className="text-zinc-600 font-black uppercase tracking-[0.2em] text-lg">
            AUCUN MATCH TROUVÉ
          </p>
          {filter === 'upcoming' && (
            <button className="mt-6 px-8 py-3 bg-white text-black text-xs font-black rounded-xl hover:bg-[#EEFF00] transition-colors uppercase tracking-widest">
              Réserver une piste
            </button>
          )}
        </div>
      )}
    </div>
  );
};