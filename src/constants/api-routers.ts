import routeController from "@/lib/route-controller"

const ROUTES = {
    AUTH: {
        LOGIN: null,
        REGISTER: null,
    },
}

const API_ROUTES = routeController(ROUTES, "http://localhost:8000/api/v1")

export default API_ROUTES
