import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let distnctCategory =
    products && products.reduce((acc, cur) => [...acc, cur.category], []);

  distnctCategory = [...new Set(distnctCategory)];

  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.3)`;
  };

  return (
    <div className="w-[15%] h-full flex flex-col items-center pt-4">
      <button className="border px-4 py-1  rounded border-blue-300 text-blue-400 font-sem">
        Add New Product
      </button>
      <hr className="w-full h-2 mt-4" />
      <nav>
        <h2 className="text-2xl font-bold">Categories </h2>
        <div>
          <h1>
            {distnctCategory.map((category, id) => (
              <Link
                to={`/?category=${category}`}
                key={id}
                className="flex items-center p-1 "
              >
                <div
                  style={{ backgroundColor: color() }}
                  className="w-3 h-3 rounded-full bg-red-300 mr-4"
                ></div>
                <h3 className="font-semibold text-lg">{category}</h3>
              </Link>
            ))}
          </h1>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
