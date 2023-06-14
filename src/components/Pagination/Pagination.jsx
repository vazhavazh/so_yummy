import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import style from './Pagination.module.scss';
import { useEffect, useState } from 'react';

export const Pagination = ({ onChangePage, totalPages, currentpage }) => {
  const [isActive, setIsActive] = useState(currentpage);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {}, [isActive]);

  const onClick = e => {
    setIsActive(Number(e.target.innerText));
  };

  function handlePaginationDisplay() {
    const pageNeighboursLeft = [currentpage - 2, currentpage - 1];
    const pageNeighboursRight = [currentpage + 1, currentpage + 2];

    let rangeToDisplay = [];
    if (totalPages > 8) {
      if (currentpage < 6) {
        rangeToDisplay = [1, 2, 3, 4, 5, 6, '...', totalPages];
      }
      if (currentpage >= 6) {
        rangeToDisplay = [
          1,
          '...',
          ...pageNeighboursLeft,
          currentpage,
          ...pageNeighboursRight,
          '...',
          totalPages,
        ];
      }
      if (currentpage > totalPages - 5) {
        rangeToDisplay = [
          1,
          '...',
          totalPages - 5,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }
    } else {
      rangeToDisplay = pages;
    }
    return rangeToDisplay;
  }

  return (
    <div className={style.pagination}>
      <button
        className={style.arrowBtn}
        disabled={currentpage === 1}
        onClick={() => onChangePage(currentpage - 1)}
      >
        <AiOutlineLeft />
      </button>
      {handlePaginationDisplay().map((page, index) => (
        <p
          className={`${style.pageDigit} ${
            isActive === page ? style.active : ''
          }`}
          key={index}
          currentpage={currentpage}
          onClick={e => {
            onChangePage(e.target.innerText);
            onClick(e);
          }}
        >
          {page}
        </p>
      ))}
      <button
        className={style.arrowBtn}
        disabled={currentpage === totalPages}
        onClick={() => onChangePage(currentpage + 1)}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};
