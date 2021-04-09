import React from 'react'

export default function Info({ cookTime, servings }) {
    return (
        <div>
            <span>Cooktime</span>
            <span>{cookTime}</span>
            <span>Servings</span>
            <span>{servings}</span>
        </div>
    )
}
