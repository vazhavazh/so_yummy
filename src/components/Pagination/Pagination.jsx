// import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import style from './Pagination.module.scss';

export const Pagination = ({ onChangePage, totalPages, currentpage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

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
        disabled={currentpage === 1}
        onClick={() => onChangePage(currentpage - 1)}
      >
        <AiOutlineLeft />
      </button>
      {handlePaginationDisplay().map((page, index) => (
        <span
          className={style.pageDigit}
          key={index}
          currentpage={currentpage}
          onClick={e => onChangePage(e.target.innerText)}
        >
          {page}
        </span>
      ))}
      <button
        disabled={currentpage === totalPages}
        onClick={() => onChangePage(currentpage + 1)}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

// const Pages = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 15px;
//   font-size: 1.2rem;
//   padding: 20px 0;
//   overflow: hidden;
// `;
// const Page = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50px;

//   background-color: ${props =>
//     props.currentPage === props.children && '#fd6a02'};
//   border: 2px solid #fd6a02;
//   border-radius: 5px;
//   cursor: pointer;

//   transition: all 250ms linear;
//   &:hover {
//     scale: 1.2;
//     background-color: #ffbf00;
//   }
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50px;

//   background-color: #fd6a02;
//   border: 2px solid #fd6a02;
//   border-radius: 5px;
//   cursor: pointer;

//   transition: all 250ms linear;

//   &:hover {
//     scale: 1.2;
//     background-color: #ffbf00;
//   }
// `;
