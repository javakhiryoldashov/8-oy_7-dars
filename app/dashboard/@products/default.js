import api from "@/api/api";
import Link from "next/link";

const Products = async () => {
  const response = await api.get("/products");
  const products = await response.data;

  return (
    <div className="flex-1 p-4 bg-green-600 min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8 border-b-4 border-red-500 py-3 rounded-lg bg-[#142cc3] text-white sticky top-1 z-10">
        Products
      </h1>

      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li
            className="bg-white shadow-md rounded-lg py-3 px-5 text-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            key={product.id}
          >
            <Link
              className="text-gray-800 hover:text-blue-600"
              href={`dashboard/${product.id}`}
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
