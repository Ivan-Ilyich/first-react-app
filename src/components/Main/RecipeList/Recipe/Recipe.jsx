import React from "react";
import Header from "./Header/Header";
import Info from "./Info/Info";
import IngredientList from "./IngredientList/IngredientList";
import Instructions from "./Instructions/Instructions";

export default function Recipe(props) {
  const {
    id,
    name,
    info,
    instructions,
    ingredients,
    handleDeleteRecipe,
    handleSelectedRecipe,
  } = props;

  return (
    <div className="recipe">
      <Header
        name={name}
        id={id}
        handleDeleteRecipe={handleDeleteRecipe}
        handleSelectedRecipe={handleSelectedRecipe}
      />
      <Info {...info} />
      <Instructions instructions={instructions} />
      <IngredientList ingredients={ingredients} />
    </div>
  );
}
