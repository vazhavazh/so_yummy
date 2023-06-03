import React from 'react';

const RecipesList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;
