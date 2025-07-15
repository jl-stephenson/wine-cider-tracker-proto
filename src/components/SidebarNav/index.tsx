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
          <Link to="/">Orchards</Link>
        </li>
        <li>
          <Link to="/">Fruits</Link>
        </li>
        <li>
          <Link to="/harvests" aria-current="page">
            Harvests
          </Link>
        </li>
        <li>
          <Link to="/">Processing</Link>
        </li>
        <li>
          <Link to="/">Fermentations</Link>
        </li>
        <li>
          <Link to="/">Tanks</Link>
        </li>
        <li>
          <Link to="/">Inventory</Link>
        </li>
      </ul>
    </nav>
  );
}
