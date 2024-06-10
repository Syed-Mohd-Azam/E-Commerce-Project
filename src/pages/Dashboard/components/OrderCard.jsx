import { Orders } from "./Orders";

/* eslint-disable react/prop-types */
export const OrderCard = ({ order }) => {
  return (
    <>
      <section className="p-4 border-2 border-blue-700 dark:border-slate-200 my-4 rounded-md">
        <article className="flex flex-row justify-between">
          <p className="dark:text-slate-200 text-ble-700 italic text-sm md:text-lg font-semibold mb-5 text-blue-700 ">
            Order Id: {order?.id}
          </p>
          <p className="font-semibold italic text-blue-700 dark:text-slate-200 md:text-lg text-xs">
            Total Amount: ${order?.amount}
          </p>
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
