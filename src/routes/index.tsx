import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  console.log("Index component rendered");
  return (
    <main className="flow" data-layout-area="content">
      <div className="panel">
        <div className="panel__heading">
          <h1>Welcome Home!</h1>
        </div>
      </div>
    </main>
  );
}
