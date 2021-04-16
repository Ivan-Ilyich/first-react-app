import React from 'react'

export default function SearchBar({ recipes, handleSelectedRecipe }) {

    // const { id, name } = recipes

    function handleRecipeSearch(searchName) {
        const newRecipes = [...recipes]
        const recipe = newRecipes.find(r => r.name.toLowerCase().includes(searchName.toLowerCase()))
        if (searchName === '' || recipe === undefined) return handleSelectedRecipe(undefined)
        console.log('SEARCH RECIPE ---> ',recipe);
        handleSelectedRecipe(recipe.id)
    }
    return (
        <div className="recipe__search-bar-container">
            <input 
                type="search" 
                className="recipe__search-bar"
                onChange={e => handleRecipeSearch(e.target.value)}
            />
            <button 
                className="btn recipe__search-bar-button" 
                // onChange={e => handleRecipeSearch(recipes, e.target.value)}
            >
                Search
            </button>
        </div>
    )
}
