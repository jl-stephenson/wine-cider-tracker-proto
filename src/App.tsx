import { HarvestForm } from "@/components/HarvestForm";
import type { Harvest } from "@/schemas/HarvestForm";

function handleSubmit(data: Harvest) {
  console.log("Function called!", data);
}

export default function App() {
  return (
    <main>
      <HarvestForm onSubmit={handleSubmit} />
    </main>
  );
}
