import { AiOutlineCheckCircle } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
export const OrderSuccess = () => {
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
            Thank you user name for order!
          </p>
          <p className="text-center text-sm md:text-xl text-blue-600 italic font-semibold dark:text-gray-200">
            Your order Id is : orderId.
          </p>
          <p className="text-center text-sm md:text-xl py-2 text-blue-600 italic font-semibold dark:text-gray-200">
            Please check confirmation mail.
          </p>
          <p className="text-center text-sm md:text-xl py-2 text-blue-600 italic font-semibold dark:text-gray-200">
            Payment Id : xyz_123456789...
          </p>
          <article className="py-3">
            <button className=" flex flex-row gap-2 justify-center  items-center mx-auto font-semibold bg-blue-600 p-2 rounded-md text-white italic">
              <span className="inline"> Continue Shopping</span>
              <span className="inline">
                <LuShoppingCart />
              </span>
            </button>
          </article>
        </article>
      </section>
    </>
  );
};
