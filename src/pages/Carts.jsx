import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";

export default function Carts() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://images-cdn.ubuy.co.in/633b4d0ec453a05ef838979c-damyuan-running-shoes-men-fashion.jpg",
    },
    {
      id: 9,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://olympicsa.co.za/wp-content/uploads/2024/02/01.Olympic-Bounce-Men-Blue-Feature-image-Side-A-1080px-x-1080px-jpg-600x600.webp",
    },
    {
      id: 5,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 6,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jd3BuHWpOG2aNVqzGJn977GEFzvxzmb6Qw&s",
    },
    {
      id: 4,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkETRd76P_NWEdRO-qZwn9uzb8lboQBMPJiw&s",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      items: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 350,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box className="flex justify-between h-full w-full items-center ">
        <Box className=" flex flex-col space-y-4 px-3 pt-2 overflow-y-scroll h-[85vh]">
          {products.map((product) => {
            return (
              <Box
                key={product.id}
                className="flex justify-between items-center w-full px-2 py-1 bg-slate-200 "
              >
                <Box className="flex">
                  <img
                    src={product.image}
                    alt="product"
                    className="size-14 mr-2 rounded-md"
                  />
                  <Box className="text-sm">{product.title}</Box>
                </Box>
                <Box className="flex flex-col gap-1">
                  <Box className="font-bold ">{product.price}</Box>
                  <Box className="self-end font-semibold">{product.items}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className="absolute bottom-0  w-[100%] flex items-center justify-center mb-1 ">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#000", width: "90%" }}
          >
            checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <Badge badgeContent={6} color="error">
          <ShoppingCartIcon fontSize="medium" />
        </Badge>
      </IconButton>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
