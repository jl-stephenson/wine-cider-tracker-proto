import { HarvestForm } from "@/components/HarvestForm";
import type { HarvestFormData } from "@/schemas/HarvestForm";

function handleSubmit(data: HarvestFormData) {
  console.log("Function called!", data);
}

export default function App() {
  return (
    <main>
      <HarvestForm onSubmit={handleSubmit} />
    </main>
  );
}
