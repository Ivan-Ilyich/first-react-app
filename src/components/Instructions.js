import React from 'react'

export default function Instructions({ instructions }) {
    // console.log('This is the instructions -->',instructions);
    return (
        <div className="recipe__row">
            <span className="recipe__label">
                Instructions:
            </span>
            <div className="recipe__value recipe__instructions recipe__value--indented">
                {instructions}
            </div>
        </div>
    )
}
