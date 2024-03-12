import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <footer className="border-t-2 border-gray-200">
        <footer className="bg-white shadow-none dark:bg-inherit">
          <div className=" mx-auto md:w-4/5 w-full flex items-center justify-between p-3">
            <p className="text-sm sm:text-lg text-blue-900 font-bold  dark:text-gray-200 italic text-center">
              © 2024 & All Rights Reserved.
            </p>
            <div className="flex space-x-6 justify-center mt-0">
              <Link
                to="https://www.linkedin.com/in/syed-mohd-azam/"
                target="_blank"
              >
                <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6 text-blue-900 dark:text-gray-200" />
              </Link>
              <Link to="https://github.com/Syed-Mohd-Azam" target="_blank">
                <FaGithub className="w-4 h-4 sm:w-6 sm:h-6 text-blue-900 dark:text-gray-200" />
              </Link>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
};
