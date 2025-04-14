import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { CloudRainWind } from "lucide-react"

export default function Dashboard() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>

                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="flex justify-center gap-2 md:justify-start ">
                        <a href="#" className="flex items-center text-2xl font-bold ">
                            TechWinds
                            <CloudRainWind className="stroke-2 size-15" />
                        </a>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">

                        <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
                        <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
                        {/* <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
                        <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" /> */}
                    </div>

                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min border-2 shadow-xl" />
                </div>

            </SidebarInset>
        </SidebarProvider>
    )
}
