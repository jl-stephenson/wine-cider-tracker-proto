import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const client: SupabaseClient = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_API_KEY,
  );

  return client;
}
