
import React from 'react';
import style from '../RecipeMain/RecipeMain.module.scss';

const MySVGComponent = () => {
    return (
      <svg
        className={style.svg}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_264_738)">
          <path
            d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99996 1.66669C5.39759 1.66669 1.66663 5.39765 1.66663 10C1.66663 14.6024 5.39759 18.3334 9.99996 18.3334Z"
            stroke="#23262A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 5V10L13.3333 11.6667"
            stroke="#23262A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_264_738">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
}

export default MySVGComponent;
