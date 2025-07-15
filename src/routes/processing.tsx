import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/processing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/processing"!</div>
}
