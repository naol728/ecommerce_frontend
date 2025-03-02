import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/Authcontext";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is mobile/tablet
  const [anchorEl, setAnchorEl] = React.useState(null); // State for mobile menu
  const { islogin } = useAuth();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",

        color: "black",
        boxShadow: "black",
      }}
    >
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          <Link to="/"> NAF Brands</Link>
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">FEATURED</Button>
            <Button color="inherit">STOCK</Button>
            <Button color="inherit">FAQ</Button>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              <Link to={islogin ? "/shop" : "/signup"}>
                {islogin ? "shop now" : " Sign Up"}
              </Link>
            </Button>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: "45px" }}
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>FEATURED</MenuItem>
              <MenuItem onClick={handleMenuClose}>STOCK</MenuItem>
              <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  <Link to={islogin ? "/shop" : "/signup"}>
                    {islogin ? "shop now" : " Sign Up"}
                  </Link>
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
