import React, { useEffect } from 'react'

export default function SearchBar({ recipes, handleSelectedRecipe, handleRecipeSearchSort }) {

    // const { id, name } = recipes

    function handleRecipeSearch(searchName) {
        const newRecipes = [...recipes]
        const recipe = newRecipes.find(r => r.name.toLowerCase().includes(searchName.toLowerCase()))
        if (searchName === '' || recipe === undefined) return handleSelectedRecipe(undefined)
        console.log('SEARCH RECIPE ---> ',recipe);
        handleSelectedRecipe(recipe.id)
        if (searchName !== '' || recipe !== undefined) handleRecipeSearchSort(recipe.id)
    }

    return (
        <div className="recipe__search-bar-container">
            <input 
                type="search" 
                className="recipe__search-bar"
                placeholder="Search a recipe"
                onChange={e => handleRecipeSearch(e.target.value)}
            />
        </div>
    )
}
