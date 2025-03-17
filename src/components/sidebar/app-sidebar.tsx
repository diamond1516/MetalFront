import { Menu } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import navigationItems from "./navigations"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="border-b">
                <div className="flex items-center gap-2 px-4 py-3">
                    <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                        <Menu className="h-4 w-4" />
                    </div>
                    <div className="font-semibold">My Application</div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={item.isActive}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t">
                <div className="flex items-center gap-2 p-4">
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                    <div className="text-sm">
                        <div className="font-medium">User Name</div>
                        <div className="text-muted-foreground">
                            user@example.com
                        </div>
                    </div>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
