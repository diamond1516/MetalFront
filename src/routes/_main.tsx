import AppSidebarProvider from "@/components/sidebar/sidebar-provider"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="flex h-screen">
            <AppSidebarProvider />
        </div>
    )
}
