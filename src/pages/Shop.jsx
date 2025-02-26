import Navbar from "@/components/custom/Navbar";
import { Avatar, Box, Input, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import Demo from "./Demo";
import Carts from "./Carts";

export default function Shop() {
  return (
    <div className=" h-full ">
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: " space-between",
            alignItems: "center",
            marginTop: 2,
            paddingX: 1.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Search Products
            </Typography>
            <Input placeholder="Search Products" />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            {/* <IconButton color="inherit">
              <Badge badgeContent={6} color="error">
                <ShoppingCartIcon fontSize="medium" />
              </Badge>
            </IconButton> */}
            <Carts />
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHMnvvBrGv2_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732365765826?e=2147483647&v=beta&t=yohy5vCOQN-punAFrecqbRatVqzAgmd_X_N92yQK0No"
              sx={{ width: 35, height: 35, cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
      <Box className="grid ">
        <Box>
          <Demo />
        </Box>
        <Box></Box>
      </Box>
    </div>
  );
}
