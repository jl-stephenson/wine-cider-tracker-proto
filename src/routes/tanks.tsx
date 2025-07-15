import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tanks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tanks"!</div>
}
