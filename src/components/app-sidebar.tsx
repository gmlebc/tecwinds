import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Home, HomeIcon, MapIcon, Monitor, Search, Settings, TableOfContents } from "lucide-react"

const items = [
    {
        title: "Home",
        url: "#",
        icon: Monitor,
    },
    {
        title: "Estações",
        url: "#",
        icon: MapIcon,
    },
    {
        title: "Dados Históricos",
        url: "#",
        icon: TableOfContents,
    },
    {
        title: "Pesquisa",
        url: "#",
        icon: Search,
    },
    {
        title: "Opções",
        url: "#",
        icon: Settings,
    },
]


export function AppSidebar() {
    return (
        <Sidebar>
            {/* <SidebarHeader className="font-bold text-2xl">TechWinds </SidebarHeader> */}
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                               
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <div className="">
                                            <item.icon/>
                                            </div>
                                            <span className="">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
