import { ProductCard } from "./ProductCard";
export const FeaturedProducts = () => {
  return (
    <>
      <section className="w-full lg:w-4/5 mx-auto ">
        <h1 className="lg:text-3xl italic text-blue-900 font-bold text-center lg:py-16 text-2xl py-4">
          Featured E-Books!
        </h1>
        <article>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </article>
      </section>
    </>
  );
};
