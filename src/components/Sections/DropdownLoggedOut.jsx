const DropdownLoggedOut = () => {
  return (
    <>
      <section className="w-24  sm:w-32 text-right bg-sky-900 text-white dark:text-blue-900 dark:bg-gray-200 font-normal  z-10 rounded-md italic sm:text-lg text-normal">
        <ul>
          <li className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 hover:rounded-t-md">
            All E-Books
          </li>
          <li className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900">
            Login
          </li>
          <li className="block px-2 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-sky-900 hover:rounded-b-md">
            Register
          </li>
        </ul>
      </section>
    </>
  );
};
export default DropdownLoggedOut;
