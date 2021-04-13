import React from 'react'
import Header from './Header'
import Info from './Info'
import IngredientList from './IngredientList'
import Instructions from './Instructions'

export default function Recipe(props) {
    console.log('This is the Recipe props -->',props);

    const {
        id,
        name,
        info,
        instructions,
        ingredients,
        handleDeleteRecipe,
    } = props
    
    return (
        <div className="recipe">  
            <Header 
                name={name} 
                id={id} 
                handleDeleteRecipe={handleDeleteRecipe} 
            />
            <Info {...info} />
            <Instructions instructions={instructions} />
            <IngredientList ingredients={ingredients} />
        </div>
    )
}
