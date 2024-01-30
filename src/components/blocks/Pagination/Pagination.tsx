import { useState, useEffect, FC } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setPage: (number: number) => void;
}

import styles from "./Pagination.module.scss";

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setPage,
}) => {
  const visiblePages = 5;
  const [pages, setPages] = useState<number[]>([]);

  const generatePagination = () => {
    let pagin = [];

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pagin.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pagin.push(i);
      }
    }

    setPages(pagin);
  };
  useEffect(() => {
    generatePagination();
  }, [currentPage, totalPages]);

  const selectPage = (page: number) => {
    setPage(page);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => selectPage(1)}>start</button>
      {pages.map((pageNumber) => (
        <button
          className={currentPage === pageNumber ? styles.active : ""}
          onClick={() => selectPage(pageNumber)}
          key={pageNumber}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={() => selectPage(totalPages)}>end</button>
    </div>
  );
};

export default Pagination;
