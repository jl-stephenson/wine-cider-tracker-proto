import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/farms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/farms"!</div>
}
