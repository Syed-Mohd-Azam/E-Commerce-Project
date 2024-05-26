import { Link } from "react-router-dom";
import { GrSettingsOption } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Logo from "/images/Logo.png";
import { useState, useEffect } from "react";
import { Search } from "../Sections/Search";
import DropdownLoggedOut from "../Sections/DropdownLoggedOut";
import DropdownLoggedIn from "../Sections/DropdownLoggedIn";
export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showSearch, setShowSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <header>
        <nav className="dark:bg-black bg-blue-900 text-white ">
          <div className="flex flex-wrap justify-between items-center mx-auto md:w-4/5 w-full p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="md:h-8 h-5" alt="Flowbite Logo" />
              <span className="self-center   text-xl md:text-2xl font-bold whitespace-nowrap dark:text-gray-200">
                CodeBook
              </span>
            </Link>
            <div className="flex items-center md:space-x-5 space-x-3 rtl:space-x-reverse ">
              <GrSettingsOption
                className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer "
                onClick={() => setDarkMode(!darkMode)}
              />
              <IoSearch
                className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer "
                onClick={() => setShowSearch(!showSearch)}
              />
              <Link to="/cart">
                <div className="flex flex-col relative">
                  <FaShoppingCart className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer " />
                  <span className="absolute -right-3 -top-3 bg-red-400 text-white px-1 py-0 font-bold rounded-full text-xs">
                    0
                  </span>
                </div>
              </Link>
              <div className="flex flex-col gap-2 relative">
                <GoPerson
                  onClick={() => setDropDown(!dropDown)}
                  className="md:w-6 md:h-6 h-4 w-4 dark:text-gray-200 cursor-pointer"
                />
                <div className="absolute top-12 right-0">
                  {dropDown && <DropdownLoggedOut setDropDown={setDropDown} />}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {showSearch && <Search setShowSearch={setShowSearch} />}
      </header>
    </>
  );
};
