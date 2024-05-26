import { EmptyCard } from "./components/EmptyCart";
import { CartList } from "./components/CartList";
export const CartPage = () => {
  const cartListItems = 0;
  return (
    <>
      <section className="flex-1">
        {cartListItems ? <CartList /> : <EmptyCard />}
      </section>
    </>
  );
};
