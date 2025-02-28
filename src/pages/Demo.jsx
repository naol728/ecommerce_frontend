import { useState } from "react";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

export default function Demo() {
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        // alignItems: "center",
        marginLeft: 5,
        width: "100%",
        // height: "100vh",
      }}
    >
      <FormControlLabel control={<Checkbox />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Required" />
      <FormControlLabel control={<Checkbox />} label="Disabled" />
    </Box>
  );
}
