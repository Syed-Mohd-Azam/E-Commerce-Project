import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services";
export const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    const authDetail = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const data = await register(authDetail);
      if (data?.accessToken) {
        toast.success("Registeration successful!");
        navigate("/");
      }
      toast.error(data);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Registration failed. Please try again.");
    }
  };
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto  text-center italic font-bold text-2xl text-blue-900 dark:text-slate-200 py-5 ">
        <p>REGISTER</p>
        <form onSubmit={handleRegister}>
          <div className="my-2 flex flex-col">
            <label htmlFor="name" className=" block text-left my-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              ref={nameRef}
              placeholder="Enter name please!"
              autoComplete="off"
              className="placeholder:text-white dark:placeholder:text-slate-900 text-sm md:text-lg block dark:bg-slate-200 rounded-md bg-blue-900 text-slate-200 dark:text-slate-900 italic py-2 px-2 font-semibold"
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
              ref={emailRef}
              required
              placeholder="Enter  email please!"
              autoComplete="off"
              className="placeholder:text-white dark:placeholder:text-slate-900 text-sm md:text-lg block dark:bg-slate-200 rounded-md dark:text-slate-900 text-slate-200 bg-blue-900 py-2 px-2 font-semibold italic"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="password" className="block text-left my-4 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
              autoComplete="off"
              placeholder="Make strong password!"
              className="placeholder:text-white dark:placeholder:text-slate-900 text-sm md:text-lg block dark:bg-slate-200 rounded-md italic bg-blue-900 dark:text-slate-900 text-slate-200 py-2 px-2 text-md font-semibold"
            />
          </div>
          <div className="my-10 text-left">
            <button
              type="submit"
              className="text-sm md:text-lg dark:hover:bg-slate-900 dark:hover:text-slate-200 p-2 rounded-md dark:bg-slate-200 dark:text-slate-900 bg-blue-900 text-white hover:scale-110"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
