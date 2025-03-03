import API_ROUTES from "@/constants/api-routers"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    console.log(API_ROUTES.AUTH.REGISTER)

    return <div className="p-4 bg-gray-100">Hello "/"! </div>
}
