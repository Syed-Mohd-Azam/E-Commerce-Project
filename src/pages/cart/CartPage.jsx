import { EmptyCart } from "./components/EmptyCart";
import { CartList } from "./components/CartList";
import { useCartContext } from "../../contexts";
export const CartPage = () => {
  const { cartList } = useCartContext();
  return (
    <>
      <section className=" relative  flex-1 flex justify-center items-center">
        {cartList?.length ? <CartList /> : <EmptyCart />}
      </section>
    </>
  );
};
