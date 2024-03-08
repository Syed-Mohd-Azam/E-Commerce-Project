import { Hero } from "./components/Hero";
import { FaqComponent } from "./components/FaqComponent";
export const HomePage = () => {
  return (
    <>
      <section className="bg-white dark:bg-blue-900 w-full ">
        <Hero />
        <FaqComponent />
      </section>
    </>
  );
};
