import React from 'react'

export default function Header({ name }) {
    return (
        <div className="recipe__header">
            <h3 className="recipe__title">{name}</h3>
            <div>
                <button className="btn btn--primary mr-1">Edit</button>
                <button className="btn btn--danger">Delete</button>
            </div>
        </div>
    )
}
