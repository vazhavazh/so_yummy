export const removeItemFromLocalStorage =  (key) => {
  try {
   localStorage.removeItem(key);
    return true; 
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
    return false; 
  }
}
