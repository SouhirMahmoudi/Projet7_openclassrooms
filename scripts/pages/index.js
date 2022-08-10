import CardRecipe from "../components/CardRecipe.js";
import recipes from "../data/recipes.js"
import SearchBar from "../components/Searchbar.js"


const target = document.getElementById("listCard");
function DisplayRecipes(liste) {
    target.innerHTML = "";
    for (const data of liste) {
        new CardRecipe(target, data)
    }
}
const bar = document.getElementById("search");
new SearchBar(bar);

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function (e) {
    let value = searchBar.value.toLowerCase();
    let result = [];
    for (let recipe of recipes) {

        if ((recipe.name.toLowerCase().includes(value)) || (recipe.description.toLowerCase().includes(value))
            || (recipe.ingredients.forEach((ingredient) => {
                ingredient.ingredient.toLowerCase().includes(value)
            }))) {
            result.push(recipe)

        }

    }
    DisplayRecipes(result)
})

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function () {
    let value = searchBar.value.toLowerCase();
    let result = [];
    for (let recipe of recipes) {

        if ((recipe.name.toLowerCase().includes(value)) || (recipe.description.toLowerCase().includes(value))
            || (recipe.ingredients.forEach((ingredient) => {
                ingredient.ingredient.toLowerCase().includes(value)
            }))) {
            result.push(recipe)

        }

    }
    DisplayRecipes(result)
})



DisplayRecipes(recipes);

