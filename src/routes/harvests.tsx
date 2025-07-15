import { HarvestForm } from "@/components/HarvestForm";
import { HarvestSummary } from "@/components/HarvestSummary";
import type { HarvestFormData } from "@/schemas/HarvestForm";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/harvests")({
  component: RouteComponent,
});

function RouteComponent() {
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
    <main className="flow" data-layout-area="content">
      <HarvestForm onSubmit={handleSubmit} />
      <HarvestSummary harvest={harvest} />
    </main>
  );
}
