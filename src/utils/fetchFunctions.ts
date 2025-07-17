import { SupabaseClient } from "@supabase/supabase-js";

export async function fetchFarms(client: SupabaseClient) {
  return client.from("farms").select().throwOnError();
}

export async function fetchCultivationsForFarm(client: SupabaseClient, farmId: string) {
  return client
    .from("cultivations")
    .select("*")
    .eq("farm_id", farmId)
    .throwOnError()
    .single();
}
