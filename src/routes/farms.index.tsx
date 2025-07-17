import { farmsQueryOptions } from "@/utils/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Farm } from "@/schemas/Farm";

export const Route = createFileRoute("/farms/")({
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(farmsQueryOptions()),
  component: RouteComponent,
});

function RouteComponent() {
  const farmsQuery = useSuspenseQuery(farmsQueryOptions());
  const farms = farmsQuery.data.data;

  console.log(farms);

  return (
    <main className="flow" data-layout-area="content">
      <div className="panel">
        <div className="panel__heading">
          <h2>Farms</h2>
        </div>
        <div className="panel__content">
          <ul>
            {farms.map((farm: Farm) => (
              <li key={farm.id}>
                <Link to="/farms/$farmId" params={{farmId: farm.id}}>
                {farm.name} - {farm.size} ha
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
