import { useEffect, useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { LogoIcon } from "../icons/LogoIcon";
import { Link } from "@tanstack/react-router";

type SidebarNavProps = {
  isSidebarOpen: boolean;
  isDesktop: boolean;
  toggleSidebar: () => void;
};

export function SidebarNav({
  isSidebarOpen,
  isDesktop,
  toggleSidebar,
}: SidebarNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

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

  function handleClick() {
    if (!isDesktop) toggleSidebar();
  }

  const navLinks = [
    ["/farms", "Farms"],
    ["/fruits", "Fruits"],
    ["/harvests", "Harvests"],
    ["/processing", "Processing"],
    ["/fermentations", "Fermentations"],
    ["/tanks", "Tanks"],
    ["/inventory", "Inventory"],
  ];

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
            <Link to="/" ref={firstLinkRef} onClick={handleClick}>
              Home
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/"
              className="sidebar__logo"
              aria-label="Home"
              onClick={handleClick}
            >
              <LogoIcon />
            </Link>
          </li>
        )}
        {navLinks.map(([to, label]) => (
          <li key={to}>
            <Link to={to} onClick={handleClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
