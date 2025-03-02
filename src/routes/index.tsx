import ROUTERS from "@/constants/api-routers"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    console.log(ROUTERS.AUTH.BASE)

    return <div className="p-4 bg-gray-100">Hello "/"! </div>
}
