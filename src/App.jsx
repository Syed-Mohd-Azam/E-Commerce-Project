import AllRoutes from "./routes/AllRoutes";
import { Header, Footer, ScrollToTop } from "./components";
function App() {
  return (
    <>
      <section className="dark:bg-black">
        <ScrollToTop />
        <Header />
        <AllRoutes />
        <Footer />
      </section>
    </>
  );
}

export default App;
