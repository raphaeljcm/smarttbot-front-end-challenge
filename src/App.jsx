import { useCallback, useState } from "react";
import ReactModal from "react-modal";
import { AddNewRobot } from "./components/AddNewRobot";
import { AddNewRobotModal } from "./components/AddNewRobotModal";
import { Header } from "./components/Header";
import { Robot } from "./components/Robot";
import { Summary } from "./components/Summary";
import "./styles/globals.scss";
import { ToastContainer } from 'react-toastify';

// for modal accessibility
ReactModal.setAppElement('#root');

function App() {
  const [isAddNewRobotModalOpen, setIsAddNewRobotModalOpen] = useState(false);

  const handleOpenAddNewRobotModal = useCallback(() => {
    setIsAddNewRobotModalOpen(true);
  }, []);

  const handleCloseAddNewRobotModal = useCallback(() => {
    setIsAddNewRobotModalOpen(false);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Summary />
        <AddNewRobot onOpenAddNewRobotModal={handleOpenAddNewRobotModal} />
        <Robot />

        <AddNewRobotModal isOpen={isAddNewRobotModalOpen} onRequestClose={handleCloseAddNewRobotModal} />
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;