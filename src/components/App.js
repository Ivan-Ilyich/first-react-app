import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css'
import { v4 } from 'uuid';
import SearchBar from './SearchBar';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {

  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  console.log(selectedRecipe,'THIS IS THE SELECTED FUNCTION CALL');

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if ( recipeJSON !== null ) setRecipes(JSON.parse(recipeJSON))
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  function handleSelectedRecipe(id) {
    setSelectedRecipeId(id)
  }
  
  function handleAddRecipe() {
    const newRecipe = {
      id: v4(),
      name: '',
      info: {
        servings: 1,
        cookTime: ''
      },
      instructions: '',
      ingredients: []
    }

    handleSelectedRecipe(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeSearchSort(id) {
    const newRecipes = [...recipes]
    const selectedIndex = newRecipes.findIndex(r => r.id === id)
    const firstRecipe = newRecipes[0]
    newRecipes[0] = newRecipes[selectedIndex]
    newRecipes[selectedIndex] = firstRecipe
    setRecipes(newRecipes)
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleDeleteRecipe(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <SearchBar recipes={recipes} handleSelectedRecipe={handleSelectedRecipe} handleRecipeSearchSort={handleRecipeSearchSort} />
      <RecipeList 
        recipes={recipes}
        handleAddRecipe={handleAddRecipe}
        handleDeleteRecipe={handleDeleteRecipe}
        handleSelectedRecipe={handleSelectedRecipe}
      />
      {selectedRecipe && <RecipeEdit 
          recipe={selectedRecipe} 
          handleRecipeChange={handleRecipeChange}
          handleSelectedRecipe={handleSelectedRecipe}
        />
      }
    </>
  )
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    info: {
      servings: 3,
      cookTime: '1:45',
    },
    instructions: '1. Put salt to chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '1 Kg'
      },
      {
        id: 2,
        name: 'salt',
        amount: '3 PDS'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    info: {
      servings: 5,
      cookTime: '3:45',
    },
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '1.5 Kgs'
      },
      {
        id: 2,
        name: 'paprika',
        amount: '3 Tbs'
      }
    ]
  }
]

export default App;
