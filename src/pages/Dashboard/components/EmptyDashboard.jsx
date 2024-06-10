import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
export const EmptyDashboard = () => {
  return (
    <>
      <section className="border-2 border-blue-700 dark:border-slate-200">
        <article className="text-center mb-2">
          <BsCart className="inline-block mx-auto text-center text-8xl dark:text-green-600 text-green-400" />
        </article>
        <h1 className="py-2 text-center font-semibold italic text-blue-700 dark:text-slate-200">
          Oops!! Your dashboard looks empty.
        </h1>
        <h1 className="py-2 font-semibold italic text-center text-blue-700 dark:text-slate-200">
          Add e-books to your cart from our store collection.
        </h1>
        <article className="text-center py-5">
          <Link to="/products">
            <button className="bg-blue-700 text-white italic p-2 rounded-md font-semibold">
              Continue shopping
            </button>
          </Link>
        </article>
      </section>
    </>
  );
};
