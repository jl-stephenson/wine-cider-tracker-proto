import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import { SidebarNav } from "@/components/SidebarNav";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  { component: RootComponent },
);

function RootComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) setIsSidebarOpen(false);
  }, [isDesktop]);

  function toggleSidebar() {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  }

  return (
    <div className="grid" data-layout="dashboard">
      <SidebarNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <SiteHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  );
}
