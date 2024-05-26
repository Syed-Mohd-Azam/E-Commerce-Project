import { EmptyCart } from "./components/EmptyCart";
import { CartList } from "./components/CartList";
export const CartPage = () => {
  const cartListItems = 2;
  return (
    <>
      <section className=" relative  flex-1 flex justify-center items-center">
        {cartListItems ? <CartList /> : <EmptyCart />}
      </section>
    </>
  );
};
