import { HarvestForm } from "./components/HarvestForm";

function handleSubmit(data) {
  console.log("Function called!", data);
}

export default function App() {
  return (
    <main>
      <HarvestForm onSubmit={handleSubmit} />
    </main>
  );
}
