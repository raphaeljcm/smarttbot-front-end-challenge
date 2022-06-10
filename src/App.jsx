import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import "./styles/globals.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Summary />
      </main>
    </>
  );
}

export default App;