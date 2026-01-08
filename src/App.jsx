import "./css/style.min.css";
import { Header, Main, Footer } from "./components";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip Navigation
      </a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
