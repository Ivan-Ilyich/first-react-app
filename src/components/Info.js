import React from 'react'

export default function Info({ cookTime, servings }) {
    return (
        <>
            <div className="recipe__row">
                <span className="recipe__label">
                    Cooktime:
                </span>
                <span className="recipe__value">
                    {cookTime}
                </span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">
                    Servings:
                </span>
                <span className="recipe__value">
                    {servings}
                </span>
            </div>
        </>
    )
}
