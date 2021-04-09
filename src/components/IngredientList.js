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
        <div>
            <span>Ingrediens:</span>
            <div>
                {ingredientElements}
            </div>
        </div>
    )
}
