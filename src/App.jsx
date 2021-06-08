import React, { useState, useEffect } from "react";
import RecipeList from "./components/Main/RecipeList/RecipeList";
import RecipeEdit from "./components/Main/RecipeEdit/RecipeEdit";
import "./css/app.css";
import { v4 } from "uuid";
import SearchBar from "./components/Main/SearchBar/SearchBar";
import sampleRecipes from "./sampleRecipes.json";

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON !== null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function handleSelectedRecipe(id) {
    setSelectedRecipeId(id);
  }

  function handleAddRecipe() {
    const newRecipe = {
      id: v4(),
      name: "",
      info: {
        servings: 1,
        cookTime: "",
      },
      instructions: "",
      ingredients: [],
    };

    handleSelectedRecipe(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeSearchSort(id) {
    const newRecipes = [...recipes];
    const selectedIndex = newRecipes.findIndex(r => r.id === id);
    const firstRecipe = newRecipes[0];
    newRecipes[0] = newRecipes[selectedIndex];
    newRecipes[selectedIndex] = firstRecipe;
    setRecipes(newRecipes);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleDeleteRecipe(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <>
      <SearchBar
        recipes={recipes}
        handleSelectedRecipe={handleSelectedRecipe}
        handleRecipeSearchSort={handleRecipeSearchSort}
      />
      <RecipeList
        recipes={recipes}
        handleAddRecipe={handleAddRecipe}
        handleDeleteRecipe={handleDeleteRecipe}
        handleSelectedRecipe={handleSelectedRecipe}
      />
      {selectedRecipe && (
        <RecipeEdit
          recipe={selectedRecipe}
          handleRecipeChange={handleRecipeChange}
          handleSelectedRecipe={handleSelectedRecipe}
        />
      )}
    </>
  );
}

export default App;
