import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            {/* <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList> */}

            <div>shoping</div>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div>
              <img
                src="https://cdn-images.farfetch-contents.com/18/76/90/29/18769029_40595644_1000.jpg"
                alt=""
              />{" "}
              butonn
            </div>

            <div>
              <img
                src="https://cdn-images.farfetch-contents.com/11/70/77/94/11707794_8097746_1000.jpg"
                alt=""
              />
            </div>
            <div> <img
                src="https://cdn-images.farfetch-contents.com/11/70/77/94/11707794_8097746_1000.jpg"
                alt=""
              /></div>
            <div>lakajkajajh</div>
            <div>lakajkajajh</div>
            <div>lakajkajajh</div>
            <div>lakajkajajh</div>
            <div>lakajkajajh</div>
            <div>lakajkajajh</div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
