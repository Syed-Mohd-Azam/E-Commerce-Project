/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <section className="flex flex-col gap-5  md:flex-row md:justify-between m-12">
        <article className="flex md:flex-row flex-col gap-10">
          <img
            className="w-60 h-32 rounded-md shadow-md hover:scale-125 hover:cursor-pointer"
            src={product?.image_local}
            alt="Book-Image"
          />
          <article>
            <p className="text-xs md:text-xl font-semibold italic text-blue-800 dark:text-gray-200">
              {product?.name}
            </p>
          </article>
        </article>
        <article className="text-xl dark:text-gray-200 text-blue-800 font-bold hover:scale-125 hover:cursor-pointer">
          {product?.price}$
        </article>
      </section>
    </>
  );
};
