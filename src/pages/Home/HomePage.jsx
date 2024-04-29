import { Hero } from "./components/Hero";
import { FaqComponent } from "./components/FaqComponent";
import Testimonials from "./components/Testimonials";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { useTitle } from "../../hooks/useTitle";
export const HomePage = () => {
  useTitle("CodeBook");
  return (
    <>
      <section className="bg-white dark:bg-slate-800 w-full ">
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <FaqComponent />
      </section>
    </>
  );
};
