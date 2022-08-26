import CardRecipe from "../components/CardRecipe.js";
import recipes from "../data/recipes.js";
import SearchBar from "../components/Searchbar.js";
import Ingredients from "../components/Ingredients.js";
import Appareils from "../components/Appareils.js";
import Ustensils from "../components/Ustensiles.js";
import Tag from "../components/Tag.js"


const Target2 = document.getElementById("tag");
// Création instances 
/*searchbar */
const bar = document.getElementById("search");
new SearchBar(bar);
/* tags : ingredients, ustensils, appareils*/
let ingredientFilter = new Ingredients(Target2, recipes);
let appareilFilter = new Appareils(Target2, recipes);
let ustensilFilter = new Ustensils(Target2, recipes);
/* recipeCard*/
const target = document.getElementById("listCard");
function DisplayRecipes(liste) {
    target.innerHTML = "";
    for (const data of liste) {
        new CardRecipe(target, data)
    }
}
//fonction recherche barre principale
const searchBar = document.getElementById("searchBar");
function Filter(valeur) {
    let value = valeur.toLowerCase();
    let result = [];
    for (let recipe of recipes) {

        if ((recipe.name.toLowerCase().includes(value)) || (recipe.description.toLowerCase().includes(value))
            || (recipe.ingredients.some((ingredient => {
                ingredient.ingredient.toLowerCase().includes(value)
            })))) {

            result.push(recipe)
        }

    }
    appareilFilter.props = result;
    appareilFilter.GetApplianceList();
    ingredientFilter.props = result;
    ingredientFilter.GetIngredientslist();
    ustensilFilter.props = result;
    ustensilFilter.GetUstensilsList();
    DisplayRecipes(result);
}

// evenement recherche principale
/*keyboard*/
searchBar.addEventListener("keyup", function (e) {
    Filter(searchBar.value)

})
/*click*/
const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", Filter(searchBar.value))

//rechercher par tag ingredients
const btn = document.querySelector("#btnGroup .toggle");
btn.addEventListener("click", (e)=> {
    const TagIngredients = document.getElementById("searchIngredients");
    TagIngredients.addEventListener("keyup", (e)=> {FilterByIngredients(TagIngredients.value)})
}    )



function FilterByIngredients(tag) {
            let value = tag.toLowerCase();
            let recipesTag = new Set;
            let ingredientsTag = new Set;
            for (let recipe of recipes) {
                for (let ingredient of recipe.ingredients){

                    if (ingredient.ingredient.toLowerCase().includes(value)){
                        recipesTag.add(recipe);
                        ingredientsTag.add(ingredient.ingredient);
                    }
                }
            }

            
            appareilFilter.props = Array.from(recipesTag);
            appareilFilter.GetApplianceList();
            ingredientFilter.props = Array.from(recipesTag);
            ingredientFilter.GetIngredientslistByTag(tag);
            ustensilFilter.props = Array.from(recipesTag);
            ustensilFilter.GetUstensilsList();
            DisplayRecipes(Array.from(recipesTag));
        }
      /*const TargetTag= document.getElementById("tag");
      const item = document.querySelector("#menuIngredients .dropdown-item");
      item.addEventListener("click", Afficher(TargetTag, "ingredients"))
      const item1 = document.querySelector("#menuUstensils .dropdown-item");
      const item2 = document.querySelector("#menuAppareils .dropdown-item");*/

 /*function Afficher(target, type){
    return new Tag (target, type)
 }*/
        DisplayRecipes(recipes);

        /*const searchTagIngredients =document.getElementById("searchIngredients");
        searchTagIngredients.addEventListener("keyup", function (e) {
            let value = searchTagIngredients.value.toLowerCase();
            const target =document.getElementById("tagName");
            target.innerHTML=`<p> ${value} </p> `
            let result = [];
            for (let recipe of recipes) {
            
                (recipe.ingredients.some((ingredient => {
                    ingredient.ingredient.toLowerCase().includes(value)
                }))); {
                    result.push(recipe)
                }
                
            }
            appareilFilter.props = result;
            appareilFilter.GetApplianceList();
            ustensilFilter.props = result;
            ustensilFilter.GetUstensilsList();
            
        
            DisplayRecipes(result)
            
        })*/






       

