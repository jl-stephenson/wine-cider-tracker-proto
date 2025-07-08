import { useState } from "react";
import { HarvestForm } from "@/components/HarvestForm";
import type { HarvestFormData } from "@/schemas/HarvestForm";
import { HarvestSummary } from "./components/HarvestSummary";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { SidebarNav } from "./components/SidebarNav";
import { SiteHeader } from "./components/SiteHeader";

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
      <SidebarNav />
      <SiteHeader />
      <main className="flow">
        <HarvestForm onSubmit={handleSubmit} />
        <HarvestSummary harvest={harvest} />
      </main>
    </DashboardLayout>
  );
}
