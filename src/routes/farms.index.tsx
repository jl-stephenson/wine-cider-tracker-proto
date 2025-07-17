import { FarmSummaryTable } from "@/components/FarmSummaryTable";
import { farmsQueryOptions } from "@/utils/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/farms/")({
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(farmsQueryOptions()),
  component: RouteComponent,
});

function RouteComponent() {
  const farmsQuery = useSuspenseQuery(farmsQueryOptions());
  const farms = farmsQuery.data.data;

  const vineyards = farms.filter((farm) => farm.category === "Vineyard");
  const orchards = farms.filter((farm) => farm.category === "Orchard");

  return (
    <main className="flow" data-layout-area="content">
      <div className="panel">
        <div className="panel__heading">
          <h2>Farms</h2>
        </div>
        {vineyards && <FarmSummaryTable farms={vineyards} />}
        {orchards && <FarmSummaryTable farms={orchards} />}
      </div>
    </main>
  );
}
