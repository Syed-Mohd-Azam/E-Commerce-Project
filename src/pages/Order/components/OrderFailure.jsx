import { FiShoppingCart } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
export const OrderFailure = () => {
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto flex justify-center items-center">
        <article className="border-2 w-full text-center p-7">
          <div className="inline-block mx-auto">
            <BsExclamationCircle className="text-5xl text-green-600 dark:text-red-600" />
          </div>
          <p className="text-xl text-blue-600 italic font-semibold dark:text-gray-200">
            Payment failed, please try again!!
          </p>
          <p className="py-3 text-xl text-blue-600 italic font-semibold dark:text-gray-200">
            Sorry! your order is not confirmed!
          </p>
          <p className="text-blue-600 font-semibold italic text-xl dark:text-gray-200">
            Connect codebook@example.com for support!
          </p>
          <article>
            <button className="Check Cart again"></button>
          </article>
          <article className="inline-block">
            <Link to="/cart">
              <button className="flex justify-center items-center gap-2 bg-blue-600 text-white p-2 rounded-md italic font-semibold">
                <span>Check cart again</span>
                <span>
                  <FiShoppingCart />
                </span>
              </button>
            </Link>
          </article>
        </article>
      </section>
    </>
  );
};
