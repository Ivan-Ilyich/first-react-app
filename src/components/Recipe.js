import React from 'react'
import Header from './Header'
import Info from './Info'
import IngredientList from './IngredientList'
import Instructions from './Instructions'

export default function Recipe(props) {
    console.log('This is the Recipe props -->',props);
    const {
        name,
        info,
        instructions,
        ingredients,
    } = props
    return (
        <div>  
            <Header name={name} />
            <Info {...info} />
            <Instructions instructions={instructions} />
            <IngredientList ingredients={ingredients} />
        </div>
    )
}
