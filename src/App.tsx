import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { AppRouter } from "./router/AppRouter";
import { Main } from "./components/layout/Main/Main";
import { Loader } from "./components/elements/Loader/Loader";
import { useEffect, useState } from "react";

const INTRO_DURATION = 2000;

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), INTRO_DURATION);

    // Rydder timeren, hvis App forsvinder, før tiden er gået
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <Loader />;

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
