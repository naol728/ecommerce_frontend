import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    price: 0,
    catagory: "",
    stock: 0,
    image: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  const handlechange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [`${e.target.name}`]: e.target.value });
  };
  return (
    <div>
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
          name="catagory"
          onChange={handlechange}
          value={formdata.catagory}
        />
        <label htmlFor="">stock</label>
        <input
          type="number"
          name="stock"
          onChange={handlechange}
          value={formdata.stock}
        />
        <label htmlFor="">image</label>
        <input
          type="file"
          name="image"
          onChange={handlechange}
          value={formdata.image}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
