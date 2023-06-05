import React from 'react';

import style from '../HeroTitle/HeroTitle.module.scss'

export const HeroTitle = () => {
  return (
    <div className={style.heroBox}>
      <h1 className={style.heroTitleGreen}>
        So
        <span className={style.heroTitle}>Yummy</span>
      </h1>
      <p className={style.heroDiscription}>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </p>
    </div>
  )
}