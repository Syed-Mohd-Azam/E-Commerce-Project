/* eslint-disable react/prop-types */
export const Accordian = ({ question, answer }) => {
  console.log(question, answer);
  return (
    <>
      <section className="py-3 px-2">
        <article>
          <p className="font-semibold text-xl">{question}</p>
        </article>
        <article className="py-5 px-4 font-normal italic text-lg">
          {answer}
        </article>
      </section>
    </>
  );
};
