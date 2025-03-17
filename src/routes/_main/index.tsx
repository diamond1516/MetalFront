import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className="text-destructive">Hello "/salom/"!</div>
}
