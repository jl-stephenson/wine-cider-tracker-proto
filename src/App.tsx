import { HarvestForm } from "./components/HarvestForm";

function handleSubmit(event: React.FormEvent) {
  event.preventDefault();
  console.log(event.target);
}

export default function App() {
  return (
    <main>
      <HarvestForm handleSubmit={handleSubmit} />
    </main>
  );
}
