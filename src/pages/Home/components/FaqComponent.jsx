import { Faq } from "../../../utils/Faq";
import { Accordian } from "./Accordian";
export const FaqComponent = () => {
  return (
    <>
      <section className="dark:bg-blue-900 bg-white">
        <article className="w-full lg:w-4/5 mx-auto py-10 px-4 lg:px-0">
          <p className="lg:text-3xl  text-2xl font-bold text-center pt-20 pb-20 italic">
            Frequently Asked Questions !!
          </p>
          {Faq?.map(({ id, question, answer }) => (
            <>
              <Accordian key={id} question={question} answer={answer} />
            </>
          ))}
        </article>
      </section>
    </>
  );
};
