import React from "react";

export default function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleDeleteIngredient,
}) {
  const { id, name, amount } = ingredient;

  function handleChange(changes) {
    handleIngredientChange(id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={name}
        onInput={e => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={amount}
        onInput={e => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleDeleteIngredient(id)}
      >
        &times;
      </button>
    </>
  );
}
