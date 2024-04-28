import { ProductCard } from "../../../components";
import { useEffect, useState } from "react";
export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    featuredProducts();
  }, []);
  const featuredProducts = async () => {
    const response = await fetch("http://localhost:8000/featured_products");
    const json = await response.json();
    console.log(json);
    setProducts(json);
  };
  return (
    <>
      <section className="w-full md:w-4/5 mx-auto p-4 lg:p-0">
        <h1 className="lg:text-3xl italic text-blue-900 font-bold text-center lg:py-16 text-2xl py-7 dark:text-gray-200">
          Featured E-Books!
        </h1>
        <article className="flex flex-col lg:flex-row gap-10 flex-wrap justify-center items-center">
          {products.length > 0 &&
            products?.map((product) => (
              <>
                <ProductCard key={product?.id} product={product} />
              </>
            ))}
        </article>
      </section>
    </>
  );
};
