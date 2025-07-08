export function SiteHeader() {
  return (
    <header className="site-header">
      <p>Home {">"} Harvests</p>
      <div>
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>
        <input type="search" id="search" className="site-header__search" />
      </div>
    </header>
  );
}
