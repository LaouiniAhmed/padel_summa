/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// L'export est obligatoire ici
export const supabase: ReturnType<typeof createClient> = createClient(supabaseUrl, supabaseAnonKey);