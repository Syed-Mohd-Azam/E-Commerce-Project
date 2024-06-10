/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { ShoppingCard } from "./ShoppingCard";
export const Orders = ({ cartList }) => {
  return (
    <>
      <section>
        {cartList.map((cart) => (
          <ShoppingCard key={cart?.id} cart={cart} />
        ))}
      </section>
    </>
  );
};
