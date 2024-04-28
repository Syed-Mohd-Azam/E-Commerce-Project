import { Link, useLocation } from "react-router-dom";
import { ProductCard } from "../../components";
import { useEffect, useState } from "react";

export const FilteredProducts = () => {
  // eslint-disable-next-line no-debugger
  const [products, setProducts] = useState([]);
  const location = useLocation();
  console.log(location);
  const searchText = new URLSearchParams(location.search).get("q");
  console.log(searchText);
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    fetchFilteredProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  const fetchFilteredProducts = async () => {
    // eslint-disable-next-line no-debugger
    const response = await fetch(`http://localhost:8000/products`);
    const json = await response.json();
    const filteredProducts = json.filter((obj) =>
      obj?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredProducts);
    setProducts(filteredProducts);
  };
  return (
    <>
      <section className=" w-full flex-1">
        <section className="md:w-4/5 w-full p-4 mx-auto">
          <article className="flex flex-row justify-between items-center py-5">
            <p className="text-blue-900 dark:text-gray-200 font-semibold text-2xl italic">
              All E-books {products.length > 0 ? products.length : null}
            </p>
          </article>
        </section>
        <section className=" md:w-4/5 w-full p-4 mx-auto flex flex-col lg:flex-row gap-10 flex-wrap justify-center items-center lg:items-start">
          {products.length > 0 &&
            products.map((product) => (
              <Link to={`/productDetails/${product?.id}`} key={product?.id}>
                <ProductCard product={product} />
              </Link>
            ))}
          {products.length === 0 && (
            <p className="italic text-2xl font-bold text-blue-900 dark:text-gray-200 py-10">
              Oops! No book found
            </p>
          )}
        </section>
      </section>
    </>
  );
};
