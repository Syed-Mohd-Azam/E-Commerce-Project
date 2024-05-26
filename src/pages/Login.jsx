export const Login = () => {
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto  text-center italic font-bold text-2xl text-blue-900 dark:text-slate-200 py-5 ">
        <p>LOGIN</p>
        <form>
          <div className="m-4 flex flex-col">
            <label
              htmlFor="email"
              className="block text-left my-4 py-1 px-2 italic "
            >
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter  email please!"
              autoComplete="off"
              className="block dark:bg-slate-200 rounded-sm dark:text-slate-900 text-slate-200 bg-slate-800 py-1 px-2 font-semibold italic"
            />
          </div>
          <div className="m-4 flex flex-col">
            <label htmlFor="password" className="block text-left my-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              autoComplete="off"
              placeholder="Make strong password!"
              className="block dark:bg-slate-200 rounded-sm italic bg-slate-800 dark:text-slate-900 text-slate-200 py-1 px-2 text-md font-semibold"
            />
          </div>
          <div className="my-10 mx-3 text-left">
            <button className="text-[20px] dark:hover:bg-slate-900 dark:hover:text-slate-200 p-2 px-3 rounded-md dark:bg-slate-200 dark:text-blue-900 bg-slate-800 text-white hover:scale-110">
              Login as User
            </button>
          </div>
        </form>
        <div className="text-left px-2">
          <button className="text-[20px] dark:hover:bg-slate-900 dark:hover:text-slate-200 p-2 px-3 rounded-md dark:bg-slate-200 dark:text-blue-900 bg-slate-800 text-white hover:scale-110">
            Login as Guest
          </button>
        </div>
      </section>
    </>
  );
};
