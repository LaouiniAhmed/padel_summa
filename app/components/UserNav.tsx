import React, { JSX, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User } from 'lucide-react';

export const UserNav = (): JSX.Element => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // On force le type à 'any' pour éviter l'erreur 'never' sur full_name
        const { data, error } = await (supabase
          .from('profiles') as any) 
          .select('full_name')
          .eq('id', user.id)
          .single();
        
        if (data && !error) {
          setName(data.full_name);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="fixed top-6 right-10 z-50 flex items-center gap-4 bg-zinc-900/80 backdrop-blur-md border border-white/5 p-2 pr-6 rounded-full shadow-2xl">
      <div className="w-9 h-9 bg-[#EEFF00] rounded-full flex items-center justify-center text-black shadow-lg">
        <User size={18} strokeWidth={3} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1">Account</span>
        <span className="text-white font-black text-xs uppercase tracking-tight leading-none">
          {name || 'User'}
        </span>
      </div>
    </div>
  );
};