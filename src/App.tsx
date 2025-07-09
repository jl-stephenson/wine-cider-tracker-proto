import { useEffect, useState } from "react";
import {useMediaQuery} from "usehooks-ts";
import { HarvestForm } from "@/components/HarvestForm";
import type { HarvestFormData } from "@/schemas/HarvestForm";
import { HarvestSummary } from "./components/HarvestSummary";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { SidebarNav } from "./components/SidebarNav";
import { SiteHeader } from "./components/SiteHeader";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
  if (isDesktop) setIsSidebarOpen(false);
  }, [isDesktop]);

  function handleSubmit(data: HarvestFormData) {
    setHarvest(data);
  }

  function toggleSidebar() {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  }

  return (
    <DashboardLayout>
      <SidebarNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <SiteHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flow" data-layout-area="content">
        <HarvestForm onSubmit={handleSubmit} />
        <HarvestSummary harvest={harvest} />
      </main>
    </DashboardLayout>
  );
}
