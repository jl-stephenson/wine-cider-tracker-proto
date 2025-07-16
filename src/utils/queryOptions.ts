import { queryOptions } from "@tanstack/react-query";
import { fetchFarmById, fetchFarms } from "./fetchFunctions";

export function farmsQueryOptions() {
    return queryOptions({
        queryKey: ["farms"],
        queryFn: () => fetchFarms(),
    })
}

export function farmQueryOptions(farmId: string) {
return queryOptions({
    queryKey: ["farms", farmId],
    queryFn: () => fetchFarmById(farmId),
})
}