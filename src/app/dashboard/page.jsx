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
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn-images.farfetch-contents.com/18/76/90/29/18769029_40595644_1000.jpg"
              />
              <CardContent>
                <Typography variant="h6">product.name</Typography>
                <Typography variant="body2" color="text.secondary">
                  $product.price
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTP4dT53uvg70C8tGWzapsKE_jfMZYDMiBJ4gktXqsHwxX_JvO9m08JGwIUiBkf7Fc4hjhdTNYoMSk4tPKP1Mj9-tGSkXpz65I7V9XyM_BePTSQme-FuDIwA_Dzh0Jml91r5zd9UvTC&usqp=CAc"
              />
              <CardContent>
                <Typography variant="h6">product.name</Typography>
                <Typography variant="body2" color="text.secondary">
                  $product.price
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
