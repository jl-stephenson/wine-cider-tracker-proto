import type { HarvestFormData } from "@/schemas/HarvestForm";

type HarvestSummaryProps = {
  harvest: HarvestFormData;
};

export function HarvestSummary({ harvest }: HarvestSummaryProps) {
  return (
    <section className="card">
      <div className="card__content">
        <table>
          <caption>{String(harvest.date)}</caption>
          <thead>
            <tr>
              <th>Variety</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {harvest.fruits.map((fruit) => (
              <tr>
                <td>{fruit.variety}</td>
                <td>{fruit.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
