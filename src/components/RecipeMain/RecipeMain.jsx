// import React, {  useEffect, useState } from 'react';
// import MySVGComponent from './MySVGComponent';
// import style from '../RecipeMain/RecipeMain.module.scss';
// import axios from 'axios';
// import Loader from 'components/Loader/Loader';


// export const RecipeMain = () => {
//   // const [isChecked, setIsChecked] = useState(false);
//   // // const [cartItems, setCartItems] = useState([]);

//   // const handleCheckboxChange = ev => {
//   //   setIsChecked(!isChecked);
//   //   console.log(ev);
//   //   // if (!isChecked) {
//   //   //   // Добавление в корзину
//   //   //     setCartItems([...cartItems, item]);
//   //   // } else {
//   //   //   // Удаление из корзины
//   //   //     const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
//   //   //     setCartItems(updatedCartItems);
//   //   // }
//   // };


//     const [recipe, setRecipe] = useState(null)

//     useEffect(() => {
//         const recipeId = getId()
//         getRecipe(recipeId)
        
//         return () => {
//         setRecipe(null);
//     };
//     }, []);

//     function getId() {
//         const url = window.location.href
//             const parts = url.split('/')
//         const id = parts[parts.length - 1]
//         return id
//     }
    
//     async function getRecipe(id) {
//         const response = await axios.get(`api/recipes/${id}`)
//         const newRecipe = response.data[0]
//         setRecipe(newRecipe)
//         console.log(newRecipe)
//     }

//     if (!recipe) {
//     return <Loader/>;
//     }


// const stepsArray = recipe.instructions.split('.');

// return <div className={style.body}>
//   <div className={style.hero}>
//     <h1 className={style.hero__title}>{recipe.title}</h1>
//     <p className={style.hero__text}>{recipe.description}</p>
//     <button className={style.hero__button}>Add to favorite recipes</button>
    

//     <div className={style.list}>
//         <div className={style.list__head}> 
//             <p className={style.list__first}>Ingridients</p>
            
//             <div className={style.list__second}>    
//                 <p>Number</p>
//                 <p>Add to list</p>
//             </div>        
//         </div>
    
//         <ul className={style.ingred__list}>
//             {recipe.ingredients.map(ingredient => (
//                 <li className={style.ingred__item} key={ingredient._id.$oid}>
//                     <div className={style.ingred__wrapper}>
                        
//                         <img
//                             className={style.ingred__img}
//                             src={ingredient.thb}
//                             alt={ingredient.ttl}
//                         />
                        
//                         <h2 className={style.ingred__name}>{ingredient.ttl}</h2>
//                     </div>

//                     <div className={style.ingred__wrapper_second}>
//                         <p className={style.ingred__quantity}>{ingredient.measure}</p>
//                         <label className={style.checkbox__wrapper}>
//                     <input className={style.ingred__checkbox} type="checkbox" />
//                     {/* checked={isChecked} onChange={handleCheckboxChange} */}
//                             <span className={style.ingred__checkbox_custom}></span>
//                         </label>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     </div>        
        
//     <div className={style.prep__container}>
//         <div className={style.prep__box}>
//             <h3 className={style.prep__title}>Recipe Preparation</h3>
//             <ol className={style.prep__list}>
//   {stepsArray.map((step, index) => {
//     if (step.trim() !== '') {
//       return (
//         <li className={style.prep__item} key={index}>
//           <p className={style.prep__step}>{step}</p>
//         </li>
//       );
//     }
//     return null;
//   })}
// </ol> 
//             </div>    
//             <div>
//                 <img className={style.prep__img} src={recipe.thumb} alt="dish" />
//             </div>
            
//     </div>
    
//   </div>
//   </div>

// }


import React, {  useEffect, useState } from 'react';
import MySVGComponent from './MySVGComponent';
import style from '../RecipeMain/RecipeMain.module.scss';
import axios from 'axios';
import Loader from 'components/Loader/Loader';


export const RecipeMain = () => {

    const [isChecked, setIsChecked] = useState(false);
    // const [cartItems, setCartItems] = useState([]);

    const handleCheckboxChange = (ev) => {
        setIsChecked(!isChecked);
        console.log(ev)
    // if (!isChecked) {
    //   // Добавление в корзину
    //     setCartItems([...cartItems, item]);
    // } else {
    //   // Удаление из корзины
    //     const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    //     setCartItems(updatedCartItems);
    // }
    };

    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const recipeId = getId()
        getRecipe(recipeId)
        
        return () => {
        setRecipe(null);
    };
    }, []);

    function getId() {
        const url = window.location.href
            const parts = url.split('/')
        const id = parts[parts.length - 1]
        return id
    }
    
    async function getRecipe(id) {
        const response = await axios.get(`api/recipes/${id}`)
        const newRecipe = response.data[0]
        setRecipe(newRecipe)
        console.log(newRecipe)
    }

    if (!recipe) {
    return <Loader/>;
    }


const stepsArray = recipe.instructions.split('.');

    return <div className={style.body}>
    <div className={style.hero}>
            <h1 className={style.hero__title}>{recipe.title}</h1>
            <p className={style.hero__text}>{recipe.description}</p>
        <button className={style.hero__button}>Add to favorite recipes</button>
    
        <div className={style.hero__clock}>
                <MySVGComponent className={style.svg} />    
            <p className={style.hero__time}>20 min</p>
        </div>
    </div>

    <div className={style.list}>
        <div className={style.list__head}> 
            <p className={style.list__first}>Ingridients</p>
            
            <div className={style.list__second}>    
                <p>Number</p>
                <p>Add to list</p>
            </div>        
        </div>
    
        <ul className={style.ingred__list}>
            {recipe.ingredients.map(ingredient => (
                <li className={style.ingred__item} key={ingredient._id.$oid}>
                    <div className={style.ingred__wrapper}>
                        
                        <img
                            className={style.ingred__img}
                            src={ingredient.thb}
                            alt={ingredient.ttl}
                        />
                        
                        <h2 className={style.ingred__name}>{ingredient.ttl}</h2>
                    </div>

                    <div className={style.ingred__wrapper_second}>
                        <p className={style.ingred__quantity}>{ingredient.measure}</p>
                        <label className={style.checkbox__wrapper}>
                            <input className={style.ingred__checkbox} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                            <span className={style.ingred__checkbox_custom}></span>
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    </div>        
        
    <div className={style.prep__container}>
        <div className={style.prep__box}>
            <h3 className={style.prep__title}>Recipe Preparation</h3>
            <ol className={style.prep__list}>
  {stepsArray.map((step, index) => {
    if (step.trim() !== '') {
      return (
        <li className={style.prep__item} key={index}>
          <p className={style.prep__step}>{step}</p>
        </li>
      );
    }
    return null;
  })}
</ol>
            </div>    
            <div>
                <img className={style.prep__img} src={recipe.thumb} alt="dish" />
            </div>
            
    </div>
    
</div>;

} 