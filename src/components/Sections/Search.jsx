import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="w-4/5 mx-auto px-10 py-10  ">
        <article className="flex flex-row gap-4">
          <input
            className="flex-1 outline-none border-2 border-blue-700 py-2 px-5 rounded-md text-lg font-semibold tracking-wider hover:cursor-pointer dark:bg-gray-200 dark:text-blue-900 dark:border-none placeholder-blue-900"
            type="search"
            placeholder="Type any Book"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="bg-blue-700 p-4 text-slate-100 font-bold rounded-md tracking-wide dark:bg-gray-200 dark:text-blue-900">
            Search
          </button>
        </article>
      </section>
    </>
  );
};
