function App() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-[15%] h-full flex flex-col items-center pt-4">
          <button className="border px-4 py-1  rounded border-blue-300 text-blue-400 font-sem">
            Add New Product
          </button>
          <hr className="w-full h-2 mt-4" />
          <nav>
            <h2 className="text-2xl font-bold">Categories </h2>
            <ul>
              <li className="flex items-center p-1 ">
                <div className="w-3 h-3 rounded-full bg-red-300 mr-4"></div>
                <h3 className="font-semibold text-lg">First</h3>
              </li>
              <li className="flex items-center p-1 ">
                <div className="w-3 h-3 rounded-full bg-pink-300 mr-4"></div>
                <h3 className="font-semibold text-lg">Second </h3>
              </li>
              <li className="flex items-center p-1">
                <div className="w-3 h-3 rounded-full bg-slate-300 mr-4"></div>
                <h3 className="font-semibold text-lg">Third</h3>
              </li>
              <li className="flex items-center p-1">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-4"></div>
                <h3 className="font-semibold text-lg">Fourth</h3>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-[85%] h-full p-10 flex  flex-wrap gap-4 ">
          <div className="card  h-[40vh] w-[18%] bg-slate-100 shadow-lg rounded-lg flex flex-col pt-5 items-center">
            <div className=" h-[80%]  overflow-hidden rounded-lg ">
              <img
                className="w-full h-full object-cover  hover:scale-110 "
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">
              Lorem ipsum dolor sit.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
