import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  farm: {
    id: primaryKey(String),
    name: String,
    size: Number,
    created_at: Number,
  },
});

db.farm.create({
  id: "farm_1",
  name: "Long Orchard",
  size: 2,
  created_at: new Date(2024, 5, 12).getTime(),
});

db.farm.create({
  id: "farm_2",
  name: "High Plain - Plot 1",
  size: 0.5,
  created_at: new Date(2023, 3, 24).getTime(),
});

db.farm.create({
     id: "farm_3",
    name: "Valley Orchard",
    size: 3,
    created_at: new Date(2023, 5, 1).getTime(),
})
