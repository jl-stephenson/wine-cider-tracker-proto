import { useEffect, useState } from "react";
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

    useEffect(() => {
    // create a MediaQueryList
    const mql = window.matchMedia("(min-width: 768px)");

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        
        setIsSidebarOpen(false);
      }
    };

    
    mql.addEventListener("change", handler);

   
    if (mql.matches) {
      setIsSidebarOpen(false);
    }

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, []);

  function handleSubmit(data: HarvestFormData) {
    setHarvest(data);
  }

  function toggleSidebar() {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  }

  return (
    <DashboardLayout>
      <SidebarNav  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <SiteHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flow">
        <HarvestForm onSubmit={handleSubmit} />
        <HarvestSummary harvest={harvest} />
      </main>
    </DashboardLayout>
  );
}
