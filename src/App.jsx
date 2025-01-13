import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <button>fetch</button>
      <img src={image} alt="Fetched" />
      <form onSubmit={handlesubmit}>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="name"
          onChange={handlechange}
          value={formdata.name}
        />
        <label htmlFor="">description</label>
        <input
          type="text"
          name="description"
          onChange={handlechange}
          value={formdata.description}
        />
        <label htmlFor="">price</label>
        <input
          type="number"
          name="price"
          onChange={handlechange}
          value={formdata.price}
        />
        <label htmlFor="">catagory</label>
        <input
          type="text"
          name="category"
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
          accept=".jpeg, .png, .jpg"
          onChange={handlechange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
