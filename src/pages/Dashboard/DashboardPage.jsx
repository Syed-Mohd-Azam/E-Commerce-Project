import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { DashboardCard } from "./components/DashboardCard";
import { EmptyDashboard } from "./components/EmptyDashboard";
import { toast } from "react-toastify";
import { getOrders } from "../../services";
export const DashboardPage = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    async function getUserOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getUserOrders();
  }, []);
  if (orders === null) {
    return <FaSpinner />;
  }
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto">
        <article>
          <h1 className="underline underline-offset-2 italic  p-5 text-center text-2xl dark:text-slate-200 text-blue-700 font-semibold ">
            My Dashboard
          </h1>
        </article>
        <section className=" py-7">
          {orders?.length > 0 ? (
            <DashboardCard orders={orders} />
          ) : (
            <EmptyDashboard />
          )}
        </section>
      </section>
    </>
  );
};
