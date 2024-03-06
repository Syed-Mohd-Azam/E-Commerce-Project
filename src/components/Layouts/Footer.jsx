import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer>
        <footer className="bg-white shadow dark:bg-blue-900">
          <div className=" mx-auto md:w-4/5 w-full md:flex md:items-center md:justify-between p-4 md:p-6">
            <p className="text-sm sm:text-lg text-blue-900 font-bold  dark:text-white italic text-center">
              © 2030 & All Rights Reserved.
            </p>
            <div className="flex space-x-6 justify-center mt-5"></div>
          </div>
        </footer>
      </footer>
    </>
  );
};
