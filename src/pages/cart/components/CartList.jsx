import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { CheckOut } from "./Checkout";
import { useCartContext } from "../../../contexts";
import { Link } from "react-router-dom";
export const CartList = () => {
  const [checkOut, setCheckOut] = useState(false);
  const { cartList } = useCartContext();
  return (
    <>
      <section className="w-4/5 mx-auto  p-4 mb-8">
        <p className="text-blue-800 dark:text-gray-200 font-bold text underline underline-2 underline-offset-2 text-center text-2xl mt-5 mb-12 italic">
          My Cart ({cartList?.length})
        </p>
        <section className="mt-5">
          {cartList?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
        <section className="flex flex-col gap-5 md:flex-row md:justify-between px-12">
          <Link to="/products">
            <button
              onClick={() => setCheckOut(true)}
              className=" w-full p-2  bg-blue-900 text-gray-200 text-sm md:text-lg rounded-md dark:bg-gray-200 dark:text-blue-900 font-bold hover:dark:bg-blue-900 hover:dark:text-gray-200 hover:dark:scale-125 hover:bg-yellow-400 hover:text-black italic"
            >
              Buy more books
            </button>
          </Link>
          <button
            onClick={() => setCheckOut(true)}
            className=" p-2  bg-blue-900 text-gray-200 text-sm md:text-lg rounded-md dark:bg-gray-200 dark:text-blue-900 font-bold hover:dark:bg-blue-900 hover:dark:text-gray-200 hover:dark:scale-125 hover:bg-yellow-400 hover:text-black italic"
          >
            Place Order
          </button>
        </section>
        {checkOut && <CheckOut setCheckOut={setCheckOut} />}
      </section>
    </>
  );
};
