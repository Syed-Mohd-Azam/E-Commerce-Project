export const Register = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const authDetail = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const optionsRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers your API might require, such as authentication tokens
      },
      body: JSON.stringify(authDetail),
    };
    const response = await fetch(
      "http://localhost:8000/register",
      optionsRequest
    );
    const jsonData = await response.json();
    console.log(jsonData);
  };
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto  text-center italic font-bold text-2xl text-blue-900 dark:text-slate-200 py-5 ">
        <p>REGISTER</p>
        <form onSubmit={handleRegister}>
          <div className="my-2 flex flex-col">
            <label htmlFor="name" className="block text-left my-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter name please!"
              autoComplete="off"
              className="block dark:bg-slate-200 rounded-sm bg-slate-800 text-slate-200 dark:text-slate-900 italic py-1 px-2 font-semibold"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label
              htmlFor="email"
              className="block text-left my-4 py-1 px-2 italic "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter  email please!"
              autoComplete="off"
              className="block dark:bg-slate-200 rounded-sm dark:text-slate-900 text-slate-200 bg-slate-800 py-1 px-2 font-semibold italic"
            />
          </div>
          <div className="my-2 flex flex-col">
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
          <div className="my-10 text-left">
            <button
              type="submit"
              className="dark:hover:bg-slate-900 dark:hover:text-slate-200 p-2 rounded-md dark:bg-slate-200 dark:text-slate-900 bg-slate-800 text-white hover:scale-110"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
