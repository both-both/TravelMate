import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import { AppRouter } from "./router/AppRouter";
import { Main } from "./layout/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        HALLO
        <AppRouter />
      </Main>
      <Footer />
    </>
  );
}

export default App;
