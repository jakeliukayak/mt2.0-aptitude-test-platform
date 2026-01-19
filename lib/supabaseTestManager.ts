import { supabase, isSupabaseConfigured } from './supabase';

/**
 * Add a new test participant to the database
 * @param name - Participant's name
 * @param phone - Participant's phone number
 * @param email - Participant's email address
 * @returns The participant ID if successful, null if failed or not configured
 */
export async function addParticipant(
  name: string,
  phone: string,
  email: string
): Promise<string | null> {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured - skipping database insert');
    // Return a mock ID for testing without Supabase
    return `mock-${Date.now()}`;
  }

  try {
    const { data, error } = await supabase
      .from('test_participants')
      .insert([
        {
          name,
          phone,
          email,
          test_started_at: new Date().toISOString(),
        },
      ])
      .select('id')
      .single();

    if (error) {
      console.error('Error adding participant:', error);
      return null;
    }

    return data?.id || null;
  } catch (err) {
    console.error('Exception adding participant:', err);
    return null;
  }
}

/**
 * Update test completion status with score
 * @param participantId - The participant's ID
 * @param score - The test score
 * @returns true if successful, false otherwise
 */
export async function updateTestCompletion(
  participantId: string,
  score: number
): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured - skipping database update');
    return true; // Return success for mock IDs
  }

  // Don't update mock IDs
  if (participantId.startsWith('mock-')) {
    return true;
  }

  try {
    const { error } = await supabase
      .from('test_participants')
      .update({
        test_completed_at: new Date().toISOString(),
        score,
      })
      .eq('id', participantId);

    if (error) {
      console.error('Error updating test completion:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Exception updating test completion:', err);
    return false;
  }
}
