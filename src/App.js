import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return <RecipeList recipes={sampleRecipes} />
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
