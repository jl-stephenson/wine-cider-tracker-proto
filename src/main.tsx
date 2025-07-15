import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ErrorComponent,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./css/global.css";

async function enableMocking() {
  const { worker } = await import("@/mocks/browser");

  return worker.start();
}

export const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div>
      <p>Loading...</p>
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  await enableMocking().then(() =>
    root.render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} defaultPreload="intent" />
        </QueryClientProvider>
      </StrictMode>,
    ),
  );
}
