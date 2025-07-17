import { queryOptions } from "@tanstack/react-query";
import { getSupabaseClient } from "@/utils/getSupabaseClient";
import { fetchCultivationsForFarm, fetchFarms } from "./fetchFunctions";

const client = getSupabaseClient()

export function farmsQueryOptions() {
    return queryOptions({
        queryKey: ["farms"],
        queryFn: () => fetchFarms(client),
    })
}

export function farmQueryOptions(farmId: string) {
    
return queryOptions({
    queryKey: ["farms", farmId],
    queryFn: () => fetchCultivationsForFarm(client, farmId),
})
}