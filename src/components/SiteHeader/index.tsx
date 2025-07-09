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
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <line
              x1="4"
              y1="4"
              x2="20"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
            />
            <line
              x1="4"
              y1="20"
              x2="20"
              y2="4"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        )}
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
