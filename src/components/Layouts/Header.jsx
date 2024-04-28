import { Link } from "react-router-dom";
import { GrSettingsOption } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Logo from "/images/Logo.png";
import { useState, useEffect } from "react";
import { Search } from "../Sections/Search";
export const Header = () => {
  const [dark, setDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <header>
        <nav className="bg-white   dark:bg-black  ">
          <div className="flex flex-wrap justify-between items-center mx-auto md:w-4/5 w-full p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="md:h-8 h-5" alt="Flowbite Logo" />
              <span className="self-center text-blue-900  text-xl md:text-2xl font-bold whitespace-nowrap dark:text-gray-200">
                CodeBook
              </span>
            </Link>
            <div className="flex items-center md:space-x-5 space-x-3 rtl:space-x-reverse ">
              <GrSettingsOption
                className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900"
                onClick={() => setDark(!dark)}
              />
              <IoSearch
                className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900"
                onClick={() => setShowSearch(!showSearch)}
              />
              <div className="flex flex-col relative">
                <FaShoppingCart className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900" />
                <span className="absolute -right-3 -top-3 bg-red-400 text-white px-1 py-0 font-bold rounded-full text-xs">
                  0
                </span>
              </div>
              <GoPerson className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer text-blue-900" />
            </div>
          </div>
        </nav>
        {showSearch && <Search />}
      </header>
    </>
  );
};
