import { queryOptions } from "@tanstack/react-query";
import { fetchFarms } from "./fetchFunctions";

export function farmsQueryOptions() {
    return queryOptions({
        queryKey: ["farms"],
        queryFn: () => fetchFarms(),
    })
}