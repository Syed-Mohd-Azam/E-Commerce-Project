import { useLocation } from "react-router-dom";
import { OrderFailure } from "./components/OrderFailure";
import { OrderSuccess } from "./components/OrderSuccess";
export const OrderPage = () => {
  const { state } = useLocation();
  return (
    <>
      <section className="flex-1">
        {state?.status ? <OrderSuccess data={state?.data} /> : <OrderFailure />}
      </section>
    </>
  );
};
