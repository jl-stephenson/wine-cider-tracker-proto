import type { HarvestFormData } from "@/schemas/HarvestForm";
import { ActionsMenuButton } from "../ActionsMenuButton";

type HarvestSummaryProps = {
  harvest: HarvestFormData;
};

export function HarvestSummary({ harvest }: HarvestSummaryProps) {
  return (
    <section className="panel">
      <div className="panel__heading">
        <h2>Harvest Summary</h2>
      </div>
      <div className="panel__content">
        <table>
          <caption>Date: {harvest.date.toLocaleDateString()}</caption>
          <thead>
            <tr>
              <th>Variety</th>
              <th>Weight</th>
              <th data-role="menu-button">Actions</th>
            </tr>
          </thead>
          <tbody>
            {harvest.fruits.map((fruit, index) => (
              <tr key={index}>
                <td>{fruit.variety}</td>
                <td>{fruit.weight} kg</td>
                <td data-role="menu-button">
                 <ActionsMenuButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
