import React from 'react'

export default function RecipeIngredientEdit({ ingredient, handleIngredientChange }) {

    const {
        name,
        amount
    } = ingredient

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }

    console.log(name,amount,'This is the RecipeIngredientEdit component',ingredient);

    return (
        <>
            <input  
                className="recipe-edit__input"
                type="text" value={name}
                onInput={e => handleChange({ name: e.target.value })}
            />   
            <input  
                className="recipe-edit__input"
                type="text"
                value={amount}
                onInput={e => handleChange({ amount: e.target.value })}
            />   
            <button className="btn btn--danger" >&times;</button>   
        </>
    )
}