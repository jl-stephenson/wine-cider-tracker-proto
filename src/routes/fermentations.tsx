import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fermentations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fermentations"!</div>
}
