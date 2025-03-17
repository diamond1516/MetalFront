import { Input } from "@/components/ui/input"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "@tanstack/react-router"
import { Search } from "lucide-react"
import AddOrderButton from "../form/add-order"
import { AppSidebar } from "./app-sidebar"

export default function AppSidebarProvider() {
    return (
        <main className="w-full">
            <aside className="w-full bg-gray-900 text-white h-screen">
                <SidebarProvider className="bg-ba">
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 items-center gap-4 border-b px-6">
                            <SidebarTrigger className="block text-gray-900 dark:text-gray-100" />
                            <div className="relative ml-auto">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Qidirish..."
                                    className="w-full pl-8 text-gray-900 dark:text-gray-100"
                                />
                            </div>
                            <AddOrderButton />
                        </header>
                        <div className="p-4">
                            <Outlet />
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </aside>
        </main>
    )
}
