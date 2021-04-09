import React from 'react'

export default function Header({ name }) {
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
