import { Link } from "react-router-dom";
import { GrSettingsOption } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
export const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto md:w-4/5 w-full p-4">
            <a
              href="https://flowbite.com"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="md:h-8 h-5"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <div className="flex items-center md:space-x-5 space-x-3 rtl:space-x-reverse ">
              <GrSettingsOption className="md:w-5 md:h-5 h-4 w-4 dark:text-white cursor-pointer" />
              <IoSearch className="md:w-5 md:h-5 h-4 w-4 dark:text-white cursor-pointer" />
              <FaShoppingCart className="md:w-5 md:h-5 h-4 w-4 dark:text-white cursor-pointer" />
              <GoPerson className="md:w-5 md:h-5 h-4 w-4 dark:text-white cursor-pointer" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
