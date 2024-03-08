import { Faq } from "../../../utils/Faq";
import { Accordian } from "./Accordian";
import { useState } from "react";
export const FaqComponent = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <section className="dark:bg-blue-900 bg-white">
        <article className="w-full lg:w-4/5 mx-auto py-10 px-4 lg:px-0">
          <p className="lg:text-3xl  text-2xl font-bold text-center pt-20 pb-20 italic dark:text-gray-200">
            Frequently Asked Questions !!
          </p>
          {Faq?.map(({ id, question, answer }) => (
            <>
              <Accordian
                key={id}
                id={id}
                question={question}
                answer={answer}
                index={index === id ? true : false}
                setIndex={setIndex}
              />
            </>
          ))}
        </article>
      </section>
    </>
  );
};
