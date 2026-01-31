import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface AuthProps {
  onBack: () => void;
}

export default function Auth({ onBack }: AuthProps): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Nouveau champ
  const [phone, setPhone] = useState('');       // Nouveau champ
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Pour basculer l'affichage

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      // --- LOGIQUE D'INSCRIPTION ---
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        alert(authError.message);
      } else if (authData.user) {
        // Insertion dans ta table "profiles"
       const { error: profileError } = await (supabase as any)
  .from('profiles')
  .insert([
    { 
      id: authData.user.id, 
      full_name: fullName, 
      phone: phone,
      skill_level: 'Beginner' 
    }
  ]);

        if (profileError) {
          alert("Error creating profile: " + profileError.message);
        } else {
          alert("Registration successful! Check your emails.");
        }
      }
    } else {
      // --- LOGIQUE DE CONNEXION ---
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
          {isSignUp ? "Create an " : "Access your "} 
          <span className="text-[#d4ff00]">Account</span>
        </h2>
        
        <form onSubmit={handleAuth} className="space-y-4">
          {/* Champs supplémentaires affichés uniquement pour l'inscription */}
          {isSignUp && (
            <>
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4ff00]"
                onChange={(e) => setFullName(e.target.value)}
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4ff00]"
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          )}

          <input 
            type="email" 
            placeholder="Email" 
            required
            className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4ff00]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required
            className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4ff00]"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#d4ff00] text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? 'Loading...' : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            {isSignUp ? "Already have an account? Log in" : "No account yet? Sign up"}
          </button>

          <button 
            onClick={onBack} 
            className="block w-full text-zinc-600 hover:text-white text-xs transition uppercase tracking-widest"
          >
            ← Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}