import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex flex-col gap-0.5 leading-none  ">
                  <span className="font-black text-xl">NAF Brands</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-4 mt-10">
          <div className="text-xl  font-bold px-4 cursor-pointer">Products</div>
          <div className="text-xl  font-bold px-4 cursor-pointer">
            Cart Items
          </div>
          <div className="text-xl  font-bold px-4 cursor-pointer">Orders</div>

          <div className="text-xl  font-bold px-4 cursor-pointer ">
            <div>Profle</div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1"></div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
