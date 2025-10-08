import React from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";

export default function Main() {
  const [ingredients, setIngridients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient");
    setIngridients((prevIngredients) => [...prevIngredients, ingredient]);

    console.log(ingredients);
  }

  function toggleRecipeShown() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length ? <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}/> : null}
      {recipeShown && <Recipe />}
    </main>
  );
}
