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
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

export default function Addproduct() {
  const [image, setImage] = useState(null);
  const [formdata, setFormdata] = useState({
    name: "",
    image: null,
    description: "",
    price: null,
    category: "",
    stock: null,
    brand: "",
    isFeatured: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
      setFormdata((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else if (type === "checkbox") {
      setFormdata((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormdata((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in formdata) {
      formData.append(key, formdata[key]);
    }
    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/products",
        formData
      );
      if (res.status === 201) {
        console.log("successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(formdata);
  return (
    <Box>
      <form className="grid grid-cols-1" onSubmit={handleSubmit}>
        <Box className="grid place-content-center mb-4 ">
          <Box className="flex items-center justify-center">
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
                name="image"
                required={true}
              />
              <Box className="size-52 rounded-full bg-slate-500 flex items-center justify-center overflow-hidden border-4 border-slate-300 shadow-lg hover:opacity-80 transition">
                {image ? (
                  <img
                    src={image}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-slate-100 font-bold">
                    Product Image
                  </span>
                )}
              </Box>
            </label>
          </Box>
        </Box>

        <Box className="flex space-x-3 flex-col sm:flex-row">
          <Box className="flex flex-col space-y-2 sm:w-[50%] ">
            <TextField
              label="product name"
              value={formdata.name}
              name="name"
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="product description"
              variant="outlined"
              required
              value={formdata.description}
              name="description"
              onChange={handleChange}
            />
            <TextField
              label="product price"
              variant="outlined"
              type="number"
              value={formdata.price}
              name="price"
              onChange={handleChange}
              required
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choose product catagory
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={formdata.category}
                name="catagory"
                onChange={handleChange}
              >
                <MenuItem value="Women"> Women</MenuItem>
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="flex flex-col space-y-2  mt-3 sm:mt-0  sm:w-[50%]">
            <TextField
              label="product stock"
              variant="outlined"
              type="number"
              value={formdata.stock}
              name="stock"
              onChange={handleChange}
            />
            <TextField
              label="product brand"
              variant="outlined"
              value={formdata.brand}
              name="brand"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Is featurd"
              checked={formdata.isFeatured}
              name="featurd"
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box className="text-center mt-10">
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ backgroundColor: "black", borderRadius: 2 }}
          >
            Add to Product
          </Button>
        </Box>
      </form>
    </Box>
  );
}
