import React from 'react'

export default function Header({ name, id, handleDeleteRecipe, handleSelectedRecipe }) {
    return (
        <div className="recipe__header">
            <h3 className="recipe__title">{name}</h3>
            <div>
                <button 
                    className="btn btn--primary mr-1"
                    onClick={() => handleSelectedRecipe(id)}
                >
                    Edit
                </button>
                <button 
                    className="btn btn--danger"
                    onClick={() => handleDeleteRecipe(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
