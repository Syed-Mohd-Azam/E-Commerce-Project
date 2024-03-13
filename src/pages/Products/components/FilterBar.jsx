import { IoMdClose } from "react-icons/io";
export const FilterBar = () => {
  return (
    <>
      <section className="h-screen fixed top-0 left-0 shadow w-[200px] z-10 bg-white dark:bg-slate-800 p-3">
        <article className="flex justify-between  items-center">
          <p className=" text-blue-900 dark:text-gray-200 font-bold text-lg">
            Filter
          </p>
          <IoMdClose className="w-6 h-6 text-blue-900 dark:text-gray-200" />
        </article>
        <hr className="mt-2 text-blue-900 dark:text-gary-200" />
        <article className="py-4 text-blue-900 dark:text-gray-200">
          <p className="font-bold pb-2">Sort By</p>
          <div className="flex items-center justify-center flex-row gap-2">
            <input type="radio" id="sort-by-1" name="sort-by" value="" />
            <label htmlFor="sort-by-1">Price - Low to High</label>
          </div>
          <div className="flex items-center justify-center flex-row gap-2">
            <input type="radio" id="sort-by-2" name="sort-by" value="" />
            <label htmlFor="sort-by-2">Price - High to Low</label>
          </div>
        </article>
      </section>
    </>
  );
};
