import React from 'react';

import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HeroWrapper } from 'components/HeroWrapper/HeroWrapper';


export const Hero = () => {
  return (
    <>
      <HeroTitle />
      <HeroWrapper />

    </>
    // <div>
    //   {/* Hero */}
    //   <h1 className="hero__title">
    //     So
    //     <span className="hero__title--green">Yummy</span>
    //   </h1>
    //   <p className="hero__discription">
    //     "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
    //     You can add your own recipes to save them for the future.
    //   </p>
    //       <img src="#" alt="#" className="hero__img" />

    // </div>
  );
};
