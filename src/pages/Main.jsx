import React from 'react';

import { Hero } from '../components/Hero/Hero';
// import { СhooseYourBreakfast } from '../components/СhooseYourBreakfast/СhooseYourBreakfast'; 
// import { Search } from '../components/Search/Search'; 
import { PreviewCategories } from '../components/PreviewCategories/PreviewCategories'; 
import { MainWrapper } from '../components/MainWrapper/MainWrapper'; 




const Main = () => {
  return (
    <>
      
      <Hero>
      {/* <СhooseYourBreakfast />
      <Search /> */}
      </Hero>
      <PreviewCategories/>

    </>
  )
}

export default Main
