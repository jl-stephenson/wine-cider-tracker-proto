import { Link } from "@tanstack/react-router";
import type { Farm } from "@/schemas/Farm";

type FarmsSummaryTableProps = {
  farms: Farm[];
};

export function FarmSummaryTable({ farms }: FarmsSummaryTableProps) {
  return (
    <section className="panel">
      <div className="panel__heading">
        <h3>{farms[0].category}s</h3>
      </div>
      <div className="panel__content">
        <table>
          <caption className="visually-hidden">
            List of {farms[0].category}s
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {farms.map((farm) => (
              <tr key={farm.id}>
                <td>{farm.name}</td>
                <td>{farm.size} ha</td>
                <td>
                  <Link to="/farms/$farmId" params={{ farmId: farm.id }}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
