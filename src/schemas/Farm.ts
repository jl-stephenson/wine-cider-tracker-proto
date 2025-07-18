import * as z from "zod/v4";
import { fruitSchema } from "./Fruit";

export const farmSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number().min(0.1),
  created_at: z.number(),
  fruits: z.array(fruitSchema).optional(),
  category: z.enum(["Vineyard", "Orchard"]),
});

export type Farm = z.infer<typeof farmSchema>;