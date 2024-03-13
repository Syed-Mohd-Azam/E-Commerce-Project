export const ProductCard = () => {
  return (
    <>
      <section className="border-2 border-gray-200 h-[350px] flex-1 rounded-xl">
        <article className="w-full h-1/2 ">
          <img
            src=""
            alt="Book-Image"
            className="w-full h-full dark:text-gray-200"
          />
        </article>
        <article>
          <p>Title</p>
          <p>desription of book</p>
          <article className="flex flex-row gap-2"></article>
          <article className="flex justify-between items-center">
            <p></p>
            <button>Add to cart</button>
          </article>
        </article>
      </section>
    </>
  );
};
