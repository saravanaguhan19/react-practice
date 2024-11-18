import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function addProductHandler(e) {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 character ");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  }

  return (
    <form
      onSubmit={addProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-3  ">Add New Products</h1>
      <input
        type="text"
        placeholder="image link"
        className="bg-zinc-100 text-xl w-1/2 p-3 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="bg-zinc-100 text-xl w-1/2 p-3 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="bg-zinc-100 text-xl w-[48%] p-3 mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="bg-zinc-100 text-xl w-[48%] p-3 mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="bg-zinc-100 text-xl w-1/2 p-3 mb-3"
        name=""
        id=""
        rows={10}
        placeholder="Enter product description here.. "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="w-1/2">
        <button className="border px-4 py-1   rounded border-blue-300 text-blue-400 font-sem">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
