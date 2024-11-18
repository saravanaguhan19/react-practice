import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const { search, pathname } = useLocation();

  return (
    <>
      <div className="h-screen w-full flex ">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className="bg-blue-300 px-4 py-1 rounded-lg  absolute left-[17%] top-[1%] "
          >
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
