import React from 'react'

export default function Instructions({ instructions }) {
    console.log('This is the instructions -->',instructions);
    return (
        <div>
            <span>Instructions</span>
            <div>
                {instructions}
            </div>
        </div>
    )
}
