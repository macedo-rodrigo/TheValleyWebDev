import './App.css';
import React from "react";
import RecipeList from './Components/RecipeList/RecipeList';
import RecipeForm from './Components/RecipeForm/RecipeForm';
import SelectedRecipe from './Components/SelectedRecipe/SelectedRecipe';

function App() {

  const URL_API = "http://localhost:4000/recipes";
  const [recipeList, setRecipeList] = React.useState([]);
  const [selectedRecipe, setSelectedRecipe] = React.useState({}); // Para saber la receta que seleccionada

  React.useEffect(() => {

    fetch(URL_API)
      .then(response => response.json())
      .then(data => setRecipeList(data))
      .catch(error => console.error("Error al obtener datos de la API:", error));
    console.log("Hoy soy la API de recetas")
  }, [])

  const addNewRecipe = React.useCallback((newRecipe) => {
    fetch(URL_API, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        fetch(URL_API)
          .then((response) => response.json())
          .then((data) => setRecipeList(data));
      });
  }, [])

  const handleRecipeClick = (event, recipe) => {
    event.preventDefault();
    setSelectedRecipe(recipe);
  }

  return (
    <div className="app">
      <RecipeForm
        addRecipe={addNewRecipe} />
      <RecipeList recipes={recipeList} onRecipeClick={handleRecipeClick} />
      {console.log(selectedRecipe, "aqui estoy")}
      <SelectedRecipe
        selectedRecipe={selectedRecipe} />
    </div>
  );
}

export default App;
