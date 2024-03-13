import { users } from "../../../utils/testimonials";
import { User } from "./User";
const Testimonials = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-800">
        <article className="w-full md:w-4/5 mx-auto ">
          <h1 className="text-center text-2xl lg:text-3xl italic font-bold lg:py-20 py-8 px-2 dark:text-gray-200 text-blue-900">
            Students about CodeBook !
          </h1>
          <article className="w-full flex flex-col gap-4 lg:flex-row lg:gap-x-16 lg:gap-y-8 flex-wrap items-center justify-center">
            {users?.map((user) => (
              <>
                <User key={user?.id} user={user} />
              </>
            ))}
          </article>
        </article>
      </section>
    </>
  );
};
export default Testimonials;
