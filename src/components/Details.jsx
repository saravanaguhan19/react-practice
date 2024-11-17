import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(product);

  useEffect(() => {
    getProduct();
  }, []);

  return product ? (
    <div className="w-[80%] h-full  m-auto flex items-center p-5">
      <div className="w-[35%] h-[60%]">
        <img
          className="w-full h-full object-contain  "
          src={product.image}
          alt=""
        />
      </div>
      <div className="w-[40%]">
        <h1 className="text-4xl  font-semibold ">{product.title}</h1>
        <h3 className="text-2xl text-slate-300">{product.category}</h3>
        <h3 className="text-lg font-semibold">$ {product.price}</h3>
        <p className="text-lg font-thin">{product.description}</p>
        <div className="mt-2 flex  ">
          <Link className="px-7 py-1 rounded-lg mr-4 bg-yellow-500">Edit</Link>
          <Link className="px-5 py-1 rounded-lg bg-red-500"> Delete</Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
