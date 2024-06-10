import { IoMdClose } from "react-icons/io";
import { useCartContext } from "../../../contexts";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createOrder, getUser } from "../../../services";
import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
export const CheckOut = ({ setCheckOut }) => {
  const { cartList, total, clearCart } = useCartContext();
  const nameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchUser() {
      const userDetails = await getUser();
      userDetails?.email ? setUser(userDetails) : toast.error(userDetails);
    }
    fetchUser();
  }, []);
  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      customerId: user?.id,
    };
    try {
      const data = await createOrder(cartList, total, userData);
      if (data) {
        clearCart();
        navigate("/order-summary", { state: { data: data, status: true } });
      } else {
        navigate("/order-summary", { state: { status: false } });
      }
    } catch (error) {
      navigate("/order-summary", { state: { status: false } });
    }
  };
  return (
    <>
      <section className=" w-2/3 mx-auto  dark:bg-blue-900 shadow-lg bg-blue-400 px-10 py-5 flex-1">
        <article className="flex justify-between">
          <p className="text-white  dark:text-gray-200 md:text-2xl italic sm:text-lg text-sm">
            Card Payment
          </p>
          <Link to="/cart">
            <IoMdClose
              onClick={() => setCheckOut(false)}
              className="md:w-8 md:h-8 h-5 w-5 hover:cursor-pointer text-white dark:text-gray-200 hover:scale-125"
            />
          </Link>
        </article>
        <form onSubmit={(event) => handleOrderSubmit(event)}>
          <article>
            <label
              htmlFor="name"
              className="block text-white dark:text-gray-200 mt-4 mb-2 text-xl italic font-semibold "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              ref={nameRef}
              value={user?.name || ""}
              required={true}
              className="w-full rounded-md p-3 placeholder:italic placeholder:text-lg outline-0 hover:outline-0"
            />
          </article>
          <article>
            <label
              htmlFor="email"
              className="block text-white dark:text-gray-200 mt-2 mb-2 text-lg italic font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              id="email"
              ref={emailRef}
              value={user?.email}
              required={true}
              className="w-full rounded-md p-3 placeholder:italic placeholder:text-lg outline-0 hover:outline-0"
            />
          </article>
          <article>
            <label
              htmlFor="cardNumber"
              className="block text-white dark:text-gray-200 mt-2 mb-2 text-lg italic font-semibold"
            >
              Card Number
            </label>
            <input
              type="number"
              name="cardNumber"
              id="cardNumber"
              placeholder="Enter card number"
              className="w-full rounded-md p-3 outline-0 hover:outline-0 placeholder:italic placeholder:text-lg md:text-lg text-md italic text-blue-900 hover:cursor-not-allowed cursor-not-allowed"
              value={756823451234}
            />
          </article>
          <article>
            <label
              htmlFor="expiryDate"
              className="block text-white dark:text-gray-200 mt-2 mb-2 text-lg italic font-semibold "
            >
              Expiry Date
            </label>
            <article className="flex gap-4 outline-0 hover:outline-0">
              <input
                placeholder="Enter month"
                type="text"
                name="month"
                id="expiryDate"
                value={"September"}
                className="w-1/2 rounded-md px-4 py-3 outline-0 hover:outline-0 placeholder:italic placeholder:text-lg md:text-lg text-md italic hover:cursor-not-allowed"
              />
              <input
                placeholder="Enter year"
                type="number"
                name="year"
                id="expiryDate"
                value={2027}
                className="w-1/2 rounded-md p-3 outline-0 hover:outline-0 placeholder:italic placeholder:text-lg md:text-lg text-md italic text-blue-900 hover:cursor-not-allowed cursor-not-allowed"
              />
            </article>
          </article>
          <article>
            <label
              htmlFor="securityCode"
              className="block text-white dark:text-gray-200 mt-2 mb-2 text-lg italic font-semibold"
            >
              Security Code
            </label>
            <input
              type="number"
              name="securityCode"
              id="securityCode"
              placeholder="Enter security code"
              className="w-full rounded-md p-3 outline-0 hover:outline-0 placeholder:italic placeholder:text-lg text-slate-900 italic md:text-lg text-md hover:cursor-not-allowed"
              value={574}
            />
          </article>
          <p className="text-white dark:text-gray-200 text-xl md:text-3xl text-center m-8 font-bold italic  ">
            Total : {total}$
          </p>
          <article className="w-full">
            <button
              type="submit"
              className="block w-full dark:text-gray-200 dark:bg-slate-800 p-3 rounded-lg text-sm  md:text-lg italic font-bold hover:cursor-pointer bg-blue-800 text-white "
            >
              Proceed to Payment
            </button>
          </article>
        </form>
      </section>
    </>
  );
};
