import * as z from "zod/v4";

const farmSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number().min(0.1),
  created_at: z.number(),
});

export type Farm = z.infer<typeof farmSchema>;