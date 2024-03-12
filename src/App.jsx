import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
function App() {
  return (
    <>
      <section className="dark:bg-black">
        <Header />
        <AllRoutes />
        <Footer />
      </section>
    </>
  );
}

export default App;
