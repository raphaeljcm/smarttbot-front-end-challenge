import { createContext, useContext, useState } from "react";

const PaginationContext = createContext({});

export function PaginationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const LIMIT = 10;

  const onChange = (_, value) => {
    setCurrentPage(value);
  }

  return (
    <PaginationContext.Provider 
      value={
        { currentPage, setCurrentPage, totalPages, setTotalPages, LIMIT, onChange }
      }
    >
      { children }
    </PaginationContext.Provider>
  );
}

export const usePagination = () => useContext(PaginationContext);