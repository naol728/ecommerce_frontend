import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

export default function Addproduct() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <Box>
      <form className="grid grid-cols-1 -mt-6  ">
        <Box className="grid place-content-center mb-4 ">
          <Box className="flex items-center justify-center">
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                required
              />
              <Box className="size-52 rounded-full bg-blue-200 flex items-center justify-center overflow-hidden border-4 border-blue-400 shadow-lg hover:opacity-80 transition">
                {image ? (
                  <img
                    src={image}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-blue-600 font-bold">Product Image</span>
                )}
              </Box>
            </label>
          </Box>
        </Box>

        <Box className="flex space-x-3 flex-col sm:flex-row">
          <Box className="flex flex-col space-y-2 sm:w-[50%] ">
            <TextField label="product name" variant="outlined" required />
            <TextField
              label="product description"
              variant="outlined"
              required
            />
            <TextField
              label="product price"
              variant="outlined"
              type="number"
              required
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choose an Option
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                // value={selectedOption}
                // onChange={handleChange}
              >
                <MenuItem value="option1"> Women</MenuItem>
                <MenuItem value="option2">Men</MenuItem>
                <MenuItem value="option3">Kids</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="flex flex-col space-y-2  sm:w-[50%]">
            <TextField label="product stock" variant="outlined" type="number" />
            <TextField label="product brand" variant="outlined" />
            <FormControlLabel control={<Checkbox />} label="Is featurd" />
          </Box>
        </Box>
        <Box className="text-center mt-10">
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "black", borderRadius: 2 }}
          >
            Add to Product
          </Button>
        </Box>
      </form>
    </Box>
  );
}
