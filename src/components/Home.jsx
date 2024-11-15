import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="w-[85%] h-full p-10 flex  flex-wrap gap-4 ">
        <Link
          to="/details/255"
          className="card  h-[40vh] w-[18%] bg-slate-100 shadow-lg rounded-lg flex flex-col pt-5 items-center"
        >
          <div className=" h-[80%]  overflow-hidden rounded-lg ">
            <img
              className="w-full h-full object-cover  hover:scale-110 "
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">Lorem ipsum dolor sit.</h2>
        </Link>
      </div>
    </>
  );
}

export default Home;
