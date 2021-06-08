import React from "react";
import Ingredients from "./Ingredients/Ingredients";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredients key={ingredient.id} {...ingredient} />;
  });

  return (
    <div className="recipe__row">
      <span className="recipe__label">Ingredients:</span>
      <div className="recipe__value recipe__value--indented ingredient__grid">
        {ingredientElements}
      </div>
    </div>
  );
}
