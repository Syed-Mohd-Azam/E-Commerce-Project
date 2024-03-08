import { Link } from "react-router-dom";
import HeroPicture from "../../../../public/images/Hero.avif";
export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-between w-full lg:w-4/5 mx-auto">
      <div className="lg:my-20 px-5 mt-10 mb-5">
        <h1 className="text-5xl font-bold dark:text-slate-100 ">
          The Ultimate eBook Store
        </h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          CodeBook is the world&apos;s most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-200 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 dark:text-blue-900 tracking-wider font-bold"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="visual lg:my-20 px-5 my-5">
        <img
          className="rounded-lg w-full lg:min-w-[300px] lg:max-w-[800px] max-h-full"
          src={HeroPicture}
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};
