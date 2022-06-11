import { AddNewRobot } from "./components/AddNewRobot";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import "./styles/globals.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Summary />
        <AddNewRobot />
      </main>
    </>
  );
}

export default App;