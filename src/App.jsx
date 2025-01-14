import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    image: "",
    brand: "",
    rating: 0,
    numReviews: 0,
  });
  const [image, setimage] = useState("");
  const handlechange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = await encodeFileToBase64(files[0]);
      setFormdata({ ...formdata, image: file });
    } else {
      setFormdata({
        ...formdata,
        [name]: value,
      });
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });

    const result = await response.json();
    console.log(result);
  };

  const encodeFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Extract only Base64 part
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(
        "http://localhost:3000/api/products/678581a2e3a8a251c2f4b1d4"
      );
      const res = await data.json();
      const decodedImage = `data:image/png;base64,${res.data.image}`;
      console.log(decodedImage);
      setimage(decodedImage);
    };
    fetchdata();
  }, []);

  return (
    <div>
      {/* <img src={image} alt="Fetched" /> */}

      <form onSubmit={handlesubmit}>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handlechange}
          value={formdata.name}
        />
        <label htmlFor="">description</label>
        <input
          type="text"
          name="description"
          required
          onChange={handlechange}
          value={formdata.description}
        />
        <label htmlFor="">price</label>
        <input
          type="number"
          name="price"
          required
          onChange={handlechange}
          value={formdata.price}
        />
        <label htmlFor="">catagory</label>
        <input
          type="text"
          name="category"
          required
          onChange={handlechange}
          value={formdata.category}
        />
        <label htmlFor="">stock</label>
        <input
          type="number"
          name="stock"
          onChange={handlechange}
          value={formdata.stock}
        />
        <label htmlFor="">brand</label>
        <input
          type="text"
          name="brand"
          required
          onChange={handlechange}
          value={formdata.brand}
        />
        <label htmlFor="">rating</label>
        <input
          type="number"
          name="rating"
          onChange={handlechange}
          value={formdata.rating}
        />
        <label htmlFor="">numReviews</label>
        <input
          type="number"
          name="numReviews"
          onChange={handlechange}
          value={formdata.numReviews}
        />
        <label htmlFor="">image</label>
        <input
          type="file"
          name="image"
          id="file-upload"
          required
          accept=".png, "
          onChange={handlechange}
        />
        <Button type="submit" className="w-[25%] text-xl ">
          save
        </Button>
      </form>
    </div>
  );
}

export default App;
