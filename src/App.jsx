import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
function App() {
  return (
    <>
      <section>
        <Header />
        <AllRoutes />
        <Footer />
      </section>
    </>
  );
}

export default App;
