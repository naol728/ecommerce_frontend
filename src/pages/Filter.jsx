import { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Box,
  Button,
  Typography,
} from "@mui/material";

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    shoes: false,
  });

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
  };
  const style = {
    button: {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "0.7rem",
      borderRadius: "10px",
      paddingX: "20px",
    },
    text: {
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: "bold",
    },
  };
  return (
    <Box className="flex flex-row space-x-4 md:flex-col mt-4  md:space-x-0   space-y-2  p-4 ">
      <Button sx={style.button}>all</Button>
      <Button sx={style.button}>women's</Button>
      <Button sx={style.button}>men's</Button>
      <Button sx={style.button}>shoes</Button>
      <Button sx={style.button}>tishet</Button>
    </Box>
  );
}
