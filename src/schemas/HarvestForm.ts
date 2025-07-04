import * as z from "zod/v4";

const fruitSchema = z.object({
  type: z.enum(["apples", "grapes"]),
  variety: z.string().trim().min(1, "Variety required"),
  location: z.string().trim().min(1, "Location required"),
  varietyNotes: z.string().optional(),
});

export const harvestSchema = z.object({
  fruits: z.array(fruitSchema),
  date: z
    .date("Please enter a valid date")
    .max(new Date(), "Harvest date cannot be in future"),
  weight: z.number("Please enter a number up to 2 decimal places").positive(),
  notes: z.string().optional(),
});

export type HarvestFormData = z.infer<typeof harvestSchema>;
