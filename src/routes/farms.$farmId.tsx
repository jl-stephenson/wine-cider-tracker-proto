import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/farms/$farmId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/farms/$farmId"!</div>
}
