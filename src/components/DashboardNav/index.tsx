export function DashboardNav() {
  return (
    <nav aria-label="Primary" className="nav">
      <ul role="list" className="flow">
        <li>
          <a href="#" aria-current="page">
            Harvests
          </a>
        </li>
        <li>
          <a href="#">Fermentations</a>
        </li>
        <li>
          <a href="#">Tanks</a>
        </li>
      </ul>
    </nav>
  );
}
