import { IoMdClose } from "react-icons/io";
import { useFilterContext } from "../../../contexts";
// eslint-disable-next-line react/prop-types
export const FilterBar = ({ setShow }) => {
  const { state, dispatch } = useFilterContext();
  console.log(state);
  console.log(dispatch);
  return (
    <>
      <section className="h-screen fixed top-0 left-0 shadow w-[230px] z-10 bg-white dark:bg-slate-800 p-3">
        <article className="flex justify-between  items-center">
          <p className=" text-blue-900 dark:text-gray-200 font-bold text-2xl italic">
            Filter
          </p>
          <IoMdClose
            className="w-8 h-8 text-blue-900 dark:text-gray-200 hover:bg-gray-200 rounded-full p-1 hover:cursor-pointer dark:hover:bg-slate-500 "
            onClick={() => setShow(false)}
          />
        </article>
        <hr className="mt-2 text-blue-900 dark:text-gary-200" />
        <article className="py-4 text-blue-900 dark:text-gray-200">
          <p className="font-bold pb-4 text-lg text-start px-4">Sort By</p>
          <div className="flex items-center justify-center flex-row gap-2">
            <input
              type="radio"
              id="sort-by-1"
              name="sort-by"
              value=""
              checked={state.sortBy === "lowtohigh"}
              onChange={() => {
                dispatch({ type: "SORT_BY", payload: { sortBy: "lowtohigh" } });
              }}
            />
            <label htmlFor="sort-by-1">Price - Low to High</label>
          </div>
          <div className="flex items-center justify-center flex-row gap-2">
            <input
              type="radio"
              id="sort-by-2"
              name="sort-by"
              value=""
              checked={state.sortBy === "hightolow" || false}
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: { sortBy: "hightolow" } })
              }
            />
            <label htmlFor="sort-by-2">Price - High to Low</label>
          </div>
        </article>
        <article>
          <p className="font-bold text-blue-900 dark:text-gray-200 text-lg text-start pb-4 px-4">
            Rating
          </p>
          <div className="flex flex-row gap-4 items-center justify-center">
            <input
              type="radio"
              id="ratings-1"
              name="ratings"
              value=""
              checked={state.ratings === "4STARSABOVE" || false}
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "4STARSABOVE" },
                })
              }
            />
            <label
              htmlFor="ratings-1"
              className=" text-blue-900 dark:text-gray-200"
            >
              4 Stars & Above
            </label>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <input
              type="radio"
              id="ratings-2"
              name="ratings"
              value=""
              checked={state.ratings === "3STARSABOVE" || false}
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "3STARSABOVE" },
                })
              }
            />
            <label
              htmlFor="ratings-2 "
              className="text-blue-900 dark:text-gray-200"
            >
              3 Stars & Above
            </label>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <input
              type="radio"
              id="ratings-3"
              name="ratings"
              value=""
              checked={state.ratings === "2STARSABOVE" || false}
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "2STARSABOVE" },
                })
              }
            />
            <label
              htmlFor="ratings-3 "
              className="text-blue-900 dark:text-gray-200"
            >
              2 Stars & Above
            </label>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <input
              type="radio"
              id="ratings-4"
              name="ratings"
              value=""
              checked={state.ratings === "1STARSABOVE" || false}
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "1STARSABOVE" },
                })
              }
            />
            <label
              htmlFor="ratings-4 "
              className="text-blue-900 dark:text-gray-200"
            >
              1 Stars & Above
            </label>
          </div>
          <article>
            <p className="font-bold text-blue-900 dark:text-gray-200 px-4 py-4 text-lg">
              Other Filters
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <input
                type="checkbox"
                id="seller"
                name="best-sellers"
                value=""
                checked={state.bestSellerOnly || false}
                onChange={() =>
                  dispatch({
                    type: "BEST_SELLER_ONLY",
                    payload: { bestSellerOnly: !state.bestSellerOnly },
                  })
                }
              />
              <label
                htmlFor="seller"
                className="text-blue-900 dark:text-gray-200"
              >
                {" "}
                Best- Seller Only
              </label>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <input
                type="checkbox"
                id="in-stock"
                name="in-stock-only"
                value=""
                checked={state.onlyInStock || false}
                onChange={() =>
                  dispatch({
                    type: "ONLY_IN_STOCK",
                    payload: { onlyInStock: !state.onlyInStock },
                  })
                }
              />
              <label
                htmlFor="in-stock"
                className="text-blue-900 dark:text-gray-200"
              >
                {" "}
                IN- STOCK- Only
              </label>
            </div>
          </article>
          <article className="flex justify-center items-center py-8">
            <button
              onClick={() => dispatch({ type: "CLEAR_FILTER" })}
              className="bg-blue-900 text-white py-2 px-4 rounded-lg dark:bg-gray-200 dark:text-slate-800 font-bold hover:scale-110"
            >
              Clear Filter
            </button>
          </article>
        </article>
      </section>
    </>
  );
};
