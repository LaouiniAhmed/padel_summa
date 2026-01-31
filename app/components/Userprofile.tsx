import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export const UserProfile: React.FC = () => {
  // Déclaration des states indispensables
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log("User ID connected:", user?.id);

        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();

          if (error) {
            console.error("Query error:", error.message);
          } else {
            console.log("Data retrieved:", data);
            setUserData(data);
          }
        }
      } catch (err) {
        console.error("System error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-black mb-8 uppercase text-[#d4ff00]">My Profile</h2>
      
      <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 space-y-6 max-w-md">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Full Name</p>
          <p className="text-xl font-bold">{userData?.full_name || 'Not set'}</p>
        </div>
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Phone Number</p>
          <p className="text-xl font-bold">{userData?.phone || 'Not set'}</p>
        </div>
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Skill Level</p>
          <span className="mt-2 inline-block px-4 py-1 bg-[#d4ff00] text-black text-sm font-bold rounded-full">
            {userData?.skill_level || 'Beginner'}
          </span>
        </div>
      </div>
    </div>
  );
};