import React from 'react'

export default function RecipeIngredientEdit({ ingredient }) {
    const {
        name,
        amount
    } = ingredient
    console.log(name,amount,'This is the RecipeIngredientEdit component',ingredient);
    return (
        <>
            <input  className="recipe-edit__input" type="text" value={name} />   
            <input  className="recipe-edit__input" type="text" value={amount} />   
            <button className="btn btn--danger" >&times;</button>   
        </>
    )
}
