import React from 'react'
import Ingredients from './Ingredients'

export default function IngredientList({ ingredients }) {
    console.log('This is the INGREDIENTS -->', ingredients);
    const ingredientElements = ingredients.map(ingredient => {
        return (
            <Ingredients 
                key={ingredient.id}
                {...ingredient}
            />
        )
    })
    return (
        <div className="recipe__row">
            <span className="recipe__label">
                Ingrediens:
            </span>
            <div className="recipe__value recipe__value--indented ingredient__grid">
                {ingredientElements}
            </div>
        </div>
    )
}
