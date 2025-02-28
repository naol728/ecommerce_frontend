import Navbar from "@/components/custom/Navbar";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import Demo from "./Demo";
import Carts from "./Carts";
import SearchIcon from "@mui/icons-material/Search";
export default function Shop() {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://images-cdn.ubuy.co.in/633b4d0ec453a05ef838979c-damyuan-running-shoes-men-fashion.jpg",
    },
    {
      id: 9,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://olympicsa.co.za/wp-content/uploads/2024/02/01.Olympic-Bounce-Men-Blue-Feature-image-Side-A-1080px-x-1080px-jpg-600x600.webp",
    },
    {
      id: 5,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 6,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jd3BuHWpOG2aNVqzGJn977GEFzvxzmb6Qw&s",
    },
    {
      id: 4,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkETRd76P_NWEdRO-qZwn9uzb8lboQBMPJiw&s",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
  ];
  // console.log(products);
  const addtocart = () => {
    console.log("add to cart");
  };

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
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", fontSize: "1.2rem" }}
            >
              Search
            </Typography>
            <Tooltip title="Search">
              <IconButton color="primary" size="small">
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Input placeholder="Search Products" />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Carts />
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHMnvvBrGv2_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732365765826?e=2147483647&v=beta&t=yohy5vCOQN-punAFrecqbRatVqzAgmd_X_N92yQK0No"
              sx={{ width: 35, height: 35, cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
      <Box className="flex mt-3">
        <Box className="w-[15%]">
          <Demo />
        </Box>
        <Box className="grid xs:grid-col-1 md:grid-cols-3 space-x-4 w-[85%] space-y-2 p-4">
          {products.map((product) => (
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                boxShadow: 3,
                // minHeight: 500,
              }}
            >
              {/* Product Image */}
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", bgcolor: "#f5f5f5" }}
              />

              {/* Product Details */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography color="text.secondary">${product.price}</Typography>
              </CardContent>

              {/* Add to Cart Button */}
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FFA500" }}
                  fullWidth
                  // onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
}
