import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services";
import { toast } from "react-toastify";
import { useCartContext } from "../../contexts";

// eslint-disable-next-line react/prop-types
const DropdownLoggedIn = ({ setDropDown }) => {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    clearCart();
    setDropDown(false);
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <>
      <section className="absolute top-12 right-4 w-20  sm:w-32 text-left bg-blue-900 text-white dark:text-blue-900 dark:bg-gray-200 font-normal  z-10 rounded-md italic sm:text-lg text-xs">
        <ul>
          <li>
            <Link
              to="/products"
              onClick={() => setDropDown(false)}
              className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 hover:rounded-t-md font-medium dark:hover:bg-black dark:hover:text-gray-200"
            >
              All E-Books
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              onClick={() => setDropDown(false)}
              className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 font-medium dark:hover:bg-black dark:hover:text-gray-200"
            >
              Dashboard
            </Link>
          </li>
          <li
            className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 hover:rounded-b-md font-medium dark:hover:bg-black dark:hover:text-gray-200"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </section>
    </>
  );
};
export default DropdownLoggedIn;
