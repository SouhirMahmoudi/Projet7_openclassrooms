
/*function FilterIngredientsByTag(tag) {
    let value = tag.toLowerCase();
    let recipesTag = new Set;
    let ingredientsTag = new Set;
    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
            if (ingredient.ingredient.toLowerCase().includes(value)) {
                recipesTag.add(recipe);
                ingredientsTag.add(ingredient.ingredient);
            }
        }
    }

    ingredientFilter.props = Array.from(recipesTag);
    ingredientFilter.GetIngredientslist();

    DisplayRecipes(Array.from(recipesTag));


}*/


/*function FilterIngredientsByTag(tag) {
    let value = tag.toLowerCase();
    let recipesTag = new Set;
    let ingredientsTag = new Set;

    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {

            if (ingredient.ingredient.toLowerCase().includes(value)) {
                recipesTag.add(recipe);
                // ingredientsTag.add(ingredient.ingredient);
            }
        }
    }
    return Array.from(recipesTag);

}*/

