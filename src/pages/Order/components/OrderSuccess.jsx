/* eslint-disable react/prop-types */
import { AiOutlineCheckCircle } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
export const OrderSuccess = ({ data }) => {
  return (
    <>
      <section className="flex-1 w-full md:w-4/5 mx-auto p-6 flex justify-center items-center">
        <article className="border-2 p-7 w-full">
          <p className="flex flex-row justify-center items-center text-center text-lg  md:text-4xl text-blue-700 font-semibold dark:text-green-500">
            <span className="inline-block"> Order Confirmed!</span>
            <span className="inline-block px-2 ">
              <AiOutlineCheckCircle />
            </span>
          </p>
          <p className="text-center text-sm md:text-xl py-3 font-semibold italic text-blue-600 dark:text-gray-200">
            Thank you{" "}
            <span className="text-green-500 dark:text-pink-500">
              {data?.user?.name}
            </span>{" "}
            for order!
          </p>
          <p className="text-center text-sm md:text-xl text-blue-600 italic font-semibold dark:text-gray-200 ">
            Your order Id is :{" "}
            <span className="text-green-500 dark:text-pink-500">
              {" "}
              {data?.user?.customerId}!
            </span>
          </p>
          <p className="text-center text-sm md:text-xl py-2 text-blue-600 italic font-semibold dark:text-gray-200">
            Please check confirmation mail on{" "}
            <span className="text-green-500 dark:text-pink-500">
              {data?.user?.email}!
            </span>
          </p>
          <p className="text-center text-sm md:text-xl py-2 text-blue-600 italic font-semibold dark:text-gray-200">
            Payment Id :{" "}
            <span className="text-green-500 dark:text-pink-500">
              xyz_123456789...
            </span>
          </p>
          <article className="py-3">
            <Link to="/products">
              <button className=" flex flex-row gap-2 justify-center  items-center mx-auto font-semibold bg-blue-600 p-2 rounded-md text-white italic">
                <span className="inline"> Continue Shopping</span>
                <span className="inline">
                  <LuShoppingCart />
                </span>
              </button>
            </Link>
          </article>
        </article>
      </section>
    </>
  );
};
