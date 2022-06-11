import { AddNewRobot } from "./components/AddNewRobot";
import { Header } from "./components/Header";
import { Robot } from "./components/Robot";
import { Summary } from "./components/Summary";
import "./styles/globals.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Summary />
        <AddNewRobot />
        <Robot />
      </main>
    </>
  );
}

export default App;