import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  return (
    <div className="w-[80%] h-full bg-slate-800 m-auto flex items-center p-5">
      <div className="w-[40%] h-[60%]">
        <img
          className="w-full h-full object-contain  "
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl ">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3>men's clothing</h3>
        <h3>$ 109.95</h3>
        <p>description</p>
        <Link>Edit</Link>
        <Link> Delete</Link>
      </div>
    </div>
  );
}

export default Details;
