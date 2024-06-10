import { Orders } from "./Orders";

/* eslint-disable react/prop-types */
export const OrderCard = ({ order }) => {
  return (
    <>
      <section className="p-4 border-2 border-blue-700 dark:border-slate-200 my-4 rounded-md">
        <article className="flex flex-row justify-between ">
          <span className="dark:text-black text-ble-700 italic text-sm md:text-lg font-semibold mb-5 text-black bg-yellow-300 rounded-md p-2 hover:cursor-pointer hover:scale-110">
            Order Id: {order?.id}
          </span>
          <button className="font-semibold italic dark:text-slate-200 md:text-lg text-xs  rounded-md bg-blue-900 px-2 text-white hover:scale-110">
            Total Amount: ${order?.amount}
          </button>
        </article>
        <article>
          {order?.cartList.length > 0 ? (
            <Orders cartList={order?.cartList} />
          ) : (
            <h1 className="italic text-blue-700 dark:text-slate-200 text-md font-semibold">
              No Items Found!
            </h1>
          )}
        </article>
      </section>
    </>
  );
};
