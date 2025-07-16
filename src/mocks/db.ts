import { factory, manyOf, primaryKey } from "@mswjs/data";

export const db = factory({
  farm: {
    id: primaryKey(String),
    name: String,
    size: Number,
    created_at: Number,
    fruits: manyOf("fruit"),
  },
  fruit: {
    id: primaryKey(String),
    type: String,
    variety: String,
  },
});



const fruits1 = [
  db.fruit.create({
    id: "fruit_1",
    type: "apples",
    variety: "Harry Masters Jersey",
  }),
  db.fruit.create({
    id: "fruit_2",
    type: "apples",
    variety: "Dabinett",
  }),
];

const fruits2 = [
  db.fruit.create({
    id: "fruit_3",
    type: "grapes",
    variety: "Solaris",
  }),
  db.fruit.create({
    id: "fruit_4",
    type: "grapes",
    variety: "Pinot Gris",
  }),
];

db.farm.create({
  id: "farm_1",
  name: "Long Orchard",
  size: 2,
  created_at: new Date(2024, 5, 12).getTime(),
  fruits: fruits1,
});

db.farm.create({
  id: "farm_2",
  name: "High Plain - Plot 1",
  size: 0.5,
  created_at: new Date(2023, 3, 24).getTime(),
  fruits: fruits2,
});

db.farm.create({
  id: "farm_3",
  name: "Valley Orchard",
  size: 3,
  created_at: new Date(2023, 5, 1).getTime(),
});
