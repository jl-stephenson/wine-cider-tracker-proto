import { useEffect, useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { LogoIcon } from "../icons/LogoIcon";
import { Link } from "@tanstack/react-router";

type SidebarNavProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export function SidebarNav({ isSidebarOpen, toggleSidebar }: SidebarNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isSidebarOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isSidebarOpen]);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (isSidebarOpen && event.key === "Escape") {
      toggleSidebar();
    }
  });

  return (
    <nav
      id="sidebar"
      className="sidebar-nav"
      data-layout-area="sidebar"
      data-open={isSidebarOpen}
      aria-label="Primary"
    >
      <ul role="list" className="flow">
        {isSidebarOpen ? (
          <li>
            <Link to="/" ref={firstLinkRef}>
              Home
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/" className="sidebar__logo" aria-label="Home">
              <LogoIcon />
            </Link>
          </li>
        )}
        <li>
          <Link to="/farms">Orchards</Link>
        </li>
        <li>
          <Link to="/fruits">Fruits</Link>
        </li>
        <li>
          <Link to="/harvests">Harvests</Link>
        </li>
        <li>
          <Link to="/processing">Processing</Link>
        </li>
        <li>
          <Link to="/fermentations">Fermentations</Link>
        </li>
        <li>
          <Link to="/tanks">Tanks</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
    </nav>
  );
}
