import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient;

export function getSupabaseClient() {
if (client) {
  return client;
}

  const url = import.meta.env.VITE_SUPABASE_URL;
  const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;

  if (!url || !apiKey) {
    throw new Error("Missing required Supabase environment variables");
  }

  client = createClient(url, apiKey);

  return client;
}
