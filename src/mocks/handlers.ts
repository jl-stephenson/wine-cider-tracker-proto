import { http, HttpResponse } from "msw";
import { db } from "./db";

export const handlers = [
  http.get("https://vintage-tracker.com/farms", () => {
    const farms = db.farm.getAll();
    return HttpResponse.json({
      farms
    });
  }),
];
