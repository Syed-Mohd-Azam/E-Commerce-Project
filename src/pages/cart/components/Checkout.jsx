import { IoMdClose } from "react-icons/io";
// eslint-disable-next-line react/prop-types
export const CheckOut = ({ setCheckOut }) => {
  return (
    <>
      <section className="absolute top-0 w-2/3 mx-auto h-full dark:bg-slate-900 shadow-lg bg-blue-400 px-10 py-5">
        <article className="flex justify-between">
          <p className="text-white  dark:text-gray-200 md:text-2xl italic sm:text-lg text-sm">
            Card Payment
          </p>
          <IoMdClose
            onClick={() => setCheckOut(false)}
            className="md:w-8 md:h-8 h-5 w-5 hover:cursor-pointer text-white dark:text-gray-200 hover:scale-125"
          />
        </article>
        <article>
          <label
            htmlFor="name"
            className="block text-white dark:text-gray-200 mt-4 mb-2 text-xl italic font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full rounded-md p-1"
          />
        </article>
        <article>
          <label
            htmlFor="email"
            className="block text-white dark:text-gray-200 mt-2 mb-2 text-xl italic font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded-md p-1"
          />
        </article>
        <article>
          <label
            htmlFor="cardNumber"
            className="block text-white dark:text-gray-200 mt-2 mb-2 text-xl italic font-semibold"
          >
            Card Number
          </label>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            className="w-full rounded-md p-1"
          />
        </article>
        <article>
          <label
            htmlFor="expiryDate"
            className="block text-white dark:text-gray-200 mt-2 mb-2 text-xl italic font-semibold"
          >
            Expiry Date
          </label>
          <article className="flex gap-4">
            <input
              placeholder="Month"
              type="number"
              name="month"
              id="expiryDate"
              className="w-1/2 rounded-md px-4 py-1"
            />
            <input
              placeholder="Year"
              type="number"
              name="year"
              id="expiryDate"
              className="w-1/2 rounded-md py-1 px-4"
            />
          </article>
        </article>
        <article>
          <label
            htmlFor="securityCode"
            className="block text-white dark:text-gray-200 mt-2 mb-2 text-xl italic font-semibold"
          >
            Security Code
          </label>
          <input
            type="number"
            name="securityCode"
            id="securityCode"
            className="w-full rounded-md p-1"
          />
        </article>
        <p className="text-white dark:text-gray-200 text-xl text-center m-4 font-bold ">
          99 $
        </p>
        <article className="w-full">
          <button className="block w-full dark:text-gray-200 dark:bg-slate-800 p-2 rounded-lg text-sm  md:text-md italic font-bold hover:cursor-pointer bg-blue-800 text-white">
            Proceed to Payment
          </button>
        </article>
      </section>
    </>
  );
};
