/* eslint-disable react/prop-types */
export const ShoppingCard = ({ cart }) => {
  return (
    <>
      <section className="mb-8">
        <article className="flex lg:flex-row gap-3 flex-col">
          <article>
            <img
              className="w-80 h-36 rounded-2xl hover:scale-110 hover:cursor-pointer"
              src={cart?.image_local}
              alt="Book-Image"
            />
          </article>
          <article className="flex flex-col gap-1">
            <p className="text-blue-700 dark:text-slate-200 italic font-semibold text-md">
              Description : {cart?.name}
            </p>
            <p className="text-md text-blue-700 dark:text-slate-200 italic font-semibold">
              Amount : {cart?.price}$
            </p>
          </article>
        </article>
      </section>
    </>
  );
};
