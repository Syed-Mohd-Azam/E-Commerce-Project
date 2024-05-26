import { BsCart2 } from "react-icons/bs";
export const EmptyCart = () => {
  return (
    <>
      <section className="w-4/5 mx-auto flex justify-center items-center ">
        <article className="py-12  flex flex-col justify-center items-center gap-5">
          <BsCart2 className="md:w-20 md:h-20 h-16 w-16 text-blue-700 dark:text-gray-200" />
          <p className="dark:text-gray-200 text-blue-900 md:text-lg font-semibold italic text-sm">
            Oops!! Your cart looks empty!
          </p>
          <p className="dark:text-gray-200 text-blue-900  font-semibold italic md:text-lg text-sm">
            Add e-books from our collection!
          </p>
        </article>
      </section>
    </>
  );
};
