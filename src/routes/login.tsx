import { Button, Card, TextInput } from "@gravity-ui/uikit"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/login")({
    component: Login,
})

function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="max-w-md w-full p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Kirish
                </h2>
                <form className="flex flex-col gap-4">
                    <TextInput
                        type="text"
                        placeholder="Login"
                        name="username"
                    />
                    <TextInput
                        type="password"
                        placeholder="Parol"
                        name="password"
                    />
                    <Button
                        view="flat-danger"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Kirish
                    </Button>
                </form>
            </Card>
        </div>
    )
}
