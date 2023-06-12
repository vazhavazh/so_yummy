import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMyOwnRecipe } from 'redux/myRecipes/myRecipesThunk';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handleFormSubmit = e => {
    e.preventDefault();

      const formData = new FormData();
      
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('time', time);
    // formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('instructions', instructions);
    formData.append('preview', previewImage);

    // Отправка данных формы на сервер
      dispatch(addMyOwnRecipe(formData));
      
  };

  const handleInputChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else if (e.target.name === 'category') {
      setCategory(e.target.value);
    } else if (e.target.name === 'time') {
      setTime(e.target.value);
    } else if (e.target.name === 'ingredients') {
      setIngredients(e.target.value);
    } else if (e.target.name === 'instructions') {
      setInstructions(e.target.value);
    } else if (e.target.name === 'preview') {
      setPreviewImage(e.target.files[0]);
      }
     
    }
    
    

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="text"
          name="time"
          value={time}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Ingredients:
        <input
          type="text"
          name="ingredients"
          value={ingredients}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Instructions:
        <input
          type="text"
          name="instructions"
          value={instructions}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Preview Image:
        <input type="file" name="preview" onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};


