import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Sections/Rating";
import { useTitle } from "../hooks/useTitle";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  useTitle(productDetails ? productDetails?.name : "");
  useEffect(() => {
    fetchProductDetails();
  }, []);
  const fetchProductDetails = async () => {
    const productDetails = await fetch(`http://localhost:8000/products/${id}`);
    const details = await productDetails.json();
    console.log(details);
    setProductDetails(details);
  };
  if (productDetails === null) {
    return (
      <>
        <p>Product Details is loading....</p>
      </>
    );
  }
  return (
    <>
      <section className="md:w-4/5 mx-auto  flex-1 p-10 md:p-0">
        <h1 className="w-full text-center pb-8 pt-3 text-lg md:text-xl lg:text-3xl text-blue-800 italic font-semibold dark:text-gray-200">
          {productDetails?.name}
        </h1>
        <section className=" flex flex-col lg:flex-row gap-10">
          <img
            src={productDetails?.poster}
            alt="Book-Image"
            className="md:h-72 h-48"
          />
          <article className="flex flex-col gap-3">
            <p className="pb-4 text-3xl text-slate-900 font-semibold dark:text-gray-200">
              {productDetails?.price}$
            </p>
            <article className="flex flex-row gap-3 mb-1">
              <button className="bg-blue-700 text-gray-200 font-bold italic py-1 px-2 rounded-md dark:bg-gray-200 dark:text-blue-900 text-md md:text-lg ">
                {productDetails?.best_seller ? "Best Seller" : "Seller"}
              </button>
              <button className="bg-blue-700 text-gray-200 font-bold italic py-1 px-2 rounded-md dark:bg-gray-200 dark:text-blue-700 text-md md:text-lg ">
                {productDetails?.in_stock ? "In Stock" : "Out of Stock"}
              </button>
              <button className="bg-blue-700 text-gray-200 font-bold italic py-1 px-2 rounded-md dark:bg-gray-200 dark:text-blue-900 text-md md:text-lg">
                {productDetails?.size}MB
              </button>
            </article>
            <Rating rating={productDetails?.rating} />
            <article>
              <button className="bg-blue-700 rounded-md px-3 py-2 text-white hover:scale-110 text-lg dark:text-gray-200 font-semibold">
                Add to Cart +
              </button>
            </article>
            <article className="text-md md:text-lg lg:text-xl text-slate-800 italic py-4 font-normal text-justify dark:text-gray-200">
              {productDetails?.long_description}
            </article>
          </article>
        </section>
      </section>
    </>
  );
};
