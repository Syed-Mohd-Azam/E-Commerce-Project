import { DashboardCard } from "./components/DashboardCard";
import { EmptyDashboard } from "./components/EmptyDashboard";
export const DashboardPage = () => {
  const orders = [];
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto">
        <article>
          <h1 className="underline underline-offset-2 italic  p-5 text-center text-2xl dark:text-slate-200 text-blue-700 font-semibold">
            My Dashboard
          </h1>
        </article>
        <section className="border-2 py-7 dark:border-slate-200 border-blue-700">
          {orders?.length > 0 ? <DashboardCard /> : <EmptyDashboard />}
        </section>
      </section>
    </>
  );
};
