import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { usePagination } from "./usePagination";

const RobotContext = createContext({});

export function RobotProvider({ children }) {
  const [robots, setRobots] = useState([]);
  const [addedRobots, setAddedRobots] = useState([]);
  const { setTotalPages, LIMIT, currentPage } = usePagination();

  useEffect(() => {
    (async function() {
      try {
        await api.get('/').then(response => setTotalPages(Math.ceil(response.data.data.length / LIMIT))); 
      } catch(err) {
        toast.error(err.message);
      }
    })()
  }, [robots, LIMIT]);

  useEffect(() => {
    (async function() {
      try {
        await api.get('/', { headers: { limit: LIMIT, page: currentPage } }).then(response => setRobots(response.data));
      } catch(err) {
        toast.error(err.message);
      }
    })()
  }, [currentPage, LIMIT]);

  return (
    <RobotContext.Provider 
      value={
        { robots, setRobots, addedRobots, setAddedRobots }
      }
    >
      { children }
    </RobotContext.Provider>
  );
}

export const useRobot = () => useContext(RobotContext);