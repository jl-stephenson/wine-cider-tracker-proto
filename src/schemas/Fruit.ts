import * as z from "zod/v4";

export const fruitSchema = z.object({
  id: z.string(),
  type: z.enum(["apples", "grapes"]),
  variety: z.string(),
});

export type Fruit = z.infer<typeof fruitSchema>;
