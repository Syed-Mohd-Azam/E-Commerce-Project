/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const User = ({ user: { img, review, position, company, name } }) => {
  return (
    <>
      <section className="md:basis-2/5 p-4 w-full border-2 rounded-lg">
        <blockquote className="italic font-normal lg:text-lg">
          {"' "}
          {review}
          {" '"}
        </blockquote>
        <article className="flex lg:flex-row flex-col lg:gap-10 gap-3 lg:py-8 py-2 px-5">
          <img src={img} alt="Image" className="w-20 h-20 rounded-full" />
          <article className="flex flex-col gap-2">
            <p className="font-bold italic">{name}</p>
            <p className="font-bold italic">
              {position} at {company}
            </p>
          </article>
        </article>
      </section>
    </>
  );
};
