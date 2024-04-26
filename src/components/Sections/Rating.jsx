import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
export const Rating = ({ rating }) => {
  const starRating = new Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    starRating[i] = true;
  }
  return (
    <>
      <article className="flex flex-row gap-2">
        {starRating?.map((star, index) =>
          star ? (
            // eslint-disable-next-line react/jsx-key
            <IoStar key={index} className="dark:text-gray-200 text-blue-900" />
          ) : (
            // eslint-disable-next-line react/jsx-key
            <IoStarOutline
              key={index}
              className="dark:text-gray-200 text-blue-900"
            />
          )
        )}
      </article>
    </>
  );
};
export default Rating;
