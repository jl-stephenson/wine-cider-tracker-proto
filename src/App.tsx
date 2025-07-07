import { HarvestForm } from "@/components/HarvestForm";
import type { HarvestFormData } from "@/schemas/HarvestForm";
import { useState } from "react";
import { HarvestSummary } from "./components/HarvestSummary";

export default function App() {
  const [harvest, setHarvest] = useState<HarvestFormData>({
    fruits: [
      {
        type: "apples",
        variety: "",
        location: "",
        weight: 0,
      },
    ],
    date: new Date(),
  });

  function handleSubmit(data: HarvestFormData) {
    setHarvest(data);
  }

  return (
    <main className="wrapper flow">
      <HarvestForm onSubmit={handleSubmit} />
      <HarvestSummary harvest={harvest} />
    </main>
  );
}
