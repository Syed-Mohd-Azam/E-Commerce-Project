import { useRef } from "react";
import { login } from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleLogin = async (event) => {
    event.preventDefault();
    const loginDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const data = await login(loginDetails);
      if (data?.accessToken) {
        navigate("/");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto  text-center italic font-bold text-2xl text-blue-900 dark:text-slate-200 py-5 ">
        <p>LOGIN</p>
        <form onSubmit={handleLogin}>
          <div className="m-4 flex flex-col">
            <label
              htmlFor="email"
              className="block text-left my-4 py-1 px-2 italic "
            >
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              value={emailRef?.current?.value}
              required
              placeholder="Enter  email please!"
              autoComplete="off"
              className="block text-sm md:text-lg dark:bg-slate-200 rounded-md dark:text-blue-900 text-white bg-blue-900 py-2 px-2 font-semibold italic placeholder:text-white dark:placeholder:text-slate-900"
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
              ref={passwordRef}
              value={passwordRef?.current?.value}
              autoComplete="off"
              placeholder="Make strong password!"
              className="block text-sm  dark:bg-slate-200 rounded-md italic bg-blue-900 dark:text-blue-900 text-white py-2 px-2 md:text-lg font-semibold placeholder:text-white dark:placeholder:text-slate-900"
            />
          </div>
          <div className="my-10 mx-4 text-left">
            <button className=" text-sm md:text-lg dark:hover:bg-blue-900 dark:hover:text-slate-200 p-2 px-3 rounded-md dark:bg-blue-800 dark:text-gray-200 bg-blue-500 text-white hover:scale-110">
              Login as User
            </button>
          </div>
        </form>
        <div className="text-left px-2 mx-2">
          <button className=" text-sm md:text-lg dark:hover:bg-blue-700 dark:hover:text-slate-200 p-2 px-3 rounded-md dark:bg-blue-800 dark:text-gray-200 bg-blue-500 text-white hover:scale-110">
            Login as Guest
          </button>
        </div>
      </section>
    </>
  );
};
