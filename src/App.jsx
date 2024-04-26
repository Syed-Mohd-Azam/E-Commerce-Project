import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
function App() {
  return (
    <>
      <section className="dark:bg-slate-800 flex flex-col min-h-screen">
        <Header />
        <AllRoutes />
        <Footer />
      </section>
    </>
  );
}

export default App;
