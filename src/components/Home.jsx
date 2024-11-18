import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  // console.log(typeof category);

  const [filteredProducts, setFilteredProducts] = useState(null);

  // const getProductCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);

  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(filteredProducts);

  const getProductCategory = () => {
    setFilteredProducts(products.filter((p) => p.category == category));
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setFilteredProducts(products);
    if (category != "undefined") getProductCategory();
  }, [category, products]);
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] h-full p-10 flex  flex-wrap gap-4 overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                className="card  h-[40vh] w-[18%] bg-slate-100 shadow-lg rounded-lg flex flex-col pt-5 items-center justify-between"
              >
                <div className="   overflow-hidden rounded-lg ">
                  <img
                    className="w-full h-full object-cover  object-center  hover:scale-110 "
                    src={product.image}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
