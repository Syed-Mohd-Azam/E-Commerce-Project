import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const DropdownLoggedIn = ({ setDropDown }) => {
  return (
    <>
      <section className="w-20  sm:w-32 text-left bg-blue-900 text-white dark:text-blue-900 dark:bg-gray-200 font-normal  z-10 rounded-md italic sm:text-lg text-xs">
        <ul>
          <li>
            <Link
              to="products"
              onClick={() => setDropDown(false)}
              className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 hover:rounded-t-md font-medium dark:hover:bg-black dark:hover:text-gray-200"
            >
              All E-Books
            </Link>
          </li>
          <li>
            <Link
              to="dashboard"
              onClick={() => setDropDown(false)}
              className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 font-medium dark:hover:bg-black dark:hover:text-gray-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="logout"
              onClick={() => setDropDown(false)}
              className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 hover:rounded-b-md font-medium dark:hover:bg-black dark:hover:text-gray-200"
            >
              Logout
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
export default DropdownLoggedIn;
