import React from 'react';
import { supabase } from "../lib/supabaseClient";
import { 
  LayoutDashboard, 
  Calendar, 
  Trophy, 
  User, 
  LogOut, 
  Settings 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  goToSumma: () => void;
}

export const Sidebar = ({ activeTab, setActiveTab, onLogout, goToSumma }: SidebarProps): React.ReactElement => {
  const handleLogoClick = () => {
  setActiveTab('overview'); // Retour au dashboard principal
};
    const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Logout error:", error.message);
    }
    // Note: onLogout() est appelé ici pour s'assurer que l'UI change 
    // si l'événement SIGNED_OUT met du temps à se déclencher
    onLogout(); 
  };
  
    const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'booking', label: 'Bookings', icon: <Calendar size={20} /> },
    { id: 'matches', label: 'My Matches', icon: <Trophy size={20} /> },
    { id: 'profile', label: 'My Profile', icon: <User size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];
  

  return (
    <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col h-screen sticky top-0">
      {/* Logo Section */}
<div 
  onClick={goToSumma} 
  className="p-8 cursor-pointer group"
>
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-[#EEFF00] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
      <span className="text-black font-black text-xl">S</span>
    </div>
    <span className="text-white font-bold tracking-tighter text-xl group-hover:text-[#EEFF00] transition-colors">
      SUMMA
    </span>
  </div>
</div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeTab === item.id 
              ? 'bg-[#EEFF00] text-black font-bold' 
              : 'text-zinc-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className={activeTab === item.id ? 'text-black' : 'group-hover:text-[#EEFF00]'}>
              {item.icon}
            </span>
            <span className="text-sm tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-white/5">
        <button 
          onClick={async () => {
          await supabase.auth.signOut(); // Ferme la session dans Supabase
          onLogout(); // Change l'état vers 'landing' dans App.tsx
         }}
            className="w-full flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-all"
            >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};