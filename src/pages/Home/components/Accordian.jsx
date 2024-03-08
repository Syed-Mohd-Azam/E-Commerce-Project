/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export const Accordian = ({ question, answer, index, setIndex, id }) => {
  return (
    <>
      <section className="py-5 px-4 bg-purple-50 mb-4 rounded-xl dark:bg-gray-300">
        <article className="flex justify-between">
          <p className="font-semibold text-xl dark:text-blue-900">{question}</p>
          {!index && (
            <IoIosArrowUp
              onClick={() => setIndex(id)}
              className="hover:cursor-pointer dark:text-blue-900 font-bold w-6 h-6"
            />
          )}
          {index && (
            <IoIosArrowDown
              onClick={() => setIndex(0)}
              className="hover:cursor-pointer dark:text-blue-900 font-bold w-6 h-6"
            />
          )}
        </article>
        {index && (
          <article className="py-5 px-4 font-semibold italic text-lg dark:text-blue-900">
            {answer}
          </article>
        )}
      </section>
    </>
  );
};
