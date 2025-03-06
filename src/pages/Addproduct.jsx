import { Box, Input, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
      <form action="" className="grid grid-cols-1  ">
        <Box className="grid place-content-center">
          <div className="flex items-center justify-center">
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                required
              />
              <div className="size-60 rounded-full bg-blue-200 flex items-center justify-center overflow-hidden border-4 border-blue-400 shadow-lg hover:opacity-80 transition">
                {image ? (
                  <img
                    src={image}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-blue-600 font-bold">Choose Image</span>
                )}
              </div>
            </label>
          </div>
        </Box>

        <Box className="flex flex-col space-y-5">
          <TextField label="product name" variant="outlined" />
          <TextField label="product description" variant="outlined" />
          <TextField label="product price" variant="outlined" type="number" />
          <TextField label="product category" variant="outlined" />
          <TextField label="product stock" variant="outlined" />
          <TextField label="product brand" variant="outlined" />
          <TextField label="product rating" variant="outlined" />
          <TextField label="product numReviews" variant="outlined" />
          <TextField label="product rating" variant="outlined" />
          <TextField label="product isFeatured" variant="outlined" />
        </Box>
        <Box className="text-center mt-10">
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", borderRadius: 5 }}
          >
            Add to Product
          </Button>
        </Box>
      </form>
    </Box>
  );
}
