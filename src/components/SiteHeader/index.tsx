import { CloseIcon } from "../icons/CloseIcon";
import { HamburgerIcon } from "../icons/HamburgerIcon";

type SiteHeaderProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export function SiteHeader({ isSidebarOpen, toggleSidebar }: SiteHeaderProps) {
  return (
    <header className="site-header" data-layout-area="header">
      <button
        className="site-header__toggle"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        aria-controls="sidebar"
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      <p className="site-header__breadcrumb">Home {">"} Harvests</p>
      <div>
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>
        <input type="search" id="search" className="site-header__search" />
      </div>
    </header>
  );
}
