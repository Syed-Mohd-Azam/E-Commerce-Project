/* eslint-disable react/prop-types */

import { useCartContext } from "../../../contexts";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  const { deleteFromCart } = useCartContext();
  return (
    <>
      <section className="flex flex-col gap-5  md:flex-row md:justify-between m-12">
        <article className="flex md:flex-row flex-col gap-10">
          <Link to={`/productDetails/${product?.id}`}>
            <img
              className="w-60 h-32 rounded-md shadow-lg hover:scale-125 hover:cursor-pointer "
              src={product?.image_local}
              alt="Book-Image"
            />
          </Link>
          <article>
            <p className="text-xs md:text-xl font-semibold italic text-blue-800 dark:text-gray-200">
              {product?.name}
            </p>
            <button
              onClick={() => deleteFromCart(product)}
              className=" mt-3 inline bg-red-400 text-white dark:bg-yellow-400 dark:text-black px-2 py-1 rounded-md font-semibold text-md hover:scale-110"
            >
              Remove
            </button>
          </article>
        </article>
        <article className="text-xl dark:text-gray-200 text-blue-800 font-bold hover:scale-125 hover:cursor-pointer">
          {product?.price}$
        </article>
      </section>
    </>
  );
};
