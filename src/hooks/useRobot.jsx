import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const RobotContext = createContext({});

export function RobotProvider({ children }) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    (async function() {
      try {
        await api.get('/', { headers: { limit: 10 } }).then(response => setRobots(response.data));
      } catch(err) {
        console.log(err);
      }
    })()
  }, []);

  return (
    <RobotContext.Provider value={{ robots, setRobots }}>
      { children }
    </RobotContext.Provider>
  );
}

export const useRobot = () => useContext(RobotContext);