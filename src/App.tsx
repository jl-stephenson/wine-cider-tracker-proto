import { HarvestForm } from "@/components/HarvestForm";
import type { HarvestFormData } from "@/schemas/HarvestForm";
import { useState } from "react";
import { HarvestSummary } from "./components/HarvestSummary";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DashboardNav } from "./components/DashboardNav";

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
    <DashboardLayout>
     <DashboardNav />
      <div>
        <label htmlFor="search" className="visually-hidden">Seach</label>
        <input type="text" id="search"/>
      </div>
      <main className="flow">
        <HarvestForm onSubmit={handleSubmit} />
        <HarvestSummary harvest={harvest} />{" "}
      </main>
    </DashboardLayout>
  );
}
