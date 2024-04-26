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
      {starRating?.map((star) =>
        star ? (
          // eslint-disable-next-line react/jsx-key
          <IoStar className="dark:text-gray-200 text-blue-900" />
        ) : (
          // eslint-disable-next-line react/jsx-key
          <IoStarOutline className="dark:text-gray-200 text-blue-900" />
        )
      )}
    </>
  );
};
export default Rating;
