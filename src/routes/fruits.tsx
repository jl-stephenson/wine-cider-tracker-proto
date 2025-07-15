import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fruits')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fruits"!</div>
}
