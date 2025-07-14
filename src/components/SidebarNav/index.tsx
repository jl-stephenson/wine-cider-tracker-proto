import { useEffect, useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { LogoIcon } from "../icons/LogoIcon";

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
            <a href="/" ref={firstLinkRef}>
              Home
            </a>
          </li>
        ) : (<li> <a href="/" className="sidebar__logo" aria-label="Home">
          <LogoIcon />
        </a></li>)}
        <li>
          <a href="#">Orchards</a>
        </li>
        <li>
          <a href="#">Fruits</a>
        </li>
        <li>
          <a href="#" aria-current="page">
            Harvests
          </a>
        </li>
        <li>
          <a href="#">Processing</a>
        </li>
        <li>
          <a href="#">Fermentations</a>
        </li>
        <li>
          <a href="#">Tanks</a>
        </li>
        <li>
          <a href="#">Inventory</a>
        </li>
      </ul>
    </nav>
  );
}
