import { Link } from "react-router-dom";
import { GrSettingsOption } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
export const Header = () => {
  return (
    <>
      <header className="border-b-2  dark:border-gray-200 border-black">
        <nav className="bg-white border-gray-200  dark:bg-blue-900 ">
          <div className="flex flex-wrap justify-between items-center mx-auto md:w-4/5 w-full p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="md:h-8 h-5"
                alt="Flowbite Logo"
              />
              <span className="self-center text-blue-900  text-xl md:text-2xl font-bold whitespace-nowrap dark:text-gray-200">
                CodeBook
              </span>
            </Link>
            <div className="flex items-center md:space-x-5 space-x-3 rtl:space-x-reverse ">
              <GrSettingsOption className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900" />
              <IoSearch className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900" />
              <div className="flex flex-col relative">
                <FaShoppingCart className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900" />
                <span className="absolute -right-1 -top-3 bg-rose-700 text-gray-200 px-1 font-bold rounded-full text-xs">
                  0
                </span>
              </div>
              <GoPerson className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
