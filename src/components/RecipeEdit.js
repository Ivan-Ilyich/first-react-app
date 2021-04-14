import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="cookTime">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" />
                <label htmlFor="servings">Servings</label>
                <input type="text" id="servings" name="servings" min="1" />
                <label htmlFor="instructions">Instructions</label>
                <textarea id="instructions" name="instructions" />
            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <RecipeIngredientEdit />
                <RecipeIngredientEdit />
            </div>
            <div>
                <button>Add Ingredient</button>
            </div>
        </div>
        
    )
}
