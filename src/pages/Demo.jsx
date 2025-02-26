import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    electronics: false,
    shoes: false,
  });

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
  };

  return (
    <>
      {/* Button to open sidebar */}
      <Button
        variant="contained"
        sx={{ backgroundColor: "#000" }}
        onClick={toggleDrawer(true)}
      >
        Open Filters
      </Button>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250, padding: 2 }}>
          <ListItem>
            <ListItemText primary="Filter Products" />
          </ListItem>

          {/* Category Filters */}
          <FormControl component="fieldset">
            {Object.keys(filters).map((key) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={filters[key]}
                    onChange={handleFilterChange}
                    name={key}
                  />
                }
                label={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            ))}
          </FormControl>

          {/* Apply Button */}
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Apply Filters
          </Button>
        </List>
      </Drawer>
    </>
  );
}
