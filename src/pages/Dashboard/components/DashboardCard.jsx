/* eslint-disable react/prop-types */
import { OrderCard } from "./OrderCard";
export const DashboardCard = ({ orders }) => {
  return (
    <>
      <section>
        {orders?.map((order) => (
          <OrderCard key={order?.id} order={order} />
        ))}
      </section>
    </>
  );
};
