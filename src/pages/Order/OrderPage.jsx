import { OrderFailure } from "./components/OrderFailure";
import { OrderSuccess } from "./components/OrderSuccess";
export const OrderPage = () => {
  const status = true;
  return (
    <>
      <section className="flex-1">
        {status ? <OrderSuccess /> : <OrderFailure />}
      </section>
    </>
  );
};
