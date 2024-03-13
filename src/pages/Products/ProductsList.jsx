import { BsThreeDotsVertical } from "react-icons/bs";
import { FilterBar } from "./components/FilterBar";
import { useState } from "react";
export const ProductsList = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="min-h-screen w-full">
        <section className="md:w-4/5 w-full p-4 mx-auto">
          <article className="flex flex-row justify-between items-center py-5">
            <p className="text-blue-900 dark:text-gray-200 font-semibold text-2xl italic">
              All E-books (15)
            </p>
            <BsThreeDotsVertical
              className="font-bold w-6 h-6 hover:cursor-pointer text-blue-900 dark:text-gray-200"
              onClick={() => setShow(!show)}
            />
          </article>
          {show && <FilterBar setShow={setShow} />}
        </section>
      </section>
    </>
  );
};
