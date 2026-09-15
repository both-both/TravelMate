import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { AppRouter } from "./router/AppRouter";
import { Main } from "./components/layout/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </>
  );
}

export default App;
