import { http, HttpResponse } from "msw";
import { db } from "./db";

export const handlers = [
  http.get("https://vintage-tracker.com/farms", ({ request }) => {
    const url = new URL(request.url);
    const farmId = url.searchParams.get("id");

    if (farmId) {
      const farm = db.farm.findFirst({
        where: {
          id: {
            equals: farmId,
          },
        },
      });

      if (!farm) {
        return HttpResponse.json({ error: "Not found" }, { status: 404 });
      }

      return HttpResponse.json({
        farm,
      });
    }

    const farms = db.farm.getAll();
    return HttpResponse.json({
      farms,
    });
  }),
];
