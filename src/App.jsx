import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <section className="dark:bg-slate-800 flex flex-col min-h-screen">
        <Header />
        <AllRoutes />
        <Footer />
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeButton={false}
      />
    </>
  );
}

export default App;
