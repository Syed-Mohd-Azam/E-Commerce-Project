// eslint-disable-next-line react/prop-types
import { IoStar } from "react-icons/io5";
export const ProductCard = ({
  // eslint-disable-next-line react/prop-types, no-unused-vars
  feature: { title, price, img, description },
}) => {
  return (
    <>
      <section className="border-2 border-gray-200 h-[420px] flex-1 rounded-xl relative">
        <article className="w-full h-1/2 ">
          <img
            src={img}
            alt="Book-Image"
            className="w-full h-full dark:text-gray-200 rounded-t-xl"
          />
          <p className="absolute bottom-3 left-3 dark:bg-gray-200  font-bold py-2 px-5 rounded-md dark:text-blue-900 bg-blue-900 text-gray-200">
            Best Seller{" "}
          </p>
          <article className="flex flex-row gap-2 absolute bottom-3 right-3 ">
            <IoStar className="dark:text-gray-200 text-blue-900" />
            <IoStar className="dark:text-gray-200 text-blue-900" />
            <IoStar className="dark:text-gray-200 text-blue-900" />
            <IoStar className="dark:text-gray-200  text-blue-900" />
            <IoStar className="dark:text-gray-200 text-blue-900" />
          </article>
        </article>
        <article className="h-1/2 py-1 px-2">
          <p className="text-lg font-bold italic py-3 text-blue-900 dark:text-gray-200">
            {title}
          </p>
          <p className="text-sm italic text-blue-900 dark:text-gray-200">
            {description}
          </p>
          <article className="flex flex-row gap-2"></article>
          <article className="flex justify-end items-center py-1">
            <p className="font-bold italic text-xl text-blue-900 dark;text-gray-200 dark:text-gray-200 px-5">
              {price}
            </p>
            {/* <button className="p-2 bg-blue-900 text-white dark:bg-gray-200 dark:text-blue-900 rounded-md italic font-bold">
              Add to cart
            </button> */}
          </article>
        </article>
      </section>
    </>
  );
};
