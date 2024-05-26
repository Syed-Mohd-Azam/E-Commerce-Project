import { EmptyCart } from "./components/EmptyCart";
import { CartList } from "./components/CartList";
export const CartPage = () => {
  const cartListItems = 0;
  return (
    <>
      <section className="flex-1 flex justify-center items-center">
        {cartListItems ? <CartList /> : <EmptyCart />}
      </section>
    </>
  );
};
