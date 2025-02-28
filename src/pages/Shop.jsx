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
import { styled, alpha } from "@mui/material/styles";
import { Badge, IconButton, Tooltip } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "./Filter";
import Carts from "./Carts";
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
    {
      id: 98,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHtCmA_RepVfTf_9blQPO98NK3yYWg49VaA&s",
    },
    {
      id: 76,
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
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
          <Box sx={{ display: "flex", gap: 2, ml: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", fontSize: "1.1rem", mt: 1 }}
            >
              Search
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
      <Box className="md:flex mt-2">
        <Box className=" h-[25%]   md:w-[15%] md:h-screen ">
          <Filter />
        </Box>
        <Box className="grid grid-cols-2 space-y-2 p-4 space-x-4 grid-col-2 bg-gray-100 shadow-xl rounded-md   md:grid-cols-4  md:w-[85%] ">
          {products.map((product) => (
            <Card
              sx={{
                maxWidth: 250,
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 5,
                },
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
                <Typography variant="p" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography color="text.secondary">${product.price}</Typography>
              </CardContent>

              {/* Add to Cart Button */}
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#000" }}
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
