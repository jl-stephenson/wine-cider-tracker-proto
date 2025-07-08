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
      <div className="site-header">
        <p>Home {">"} Harvests</p>
        <div>
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>
        <input type="search" id="search" className="site-header__search" />
        </div>
      </div>
      <main className="flow">
        <HarvestForm onSubmit={handleSubmit} />
        <HarvestSummary harvest={harvest} />
      </main>
    </DashboardLayout>
  );
}
