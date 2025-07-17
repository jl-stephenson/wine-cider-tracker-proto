import type { Fruit } from "@/schemas/Fruit";
import { farmQueryOptions } from "@/utils/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/farms/$farmId")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      farmQueryOptions(options.params.farmId),
    ),
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  const farmQuery = useSuspenseQuery(farmQueryOptions(params.farmId));
  const farm = farmQuery.data.data;

  console.log(farm);

  return (
    <main className="flow" data-layout-area="content">
      <div className="panel">
        <div className="panel__heading">
          <h2>{farm.name}</h2>
        </div>
        <div className="panel__content">
          <h3>Fruits:</h3>
          <ul>
            {farm.fruits.map((fruit: Fruit) => (
              <li key={fruit.variety}>
                {fruit.variety} - {fruit.category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
