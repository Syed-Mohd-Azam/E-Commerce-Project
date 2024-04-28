import { useState } from "react";
import { IoSearch } from "react-icons/io5";
export const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <section className=" w-full md:w-4/5 mx-auto md:px-10 md:py-10 px-2 py-2  ">
        <article className="flex flex-row md:gap-4 gap-2 ">
          <input
            className="flex-1 outline-none border-2 border-blue-700 py-2 px-5 rounded-md text-md md:text-lg font-semibold tracking-wider hover:cursor-pointer dark:bg-gray-200 dark:text-blue-900 dark:border-none placeholder-blue-900"
            type="search"
            placeholder="Type any Book"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="bg-blue-700 px-4 py-2 text-slate-100 font-bold rounded-md tracking-wide dark:bg-gray-200 dark:text-blue-900 text-md md:text-lg ">
            <IoSearch className="text-gray-200 font-bold dark:text-blue-700" />
          </button>
        </article>
      </section>
    </>
  );
};
