import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;

  if (!url || !apiKey) {
    throw new Error("Missing required Supabase environment variables");
  }

  const client: SupabaseClient = createClient(url, apiKey);

  return client;
}
