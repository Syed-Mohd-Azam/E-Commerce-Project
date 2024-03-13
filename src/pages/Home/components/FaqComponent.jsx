import { Faq } from "../../../utils/Faq";
import { Accordian } from "./Accordian";
import { useState } from "react";
export const FaqComponent = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <section className="dark:bg-slate-800 bg-white">
        <article className="w-full md:w-4/5 mx-auto py-4 lg:py-10 px-4 lg:px-0">
          <p className="lg:text-3xl  text-2xl font-bold text-center lg:pt-20 lg:pb-20 pt-3 pb-10  italic dark:text-gray-200 text-blue-900">
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
