import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit({ recipe }) {

    const {
        id,
        info,
        ingredients,
        instructions,
        name
    } = recipe

    const recipeIngredientEditElements = ingredients.map(ingredient => {
        return (
            <RecipeIngredientEdit key={id} ingredient={ingredient} />
        )
    })
    
    console.log(id,info,ingredients,instructions,name,'This is the info.servings and info.cookTime-->',info.servings,info.cookTime);

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit__remove-button">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label 
                    htmlFor="name" 
                    className="recipe-edit__label"
                >
                    Name
                </label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={name} 
                    className="recipe-edit__input" 
                />
                <label 
                    htmlFor="cookTime" 
                    className="recipe-edit__label"
                >        
                    Cook Time
                </label>
                <input 
                    type="text" 
                    id="cookTime"
                    name="cookTime"
                    value={info.cookTime} 
                    className="recipe-edit__input" 
                />
                <label 
                    htmlFor="servings" 
                    className="recipe-edit__label"
                >
                    Servings
                </label>
                <input 
                    type="number"
                    id="servings"
                    name="servings"
                    value={info.servings}
                    className="recipe-edit__input"
                    min="1" 
                />
                <label 
                    htmlFor="instructions" 
                    className="recipe-edit__label"
                >
                    Instructions
                </label>
                <textarea 
                    id="instructions"
                    name="instructions"
                    className="recipe-edit__input" 
                >
                    {instructions}
                </textarea>
            </div>
            <br />
            <label  className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipeIngredientEditElements}
            </div>
            <div className="recipe-edit__add-ingredient-button-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
        </div>
        
    )
}
