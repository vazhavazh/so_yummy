// import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

export const Pagination = ({ onChangePage, totalPages, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  function handlePaginationDisplay() {
    const pageNeighboursLeft = [currentPage - 2, currentPage - 1];
    const pageNeighboursRight = [currentPage + 1, currentPage + 2];

    let rangeToDisplay = [];
    if (totalPages > 8) {
      if (currentPage < 6) {
        rangeToDisplay = [1, 2, 3, 4, 5, 6, '...', totalPages];
      }
      if (currentPage >= 6) {
        rangeToDisplay = [
          1,
          '...',
          ...pageNeighboursLeft,
          currentPage,
          ...pageNeighboursRight,
          '...',
          totalPages,
        ];
      }
      if (currentPage > totalPages - 5) {
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
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <AiOutlineLeft />
      </button>
      {handlePaginationDisplay().map((page, index) => (
        <span
          key={index}
          currentPage={currentPage}
          onClick={e => onChangePage(e.target.innerText)}
        >
          {page}
        </span>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(currentPage + 1)}
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
