import * as z from "zod/v4";

export const HarvestSchema = z.object({
  fruit: z.literal(["apples", "grapes"]),
  date: z.date().max(new Date(), "Cannot be in future"),
  weight: z.number(),
  notes: z.string().optional(),
});

