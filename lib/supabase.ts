// Supabase configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Helper to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

// Create a client instance, but warn if credentials are missing
if (typeof window !== 'undefined' && !isSupabaseConfigured()) {
  console.warn('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: false
    }
  }
);

export interface TestParticipant {
  id: string;
  name: string;
  phone: string;
  email: string;
  test_started_at: string;
  test_completed_at?: string;
  score?: number;
  created_at?: string;
}
