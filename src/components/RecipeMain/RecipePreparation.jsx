import React from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';

export const RecipePreparation = ({ instructions, img }) => {
  if (!instructions) {
    return null;
  }

  const newInstructions = instructions.split('.');

  return (
    <>
      <div className={style.prep__container}>
        <div className={style.prep__box}>
          <h3 className={style.prep__title}>Recipe Preparation</h3>
          <ol className={style.prep__list}>
            {newInstructions.map((step, idx) => (
              <li className={style.prep__item} key={idx}>
                <p className={style.prep__step}>{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <img className={style.prep__img} src={img} alt="dish" />
        </div>
      </div>
    </>
  );
};
