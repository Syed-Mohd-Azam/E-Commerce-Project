import { useLocation } from "react-router-dom";
import { OrderFailure } from "./components/OrderFailure";
import { OrderSuccess } from "./components/OrderSuccess";
export const OrderPage = () => {
  const location = useLocation();
  console.log(location);
  const { state } = location;
  return (
    <>
      <section className="flex-1">
        {state?.status ? <OrderSuccess data={state?.data} /> : <OrderFailure />}
      </section>
    </>
  );
};
