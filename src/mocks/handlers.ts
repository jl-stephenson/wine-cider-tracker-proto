import { http, HttpResponse } from "msw";
import { mockFarms } from "@/data/mockData";

export const handlers = [
  http.get("https://vintage-tracker.com/farms", () => {
    return HttpResponse.json({
      mockFarms,
    });
  }),
];
