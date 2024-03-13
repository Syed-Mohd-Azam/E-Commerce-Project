import { ProductCard } from "./ProductCard";
import { featured } from "../../../utils/Featured";
export const FeaturedProducts = () => {
  return (
    <>
      <section className="w-full md:w-4/5 mx-auto p-4 lg:p-0">
        <h1 className="lg:text-3xl italic text-blue-900 font-bold text-center lg:py-16 text-2xl py-4 dark:text-gray-200">
          Featured E-Books!
        </h1>
        <article className="flex flex-col lg:flex-row gap-10 flex-wrap">
          {featured?.map((feature) => (
            <>
              <ProductCard feature={feature} />
            </>
          ))}
        </article>
      </section>
    </>
  );
};
