import { BsThreeDotsVertical } from "react-icons/bs";
import { FilterBar } from "./components/FilterBar";
import { useEffect, useState } from "react";
import { ProductCard } from "../Home/components/ProductCard";
export const ProductsList = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8000/products");
    const json = await response.json();
    setProducts(json);
  };
  return (
    <>
      <section className="min-h-screen w-full">
        <section className="md:w-4/5 w-full p-4 mx-auto">
          <article className="flex flex-row justify-between items-center py-5">
            <p className="text-blue-900 dark:text-gray-200 font-semibold text-2xl italic">
              All E-books(15)
            </p>
            <BsThreeDotsVertical
              className="font-bold w-6 h-6 hover:cursor-pointer text-blue-900 dark:text-gray-200"
              onClick={() => setShow(!show)}
            />
          </article>
          {show && <FilterBar setShow={setShow} />}
        </section>
        <section className=" md:w-4/5 w-full p-4 mx-auto flex flex-col lg:flex-row gap-10 flex-wrap justify-center items-center lg:items-start">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
        </section>
      </section>
    </>
  );
};
