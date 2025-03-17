import React from "react";
import { Box, Toolbar } from "@mui/material";
import DashboardSidebar from "../components/custom/DashboardSidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
